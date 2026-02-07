'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQSection } from '@/data/faqs';

interface FAQAccordionProps {
  sections: FAQSection[];
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  const contentId = `faq-content-${id}`;
  const triggerId = `faq-trigger-${id}`;

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        id={triggerId}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-background-secondary transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="text-sm font-medium text-primary pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-foreground-light flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <div id={contentId} role="region" aria-labelledby={triggerId} className="px-5 pb-4 animate-fade-in">
          <p className="text-sm text-foreground-muted leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQAccordion({ sections }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <div key={section.id}>
          <h2 className="text-2xl font-bold text-primary mb-4">{section.title}</h2>
          <div className="space-y-3">
            {section.items.map((item, index) => {
              const itemId = `${section.id}-${index}`;
              return (
                <AccordionItem
                  key={itemId}
                  id={itemId}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openItems.has(itemId)}
                  onToggle={() => toggleItem(itemId)}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
