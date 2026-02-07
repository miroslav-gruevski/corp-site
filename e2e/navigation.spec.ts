import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('homepage loads with correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/ECS Systems|Fire.*Security/i);
  });

  test('homepage has hero section with CTA buttons', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Fire');
    await expect(page.locator('h1')).toContainText('Security');
    await expect(page.getByRole('link', { name: /Our Services/i })).toBeVisible();
  });

  test('all main pages are accessible', async ({ page }) => {
    const pages = [
      { url: '/', title: /ECS Systems|Fire.*Security/i },
      { url: '/about', title: /About/i },
      { url: '/services', title: /Services/i },
      { url: '/salto', title: /SALTO/i },
      { url: '/contact', title: /Contact/i },
      { url: '/careers', title: /Careers|Work for Us/i },
      { url: '/maintenance', title: /Maintenance/i },
      { url: '/faqs', title: /FAQ/i },
      { url: '/testimonials', title: /Testimonial/i },
      { url: '/team', title: /Team/i },
      { url: '/privacy', title: /Privacy/i },
    ];

    for (const p of pages) {
      const response = await page.goto(p.url);
      expect(response?.status()).toBe(200);
      await expect(page).toHaveTitle(p.title);
    }
  });

  test('service detail pages load correctly', async ({ page }) => {
    const servicePages = [
      '/services/security-residential',
      '/services/security-commercial',
      '/services/fire-safety-residential',
      '/services/fire-safety-education',
      '/services/gates-railings-residential',
      '/services/gates-railings-hospitality',
    ];

    for (const url of servicePages) {
      const response = await page.goto(url);
      expect(response?.status()).toBe(200);
      await expect(page.locator('h1')).toBeVisible();
    }
  });

  test('navigation links work on desktop', async ({ page, isMobile }) => {
    test.skip(!!isMobile, 'Desktop navigation only');
    await page.goto('/');

    // Click SALTO Partner
    await page.click('nav >> text=SALTO Partner');
    await expect(page).toHaveURL('/salto');

    // Go back and navigate to About
    await page.goto('/about');
    await expect(page.locator('h1')).toContainText('About');
  });

  test('404 page shows for invalid routes', async ({ page }) => {
    const response = await page.goto('/non-existent-page');
    expect(response?.status()).toBe(404);
    await expect(page.locator('h1')).toContainText(/Not Found|404/i);
  });
});
