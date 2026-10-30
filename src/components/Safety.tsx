import React from 'react';
import { ShieldCheck, Lock, EyeOff, UserCheck, AlertCircle } from 'lucide-react';

export default function Safety() {
  const points = [
    {
      icon: UserCheck,
      title: 'Mandatory Liveness Verification',
      desc: 'No duplicate profiles, bots, or stolen photos. Every member verifies via live 3D selfie and identity lookup.',
    },
    {
      icon: EyeOff,
      title: 'Screen Capture Blocker',
      desc: 'Proprietary DRM shields prevent screenshotting and screen-recording of chat conversations or private photo reels.',
    },
    {
      icon: Lock,
      title: 'End-to-End Cryptographic Security',
      desc: 'All direct messages, sparks, and private telemetry data are encrypted at rest and in transit.',
    },
    {
      icon: ShieldCheck,
      title: '24/7 Human Trust Team',
      desc: 'Reports are audited within 15 minutes by dedicated safety officers. Unsolicited misconduct leads to permanent device-level ban.',
    },
  ];

  return (
    <section id="safety" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E4E4E7] text-xs font-semibold text-zinc-700 uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Trust & Dignity
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900">
            A sanctuary of safety and privacy.
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            We built Knot on the premise that genuine vulnerability requires absolute digital safety.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="p-7 rounded-3xl bg-white border border-zinc-200/80 shadow-sm hover:shadow-luxury transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-zinc-900">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Safety Seal Notice */}
        <div className="rounded-3xl bg-white border border-zinc-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#DFBA73]" />
            </div>
            <div>
              <div className="font-serif font-bold text-zinc-900 text-lg">
                Strict 18+ & Zero-Tolerance Community Standards
              </div>
              <div className="text-xs sm:text-sm text-zinc-500">
                Child safety, harassment prevention, and respectful boundaries are strictly enforced without exception.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#faq"
              className="px-5 py-2.5 rounded-full border border-zinc-300 hover:border-zinc-900 text-xs font-semibold text-zinc-800 transition-colors"
            >
              Read Safety Guide
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

