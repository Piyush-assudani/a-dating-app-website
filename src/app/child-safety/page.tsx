import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

export default function ChildSafetyPage() {
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-800">
            <ShieldAlert className="w-3.5 h-3.5" /> Strict Protection Policy
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Child Sexual Exploitation & Abuse (CSAE) Policy
          </h1>
          <p className="text-sm text-zinc-500 font-mono">
            Mandatory Standards for Knot (com.knot.app)
          </p>
        </div>

        <div className="prose prose-zinc max-w-none text-zinc-700 space-y-6 leading-relaxed font-sans text-sm sm:text-base">
          <p>
            Knot maintains an uncompromising zero-tolerance policy regarding Child Sexual Abuse Material (CSAM) or any form of child exploitation and abuse.
          </p>

          <h3 className="font-serif text-xl font-bold text-zinc-900">1. Strict Age Requirement (18+)</h3>
          <p>
            Knot is an intentional dating platform exclusively for adults aged 18 and older. Minors are strictly prohibited from creating accounts.
          </p>

          <h3 className="font-serif text-xl font-bold text-zinc-900">2. Automated Detection & Immediate Law Enforcement Escalation</h3>
          <p>
            Any attempt to upload, distribute, or solicit imagery or content exploiting minors results in immediate permanent expulsion, device banning, and reporting to the National Center for Missing & Exploited Children (NCMEC) and relevant law enforcement authorities.
          </p>
        </div>

      </div>
    </div>
  );
}

