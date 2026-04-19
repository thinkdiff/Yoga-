'use client';

import SectionHeader from '@/components/shared/SectionHeader';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const contactSchema = z.object({
  fullName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  phone: z.string().min(6, { message: 'Please enter a valid phone number.' }),
  country: z.string().min(2, { message: 'Please enter your country.' }),
  course: z.string().min(1, { message: 'Please select a course.' }),
  startDate: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  source: z.string().optional(),
});

export default function ContactPage() {
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      country: '',
      course: '',
      startDate: '',
      message: '',
      source: '',
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values);
    toast.success('Message Sent Successfully', {
      description: "We've received your inquiry and will get back to you within 24 hours.",
    });
    reset();
  }

  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader title="Contact Us" subtitle="We're here to help you begin your journey." />

        <div className="grid lg:grid-cols-2 gap-12 mt-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border">
          
          {/* Form Side */}
          <div>
            <h3 className="font-display text-3xl text-sage mb-6">Send an Inquiry</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" placeholder="Jane Doe" {...register('fullName')} />
                  {errors.fullName && <p className="text-sm text-destructive">{errors.fullName.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="jane@example.com" {...register('email')} />
                  {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+1 234 567 890" {...register('phone')} />
                  {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" placeholder="Your Country" {...register('country')} />
                  {errors.country && <p className="text-sm text-destructive">{errors.country.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="course">Course Interested In *</Label>
                <Controller
                  name="course"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger><SelectValue placeholder="Select a course" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="200-hatha">200 Hr Hatha Ashtanga</SelectItem>
                        <SelectItem value="200-ayurveda">200 Hr Ayurveda</SelectItem>
                        <SelectItem value="300-advanced">300 Hr Advanced</SelectItem>
                        <SelectItem value="retreat">Yoga Retreat</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.course && <p className="text-sm text-destructive">{errors.course.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" {...register('message')} />
                {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
              </div>

              <Button type="submit" className="w-full bg-terracotta hover:bg-gold text-white h-12">
                Submit Inquiry
              </Button>
            </form>
          </div>

          {/* Info Side */}
          <div className="bg-sage text-white p-8 rounded-xl h-full flex flex-col">
            <h3 className="font-display text-3xl mb-8">Get in Touch</h3>
            
            <div className="space-y-6 flex-grow">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-gold mr-4 shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg font-display mb-1">Our Location</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Tapovan, Badrinath Road<br />
                    Rishikesh, Uttarakhand<br />
                    India - 249192
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-gold mr-4 shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg font-display mb-1">Phone / WhatsApp</h4>
                  <p className="text-white/80 text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-gold mr-4 shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg font-display mb-1">Email</h4>
                  <p className="text-white/80 text-sm">namaste@nirvanayoga.edu</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg overflow-hidden h-64 relative border border-white/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13813.120718507858!2d78.3170701149468!3d30.129035651586526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909160d5bfa78f7%3A0xc6ad5021aa20165c!2sTapovan%2C%20Rishikesh%2C%20Uttarakhand%20249192!5e0!3m2!1sen!2sin!4v1714553258848!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>

            <Button className="mt-6 w-full bg-[#25D366] hover:bg-[#128C7E] text-white" asChild>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-4 h-4 mr-2" /> Chat on WhatsApp
              </a>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
