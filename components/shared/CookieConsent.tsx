'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cookie, X } from 'lucide-react';

const STORAGE_KEY = 'nirvana.cookieConsent';

type ConsentState = 'accepted' | 'rejected' | null;

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = window.localStorage.getItem(STORAGE_KEY) as ConsentState;
    setConsent(stored ?? null);
  }, []);

  const save = (value: 'accepted' | 'rejected') => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  };

  if (!mounted || consent) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 120, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[60]"
        role="dialog"
        aria-live="polite"
        aria-label="Cookie consent"
      >
        <div className="bg-ivory border border-sage/10 shadow-xl rounded-2xl p-5 md:p-6">
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-10 h-10 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center">
              <Cookie className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg text-sage font-medium mb-1">We value your privacy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalised content, and analyse traffic.{' '}
                <Link href="/privacy" className="text-terracotta hover:underline">
                  Learn more
                </Link>
                .
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Button
                  size="sm"
                  className="bg-sage hover:bg-sage/90 text-ivory"
                  onClick={() => save('accepted')}
                >
                  Accept All
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-sage/30 text-sage hover:bg-sage/5"
                  onClick={() => save('rejected')}
                >
                  Reject Non-Essential
                </Button>
              </div>
            </div>
            <button
              aria-label="Dismiss"
              onClick={() => save('rejected')}
              className="text-muted-foreground hover:text-sage transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
