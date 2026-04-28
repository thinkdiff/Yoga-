import { Metadata } from 'next';
import SectionHeader from '@/components/shared/SectionHeader';

export const metadata: Metadata = {
  title: 'Privacy Policy | House of Yogis Rishikesh',
  description: 'How House of Yogis Rishikesh collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeader title="Privacy Policy" alignment="left" decorative={false} />

        <div className="prose prose-sage max-w-none text-muted-foreground leading-relaxed flex flex-col gap-5">
          <p>
            House of Yogis Rishikesh (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. This policy explains what information we collect when you use our website and how we use it.
          </p>

          <h2 className="font-display text-2xl text-sage mt-4">Information we collect</h2>
          <p>
            We collect information you voluntarily provide through our contact forms (such as your name, email, phone number, and message) and basic analytics data about how you use our site (via cookies).
          </p>

          <h2 className="font-display text-2xl text-sage mt-4">How we use it</h2>
          <p>
            We use your information solely to respond to enquiries, share information about our programs, and improve the website. We never sell your personal data.
          </p>

          <h2 className="font-display text-2xl text-sage mt-4">Cookies</h2>
          <p>
            We use cookies to remember your preferences and to understand how visitors use the site. You can accept or reject non-essential cookies using the banner shown on your first visit.
          </p>

          <h2 className="font-display text-2xl text-sage mt-4">Contact us</h2>
          <p>
            For any privacy-related questions, please write to{' '}
            <a href="mailto:info@houseofyogis.com" className="text-terracotta hover:underline">
              info@houseofyogis.com
            </a>
            .
          </p>

          <p className="text-xs mt-8">This page is provided as general information and should be reviewed by your legal counsel before launch.</p>
        </div>
      </div>
    </div>
  );
}
