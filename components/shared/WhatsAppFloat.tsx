'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { contactInfo } from '@/lib/data/contact';

export default function WhatsAppFloat() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? contactInfo.phoneDigits;
  const message = encodeURIComponent(contactInfo.whatsappDefaultMessage);
  const href = `https://wa.me/${number}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[55] group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" aria-hidden />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg group-hover:bg-[#128C7E] transition-colors">
        <FaWhatsapp className="w-7 h-7" />
      </span>
    </a>
  );
}
