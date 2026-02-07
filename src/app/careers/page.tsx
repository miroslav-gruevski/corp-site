import type { Metadata } from 'next';
import {
  Users,
  CheckCircle,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Quote,
  Newspaper,
  Shield,
  Puzzle,
  TrendingUp,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { HeroSection, CTABanner } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Work for Us',
  description:
    'Join ECS Systems – a young, dynamic security and fire safety company. Explore training opportunities, apprenticeships, current vacancies and life at ECS.',
  alternates: { canonical: '/careers' },
};

const whySecurityIndustry = [
  {
    icon: Shield,
    text: 'Security engineering skills are in high demand \u2013 so you\u2019ll never be out of work!',
  },
  {
    icon: Puzzle,
    text: 'A career in the security field is ideal for natural problem-solvers who enjoy the satisfaction that comes with a job well done.',
  },
  {
    icon: TrendingUp,
    text: 'There are great opportunities for progression, with training schemes and extra support available at every turn.',
  },
  {
    icon: MapPin,
    text: 'No two days are the same in our sector. If you\u2019re a people person and you love visiting new locations for different experiences, you\u2019ll be in your element!',
  },
];

const employeeTestimonials = [
  {
    name: 'Andy',
    role: 'Sales Team since 2024',
    quote:
      'Initially, I was intrigued by ECS\u2019 regular social media posts. I saw that the team was looking for new surveyors and decided to give the role a shot. I\u2019ve been warmly welcomed ever since, and it\u2019s been fantastic working alongside such hard-working professionals. Each department here is rapidly expanding, which is exciting to see. I hope to play a role in the company\u2019s continued growth and I\u2019m looking forward to what the future holds.',
  },
  {
    name: 'Dan Strong',
    role: 'Engineer since 2016',
    quote:
      'I finished Sixth Form and had no idea what career path I wanted to pursue. I asked if there was a trainee opportunity at ECS and the directors allowed me to work with the installation department before moving to the projects team to develop my skills in this area. The quality of work achieved here is second to none, and we have a great team that really gets along. Having just started in a more technical role, I\u2019m excited to increase my knowledge and eventually transition into management.',
  },
  {
    name: 'Luigi',
    role: 'Engineer since 2018',
    quote:
      'I\u2019ve finally found a place that gives me the freedom to practice my knowledge and enhance my skills, and where I can be part of a team that really cares about its customers and each other. I love the fact we are such a dynamic group, both in the office and out in the field \u2013 and that we are always open to embracing new technology and expanding into different areas of business.',
  },
];

const latestNews = [
  {
    title: 'Surveyor spotlight: Jack Cooper',
    summary:
      'This month, we are pleased to shine a light on Jack Cooper, one of ECS\u2019s experienced and highly valued surveyors. Jack joined ECS in 2021 and brings nearly two decades of industry experience to the role.',
    content: [
      {
        question: 'How long have you been in the industry for?',
        answer:
          'I have been in the industry for 18 years now. Started as an apprentice engineer, working my way up to a senior engineer role which lead me to running projects in the HNW Residential industry in London. From there I moved into Project Management for a short period, before moving into a Surveying/Consulting role which I have been doing for 9 years now.',
      },
      {
        question: 'How long have you been with ECS for?',
        answer:
          'I joined ECS in January 2021 so it will be my 5 year anniversary when I return in the New Year!',
      },
      {
        question: 'What do you like most about your role/working for ECS?',
        answer:
          'I enjoy the diversity and complexity of my job role. Much of the projects I am involved in demand a unique solution, whether this is the technology and functionality of the systems we are installing or the aesthetic demands of the project. There is nothing more rewarding than being involved in the designs of the projects, working with everyone involved in the project and seeing the delivery of the installations from our Projects Team that meets the clients expectations. I feel very grateful to be working with such a great team at ECS, the business has grown tremendously since I joined in 2021 and I am excited for the New Year ahead.',
      },
      {
        question: 'What do you like doing in your spare time outside of work?',
        answer:
          'I love nothing more than spending time with my family outside of work, my partner Meg, our boy Rudy, and our little dog Betsy. Whether meeting friends and family, country walks, weekends away or holidays abroad, we have a busy life away from work. I enjoy playing golf when I get the chance, have a newfound passion for running, recently completing a 10km in October and targeting a half marathon in 2026. I don\u2019t play anymore but love my football, I am a Chelsea fan and enjoy watching my hometown team Cheltenham Town when I can. I like spending time in the kitchen and enjoy cooking and trying new foods.',
      },
    ],
    closing:
      'We would like to thank Jack for his continued hard work and commitment. His breadth of experience, attention to detail and collaborative approach play an important role in supporting the delivery of high-quality, compliant fire and security solutions for our clients. We are proud to have him as part of the ECS team and look forward to what the year ahead brings.',
  },
  {
    title: 'Looking back, moving forward: celebrating 10 years of ECS',
    summary:
      'As 2025 draws to a close, we are taking a moment to reflect on what has been a landmark year for ECS Systems. From marking our 10th anniversary to expanding our team, strengthening partnerships and supporting our community.',
    sections: [
      {
        heading: 'A decade of progress',
        text: 'What began with Matt Evans and Dan Cope working from a garage has grown into one of the leading fire and security specialists in London and the South East. Today, we support hundreds of customers each year across the residential, commercial and education sectors, delivering modern, integrated systems built on quality engineering and reliable service. From a small team of five to more than fifty today, the consistency and commitment of our colleagues continue to play an important role in the company\u2019s development.',
      },
      {
        heading: 'Strengthening the team',
        text: '2025 saw continued growth across the business. We expanded our office to support our increasing workload and welcomed several new starters, each contributing fresh perspectives and helping to maintain the smooth running of daily operations and customer support. Our apprentices also had a strong year. Adam represented ECS at the 2025 national qualifiers at the NEC, demonstrating technical ability and professionalism. Supporting early-career talent remains an important focus for us.',
      },
      {
        heading: 'Investing in innovation',
        text: 'This year also saw the introduction of several new high-tech solutions across our product offering. One example is the Salto XS4 Face system, which uses advanced facial recognition for seamless, secure entry with no physical credentials required. Designed for busy, high-traffic environments, it offers both convenience and enhanced security, reflecting our ongoing commitment to bringing modern, reliable technology to our clients.',
      },
      {
        heading: 'Building a more sustainable fleet',
        text: 'We also introduced our new ID. Buzz Cargo vans. Fully electric, practical and equipped with smart technology, they allow us to deliver the same reliable service you expect from ECS while lowering our environmental impact. Reducing emissions across our fleet is an important step in building a more sustainable future for our team, our clients and the communities we work in.',
      },
      {
        heading: 'Education partnerships and work experience',
        text: 'Our partnership with LSEC grew further through the LASER scholarship programme, which gives students financial support and practical experience. We were pleased to welcome Zoe to ECS as part of her placement and look forward to continuing these valuable collaborations that help students gain insight into real working environments.',
      },
      {
        heading: 'Community support in action',
        text: 'Charity and community involvement remained central to our year. Our visits to Queen Elizabeth Hospital continued, bringing Halloween activities and preparing donations for their Christmas toy appeal. Beyond our hospital support, members of the team took part in a wide range of fundraising initiatives throughout 2025. This included taking part in Wear Denim for Dementia Day, Ryan Pacey running the London Marathon for Cancer Research UK, and joining Football Shirt Friday to raise funds for the Bobby Moore Fund, supporting bowel cancer research. These activities reflect the varied ways our team chooses to support causes that are important to them and to our wider community.',
      },
      {
        heading: 'Looking back on 2025',
        text: 'As the year draws to a close, we are proud of what has been achieved across the business. From supporting schools and local organisations to delivering reliable systems for our residential and commercial clients, 2025 has been a year of progress and continued commitment to quality. With our tenth anniversary behind us, we look forward to building on this momentum as we move into 2026.',
      },
    ],
  },
  {
    title: 'Supporting our community: Halloween at Queen Elizabeth Hospital',
    summary:
      'Over Halloween, members of the ECS team paid a special visit to Queen Elizabeth Hospital to deliver a dose of spooky fun to young patients and staff.',
    body: 'Over Halloween, members of the ECS team paid a special visit to Queen Elizabeth Hospital to deliver a dose of spooky fun to young patients and staff. Armed with Halloween-themed crafts and sweet treats, the team stopped by the Dolphin, Hippo and Safari wards to spread some seasonal cheer and brighten the day for children spending time in hospital.\n\nECS is proud to support our local community, and visits like this remind us of the importance of bringing moments of joy to those who need them most. We\u2019re always humbled by the incredible work of the hospital teams and grateful for the opportunity to give back in a small but meaningful way.\n\nAs we move into the festive season, our focus turns to Christmas, and we\u2019re already planning our next visit to deliver gifts for the hospital\u2019s annual toy appeal, ensuring every child visiting the wards this December has something special to unwrap.',
  },
];

export default function CareersPage() {
  return (
    <>
      <HeroSection
        title="Work for Us"
        subtitle="Join Our Team"
        description="ECS Systems is a young, dynamic security and fire safety company that&apos;s fast-becoming the go-to service provider in our sector in the South East of England. With growth on the horizon and plenty of opportunities to increase our service offering, we&apos;re always looking for highly driven individuals to join our team."
        primaryCTA={{ label: 'Current Opportunities', href: '#opportunities' }}
        compact
      />

      {/* Why ECS? */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-white rounded-xl border border-border p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Why ECS?</h3>
              <p className="text-foreground-muted leading-relaxed mb-4">
                Quite rightly, you want to do your due diligence when researching your
                next employer. You&apos;ll find everything you need to know about what
                it&apos;s like to work for ECS here.
              </p>
              <Link href="/about" className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors">
                Learn more <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>

            <div className="bg-white rounded-xl border border-border p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
                <GraduationCap className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Training Opportunities</h3>
              <p className="text-foreground-muted leading-relaxed mb-4">
                If you&apos;re just about ready to begin your career in security, we can
                help you develop your skills and broaden your experience in the industry.
                Here&apos;s how.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors">
                Get in touch <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>

            <div className="bg-white rounded-xl border border-border p-8 hover:shadow-md transition-shadow" id="opportunities">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
                <Briefcase className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Current Opportunities</h3>
              <p className="text-foreground-muted leading-relaxed mb-4">
                All our current job vacancies are listed here. But if you can&apos;t see
                what you&apos;re looking for, don&apos;t worry &ndash; we&apos;d like to
                hear from you regardless.
              </p>
              <a
                href="mailto:sales@ecssystems.co.uk"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              >
                Send your CV <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose a Career in the Security Industry? */}
      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-title mb-3">Career Path</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Why Choose a Career in the Security Industry?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whySecurityIndustry.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className="flex gap-4 bg-white rounded-xl border border-border p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <p className="text-foreground-muted leading-relaxed text-sm">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-title mb-3">Life at ECS</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              What Our Team Says
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {employeeTestimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
              >
                <Quote className="w-8 h-8 text-accent/30 mb-4" strokeWidth={1.5} />
                <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-bold text-primary">{testimonial.name}</p>
                  <p className="text-xs text-foreground-light">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section id="latest-news" className="py-16 lg:py-24 bg-background-secondary scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-title mb-3">Stay Updated</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Latest News
            </h2>
          </div>

          <div className="space-y-8">
            {/* Article 1: Jack Cooper */}
            <article className="bg-white rounded-xl border border-border overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Newspaper className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-foreground-light">
                    Team Spotlight
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {latestNews[0].title}
                </h3>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  {latestNews[0].summary}
                </p>

                <div className="space-y-6">
                  {latestNews[0].content?.map((item) => (
                    <div key={item.question}>
                      <h4 className="text-sm font-bold text-primary mb-2">
                        {item.question}
                      </h4>
                      <p className="text-sm text-foreground-muted leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-foreground-muted leading-relaxed mt-6 italic">
                  {latestNews[0].closing}
                </p>
              </div>
            </article>

            {/* Article 2: 10 Years of ECS */}
            <article className="bg-white rounded-xl border border-border overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Newspaper className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-foreground-light">
                    Company News
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {latestNews[1].title}
                </h3>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  {latestNews[1].summary}
                </p>

                <div className="space-y-6">
                  {latestNews[1].sections?.map((section) => (
                    <div key={section.heading}>
                      <h4 className="text-base font-bold text-primary mb-2">
                        {section.heading}
                      </h4>
                      <p className="text-sm text-foreground-muted leading-relaxed">
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Article 3: Halloween */}
            <article className="bg-white rounded-xl border border-border overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Newspaper className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-foreground-light">
                    Community
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {latestNews[2].title}
                </h3>
                <div className="text-sm text-foreground-muted leading-relaxed whitespace-pre-line">
                  {latestNews[2].body}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              How to Apply
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-8">
              To enquire about current vacancies or to send us your CV, please get in
              touch via our contact page or email us directly at{' '}
              <a
                href="mailto:sales@ecssystems.co.uk"
                className="text-accent hover:text-accent-hover transition-colors font-medium"
              >
                sales@ecssystems.co.uk
              </a>
              . We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xs sm:max-w-md mx-auto">
              <Link href="/contact" className="w-full sm:flex-1">
                <Button variant="primary" size="lg" className="w-full">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
                </Button>
              </Link>
              <a
                href="mailto:sales@ecssystems.co.uk?subject=CV%20Submission%20-%20ECS%20Systems"
                className="w-full sm:flex-1 inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] hover:scale-[1.02] border hover:bg-primary/5 hover:shadow-md focus-visible:ring-primary px-6 py-3 text-base min-h-[48px]"
                style={{ backgroundColor: 'transparent', color: 'var(--primary)', borderColor: 'var(--primary)' }}
              >
                Email Your CV
                <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Meet the Team"
        description="Get to know the people behind ECS Systems."
        ctaLabel="Our Team"
        ctaHref="/team"
        icon={Users}
        variant="light"
      />
    </>
  );
}
