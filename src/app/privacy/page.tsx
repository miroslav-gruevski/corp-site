import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Privacy Policy & Terms',
  description: 'ECS Systems privacy policy, terms & conditions, and data protection information.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <HeroSection title="Privacy Policy" compact />

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Introduction</h2>
              <p className="text-foreground-muted leading-relaxed">
                ECS Systems Limited (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is
                committed to protecting and respecting your privacy. This policy explains
                how we collect, use, and protect your personal data when you use our
                website or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Information We Collect
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                We may collect personal information that you provide to us directly,
                including your name, email address, phone number, and postal address when
                you fill in our contact forms, request a quote, or communicate with us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                How We Use Your Information
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                We use your personal data to respond to your enquiries, provide our
                services, send relevant communications, and improve our website. We will
                not share your personal data with third parties without your consent,
                except where required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Your Rights</h2>
              <p className="text-foreground-muted leading-relaxed">
                Under data protection law, you have the right to access, correct, or
                delete your personal data. You may also object to processing or request
                data portability. To exercise these rights, please contact us at{' '}
                <a
                  href="mailto:sales@ecssystems.co.uk"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  sales@ecssystems.co.uk
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Contact</h2>
              <p className="text-foreground-muted leading-relaxed">
                ECS Systems Limited, 75 Station Rd, Sidcup DA15 7DN
                <br />
                Email:{' '}
                <a
                  href="mailto:sales@ecssystems.co.uk"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  sales@ecssystems.co.uk
                </a>
                <br />
                Phone: 0208 300 9996
              </p>
            </div>

            {/* Terms & Conditions */}
            <div id="terms" className="pt-8 border-t border-border scroll-mt-24">
              <h2 className="text-2xl font-bold text-primary mb-6">Terms &amp; Conditions</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Use of Website</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    By accessing and using the ECS Systems website, you accept and agree to be
                    bound by these terms and conditions. The content of this website is for
                    general information purposes only and does not constitute professional advice.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Services</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    All services provided by ECS Systems Limited are subject to a separate
                    agreement or quotation. Prices quoted are valid for a period of 30 days
                    unless otherwise stated. All work is carried out in accordance with relevant
                    British Standards and industry regulations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Liability</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    ECS Systems Limited shall not be liable for any indirect, incidental, or
                    consequential damages arising from the use of our website or services. Our
                    total liability shall not exceed the value of the services provided.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Intellectual Property</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    All content on this website, including text, images, logos, and design
                    elements, is the property of ECS Systems Limited and is protected by
                    copyright. No content may be reproduced without prior written permission.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Governing Law</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    These terms and conditions are governed by the laws of England and Wales.
                    Any disputes shall be subject to the exclusive jurisdiction of the courts
                    of England and Wales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
