import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/shared/CookieConsent';
import PromoPopup from '@/components/shared/PromoPopup';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';
import ElevenLabsAgent from '@/components/shared/ElevenLabsAgent';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nirvana Yoga School | Yoga Alliance Certified',
  description: 'A Sanctuary for the Soul in Rishikesh, India. Yoga Alliance Certified Teacher Training.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable} ${playfair.variable} antialiased font-body`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
        <CookieConsent />
        <PromoPopup />
        <WhatsAppFloat />
        <ElevenLabsAgent />
      </body>
    </html>
  );
}
