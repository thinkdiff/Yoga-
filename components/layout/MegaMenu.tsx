'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Flower2, 
  Sparkles, 
  Heart, 
  Zap, 
  Baby, 
  Wind, 
  ArrowRight,
  Compass,
  Award,
  Tent,
  Briefcase,
  User,
  Globe,
  BookOpen,
  Brain,
  Coffee,
  Star,
  Users,
  MessageCircle
} from 'lucide-react';

const megaMenuData = {
  styles: {
    title: 'Yoga Styles',
    icon: <Sparkles className="w-5 h-5 text-terracotta" />,
    items: [
      { name: 'Vinyasa Flow', href: '/courses/vinyasa', icon: <Zap className="w-4 h-4" /> },
      { name: 'Hatha Yoga', href: '/courses/hatha', icon: <Flower2 className="w-4 h-4" /> },
      { name: 'Restorative Yoga', href: '/courses/restorative', icon: <Heart className="w-4 h-4" /> },
      { name: 'Ashtanga Yoga', href: '/courses/ashtanga', icon: <Zap className="w-4 h-4" /> },
      { name: 'Prenatal Yoga', href: '/courses/prenatal', icon: <Baby className="w-4 h-4" /> },
      { name: 'Meditation & Pranayama', href: '/courses/meditation', icon: <Wind className="w-4 h-4" /> },
    ],
    footer: { name: 'View All Classes', href: '/courses' }
  },
  programs: {
    title: 'Special Programs',
    icon: <Compass className="w-5 h-5 text-sage" />,
    items: [
      { name: "Beginner's Journey", href: '/programs/beginners', icon: <Compass className="w-4 h-4" /> },
      { name: 'Advanced Practice', href: '/programs/advanced', icon: <Award className="w-4 h-4" /> },
      { name: 'Weekend Retreats', href: '/retreats', icon: <Tent className="w-4 h-4" /> },
      { name: 'Corporate Wellness', href: '/programs/corporate', icon: <Briefcase className="w-4 h-4" /> },
      { name: 'Private Sessions', href: '/programs/private', icon: <User className="w-4 h-4" /> },
      { name: 'Online Courses', href: '/online-courses', icon: <Globe className="w-4 h-4" /> },
    ]
  },
  resources: {
    title: 'Resources',
    icon: <BookOpen className="w-5 h-5 text-gold" />,
    items: [
      { name: 'Yoga Poses Library', href: '/resources/poses', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'Mindfulness Articles', href: '/blog', icon: <Brain className="w-4 h-4" /> },
      { name: 'Healthy Recipes', href: '/resources/recipes', icon: <Coffee className="w-4 h-4" /> },
      { name: 'Teacher Spotlights', href: '/teachers', icon: <Star className="w-4 h-4" /> },
      { name: 'Community Forum', href: '/community', icon: <Users className="w-4 h-4" /> },
      { name: 'FAQs', href: '/contact#faq', icon: <MessageCircle className="w-4 h-4" /> },
    ]
  }
};

export default function MegaMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-border py-12"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Yoga Styles */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 pb-2 border-b border-border/50">
            {megaMenuData.styles.icon}
            <h3 className="font-display text-xl font-bold text-sage">{megaMenuData.styles.title}</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {megaMenuData.styles.items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center gap-3 text-sage/70 hover:text-terracotta transition-all duration-200"
              >
                <span className="p-2 rounded-full bg-ivory group-hover:bg-terracotta/10 text-terracotta transition-colors">
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
          <Link
            href={megaMenuData.styles.footer.href}
            className="mt-4 flex items-center gap-2 text-terracotta font-semibold hover:gap-4 transition-all"
          >
            {megaMenuData.styles.footer.name} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Column 2: Special Programs */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 pb-2 border-b border-border/50">
            {megaMenuData.programs.icon}
            <h3 className="font-display text-xl font-bold text-sage">{megaMenuData.programs.title}</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {megaMenuData.programs.items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center gap-3 text-sage/70 hover:text-sage transition-all duration-200"
              >
                <span className="p-2 rounded-full bg-ivory group-hover:bg-sage/10 text-sage transition-colors">
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: Resources */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 pb-2 border-b border-border/50">
            {megaMenuData.resources.icon}
            <h3 className="font-display text-xl font-bold text-sage">{megaMenuData.resources.title}</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {megaMenuData.resources.items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center gap-3 text-sage/70 hover:text-gold transition-all duration-200"
              >
                <span className="p-2 rounded-full bg-ivory group-hover:bg-gold/10 text-gold transition-colors">
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer / Banner */}
      <div className="mt-12 bg-ivory/50 py-6 border-t border-border/30">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-white">
              <Flower2 className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-sage">Join our Teacher Training</p>
              <p className="text-sm text-sage/60">New batches starting every month in Rishikesh.</p>
            </div>
          </div>
          <button className="bg-terracotta text-white px-6 py-2 rounded-full font-medium hover:bg-sage transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
}
