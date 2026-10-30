'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Features from '@/components/Features';
import PriveTier from '@/components/PriveTier';
import Stories from '@/components/Stories';
import Safety from '@/components/Safety';
import Faq from '@/components/Faq';
import DownloadCta from '@/components/DownloadCta';
import Footer from '@/components/Footer';
import DownloadModal from '@/components/DownloadModal';

export default function HomePage() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#18181B] selection:bg-[#F5E6CA] overflow-x-hidden">
      <Navbar onOpenDownload={() => setDownloadModalOpen(true)} />
      <Hero onOpenDownload={() => setDownloadModalOpen(true)} />
      <Philosophy />
      <Features />
      <PriveTier onOpenDownload={() => setDownloadModalOpen(true)} />
      <Stories />
      <Safety />
      <Faq />
      <DownloadCta onOpenDownload={() => setDownloadModalOpen(true)} />
      <Footer />
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </main>
  );
}

