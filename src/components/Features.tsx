import React from 'react';
import Image from 'next/image';
import { Sparkles, MapPin, MessageCircle, Heart, Lock, ShieldCheck, Zap } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E4E4E7] text-xs font-semibold text-zinc-700 uppercase tracking-widest">
            <Zap className="w-3 h-3 text-[#C5A059]" /> Modern Elegance
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900">
            Engineered for genuine chemistry.
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            Every feature in Knot is thoughtfully designed to transition digital sparks into memorable real-world dates.
          </p>
        </div>

        {/* Feature Grid: 2 Large Banners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Proximity Crossings */}
          <div className="relative rounded-3xl overflow-hidden bg-white border border-zinc-200/80 shadow-luxury p-8 sm:p-10 flex flex-col justify-between group">
            <div className="space-y-4 max-w-md z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900">
                <MapPin className="w-3.5 h-3.5 text-amber-600" /> Real Life Crossings
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900">
                Cross paths naturally.
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Notice someone intriguing at your favorite pour-over cafe or evening art exhibition? Knot reveals subtle crossings when your daily orbits intersect, without ever revealing exact real-time GPS coordinates.
              </p>
            </div>

            {/* Visual Graphic Area */}
            <div className="relative mt-8 rounded-2xl overflow-hidden aspect-[16/10] border border-zinc-100 shadow-md">
              <Image
                src="/moment_cafe.webp"
                alt="Cross paths in cafe"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5">
                <div className="bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/60 shadow-lg flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-zinc-900">
                    Crossed paths 2 times in Bandra West
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Knot Sparks */}
          <div className="relative rounded-3xl overflow-hidden bg-white border border-zinc-200/80 shadow-luxury p-8 sm:p-10 flex flex-col justify-between group">
            <div className="space-y-4 max-w-md z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-800">
                <Sparkles className="w-3.5 h-3.5 text-rose-600" /> Sparks & Prompts
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900">
                Conversation with substance.
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Banishing the dread of “Hey”. With Knot Sparks, you like a specific photo caption or voice prompt with a tailored thought, igniting natural, effortless conversation right from minute one.
              </p>
            </div>

            {/* Visual Graphic Area */}
            <div className="relative mt-8 rounded-2xl overflow-hidden aspect-[16/10] border border-zinc-100 shadow-md">
              <Image
                src="/moment_sunset.webp"
                alt="Romantic sunset moment"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                <div className="bg-zinc-900/90 backdrop-blur-md text-white p-3.5 rounded-xl border border-white/20 shadow-xl max-w-sm">
                  <div className="text-[10px] uppercase font-bold text-[#C5A059] tracking-wider mb-1">
                    Aditya commented on photo
                  </div>
                  <p className="text-xs italic text-zinc-200 font-serif">
                    “That hidden coastal cliff in South Goa is magic at golden hour. Have you explored the lighthouse trail?”
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 3 Secondary Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          <div className="p-7 rounded-3xl bg-white border border-zinc-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-zinc-200 flex items-center justify-center text-zinc-900">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <h4 className="font-serif text-lg font-bold text-zinc-900">
              Screenshot Shield
            </h4>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Your conversations, photos, and identity remain discreet. Knot’s secure protocol blocks screenshots and recordings across iOS and Android.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-zinc-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-zinc-200 flex items-center justify-center text-zinc-900">
              <Lock className="w-5 h-5 text-[#C5A059]" />
            </div>
            <h4 className="font-serif text-lg font-bold text-zinc-900">
              Ghost Mode & Travel
            </h4>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Browse completely incognito. Only the profiles you intentionally like will ever be able to see that you are active on Knot.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-zinc-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-zinc-200 flex items-center justify-center text-zinc-900">
              <Heart className="w-5 h-5 text-rose-600 fill-rose-600" />
            </div>
            <h4 className="font-serif text-lg font-bold text-zinc-900">
              Curated Date Spots
            </h4>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Once you match, Knot Concierge suggests handpicked, quiet cocktail lounges, artisanal tea rooms, and intimate bistros tailored to your mutual tastes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

