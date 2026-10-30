'use client';

import React from 'react';
import { X, Apple, Play, Download, Sparkles, QrCode } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white p-7 sm:p-9 shadow-2xl border border-zinc-200/90 text-zinc-900 space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 pt-2">
          <div className="flex items-baseline justify-center">
            <span className="font-serif text-3xl font-bold tracking-tight text-zinc-900">
              knot
            </span>
            <span className="text-3xl font-black text-rose-600 leading-none">.</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-zinc-900">
            Get the Knot Mobile App
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-xs mx-auto">
            Scan with your phone camera or select your platform below to begin your curated journey.
          </p>
        </div>

        {/* QR Code Simulation Area */}
        <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-zinc-200/80 flex flex-col items-center justify-center space-y-3">
          <div className="w-36 h-36 rounded-2xl bg-white p-3 border border-zinc-300 shadow-sm flex items-center justify-center">
            {/* SVG Stylized QR code */}
            <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-900 fill-current">
              <path d="M0 0h30v30H0zm6 6v18h18V6zm4 4h10v10H10zM70 0h30v30H70zm6 6v18h18V6zm4 4h10v10H80zM0 70h30v30H0zm6 6v18h18V76zm4 4h10v10H10zM40 10h10v10H40zm10 10h10v10H50zm-10 10h10v10H40zm30 40h10v10H70zm10 10h10v10H80zm10-10h10v10H90zm-50 0h10v10H40zm10 10h10v10H50zm10-10h10v10H60zm0 20h10v10H60zm-20 0h10v10H40z" />
            </svg>
          </div>
          <div className="text-[11px] font-semibold text-zinc-600 flex items-center gap-1.5">
            <QrCode className="w-3.5 h-3.5 text-[#C5A059]" /> Scan to install on iOS or Android
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <a
            href="https://play.google.com/store/apps/details?id=com.knot.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-5 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm shadow-md flex items-center justify-between transition-colors"
          >
            <div className="flex items-center gap-3">
              <Play className="w-4 h-4 fill-white" />
              <span>Google Play Store (Android)</span>
            </div>
            <span className="text-xs text-zinc-400 font-mono">com.knot.app</span>
          </a>

          <a
            href="#ios"
            onClick={(e) => {
              e.preventDefault();
              alert('iOS App Store release is currently in closed Privé Society rollout. Enter your phone number in the app or scan the QR code to request instant access.');
            }}
            className="w-full py-3.5 px-5 rounded-2xl bg-[#FAF8F5] hover:bg-zinc-100 text-zinc-900 font-semibold text-sm border border-zinc-200/90 flex items-center justify-between transition-colors"
          >
            <div className="flex items-center gap-3">
              <Apple className="w-5 h-5 fill-zinc-900" />
              <span>Apple App Store (iOS)</span>
            </div>
            <span className="text-xs text-[#8F6826] font-semibold">Privé Rollout</span>
          </a>
        </div>

        {/* Footer note */}
        <div className="text-center text-[11px] text-zinc-400">
          Package Name: <span className="font-mono text-zinc-600 font-medium">com.knot.app</span> • 100% Free to apply
        </div>
      </div>
    </div>
  );
}

