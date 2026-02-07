'use server';

import { headers } from 'next/headers';
import { checkRateLimit } from '@/lib/rate-limit';
import { sanitizeString, sanitizeEmail, sanitizePhone } from '@/lib/sanitize';

export interface ContactFormState {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  if (!phone) return true;
  return /^[\d\s+()-]{7,20}$/.test(phone);
}

export async function submitContactForm(
  _prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  // --- Rate Limiting ---
  const headerStore = await headers();
  const forwarded = headerStore.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim() || 'unknown';
  const { allowed } = checkRateLimit(`contact:${ip}`);

  if (!allowed) {
    return {
      success: false,
      error: 'Too many submissions. Please try again later.',
    };
  }

  // --- Honeypot Check ---
  const honeypot = (formData.get('website') as string)?.trim();
  if (honeypot) {
    // Bot detected — pretend success
    return { success: true };
  }

  // --- Extract & Sanitize ---
  const firstName = sanitizeString((formData.get('firstName') as string) || '');
  const lastName = sanitizeString((formData.get('lastName') as string) || '');
  const email = sanitizeEmail((formData.get('email') as string) || '');
  const phone = sanitizePhone((formData.get('phone') as string) || '');
  const company = sanitizeString((formData.get('company') as string) || '');
  const message = sanitizeString((formData.get('message') as string) || '');
  const services = formData.getAll('services').map((s) => sanitizeString(s as string));

  // --- Server-side Validation ---
  const fieldErrors: Record<string, string> = {};

  if (!firstName) fieldErrors.firstName = 'First name is required';
  if (!lastName) fieldErrors.lastName = 'Last name is required';
  if (!email) {
    fieldErrors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    fieldErrors.email = 'Please enter a valid email address';
  }
  if (phone && !validatePhone(phone)) {
    fieldErrors.phone = 'Please enter a valid phone number';
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, fieldErrors };
  }

  // --- Send Email ---
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      // Production: send via Resend
      const { Resend } = await import('resend');
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: process.env.EMAIL_FROM || 'ECS Website <noreply@ecssystems.co.uk>',
        to: process.env.EMAIL_TO || 'info@ecssystems.co.uk',
        replyTo: email,
        subject: `New Enquiry from ${firstName} ${lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
            ${phone ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>` : ''}
            ${company ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Company</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${company}</td></tr>` : ''}
            ${services.length > 0 ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Services</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${services.join(', ')}</td></tr>` : ''}
            ${message ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${message}</td></tr>` : ''}
          </table>
          <p style="color: #888; font-size: 12px; margin-top: 16px;">Sent from the ECS Systems website contact form.</p>
        `,
      });
    } else {
      // Development: log to console
      console.log('[Contact Form Submission]', {
        firstName,
        lastName,
        email,
        phone,
        company,
        services,
        message,
      });
    }

    return { success: true };
  } catch (error) {
    // Report to Sentry in production, log in dev
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to send contact form email:', error);
    }
    return {
      success: false,
      error: 'Something went wrong. Please try again or call us directly.',
    };
  }
}
