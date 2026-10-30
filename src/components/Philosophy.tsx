import React from 'react';
import { Compass, Sparkles, Shield, UserCheck, Flame, MessageSquareHeart } from 'lucide-react';

export default function Philosophy() {
  const standards = [
    {
      icon: Compass,
      tag: '01 / Curation',
      title: 'Intentional Daily Matches',
      description:
        'Say goodbye to endless doom-scrolling. Knot delivers a private batch of deeply vetted matches each morning, calculated on values, emotional IQ, and lifestyle harmony.',
    },
    {
      icon: UserCheck,
      tag: '02 / High-Trust',
      title: 'Zero Catfish Guarantee',
      description:
        'Every single profile undergoes rigorous biometric verification and real-human verification. Who you see is exactly who you meet across the table.',
    },
    {
      icon: MessageSquareHeart,
      tag: '03 / Respectful',
      title: 'Paced & Ghost-Free Chats',
      description:
        'Quality over quantity. Knot matches unlock dedicated time-windows for conversation, encouraging authentic dialogue and mutual respect.',
    },
    {
      icon: Flame,
      tag: '04 / Chemistry',
      title: 'Real-Life Proximity Cues',
      description:
        'Discover individuals who wander the same bespoke cafes, art galleries, and cultural neighborhoods you love. Shared ground creates natural chemistry.',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white border-y border-zinc-200/70 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E4E4E7] text-xs font-semibold text-zinc-700 uppercase tracking-widest">
            <Sparkles className="w-3 h-3 text-[#C5A059]" /> The Knot Philosophy
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
            Dating without the noise, exhaustion, or illusions.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            Most dating apps are designed to keep you single so you stay hooked. Knot was engineered with one distinct north star: helping you find a magnetic connection so you can delete us forever.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {standards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-7 rounded-3xl bg-[#FAF8F5]/80 hover:bg-white border border-zinc-200/80 hover:border-[#C5A059]/40 hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200/80 group-hover:border-[#C5A059]/30 group-hover:bg-[#F5E6CA]/30 flex items-center justify-center text-zinc-900 group-hover:text-[#8F6826] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-zinc-400 group-hover:text-[#C5A059] transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-zinc-900 group-hover:text-zinc-950">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-200/60 flex items-center justify-between text-xs font-semibold text-zinc-500 group-hover:text-zinc-900 transition-colors">
                  <span>The Knot Standard</span>
                  <span className="text-zinc-300 group-hover:text-[#C5A059] transition-colors">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

