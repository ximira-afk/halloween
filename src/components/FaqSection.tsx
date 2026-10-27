import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is the Halloween Night Rescue Kit?',
      answer: "It's a digital collection of printable Halloween activities, including Bingo, a Scavenger Hunt, and Party Challenge Cards.",
    },
    {
      question: 'Will I receive a physical product?',
      answer: 'No. This is a digital product containing printable files. Nothing will be shipped to your home.',
    },
    {
      question: 'How do I receive the kit?',
      answer: 'After purchase, follow the instructions provided through the checkout and delivery platform to access your files.',
    },
    {
      question: 'Can I print the activities at home?',
      answer: 'Yes. The files are designed for printing. A home printer or access to a printing service is needed.',
    },
    {
      question: 'Which paper sizes are included?',
      answer: 'The package includes US Letter and A4 editions, with color and ink-saving versions.',
    },
    {
      question: 'Do I need special equipment?',
      answer: 'The Party Challenge Cards are designed for activities that do not require special equipment. A printer and paper are needed to use the printable files.',
    },
    {
      question: 'Is this suitable for young children?',
      answer: 'The activities are intended for family-friendly Halloween entertainment. Adults should review the activities and supervise children as appropriate.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#17151C] relative border-t border-[#FFF3DE]/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#FF8A24] uppercase mb-3 flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#FF8A24]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF3DE] tracking-tight mb-4 [text-wrap:balance]">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#FFF3DE]/80 leading-relaxed">
            Everything you need to know about purchasing and printing the kit.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#21152F] rounded-xl border border-[#FFF3DE]/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A24]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-[#FFF3DE]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#FF8A24] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#FFF3DE]/85 leading-relaxed border-t border-[#FFF3DE]/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
