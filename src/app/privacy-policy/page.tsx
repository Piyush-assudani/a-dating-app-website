import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
            <Shield className="w-3.5 h-3.5" /> Privacy & Cryptographic Safety
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-zinc-500 font-mono">
            Last Updated: January 2026 • Effective for com.knot.app
          </p>
        </div>

        <div className="prose prose-zinc max-w-none text-zinc-700 space-y-6 leading-relaxed font-sans text-sm sm:text-base">
          <p>
            At <strong>Knot</strong> (com.knot.app), your privacy is the cornerstone of our service. We believe vulnerability requires absolute digital safety. This Privacy Policy details how we handle and protect your personal information.
          </p>

          <h3 className="font-serif text-xl font-bold text-zinc-900">1. Information We Collect</h3>
          <p>
            We collect identity information necessary for high-trust dating: your phone number for authentication, biometric selfie data for liveness verification, profile photos, and voluntary dating prompt answers. We never sell your personal data to advertisers or third parties.
          </p>

          <h3 className="font-serif text-xl font-bold text-zinc-900">2. Real Proximity & Crossings Data</h3>
          <p>
            Knot calculates coarse proximity crossings when members visit shared cultural neighborhoods or cafes. We never track or display your live real-time GPS coordinates to other members.
          </p>

          <h3 className="font-serif text-xl font-bold text-zinc-900">3. Screenshot Shield & DRM</h3>
          <p>
            Knot incorporates native operating-system level protections to prevent unauthorized screen captures of your photos and direct chats.
          </p>

          <h3 className="font-serif text-xl font-bold text-zinc-900">4. Account Deletion</h3>
          <p>
            You retain complete sovereignty over your data. You can delete your Knot account at any time in Account Settings, which permanently purges your photos, chats, and telemetry from our production databases.
          </p>
        </div>

      </div>
    </div>
  );
}

