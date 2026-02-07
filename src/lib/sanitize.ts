/**
 * Input sanitization utilities for server-side processing.
 */

/**
 * Strip HTML tags and trim whitespace from a string.
 */
export function sanitizeString(input: string): string {
  return input
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

/**
 * Sanitize an email address — only allow valid characters.
 */
export function sanitizeEmail(input: string): string {
  return input.replace(/[^a-zA-Z0-9@._+\-]/g, '').trim().toLowerCase();
}

/**
 * Sanitize a phone number — only allow digits, spaces, +, -, ().
 */
export function sanitizePhone(input: string): string {
  return input.replace(/[^\d\s+\-()]/g, '').trim();
}
