import Link from 'next/link';
import { Flower2, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { courses } from '@/lib/data/courses';
import { contactInfo } from '@/lib/data/contact';
import PaymentMethods from '@/components/sections/PaymentMethods';

export default function Footer() {
  const waHref = `https://wa.me/${contactInfo.phoneDigits}?text=${encodeURIComponent(contactInfo.whatsappDefaultMessage)}`;
  const topCourses = courses.filter((c) => c.format === 'in-person').slice(0, 5);

  return (
    <footer className="bg-sage text-ivory/80 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Flower2 className="w-8 h-8 text-gold" />
              <span className="font-display text-2xl font-semibold text-white tracking-wide">
                Nirvana Yoga
              </span>
            </Link>
            <p className="mb-6 font-body text-sm leading-relaxed">
              A Sanctuary for the Soul in Rishikesh, India. Authentic Yoga Alliance USA Certified Teacher Training programs.
            </p>
            <div className="flex gap-4">
              <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gold transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href={contactInfo.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-gold transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display text-xl mb-6 font-medium">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link href="/courses" className="hover:text-gold transition-colors">All Courses</Link></li>
              <li><Link href="/online-courses" className="hover:text-gold transition-colors">Online Courses</Link></li>
              <li><Link href="/retreats" className="hover:text-gold transition-colors">Retreats</Link></li>
              <li><Link href="/venue" className="hover:text-gold transition-colors">Venue</Link></li>
              <li><Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-xl mb-6 font-medium">Top Courses</h4>
            <ul className="flex flex-col gap-3 text-sm">
              {topCourses.map((course) => (
                <li key={course.id}>
                  <Link href={`/courses/${course.slug}`} className="hover:text-gold transition-colors truncate block">
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-xl mb-6 font-medium">Contact Us</h4>
            <address className="not-italic text-sm flex flex-col gap-4">
              <p>
                {contactInfo.address.line1}<br />
                {contactInfo.address.line2}<br />
                {contactInfo.address.line3}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-gold transition-colors break-all">{contactInfo.email}</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href={`tel:${contactInfo.phoneDigits}`} className="hover:text-gold transition-colors">{contactInfo.phone}</a>
              </p>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-md hover:bg-[#128C7E] transition-colors w-max mt-2"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Us
              </a>
            </address>
          </div>
        </div>

        <div className="py-6 border-t border-white/10">
          <PaymentMethods variant="footer" />
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Nirvana Yoga School. All rights reserved.</p>
          <div className="flex bg-white/5 rounded-full px-4 py-1 gap-2 items-center">
            <span className="text-gold font-semibold">Yoga Alliance</span>
            <span className="text-white/40">|</span>
            <span>RYS 200, 300 & 500</span>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
