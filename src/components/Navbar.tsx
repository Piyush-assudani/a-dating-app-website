'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenDownload: () => void;
}

export default function Navbar({ onOpenDownload }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200/80 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex items-baseline">
            <span className="font-serif text-3xl font-bold tracking-tight text-zinc-900 group-hover:opacity-90 transition-opacity">
              knot
            </span>
            <span className="text-3xl font-black text-rose-600 leading-none">.</span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-[#F5E6CA]/60 text-[#8F6826] border border-[#C5A059]/30">
            <Sparkles className="w-2.5 h-2.5" /> Intentional
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#experience"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            The Experience
          </a>
          <a
            href="#features"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            Curated Chemistry
          </a>
          <a
            href="#prive"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
            Knot Privé
          </a>
          <a
            href="#stories"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            Real Matches
          </a>
          <a
            href="#safety"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors flex items-center gap-1"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
            Safety
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3.5">
          <button
            onClick={onOpenDownload}
            className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-semibold shadow-md hover:bg-zinc-800 transition-all duration-200 flex items-center gap-2 active:scale-95"
          >
            <span>Get Knot</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-zinc-700 hover:bg-zinc-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-zinc-200 px-6 py-6 shadow-xl space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 font-medium text-zinc-800">
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-50"
            >
              The Experience
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-50"
            >
              Curated Chemistry
            </a>
            <a
              href="#prive"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-50 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
              Knot Privé
            </a>
            <a
              href="#stories"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-50"
            >
              Real Matches
            </a>
            <a
              href="#safety"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-50 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-zinc-400" />
              Safety & Verification
            </a>
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full py-3 rounded-full bg-zinc-900 text-white text-sm font-semibold shadow-md flex items-center justify-center gap-2"
            >
              <span>Download Knot App</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

