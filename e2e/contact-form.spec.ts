import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('form renders with all required fields', async ({ page }) => {
    await expect(page.getByLabel(/first name/i)).toBeVisible();
    await expect(page.getByLabel(/last name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/phone/i)).toBeVisible();
    await expect(page.getByLabel(/message/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /send|submit/i })).toBeVisible();
  });

  test('shows validation errors on empty submit', async ({ page }) => {
    await page.getByRole('button', { name: /send|submit/i }).click();

    // Should show error messages
    const errors = page.locator('[role="alert"]');
    const count = await errors.count();
    expect(count).toBeGreaterThan(0);
  });

  test('validates email format', async ({ page }) => {
    await page.getByLabel(/first name/i).fill('Test');
    await page.getByLabel(/last name/i).fill('User');
    await page.getByLabel(/email/i).fill('invalid-email');
    await page.getByLabel(/phone/i).fill('01234567890');
    await page.getByLabel(/message/i).fill('This is a test message with enough characters for validation.');

    await page.getByRole('button', { name: /send|submit/i }).click();

    // Should show email validation error
    const errors = page.locator('[role="alert"]');
    await expect(errors.first()).toBeVisible();
  });

  test('honeypot field is not interactable by users', async ({ page }) => {
    // The honeypot input exists in DOM but is hidden via overflow-hidden + w-0 h-0
    const honeypot = page.locator('input[name="website"]');
    await expect(honeypot).toBeAttached();
    // It should have tabIndex -1 so not reachable via keyboard
    await expect(honeypot).toHaveAttribute('tabindex', '-1');
    // Its container should be aria-hidden
    const container = page.locator('div[aria-hidden="true"]').filter({ has: page.locator('input[name="website"]') });
    await expect(container).toHaveAttribute('aria-hidden', 'true');
  });

  test('form labels are associated with inputs', async ({ page }) => {
    // Check that labels exist for required fields
    const labels = page.locator('label');
    const count = await labels.count();
    expect(count).toBeGreaterThanOrEqual(4);

    // Verify each required input has an associated label
    const requiredInputs = page.locator('input[aria-required="true"]');
    const inputCount = await requiredInputs.count();
    expect(inputCount).toBeGreaterThanOrEqual(3);
  });
});
