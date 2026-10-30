'use client';

import React from 'react';
import { ArrowRight, Apple, Play, Sparkles, QrCode } from 'lucide-react';

interface DownloadCtaProps {
  onOpenDownload: () => void;
}

export default function DownloadCta({ onOpenDownload }: DownloadCtaProps) {
  return (
    <section className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background silk gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FAF8F5] -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white p-10 sm:p-16 lg:p-20 shadow-2xl border border-zinc-800 text-center space-y-8">
          
          {/* Subtle Golden Glow Circle */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C5A059]/20 blur-[100px] pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#DFBA73]">
            <Sparkles className="w-3.5 h-3.5" /> Start Your Chapter
          </div>

          {/* Headline */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Your last first date awaits.
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Step away from superficial apps. Join a curated, intentional society of singles who value genuine connection.
            </p>
          </div>

          {/* Store Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenDownload}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white text-zinc-900 hover:bg-zinc-100 font-semibold text-sm shadow-lg flex items-center justify-center gap-3 transition-transform active:scale-95 group"
            >
              <div className="w-7 h-7 rounded-xl bg-zinc-900 text-white flex items-center justify-center">
                <Apple className="w-4 h-4 fill-white" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">
                  Download on the
                </div>
                <div className="text-sm font-bold text-zinc-900 leading-none">
                  Apple App Store
                </div>
              </div>
            </button>

            <button
              onClick={onOpenDownload}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700/80 text-white font-semibold text-sm border border-zinc-700 shadow-lg flex items-center justify-center gap-3 transition-transform active:scale-95 group"
            >
              <div className="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                <Play className="w-3.5 h-3.5 fill-white" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">
                  Get it on
                </div>
                <div className="text-sm font-bold text-white leading-none">
                  Google Play
                </div>
              </div>
            </button>
          </div>

          {/* Micro text */}
          <div className="pt-2 text-xs text-zinc-500 font-medium">
            Package ID: <span className="font-mono text-zinc-400">com.knot.app</span> • Requires iOS 15.0+ or Android 8.0+
          </div>

        </div>
      </div>
    </section>
  );
}

