'use client';

import { useState, useRef, useActionState, useEffect, useCallback, startTransition } from 'react';
import { Button, Input } from '@/components/ui';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContactForm, type ContactFormState } from '@/app/actions/contact';

const serviceInterests = [
  'Intruder Alarms',
  'CCTV',
  'Access Control / Door Entry',
  'Gates & Railings',
  'SALTO Access Control',
  'Gate Automation & Safety',
  'Fire Systems',
  'Extinguishers',
  'Maintenance & Support',
];

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  if (!phone) return true; // phone is optional
  return /^[\d\s+()-]{7,20}$/.test(phone);
}

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
  const [clientErrors, setClientErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, isPending] = useActionState<ContactFormState | null, FormData>(
    submitContactForm,
    null
  );

  // Sync server-side field errors to client
  useEffect(() => {
    if (state?.fieldErrors) {
      setClientErrors(state.fieldErrors as FormErrors);
      // Focus first error field
      const form = formRef.current;
      if (form) {
        const firstErrorField = form.querySelector('[aria-invalid="true"]');
        if (firstErrorField instanceof HTMLElement) {
          firstErrorField.focus();
        }
      }
    }
  }, [state]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) => {
      const next = new Set(prev);
      if (next.has(service)) {
        next.delete(service);
      } else {
        next.add(service);
      }
      return next;
    });
  };

  const validateClient = useCallback((): boolean => {
    const form = formRef.current;
    if (!form) return false;

    const data = new FormData(form);
    const newErrors: FormErrors = {};
    let valid = true;

    const firstName = (data.get('firstName') as string)?.trim();
    const lastName = (data.get('lastName') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const phone = (data.get('phone') as string)?.trim();

    if (!firstName) {
      newErrors.firstName = 'First name is required';
      valid = false;
    }
    if (!lastName) {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }
    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    if (phone && !validatePhone(phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      valid = false;
    }

    setClientErrors(newErrors);
    return valid;
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side validation first
    if (!validateClient()) {
      const form = formRef.current;
      if (form) {
        const firstErrorField = form.querySelector('[aria-invalid="true"]');
        if (firstErrorField instanceof HTMLElement) {
          firstErrorField.focus();
        }
      }
      return;
    }

    // Submit via Server Action
    const formData = new FormData(formRef.current!);
    startTransition(() => {
      formAction(formData);
    });
  };

  // Merge client and server errors
  const errors = { ...clientErrors, ...(state?.fieldErrors as FormErrors) };

  if (state?.success) {
    return (
      <div
        className="text-center py-12"
        role="status"
        aria-live="polite"
      >
        <div className="w-16 h-16 rounded-full bg-success-bg flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-success" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">Thank You!</h3>
        <p className="text-foreground-muted">
          We&apos;ve received your enquiry and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
    >
      {/* Honeypot — hidden from real users, catches bots */}
      <div className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Form-level error */}
      {state?.error && (
        <div
          className="flex items-center gap-2 p-3 bg-error-bg border border-error-border rounded-lg"
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle className="w-5 h-5 text-error flex-shrink-0" strokeWidth={1.5} />
          <p className="text-sm text-error">{state.error}</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <Input
          label="First Name"
          name="firstName"
          required
          placeholder="Your first name"
          error={errors.firstName}
          aria-invalid={errors.firstName ? 'true' : undefined}
        />
        <Input
          label="Last Name"
          name="lastName"
          required
          placeholder="Your last name"
          error={errors.lastName}
          aria-invalid={errors.lastName ? 'true' : undefined}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Input
          label="Email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          error={errors.email}
          aria-invalid={errors.email ? 'true' : undefined}
        />
        <Input
          label="Phone"
          name="phone"
          type="tel"
          placeholder="Your phone number"
          error={errors.phone}
          aria-invalid={errors.phone ? 'true' : undefined}
        />
      </div>
      <Input label="Company / Property" name="company" placeholder="Company name or property address" />

      {/* Service interests */}
      <fieldset>
        <legend className="block text-sm font-medium text-primary mb-3">
          Services of Interest
        </legend>
        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 gap-2">
          {serviceInterests.map((service) => (
            <label
              key={service}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border cursor-pointer transition-colors text-sm ${
                selectedServices.has(service)
                  ? 'border-accent bg-accent-bg text-accent'
                  : 'border-border hover:border-accent/30 text-foreground-muted'
              }`}
            >
              <input
                type="checkbox"
                checked={selectedServices.has(service)}
                onChange={() => toggleService(service)}
                className="sr-only"
                name="services"
                value={service}
              />
              <div
                className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                  selectedServices.has(service)
                    ? 'bg-accent border-accent'
                    : 'border-border'
                }`}
                aria-hidden="true"
              >
                {selectedServices.has(service) && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="leading-tight">{service}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2.5 bg-white border border-border rounded-lg text-primary text-sm placeholder-foreground-light transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isPending}
        className="w-full sm:w-auto"
      >
        {isPending ? (
          <>
            <svg className="animate-spin w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="32" strokeLinecap="round" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" strokeWidth={1.5} />
            Send Enquiry
          </>
        )}
      </Button>
    </form>
  );
}
