import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, HeartHandshake } from 'lucide-react';

export default function CommunityGuidelinesPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-zinc-900 py-16 px-6 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-10">
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Knot
        </Link>

        <div className="space-y-3 border-b border-zinc-200/80 pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-semibold text-zinc-800">
            <HeartHandshake className="w-3.5 h-3.5 text-[#C5A059]" /> Code of Honor
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Community Guidelines
          </h1>
          <p className="text-sm text-zinc-500 font-mono">
            The Knot Society Standard
          </p>
        </div>

        <div className="prose prose-zinc max-w-none text-zinc-700 space-y-6 leading-relaxed font-sans text-sm sm:text-base">
          <h3 className="font-serif text-xl font-bold text-zinc-900">1. Lead with Intent</h3>
          <p>
            Be honest about what you are seeking. Knot is designed for individuals who value authenticity over games and emotional transparency over breadcrumbing.
          </p>

          <h3 className="font-serif text-xl font-bold text-zinc-900">2. Respectful Pacing & Unmatching</h3>
          <p>
            If a connection does not feel right, be courteous. A kind, honest goodbye is always honored above abrupt ghosting.
          </p>

          <h3 className="font-serif text-xl font-bold text-zinc-900">3. Zero Tolerance for Misconduct</h3>
          <p>
            Unsolicited sexual solicitation, abusive messages, catfishing, or commercial promotion are prohibited. Violators are removed permanently.
          </p>
        </div>

      </div>
    </div>
  );
}

