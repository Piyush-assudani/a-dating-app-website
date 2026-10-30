import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200/80 text-zinc-600 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-baseline group inline-block">
              <span className="font-serif text-3xl font-bold tracking-tight text-zinc-900 group-hover:opacity-90">
                knot
              </span>
              <span className="text-3xl font-black text-rose-600 leading-none">.</span>
            </Link>
            <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
              Designed to be deleted. An intentional dating ecosystem curated for individuals who value emotional depth, intellectual connection, and genuine chemistry.
            </p>
            <div className="text-xs text-zinc-400 font-medium">
              Android Package: <span className="font-mono text-zinc-600">com.knot.app</span>
            </div>
          </div>

          {/* Navigation Column 1 */}
          <div className="space-y-3 text-sm">
            <div className="font-serif font-bold text-zinc-900 text-sm tracking-wider uppercase">
              The Society
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#experience" className="hover:text-zinc-950 transition-colors">
                  The Experience
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-zinc-950 transition-colors">
                  Curated Discovery
                </a>
              </li>
              <li>
                <a href="#prive" className="hover:text-zinc-950 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  Knot Privé VIP
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-zinc-950 transition-colors">
                  Couples & Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2 */}
          <div className="space-y-3 text-sm">
            <div className="font-serif font-bold text-zinc-900 text-sm tracking-wider uppercase">
              Safety & Ethics
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#safety" className="hover:text-zinc-950 transition-colors">
                  Biometric Verification
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-zinc-950 transition-colors">
                  Screenshot Shield
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-zinc-950 transition-colors">
                  Child Safety & 18+
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-zinc-950 transition-colors">
                  Help Center & FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Legal & Standards */}
          <div className="space-y-3 text-sm">
            <div className="font-serif font-bold text-zinc-900 text-sm tracking-wider uppercase">
              Legal
            </div>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="hover:text-zinc-950 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-zinc-950 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/child-safety" className="hover:text-zinc-950 transition-colors">
                  Child Safety Policy
                </a>
              </li>
              <li>
                <a href="/community-guidelines" className="hover:text-zinc-950 transition-colors">
                  Community Standards
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} Knot Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>Crafted with intention & care</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </div>
        </div>

      </div>
    </footer>
  );
}

