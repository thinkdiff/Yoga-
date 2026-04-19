'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, Flower2 } from 'lucide-react';
import MegaMenu from './MegaMenu';

const navLinks = [
  { name: 'Courses', href: '/courses', isMega: true },
  { name: 'Workshops', href: '/workshops' },
  { name: 'Retreats', href: '/retreats' },
  { name: 'Teachers', href: '/teachers' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solid = isScrolled || !isHomepage;

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 ease-in-out',
        solid ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
      onMouseLeave={() => setIsMegaMenuOpen(false)}
    >
      <div className="container mx-auto px-6 h-[68px] flex items-center justify-between gap-6">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className={cn(
            'p-1.5 rounded-lg transition-all duration-300 group-hover:rotate-12',
            solid ? 'bg-terracotta/10 text-terracotta' : 'bg-white/20 text-white'
          )}>
            <Flower2 className="w-6 h-6" />
          </div>
          <div className="flex flex-col leading-none">
            <span className={cn(
              'font-display text-lg font-bold tracking-tight',
              solid ? 'text-sage' : 'text-white'
            )}>
              Nirvana Yoga
            </span>
            <span className={cn(
              'text-[9px] uppercase tracking-[0.18em] font-semibold',
              solid ? 'text-sage/50' : 'text-white/60'
            )}>
              School · Rishikesh
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative flex items-center"
              onMouseEnter={() => link.isMega ? setIsMegaMenuOpen(true) : setIsMegaMenuOpen(false)}
            >
              <Link
                href={link.href}
                className={cn(
                  'px-3.5 py-2 text-[11px] font-semibold tracking-[0.08em] uppercase flex items-center gap-1 rounded-md transition-all duration-200 relative',
                  pathname === link.href
                    ? solid ? 'text-terracotta' : 'text-gold'
                    : solid
                      ? 'text-sage hover:text-terracotta hover:bg-terracotta/5'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                )}
              >
                {link.name}
                {link.isMega && (
                  <ChevronDown className={cn(
                    'w-3.5 h-3.5 transition-transform duration-200',
                    isMegaMenuOpen && 'rotate-180'
                  )} />
                )}
              </Link>
            </div>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link
            href="/contact"
            className={cn(
              'px-5 py-2 text-[11px] font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-300 hover:scale-105 active:scale-95',
              solid
                ? 'bg-terracotta text-white hover:bg-sage shadow-md shadow-terracotta/25'
                : 'bg-white text-sage hover:bg-gold hover:text-white shadow-md'
            )}
          >
            Enrol Now
          </Link>
        </div>

        {/* ── Mobile Toggle ── */}
        <button
          className="lg:hidden z-50 relative p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className={cn('w-6 h-6', solid ? 'text-sage' : 'text-white')} />
          ) : (
            <Menu className={cn('w-6 h-6', solid ? 'text-sage' : 'text-white')} />
          )}
        </button>
      </div>

      {/* ── Mega Menu ── */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <div
            className="hidden lg:block absolute w-full"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <MegaMenu />
          </div>
        )}
      </AnimatePresence>

      {/* ── Mobile Overlay ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-sage z-40 lg:hidden flex flex-col pt-28 pb-12 px-8 overflow-y-auto"
          >
            <div className="flex flex-col gap-1 mb-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'font-display text-3xl font-bold py-3 border-b border-white/10 flex items-center justify-between',
                    pathname === link.href ? 'text-gold' : 'text-ivory'
                  )}
                >
                  {link.name}
                  <ChevronDown className="w-5 h-5 opacity-40" />
                </Link>
              ))}
            </div>
            <div className="mt-auto">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-white text-sage font-bold uppercase tracking-widest text-base py-4 rounded-full hover:bg-gold hover:text-white transition-colors"
              >
                Enrol Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
