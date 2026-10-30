'use client';

import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

interface HeroProps {
  onOpenDownload: () => void;
}

export default function Hero({ onOpenDownload }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Silk Radiant Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#F5E6CA]/40 via-[#FAF8F5]/30 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Curated Society Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-shimmer text-xs font-semibold text-zinc-800 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
              <span className="font-serif italic font-normal text-zinc-600">Private Society</span>
              <span className="text-zinc-300">•</span>
              <span className="text-zinc-900 tracking-wide font-medium">Curated for the intentional few</span>
            </div>

            {/* Editorial Serif Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 leading-[1.08]">
                Designed to be{' '}
                <span className="italic font-normal font-serif text-zinc-500">
                  deleted.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-zinc-600 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Step away from superficial swiping. Knot is an exclusive, high-trust dating ecosystem crafted for accomplished singles seeking depth, magnetic chemistry, and intentional modern romance.
              </p>
            </div>

            {/* CTAs & Trust Seals */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-900 text-white font-semibold text-base shadow-luxury hover:bg-zinc-800 hover:shadow-luxury-lg transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-95 group"
              >
                <span>Download Knot App</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#experience"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/80 hover:bg-white text-zinc-800 font-semibold text-base border border-zinc-200 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 hover:border-zinc-300"
              >
                <span>The Knot Experience</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-zinc-200/80 max-w-lg mx-auto lg:mx-0">
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-serif font-bold text-zinc-900">
                  100%
                </div>
                <div className="text-xs text-zinc-500 font-medium">
                  ID & Selfie Verified
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#C5A059]">
                  0 Ghost
                </div>
                <div className="text-xs text-zinc-500 font-medium">
                  Respectful Pacing
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-serif font-bold text-zinc-900">
                  94%
                </div>
                <div className="text-xs text-zinc-500 font-medium">
                  Second Date Intent
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Titanium Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup />
          </div>

        </div>
      </div>
    </section>
  );
}

