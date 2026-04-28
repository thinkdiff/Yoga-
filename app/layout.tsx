import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/shared/CookieConsent';
import PromoPopup from '@/components/shared/PromoPopup';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';
import ElevenLabsAgent from '@/components/shared/ElevenLabsAgent';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'House of Yogis Rishikesh | Yoga Alliance Certified Teacher Training in India',
  description: 'Yoga Alliance certified 100, 200, 300 & 500 hour Hatha, Ashtanga Vinyasa & Kundalini teacher training courses in Rishikesh, India. A sanctuary for the soul on the banks of the Holy Ganga.',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${quicksand.className} antialiased font-body`}>
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
