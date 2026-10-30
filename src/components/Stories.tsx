import React from 'react';
import Image from 'next/image';
import { Quote, Sparkles, Heart } from 'lucide-react';

export default function Stories() {
  const stories = [
    {
      names: 'Rohan & Ananya',
      city: 'Bandra, Mumbai',
      duration: 'Matched in 2024 • Married in 2026',
      quote:
        'Knot was the only app where conversations felt human from the first hour. No games, no awkward small talk. We met at Subko two days after matching and never looked back.',
      image: '/premium_couple_1.webp',
      badge: 'Intentional Match',
    },
    {
      names: 'Dev & Meera',
      city: 'Indiranagar, Bangalore',
      duration: 'Matched in 2025 • Engaged',
      quote:
        'The telemetry score said 97% compatibility. I was skeptical until we sat down over filter coffee and discovered we literally had the exact same book recommendations and mountain trek bucket lists.',
      image: '/moment_sunset.webp',
      badge: 'Deleted the App in 3 Weeks',
    },
    {
      names: 'Karan & Rhea',
      city: 'South Extension, Delhi',
      duration: 'Matched in 2025 • In a Relationship',
      quote:
        'With Knot Privé, having verified identities and zero ghosting made all the difference. Meeting someone who values intentionality changes everything.',
      image: '/moment_cafe.webp',
      badge: 'Knot Privé Story',
    },
  ];

  return (
    <section id="stories" className="py-24 bg-white border-b border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E4E4E7] text-xs font-semibold text-zinc-700 uppercase tracking-widest">
            <Heart className="w-3 h-3 text-rose-600 fill-rose-600" /> Success Stories
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900">
            Real connections. Real intentions.
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            Couples who came to Knot with intention, found their match, and gladly deleted our app.
          </p>
        </div>

        {/* Stories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <div
              key={i}
              className="rounded-3xl bg-[#FAF8F5]/60 border border-zinc-200/90 overflow-hidden shadow-sm hover:shadow-luxury hover:bg-white transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.names}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                  {story.badge}
                </div>
              </div>

              <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <Quote className="w-6 h-6 text-[#C5A059]/60" />
                  <p className="text-sm text-zinc-700 leading-relaxed italic font-serif">
                    “{story.quote}”
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-200/70">
                  <div className="font-serif font-bold text-lg text-zinc-900">
                    {story.names}
                  </div>
                  <div className="text-xs text-zinc-500 font-medium">
                    {story.city} • <span className="text-emerald-600 font-semibold">{story.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

