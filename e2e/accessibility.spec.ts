import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  test('page has proper landmark regions', async ({ page, isMobile }) => {
    await page.goto('/');

    // Header
    await expect(page.locator('header')).toBeVisible();

    // Main content
    await expect(page.locator('main#main-content')).toBeVisible();

    // Footer
    await expect(page.locator('footer')).toBeVisible();

    // Navigation (desktop only — mobile nav is hidden until hamburger is clicked)
    if (!isMobile) {
      await expect(page.locator('nav[aria-label="Main navigation"]')).toBeVisible();
    }
  });

  test('skip-to-content link works', async ({ page }) => {
    await page.goto('/');

    // Tab to reveal skip link
    await page.keyboard.press('Tab');
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeFocused();
  });

  test('heading hierarchy is correct', async ({ page }) => {
    await page.goto('/');

    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);

    // Ensure h2s exist after h1
    const h2Count = await page.locator('h2').count();
    expect(h2Count).toBeGreaterThan(0);
  });

  test('interactive elements are keyboard accessible', async ({ page }) => {
    await page.goto('/');

    // Tab through page and ensure focus is visible
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab');
      const focused = page.locator(':focus');
      await expect(focused).toBeAttached();
    }
  });

  test('buttons have accessible names', async ({ page }) => {
    await page.goto('/');

    const buttons = page.locator('button');
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);
      const text = await button.textContent();
      const ariaLabel = await button.getAttribute('aria-label');
      const hasName = (text && text.trim().length > 0) || ariaLabel;
      expect(hasName).toBeTruthy();
    }
  });

  test('links have accessible names', async ({ page }) => {
    await page.goto('/');

    const links = page.locator('a[href]');
    const count = await links.count();

    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute('aria-label');
      const hasName = (text && text.trim().length > 0) || ariaLabel;
      expect(hasName).toBeTruthy();
    }
  });

  test('FAQ accordion is keyboard accessible', async ({ page }) => {
    await page.goto('/faqs');

    // Find first FAQ accordion button (has aria-controls starting with faq-)
    const firstButton = page.locator('button[aria-controls^="faq-"]').first();
    await firstButton.scrollIntoViewIfNeeded();
    await expect(firstButton).toHaveAttribute('aria-expanded', 'false');

    // Click to open
    await firstButton.click();
    await expect(firstButton).toHaveAttribute('aria-expanded', 'true');

    // Verify aria-controls points to a valid region
    const controls = await firstButton.getAttribute('aria-controls');
    expect(controls).toBeTruthy();
    if (controls) {
      await expect(page.locator(`#${controls}`)).toBeVisible();
      await expect(page.locator(`#${controls}`)).toHaveAttribute('role', 'region');
    }

    // Click again to close
    await firstButton.click();
    await expect(firstButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('contact form has proper labels', async ({ page }) => {
    await page.goto('/contact');

    // All inputs should have associated labels
    const inputs = page.locator('input[required], textarea[required]');
    const count = await inputs.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      if (id) {
        const label = page.locator(`label[for="${id}"]`);
        await expect(label).toBeAttached();
      }
    }
  });
});
