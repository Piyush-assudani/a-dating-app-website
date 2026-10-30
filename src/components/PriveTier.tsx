import React from 'react';
import { Sparkles, Crown, Eye, Globe2, Shield, ArrowUpRight, Flame } from 'lucide-react';

interface PriveTierProps {
  onOpenDownload: () => void;
}

export default function PriveTier({ onOpenDownload }: PriveTierProps) {
  const perks = [
    {
      icon: Crown,
      title: 'Priority Discover Placement',
      desc: 'Be the first profile seen by top-tier intentional singles every day.',
    },
    {
      icon: Eye,
      title: 'Profile Telemetry & Admirers',
      desc: 'See exactly who sparked on your profile and view instant chemistry score breakdowns.',
    },
    {
      icon: Globe2,
      title: 'Global Travel Passport',
      desc: 'Cross paths with members in London, Dubai, New York, and Singapore before your flight takes off.',
    },
    {
      icon: Shield,
      title: 'Bespoke Ghost Mode',
      desc: 'Complete invisibility from contacts and public search. Visible strictly to profiles you choose.',
    },
  ];

  return (
    <section id="prive" className="py-24 bg-[#141416] text-white relative overflow-hidden">
      {/* Ambient Gold Nebula */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#C5A059]/15 via-rose-500/10 to-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Tier Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-xs font-semibold text-[#DFBA73] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Society Membership
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Knot Privé{' '}
            <span className="italic font-normal font-serif text-[#C5A059]">
              Black Edition
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            An elevated tier for leaders, creatives, founders, and visionaries who demand utmost discretion, priority access, and bespoke curation.
          </p>
        </div>

        {/* Privé Showcase Card */}
        <div className="rounded-[36px] bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-[#C5A059]/30 p-8 sm:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Perks List */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-2">
                <div className="text-xs uppercase font-mono tracking-widest text-[#C5A059]">
                  Exclusive Tier
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Designed for those who value time and privacy.
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {perks.map((perk, i) => {
                  const Icon = perk.icon;
                  return (
                    <div key={i} className="space-y-2.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#C5A059]/30 transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#DFBA73]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif font-bold text-zinc-100 text-base">
                        {perk.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {perk.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenDownload}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-zinc-950 font-bold text-sm shadow-glow hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
                >
                  <span>Apply for Privé Membership</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <div className="text-xs text-zinc-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span>Strict acceptance rate • Verified identity</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Privé Black Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[340px] aspect-[1.58/1] rounded-3xl p-7 relative overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-900 to-black border border-[#C5A059]/40 shadow-2xl flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300">
                {/* Gold Foil Accent Line */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#C5A059]/20 blur-3xl -z-0" />
                
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-baseline">
                    <span className="font-serif text-2xl font-bold tracking-tight text-white">
                      knot
                    </span>
                    <span className="text-2xl font-black text-rose-500 leading-none">.</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#C5A059]/20 text-[#DFBA73] border border-[#C5A059]/40">
                    PRIVÉ VIP
                  </span>
                </div>

                <div className="space-y-1 z-10 my-4">
                  <div className="text-[11px] font-mono tracking-widest text-[#C5A059]">
                    MEMBER PASS
                  </div>
                  <div className="text-lg font-serif font-bold text-zinc-200">
                    KNOT PRIVÉ SOCIETY
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono z-10 border-t border-zinc-800 pt-3">
                  <span>EXP: NO EXPIRATION</span>
                  <span className="text-[#DFBA73] font-bold">100% VERIFIED</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

