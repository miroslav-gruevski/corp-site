/**
 * Optimize all images in public/images/ for web performance.
 * - JPGs: compress to quality 80, max 1200px wide
 * - PNGs: compress with palette optimization
 * Run: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(__dirname, '..', 'public', 'images');

const MAX_WIDTH = 1200;
const JPG_QUALITY = 80;
const PNG_QUALITY = 80;

function getAllImages(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllImages(fullPath));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

async function main() {
  const images = getAllImages(imagesDir);
  let totalSaved = 0;

  for (const imagePath of images) {
    const originalSize = statSync(imagePath).size;
    const ext = extname(imagePath).toLowerCase();

    try {
      let pipeline = sharp(imagePath);
      const metadata = await pipeline.metadata();

      // Resize if wider than MAX_WIDTH
      if (metadata.width && metadata.width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
      }

      let buffer;
      if (ext === '.png') {
        buffer = await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toBuffer();
      } else {
        buffer = await pipeline.jpeg({ quality: JPG_QUALITY, mozjpeg: true }).toBuffer();
      }

      // Only write if smaller
      if (buffer.length < originalSize) {
        const saved = originalSize - buffer.length;
        totalSaved += saved;
        await sharp(buffer).toFile(imagePath);
        const relativePath = imagePath.replace(join(__dirname, '..', 'public'), '');
        console.log(`✓ ${relativePath}: ${(originalSize / 1024).toFixed(0)}KB → ${(buffer.length / 1024).toFixed(0)}KB (-${(saved / 1024).toFixed(0)}KB)`);
      }
    } catch (err) {
      console.error(`✗ ${imagePath}: ${err.message}`);
    }
  }

  console.log(`\nTotal saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
}

main().catch(console.error);
