import { test, expect } from '@playwright/test';

test.describe('SEO', () => {
  test('homepage has proper meta tags', async ({ page }) => {
    await page.goto('/');

    // Meta description
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /ECS Systems/);

    // Canonical URL
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toBeAttached();

    // Open Graph
    await expect(page.locator('meta[property="og:title"]')).toBeAttached();
    await expect(page.locator('meta[property="og:description"]')).toBeAttached();
    await expect(page.locator('meta[property="og:type"]')).toBeAttached();

    // Viewport
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toBeAttached();
  });

  test('all pages have unique titles', async ({ page }) => {
    const pages = ['/', '/about', '/services', '/salto', '/contact', '/careers'];
    const titles: string[] = [];

    for (const url of pages) {
      await page.goto(url);
      const title = await page.title();
      expect(titles).not.toContain(title);
      titles.push(title);
    }
  });

  test('all pages have h1 headings', async ({ page }) => {
    const pages = ['/', '/about', '/services', '/salto', '/contact', '/careers', '/maintenance', '/faqs', '/testimonials'];

    for (const url of pages) {
      await page.goto(url);
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBeGreaterThanOrEqual(1);
    }
  });

  test('sitemap.xml is accessible', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    expect(response?.status()).toBe(200);
    const content = await page.content();
    expect(content).toContain('<urlset');
    expect(content).toContain('<loc>');
  });

  test('robots.txt is accessible', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    expect(response?.status()).toBe(200);
    const text = await page.locator('body').textContent();
    expect(text).toContain('User-Agent');
    expect(text).toContain('Sitemap');
  });

  test('JSON-LD structured data is present on homepage', async ({ page }) => {
    await page.goto('/');
    const jsonLd = page.locator('script[type="application/ld+json"]').first();
    await expect(jsonLd).toBeAttached();
    const content = await jsonLd.textContent();
    expect(content).toContain('Organization');
  });

  test('images have alt attributes', async ({ page }) => {
    await page.goto('/');
    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      // alt can be empty string for decorative images, but must exist
      expect(alt).not.toBeNull();
    }
  });
});
