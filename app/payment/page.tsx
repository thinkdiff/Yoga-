'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { courses } from '@/lib/data/courses';
import { CheckCircle, Copy, MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

function PaymentContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('course');
  const course = courses.find((c) => c.slug === slug);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [activeTab, setActiveTab] = useState<'upi' | 'paypal' | 'wire' | 'whatsapp'>('upi');

  const UPI_ID = 'nirvanayogaschool@upi'; // ← Replace with real UPI ID
  const PAYPAL_LINK = 'https://paypal.me/nirvanayoga'; // ← Replace with real PayPal.me link
  const WHATSAPP_NUMBER = '919876543210'; // ← Replace with real WhatsApp number
  const BANK_DETAILS = {
    name: 'Nirvana Yoga School India Pvt Ltd',
    bank: 'HDFC Bank',
    account: '50100XXXXXXXXXX',
    ifsc: 'HDFC0000XXX',
    swift: 'HDFCINBBXXX',
    branch: 'Rishikesh, Uttarakhand',
  };

  const depositAmount = course?.depositUsd || 250;
  const fullAmount = course?.price?.usd || 'N/A';
  const courseTitle = course?.title || 'Selected Course';

  const whatsappMsg = encodeURIComponent(
    `Hi! I'd like to book a spot for "${courseTitle}". Please guide me on the payment process.`
  );

  function copyUpi() {
    navigator.clipboard.writeText(UPI_ID);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2500);
  }

  const tabs = [
    { id: 'upi', label: '📱 UPI / QR', desc: 'India preferred' },
    { id: 'paypal', label: '💳 PayPal', desc: 'International' },
    { id: 'wire', label: '🏦 Wire / SWIFT', desc: 'Bank Transfer' },
    { id: 'whatsapp', label: '💬 WhatsApp', desc: 'Human support' },
  ] as const;

  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-terracotta font-semibold mb-2">Secure Enrolment</p>
          <h1 className="font-display text-4xl md:text-5xl text-sage font-bold mb-3">Choose Payment Method</h1>
          {course && (
            <div className="inline-flex flex-col items-center bg-white border border-sage/10 rounded-2xl px-6 py-4 mt-2 shadow-sm">
              <span className="text-sm text-muted-foreground">{courseTitle}</span>
              <div className="flex items-center gap-4 mt-1">
                <span className="text-2xl font-bold text-sage">${fullAmount} <span className="text-sm font-normal text-muted-foreground">full</span></span>
                <span className="text-lg font-bold text-terracotta">${depositAmount} <span className="text-sm font-normal text-muted-foreground">deposit to reserve</span></span>
              </div>
            </div>
          )}
          {!course && (
            <p className="text-muted-foreground mt-2">Choose how you would like to make your payment or deposit.</p>
          )}
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-3 rounded-xl border text-sm font-semibold transition-all flex flex-col items-center gap-0.5 ${
                activeTab === tab.id
                  ? 'bg-sage text-white border-sage shadow-md'
                  : 'bg-white border-sage/15 text-sage hover:border-sage/40'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] font-normal ${activeTab === tab.id ? 'text-white/70' : 'text-muted-foreground'}`}>{tab.desc}</span>
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="bg-white rounded-2xl border border-sage/10 shadow-sm p-8">

          {/* ── UPI ── */}
          {activeTab === 'upi' && (
            <div className="flex flex-col items-center gap-6">
              <h2 className="font-display text-2xl text-sage font-semibold text-center">Pay via UPI</h2>
              <p className="text-sm text-muted-foreground text-center max-w-sm">
                Scan the QR code with any UPI app (PhonePe, GPay, Paytm, BHIM) or copy the UPI ID below.
              </p>

              {/* QR placeholder — replace with a real UPI QR image */}
              <div className="w-48 h-48 bg-sage/5 border-2 border-dashed border-sage/20 rounded-2xl flex items-center justify-center text-center p-4">
                <div>
                  <p className="text-xs text-sage/50 font-medium">UPI QR Code</p>
                  <p className="text-[10px] text-muted-foreground mt-1">Add your QR image here</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-sage/5 px-5 py-3 rounded-full border border-sage/15 w-full max-w-xs justify-between">
                <span className="font-mono text-sm font-bold text-sage">{UPI_ID}</span>
                <button
                  onClick={copyUpi}
                  className="flex items-center gap-1.5 text-xs text-terracotta font-semibold hover:opacity-70 transition-opacity"
                >
                  {copiedUpi ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copiedUpi ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800 w-full">
                <p className="font-semibold mb-1">After paying:</p>
                <p>Send us the UTR / transaction screenshot on WhatsApp or email to confirm your seat.</p>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3 rounded-full flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Confirm via WhatsApp
              </a>
            </div>
          )}

          {/* ── PayPal ── */}
          {activeTab === 'paypal' && (
            <div className="flex flex-col items-center gap-6">
              <h2 className="font-display text-2xl text-sage font-semibold text-center">Pay via PayPal</h2>
              <p className="text-sm text-muted-foreground text-center max-w-sm">
                Pay your deposit or full amount securely via PayPal. Works with all international debit/credit cards.
              </p>

              <div className="bg-[#003087] text-white rounded-2xl px-8 py-6 flex flex-col items-center gap-3 w-full max-w-sm">
                <span className="text-3xl font-bold tracking-tight">PayPal</span>
                <span className="text-white/70 text-sm">{course ? `${courseTitle} — $${depositAmount} deposit` : 'Nirvana Yoga School'}</span>
                <a
                  href={PAYPAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 bg-[#ffc439] text-[#003087] font-bold px-8 py-3 rounded-full text-sm hover:brightness-110 transition-all"
                >
                  Pay with PayPal →
                </a>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                PayPal accepts Visa, Mastercard, Amex, and local payment methods in 190+ countries.<br />
                After payment, email your confirmation to <span className="font-bold text-sage">info@nirvanayogaschool.com</span>
              </p>
            </div>
          )}

          {/* ── Wire ── */}
          {activeTab === 'wire' && (
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-2xl text-sage font-semibold text-center">Bank / Wire Transfer</h2>
              <p className="text-sm text-muted-foreground text-center">
                For international students paying via SWIFT or domestic NEFT/RTGS transfers.
              </p>
              <div className="grid grid-cols-1 gap-2 mt-2">
                {Object.entries(BANK_DETAILS).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center bg-sage/5 rounded-xl px-4 py-3 border border-sage/10">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">{key}</span>
                    <span className="text-sm font-mono font-bold text-sage">{value}</span>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800">
                <p className="font-semibold mb-1">After transferring:</p>
                <p>Email the transfer receipt to <span className="font-bold">info@nirvanayogaschool.com</span> with your name and chosen course. We will confirm your seat within 24 hours.</p>
              </div>
            </div>
          )}

          {/* ── WhatsApp ── */}
          {activeTab === 'whatsapp' && (
            <div className="flex flex-col items-center gap-6">
              <h2 className="font-display text-2xl text-sage font-semibold text-center">Talk to Us Directly</h2>
              <p className="text-sm text-muted-foreground text-center max-w-sm">
                Prefer to speak with someone before committing? Our team is available on WhatsApp and phone 7 days a week.
              </p>
              <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl text-lg transition-colors"
                >
                  <MessageCircle className="w-6 h-6" /> WhatsApp Us
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="flex items-center justify-center gap-3 bg-sage hover:bg-sage/80 text-white font-bold py-4 rounded-2xl text-lg transition-colors"
                >
                  <Phone className="w-6 h-6" /> Call Us
                </a>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                We accept payment via UPI, PayPal, Wise, bank transfer, or cash at the ashram. We&apos;ll guide you through the most convenient option.
              </p>
            </div>
          )}
        </div>

        {/* Trust strip */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          {['100% Secure', 'Yoga Alliance Certified', 'Free Cancellation (14 days)', '24-hr Support'].map(t => (
            <span key={t} className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-sage" />{t}
            </span>
          ))}
        </div>

        <p className="text-center mt-6 text-sm">
          <Link href="/courses" className="text-terracotta hover:underline font-medium">← Back to Courses</Link>
        </p>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="pt-40 text-center text-sage">Loading payment options…</div>}>
      <PaymentContent />
    </Suspense>
  );
}
