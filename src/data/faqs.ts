export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  title: string;
  id: string;
  items: FAQItem[];
}

export const faqSections: FAQSection[] = [
  {
    title: 'Security',
    id: 'security',
    items: [
      {
        question: 'What is a monitored alarm system?',
        answer:
          'A monitored alarm system is connected to an Alarm Receiving Centre (ARC) that monitors your property 24/7. When an alarm is triggered, the ARC is immediately notified and can dispatch the appropriate response, whether that\'s contacting keyholders or notifying the police.',
      },
      {
        question: 'Can I view my CCTV remotely?',
        answer:
          'Yes, modern CCTV systems allow you to view live and recorded footage from your smartphone, tablet, or computer from anywhere in the world with an internet connection.',
      },
      {
        question: 'What types of access control do you offer?',
        answer:
          'We offer a range of access control solutions including key fob systems, card readers, biometric (fingerprint) systems, keypad entry, and smart phone-based access via SALTO technology.',
      },
      {
        question: 'Do you install intercom systems?',
        answer:
          'Yes, we install audio and video intercom systems for residential and commercial properties. Modern systems include smartphone integration so you can see and speak to visitors remotely.',
      },
      {
        question: 'Can you secure safes and panic rooms?',
        answer:
          'Yes, we provide comprehensive safe and panic room security solutions including alarm integration, CCTV monitoring, and access control to ensure the highest level of protection.',
      },
    ],
  },
  {
    title: 'Fire Safety',
    id: 'fire-safety',
    items: [
      {
        question: 'What types of fire alarm systems do you install?',
        answer:
          'We install conventional, addressable, and wireless fire alarm systems. The best system for your property depends on its size, layout, and specific requirements. We\'ll recommend the most appropriate solution during our survey.',
      },
      {
        question: 'How often should fire extinguishers be serviced?',
        answer:
          'Fire extinguishers should be serviced annually by a qualified engineer. We offer maintenance contracts to ensure your extinguishers are always in working order and compliant with regulations.',
      },
      {
        question: 'What fire safety regulations apply to my business?',
        answer:
          'The Regulatory Reform (Fire Safety) Order 2005 requires all non-domestic premises to have an adequate fire risk assessment and appropriate fire safety measures. We can help you understand and meet your obligations.',
      },
      {
        question: 'Do you provide emergency lighting?',
        answer:
          'Yes, we design, install, and maintain emergency lighting systems that comply with BS 5266. Emergency lighting is essential for safe evacuation in the event of a power failure during a fire.',
      },
    ],
  },
  {
    title: 'Gates & Railings',
    id: 'gates-railings',
    items: [
      {
        question: 'What types of gates do you install?',
        answer:
          'We install swing gates, sliding gates, bi-folding gates, and barrier systems. Gates can be manual or automated, and we offer a wide range of materials and designs to suit your property.',
      },
      {
        question: 'Can you automate my existing gates?',
        answer:
          'In many cases, yes. We can retrofit automation systems to existing gates, including swing and sliding mechanisms. We\'ll survey your current gates to determine the best automation solution.',
      },
      {
        question: 'Do you offer gate maintenance?',
        answer:
          'Yes, regular maintenance is essential for the safe and reliable operation of automated gates. We offer maintenance contracts that include routine inspections, lubrication, and safety checks.',
      },
      {
        question: 'What about rising bollards and barriers?',
        answer:
          'We install automated rising bollards and barrier systems for vehicle access control. These can be operated via wireless keys, intercoms, or integrated with your access control system.',
      },
    ],
  },
  {
    title: 'General',
    id: 'general',
    items: [
      {
        question: 'How do I book a survey?',
        answer:
          'You can book a free survey by calling us on 0208 300 9996, emailing sales@ecssystems.co.uk, or filling in our online quote request form. We\'ll arrange a convenient time to visit your property.',
      },
      {
        question: 'Do you offer maintenance contracts?',
        answer:
          'Yes, we offer comprehensive maintenance contracts for all our systems. Regular maintenance ensures your systems remain in optimal condition and compliant with relevant regulations.',
      },
      {
        question: 'What accreditations do you hold?',
        answer:
          'ECS Systems holds NSI Gold accreditation and ISO 9001 certification. We are also BAFE registered for fire safety and approved installers for SALTO access control systems.',
      },
      {
        question: 'Do you check your staff?',
        answer:
          'Yes, all our engineers undergo thorough background checks including DBS (Disclosure and Barring Service) checks. We take the security and safety of our customers very seriously.',
      },
      {
        question: 'What areas do you cover?',
        answer:
          'We are based in Sidcup, Kent and cover London, the South East, and surrounding areas. For larger projects, we can work nationwide. Contact us to discuss your location.',
      },
    ],
  },
];
