/**
 * Generate favicon and apple-touch-icon PNGs from the ECS logo SVG.
 * Generates both light-mode (blue on white) and dark-mode (white on transparent) versions.
 * Run: node scripts/generate-icons.mjs
 */
import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public');
const iconsDir = join(publicDir, 'icons');

mkdirSync(iconsDir, { recursive: true });
mkdirSync(join(publicDir, 'images'), { recursive: true });

const svgContent = readFileSync(join(publicDir, 'ECS-logo.svg'), 'utf-8');
const svgBuffer = Buffer.from(svgContent);

// Create a white version of the SVG for dark mode
const whiteSvg = svgContent.replace(/#27316B/gi, '#FFFFFF');
const whiteSvgBuffer = Buffer.from(whiteSvg);

// --- Standard icons (blue logo, transparent bg) ---
const standardIcons = [
  { name: 'favicon.png', size: 32, dir: publicDir },
  { name: 'favicon-16x16.png', size: 16, dir: iconsDir },
  { name: 'favicon-32x32.png', size: 32, dir: iconsDir },
  { name: 'icon-192x192.png', size: 192, dir: iconsDir },
  { name: 'icon-512x512.png', size: 512, dir: iconsDir },
];

// --- Apple touch icon (blue logo on white background) ---
async function generateAppleTouchIcon() {
  await sharp(svgBuffer)
    .resize(160, 160, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .resize(180, 180)
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ apple-touch-icon.png (180x180, blue on white)');
}

// --- Dark mode icons (white logo, transparent bg) ---
const darkIcons = [
  { name: 'favicon-dark.png', size: 32, dir: publicDir },
  { name: 'favicon-dark-16x16.png', size: 16, dir: iconsDir },
  { name: 'favicon-dark-32x32.png', size: 32, dir: iconsDir },
];

// --- OG image ---
async function generateOgImage() {
  const logoSize = 280;
  const width = 1200;
  const height = 630;

  const logo = await sharp(whiteSvgBuffer)
    .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 30, g: 58, b: 95, alpha: 1 },
    },
  })
    .composite([
      {
        input: logo,
        top: Math.round((height - logoSize) / 2) - 40,
        left: Math.round((width - logoSize) / 2),
      },
      {
        input: {
          create: {
            width: 200,
            height: 4,
            channels: 4,
            background: { r: 232, g: 119, b: 34, alpha: 1 },
          },
        },
        top: height - 130,
        left: Math.round((width - 200) / 2),
      },
    ])
    .png()
    .toFile(join(publicDir, 'images', 'og-image.png'));

  console.log('✓ og-image.png (1200x630)');
}

async function main() {
  // Standard (blue) icons
  for (const { name, size, dir } of standardIcons) {
    await sharp(svgBuffer)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(join(dir, name));
    console.log(`✓ ${name} (${size}x${size}, blue)`);
  }

  // Apple touch icon (blue on white bg)
  await generateAppleTouchIcon();

  // Dark mode (white) icons
  for (const { name, size, dir } of darkIcons) {
    await sharp(whiteSvgBuffer)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(join(dir, name));
    console.log(`✓ ${name} (${size}x${size}, white for dark mode)`);
  }

  // Save white SVG for reference
  writeFileSync(join(iconsDir, 'icon-white-512x512.svg'), whiteSvg);
  console.log('✓ icon-white-512x512.svg');

  // OG image
  await generateOgImage();

  console.log('\nAll icons generated successfully!');
}

main().catch(console.error);
