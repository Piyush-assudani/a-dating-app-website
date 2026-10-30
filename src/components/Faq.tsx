'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does Knot differ from traditional dating apps?',
      a: 'Traditional apps gamify swiping and prioritize retention over genuine relationships. Knot limits your daily matches to curated, high-compatibility pairings, enforces biometric selfie verification, and encourages intentional first conversations through personalized prompts.',
    },
    {
      q: 'Is Knot invite-only or can anyone join?',
      a: 'Anyone can download the app and apply. However, every profile passes through our automated liveness check and editorial team review to ensure authenticity, intent, and community safety before discovery is unlocked.',
    },
    {
      q: 'What is Knot Privé Black Edition?',
      a: 'Knot Privé is our premium tier tailored for discerning leaders, creators, founders, and professionals who prioritize discretion. It provides priority placement, incognito Ghost Mode, admirer telemetry, and global travel passports across cultural capitals.',
    },
    {
      q: 'Will my friends, colleagues, or contacts see me on Knot?',
      a: 'No. Knot offers Contact Blocking right at registration. You can also activate Ghost Mode so your profile is completely hidden from public discovery and only visible to individuals you choose to like first.',
    },
    {
      q: 'How does the Screenshot Prevention Shield work?',
      a: 'Knot uses native hardware-level DRM flags (`FLAG_SECURE` on Android and view-protection shields on iOS) to block screenshots and screen recordings in all chat and profile screens, protecting your personal imagery.',
    },
    {
      q: 'Is Knot available for both iOS and Android?',
      a: 'Yes! Knot is built natively for both Android and iOS devices, ensuring smooth, fluid animations, instant notifications, and biometric sign-in across platforms.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white border-t border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E4E4E7] text-xs font-semibold text-zinc-700 uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" /> Curated Answers
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Everything you need to know about joining Knot and finding intentional connection.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="rounded-2xl border border-zinc-200/80 overflow-hidden transition-all bg-[#FAF8F5]/40 hover:bg-[#FAF8F5]"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-zinc-900"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-zinc-900' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-zinc-600 leading-relaxed border-t border-zinc-200/40 animate-in fade-in duration-200 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

