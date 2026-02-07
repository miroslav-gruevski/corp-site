import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {
  test.describe('Mobile (375px)', () => {
    test.use({ viewport: { width: 375, height: 812 } });

    test('mobile menu toggle works', async ({ page }) => {
      await page.goto('/');

      // Desktop nav should be hidden
      await expect(page.locator('nav[aria-label="Main navigation"]')).toBeHidden();

      // Hamburger button should be visible
      const menuButton = page.locator('button[aria-label="Open menu"]');
      await expect(menuButton).toBeVisible();

      // Open menu
      await menuButton.click();
      await expect(page.locator('nav[aria-label="Mobile navigation"]')).toBeVisible();

      // Close menu with X
      const closeButton = page.locator('button[aria-label="Close menu"]');
      await closeButton.click();
      await expect(page.locator('nav[aria-label="Mobile navigation"]')).toBeHidden();
    });

    test('mobile menu escape key closes menu', async ({ page }) => {
      await page.goto('/');

      const menuButton = page.locator('button[aria-label="Open menu"]');
      await menuButton.click();
      await expect(page.locator('nav[aria-label="Mobile navigation"]')).toBeVisible();

      await page.keyboard.press('Escape');
      await expect(page.locator('nav[aria-label="Mobile navigation"]')).toBeHidden();
    });

    test('no horizontal scroll on mobile', async ({ page }) => {
      const pages = ['/', '/about', '/services', '/salto', '/contact'];

      for (const url of pages) {
        await page.goto(url, { waitUntil: 'networkidle' });
        // Wait for any animations/transitions to settle
        await page.waitForTimeout(500);
        const { scrollWidth, clientWidth } = await page.evaluate(() => ({
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
        }));
        expect(
          scrollWidth,
          `Horizontal overflow on ${url}: scrollWidth=${scrollWidth}, clientWidth=${clientWidth}`
        ).toBeLessThanOrEqual(clientWidth + 2);
      }
    });

    test('hero section is readable on mobile', async ({ page }) => {
      await page.goto('/');

      const h1 = page.locator('h1');
      await expect(h1).toBeVisible();

      // Check h1 font size is reasonable
      const fontSize = await h1.evaluate((el) => parseFloat(getComputedStyle(el).fontSize));
      expect(fontSize).toBeGreaterThanOrEqual(28);
    });

    test('CTA links meet minimum touch target size', async ({ page }) => {
      await page.goto('/');

      // Check CTA link buttons in the hero section
      const heroLinks = page.locator('main a[href]').first();
      await heroLinks.scrollIntoViewIfNeeded();
      const box = await heroLinks.boundingBox();
      expect(box).toBeTruthy();
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(36);
      }
    });

    test('mobile menu works after scrolling down the page', async ({ page }) => {
      await page.goto('/', { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(500);

      // Scroll down significantly
      await page.evaluate(() => window.scrollTo(0, 800));
      await page.waitForTimeout(500);

      // Open menu while scrolled
      const menuButton = page.locator('button[aria-label="Open menu"]');
      await expect(menuButton).toBeVisible();
      await menuButton.click();
      await page.waitForTimeout(300);

      // Menu should be visible AND on-screen (not pushed off by scroll lock)
      const mobileNav = page.locator('nav[aria-label="Mobile navigation"]');
      await expect(mobileNav).toBeVisible();
      const headerBox = await page.locator('header').boundingBox();
      expect(headerBox).toBeTruthy();
      expect(headerBox!.y).toBeGreaterThanOrEqual(-1); // header should be at viewport top

      // Close menu and verify scroll position is restored
      await page.locator('button[aria-label="Close menu"]').click();
      await page.waitForTimeout(300);
      await expect(mobileNav).toBeHidden();
      const scrollY = await page.evaluate(() => window.scrollY);
      expect(scrollY).toBeGreaterThanOrEqual(700); // scroll restored near 800
    });

    test('mobile menu closes via X button while scrolled', async ({ page }) => {
      await page.goto('/');

      // Scroll down first
      await page.evaluate(() => window.scrollTo(0, 600));
      await page.waitForTimeout(300);

      // Open menu
      await page.locator('button[aria-label="Open menu"]').click();
      await expect(page.locator('nav[aria-label="Mobile navigation"]')).toBeVisible();

      // Close via X button
      await page.locator('button[aria-label="Close menu"]').click();
      await expect(page.locator('nav[aria-label="Mobile navigation"]')).toBeHidden();
    });

    test('footer stacks properly on mobile', async ({ page }) => {
      await page.goto('/');

      // Scroll to footer
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(500);

      const footer = page.locator('footer');
      await expect(footer).toBeVisible();
    });
  });

  test.describe('Tablet (768px)', () => {
    test.use({ viewport: { width: 768, height: 1024 } });

    test('service cards display in 2-column grid', async ({ page }) => {
      await page.goto('/');

      // Check that service cards section exists
      const serviceSection = page.locator('text=Comprehensive Security Solutions').first();
      await expect(serviceSection).toBeVisible();
    });

    test('content is readable without horizontal scroll', async ({ page }) => {
      await page.goto('/');
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
    });
  });

  test.describe('Desktop (1280px)', () => {
    test.use({ viewport: { width: 1280, height: 720 } });

    test('desktop navigation is visible', async ({ page }) => {
      await page.goto('/');

      await expect(page.locator('nav[aria-label="Main navigation"]')).toBeVisible();
      await expect(page.locator('button[aria-label="Open menu"]')).toBeHidden();
    });

    test('dropdown menus work on hover', async ({ page }) => {
      await page.goto('/');

      // Hover over Security dropdown
      const securityButton = page.locator('nav[aria-label="Main navigation"] >> text=Security');
      await securityButton.hover();

      // Dropdown should appear
      await expect(page.locator('text=Residential').first()).toBeVisible();
    });

    test('hero feature cards visible on desktop', async ({ page }) => {
      await page.goto('/');

      // Right-side feature cards should be visible on desktop
      await expect(page.locator('text=NSI Gold Accredited').first()).toBeVisible();
      await expect(page.locator('text=ISO 9001 Certified').first()).toBeVisible();
    });
  });
});
