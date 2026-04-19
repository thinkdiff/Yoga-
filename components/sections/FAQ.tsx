import SectionHeader from '@/components/shared/SectionHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqs } from '@/lib/data/faqs';

export default function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Frequently asked questions"
          subtitle="Everything you might want to know before joining us in Rishikesh."
        />
        <div className="max-w-3xl mx-auto">
          <Accordion className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-sage/10">
                <AccordionTrigger className="text-left font-display text-lg md:text-xl text-sage font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
