'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import { courses } from '@/lib/data/courses';

const yttCourses = courses.filter((c) =>
  ['200 Hour', '300 Hour', '500 Hour'].includes(c.category) ||
  c.slug.startsWith('100hr-')
);
const shortCourses = courses.filter(
  (c) => c.category === 'Specialty' && !c.slug.startsWith('100hr-')
);

const navLinks = [
  { name: 'Courses', href: '/courses', dropdown: true },
  { name: 'Teachers', href: '/teachers' },
  { name: 'Retreats', href: '/retreats' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
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
      onMouseLeave={() => setCoursesOpen(false)}
    >
      <div className="container mx-auto px-6 h-[68px] flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/">
          <Logo variant={solid ? 'dark' : 'light'} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative flex items-center"
              onMouseEnter={() => setCoursesOpen(!!link.dropdown)}
            >
              <Link
                href={link.href}
                className={cn(
                  'px-3.5 py-2 text-[11px] font-semibold tracking-[0.08em] uppercase flex items-center gap-1 rounded-md transition-all duration-200',
                  pathname === link.href
                    ? solid ? 'text-terracotta' : 'text-gold'
                    : solid
                      ? 'text-sage hover:text-terracotta hover:bg-terracotta/5'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                )}
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown className={cn(
                    'w-3.5 h-3.5 transition-transform duration-200',
                    coursesOpen && 'rotate-180'
                  )} />
                )}
              </Link>
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link
            href="/contact#calendly"
            className={cn(
              'px-5 py-2 text-[11px] font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-300 hover:scale-105 active:scale-95',
              solid
                ? 'bg-terracotta text-white hover:bg-sage shadow-md shadow-terracotta/25'
                : 'bg-white text-sage hover:bg-gold hover:text-white shadow-md'
            )}
          >
            Enquiry Now
          </Link>
        </div>

        {/* Mobile Toggle */}
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

      {/* Courses Dropdown (Desktop) */}
      <AnimatePresence>
        {coursesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="hidden lg:block absolute left-0 right-0 top-[68px]"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <div className="container mx-auto px-6">
              <div className="bg-white rounded-2xl shadow-xl border border-sage/10 overflow-hidden grid md:grid-cols-2">
                <div className="p-7 border-b md:border-b-0 md:border-r border-sage/10">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-terracotta mb-4">
                    Yoga Teacher Training
                  </h3>
                  <ul className="space-y-1.5">
                    {yttCourses.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/courses/${c.slug}`}
                          onClick={() => setCoursesOpen(false)}
                          className="block px-3 py-2 rounded-lg text-sm text-sage hover:bg-terracotta/5 hover:text-terracotta transition-colors"
                        >
                          {c.title.replace(', Rishikesh', '')}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-7">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-terracotta mb-4">
                    Short & Specialty Courses
                  </h3>
                  <ul className="space-y-1.5">
                    {shortCourses.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/courses/${c.slug}`}
                          onClick={() => setCoursesOpen(false)}
                          className="block px-3 py-2 rounded-lg text-sm text-sage hover:bg-terracotta/5 hover:text-terracotta transition-colors"
                        >
                          {c.title.replace(', Rishikesh', '')}
                        </Link>
                      </li>
                    ))}
                    <li className="pt-3 mt-3 border-t border-sage/10">
                      <Link
                        href="/courses"
                        onClick={() => setCoursesOpen(false)}
                        className="block px-3 py-2 rounded-lg text-sm font-semibold text-terracotta hover:bg-terracotta/5 transition-colors"
                      >
                        View all courses →
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
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
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name} className="border-b border-white/10">
                    <button
                      onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                      className="w-full font-display text-3xl font-bold py-3 flex items-center justify-between text-ivory"
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        'w-5 h-5 transition-transform',
                        mobileCoursesOpen && 'rotate-180'
                      )} />
                    </button>
                    <AnimatePresence>
                      {mobileCoursesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <ul className="pb-4 pl-1 space-y-1">
                            <li className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold pt-2 pb-1">
                              Yoga Teacher Training
                            </li>
                            {yttCourses.map((c) => (
                              <li key={c.slug}>
                                <Link
                                  href={`/courses/${c.slug}`}
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setMobileCoursesOpen(false);
                                  }}
                                  className="block py-2 text-sm text-ivory/80 hover:text-gold"
                                >
                                  {c.title.replace(', Rishikesh', '')}
                                </Link>
                              </li>
                            ))}
                            <li className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold pt-3 pb-1">
                              Short & Specialty
                            </li>
                            {shortCourses.map((c) => (
                              <li key={c.slug}>
                                <Link
                                  href={`/courses/${c.slug}`}
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setMobileCoursesOpen(false);
                                  }}
                                  className="block py-2 text-sm text-ivory/80 hover:text-gold"
                                >
                                  {c.title.replace(', Rishikesh', '')}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
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
                  </Link>
                )
              )}
            </div>
            <div className="mt-auto">
              <Link
                href="/contact#calendly"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-white text-sage font-bold uppercase tracking-widest text-base py-4 rounded-full hover:bg-gold hover:text-white transition-colors"
              >
                Enquiry Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
