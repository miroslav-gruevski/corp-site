/**
 * Generate favicon and apple-touch-icon PNGs from the ECS logo SVG.
 * Run: node scripts/generate-icons.mjs
 */
import sharp from 'sharp';
import { readFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public');
const iconsDir = join(publicDir, 'icons');

// Ensure icons directory exists
mkdirSync(iconsDir, { recursive: true });

const svgBuffer = readFileSync(join(publicDir, 'ECS-logo.svg'));

const sizes = [
  { name: 'favicon.png', size: 32, dir: publicDir },
  { name: 'favicon-16x16.png', size: 16, dir: iconsDir },
  { name: 'favicon-32x32.png', size: 32, dir: iconsDir },
  { name: 'apple-touch-icon.png', size: 180, dir: publicDir },
  { name: 'icon-192x192.png', size: 192, dir: iconsDir },
  { name: 'icon-512x512.png', size: 512, dir: iconsDir },
];

// Also generate OG image (1200x630) with logo centered on branded background
async function generateOgImage() {
  const logoSize = 280;
  const width = 1200;
  const height = 630;

  // Create the logo at desired size
  const logo = await sharp(svgBuffer)
    .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Compose the OG image: navy background with logo centered + tagline area
  const ogImage = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 30, g: 58, b: 95, alpha: 1 }, // #1e3a5f primary
    },
  })
    .composite([
      {
        input: logo,
        top: Math.round((height - logoSize) / 2) - 40,
        left: Math.round((width - logoSize) / 2),
      },
      // Add a subtle accent bar at the bottom
      {
        input: {
          create: {
            width: 200,
            height: 4,
            channels: 4,
            background: { r: 232, g: 119, b: 34, alpha: 1 }, // #e87722 accent
          },
        },
        top: height - 130,
        left: Math.round((width - 200) / 2),
      },
    ])
    .png()
    .toFile(join(publicDir, 'images', 'og-image.png'));

  console.log('✓ og-image.png (1200x630)');
  return ogImage;
}

async function main() {
  // Ensure images directory exists for OG image
  mkdirSync(join(publicDir, 'images'), { recursive: true });

  // Generate icon PNGs
  for (const { name, size, dir } of sizes) {
    await sharp(svgBuffer)
      .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(join(dir, name));
    console.log(`✓ ${name} (${size}x${size})`);
  }

  // Generate OG image
  await generateOgImage();

  console.log('\nAll icons generated successfully!');
}

main().catch(console.error);
