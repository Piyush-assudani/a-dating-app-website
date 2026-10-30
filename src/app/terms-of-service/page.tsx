import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsOfServicePage() {
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-300 text-xs font-semibold text-zinc-800">
            <FileText className="w-3.5 h-3.5" /> Terms & Conditions
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-zinc-500 font-mono">
            Applicable to Knot (com.knot.app)
          </p>
        </div>

        <div className="prose prose-zinc max-w-none text-zinc-700 space-y-6 leading-relaxed font-sans text-sm sm:text-base">
          <h3 className="font-serif text-xl font-bold text-zinc-900">1. Eligibility</h3>
          <p>
            You must be at least 18 years of age to register for or use Knot. Any profile found to be created by or representing a minor will be terminated immediately.
          </p>

          <h3 className="font-serif text-xl font-bold text-zinc-900">2. Authenticity & Single Identity</h3>
          <p>
            Every user is entitled to exactly one account tied to their verified identity. Catfishing, spoofing identity, or impersonating others results in permanent hardware bans.
          </p>

          <h3 className="font-serif text-xl font-bold text-zinc-900">3. Respectful Communication</h3>
          <p>
            Knot is built on mutual dignity. Harassment, unsolicited explicit content, discriminatory conduct, or hate speech is strictly prohibited and results in immediate expulsion.
          </p>
        </div>

      </div>
    </div>
  );
}

