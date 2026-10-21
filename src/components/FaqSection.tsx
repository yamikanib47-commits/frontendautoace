import React, { useState } from 'react';
import { FAQS } from '../data/mockData.ts';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
      <h2 className="font-headline-lg text-slate-900 text-center mb-6 sm:mb-8 text-xl sm:text-2xl lg:text-3xl font-extrabold">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`bg-white rounded-xl overflow-hidden shadow-xs border transition-colors ${
                isOpen ? 'border-[#1B365D] ring-1 ring-[#1B365D]/20' : 'border-slate-200'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-5 py-4 text-left font-headline-sm text-slate-900 flex items-center justify-between hover:text-[#1B365D] transition-colors cursor-pointer text-sm sm:text-base font-bold"
              >
                <span>{faq.question}</span>
                <span
                  className={`material-symbols-outlined text-[22px] transform transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#1B365D]' : 'text-slate-400'
                  }`}
                >
                  expand_more
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-4 font-body-md text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center text-slate-500 font-body-sm text-[11px] sm:text-xs max-w-2xl mx-auto leading-relaxed">
        AutoAce Zed coordinates buyer-to-agent matching and automotive sourcing assistance. Vehicle inspection, documentation verification (including RTSA whitebook &amp; ZRA duty clearance), and payment terms must always be validated prior to completing any transaction.
      </div>
    </section>
  );
};
