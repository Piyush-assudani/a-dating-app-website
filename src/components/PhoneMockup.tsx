'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Heart, ShieldCheck, MapPin, Briefcase, GraduationCap, Flame } from 'lucide-react';

export default function PhoneMockup() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px]">
      {/* Ambient Luxury Glow behind Device */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#C5A059]/20 via-[#DFBA73]/15 to-rose-500/10 rounded-[55px] blur-2xl -z-10 animate-pulse-glow" />

      {/* Floating Card 1: Match Telemetry */}
      <div className="absolute -left-6 sm:-left-12 top-24 z-20 bg-white/90 backdrop-blur-xl border border-white/80 p-3.5 rounded-2xl shadow-luxury hidden sm:flex items-center gap-3 animate-float">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/80 border border-[#C5A059]/30 flex items-center justify-center text-[#8F6826]">
          <Flame className="w-5 h-5 text-amber-600 fill-amber-500" />
        </div>
        <div>
          <div className="text-[11px] font-semibold tracking-wider uppercase text-zinc-400">
            Telemetry
          </div>
          <div className="text-sm font-bold text-zinc-900 flex items-center gap-1">
            98% Chemistry <span className="text-xs text-emerald-600">★ High</span>
          </div>
        </div>
      </div>

      {/* Floating Card 2: Privé Badge */}
      <div
        className="absolute -right-6 sm:-right-10 bottom-32 z-20 bg-zinc-900 text-white p-3.5 rounded-2xl shadow-luxury-lg hidden sm:flex items-center gap-3 animate-float"
        style={{ animationDelay: '2.5s' }}
      >
        <div className="w-9 h-9 rounded-xl bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#DFBA73]">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059]">
            Knot Privé
          </div>
          <div className="text-xs font-semibold text-zinc-200">
            Verified Society
          </div>
        </div>
      </div>

      {/* Titanium Device Frame */}
      <div className="relative rounded-[50px] p-3 bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-400 shadow-2xl border border-white/60">
        <div className="relative rounded-[40px] overflow-hidden bg-black aspect-[9/19] border-[3px] border-zinc-900">
          
          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 w-28 h-6 bg-black rounded-full flex items-center justify-between px-3">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-900/80"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse"></div>
          </div>

          {/* Screen Content: Profile Discovery UI */}
          <div className="relative w-full h-full flex flex-col justify-between bg-[#F8F6F0] select-none overflow-hidden">
            
            {/* App Top Bar */}
            <div className="pt-10 px-5 pb-3 flex items-center justify-between z-10 bg-gradient-to-b from-black/40 to-transparent text-white">
              <div className="flex items-baseline">
                <span className="font-serif text-2xl font-bold tracking-tight text-white drop-shadow-md">
                  knot
                </span>
                <span className="text-2xl font-black text-rose-500 leading-none">.</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white/90">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified</span>
              </div>
            </div>

            {/* Profile Photo Area */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/profiles/aanya_1.jpg"
                alt="Curated Match"
                fill
                priority
                className="object-cover object-center"
              />
              {/* Luxury Silk Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />
            </div>

            {/* Bottom Profile Details Card */}
            <div className="relative z-10 p-5 space-y-3 text-white">
              
              {/* Name & Age */}
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-2xl font-bold tracking-tight">
                    Aanya, 25
                  </h3>
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-1 text-xs text-zinc-300 font-medium mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Crossed paths in Bandra West</span>
                </div>
              </div>

              {/* Badges / Chips */}
              <div className="flex flex-wrap gap-1.5 text-[11px]">
                <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 flex items-center gap-1">
                  <Briefcase className="w-3 h-3 text-amber-300" /> Product Lead
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 flex items-center gap-1">
                  <GraduationCap className="w-3 h-3 text-sky-300" /> NID Alumni
                </span>
              </div>

              {/* Prompt Card */}
              <div className="p-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-xs text-zinc-100 leading-relaxed">
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#DFBA73] mb-0.5">
                  My ideal Sunday
                </div>
                “Pour-over Ethiopian coffee, discovering vintage jazz vinyl, and spontaneous beach drives.”
              </div>

              {/* Interactive Match Action Pills */}
              <div className="flex items-center justify-between pt-1">
                <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 flex items-center justify-center text-white text-base font-serif hover:bg-white/30 transition-all cursor-pointer">
                  ✕
                </div>
                <div className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-zinc-950 text-xs font-bold shadow-lg flex items-center gap-1.5 cursor-pointer active:scale-95 transition-transform">
                  <Sparkles className="w-3.5 h-3.5 fill-zinc-950" /> Send Spark
                </div>
                <div className="w-11 h-11 rounded-full bg-rose-600/90 backdrop-blur-lg border border-rose-400/50 flex items-center justify-center text-white shadow-md hover:scale-105 transition-all cursor-pointer">
                  <Heart className="w-5 h-5 fill-white" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

