import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://knot.app'),
  title: 'Knot — The Intentional Dating Experience',
  description:
    'Designed to be deleted. An exclusive, high-trust dating ecosystem crafted for genuine chemistry, curated discovery, and intentional modern romance.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Knot — The Intentional Dating Experience',
    description:
      'An exclusive, high-trust dating ecosystem crafted for genuine chemistry and intentional modern romance.',
    images: ['/logo_full.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FAF8F5] text-[#18181B] antialiased selection:bg-[#F5E6CA]">
        {children}
      </body>
    </html>
  );
}
