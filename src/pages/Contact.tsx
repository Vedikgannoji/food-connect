
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactInfo from '@/components/contact/ContactInfo';
import { contactInfoList, faqs } from '@/lib/data';
import { Phone, MessageSquare, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Contact & Resources - Paws Project';
    window.scrollTo(0, 0);
    
    // Trigger animations after a small delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleFAQ = (id: string) => {
    if (openFAQ === id) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(id);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header with background image */}
        <section className="py-12 md:py-20 relative">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=2428&auto=format&fit=crop" 
              alt="Pet care contact" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/70 dark:from-black/90 dark:via-black/80 dark:to-black/80"></div>
          </div>
          
          <div className="container px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className={`inline-block py-1 px-3 rounded-full bg-paws-green/40 text-white text-sm font-medium mb-6 transition-all duration-700 ease-out backdrop-blur-sm ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <Phone size={14} className="inline mr-1" /> Contact Us
              </span>
              <h1 className={`text-3xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ease-out text-white ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                Contact & Resources
              </h1>
              <p className={`text-white/90 text-lg mb-8 transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                Find animal shelters, helplines, and resources in Hyderabad to assist with 
                animal welfare issues. Help is always just a call away.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-12">
          <div className="container px-6">
            <h2 className="text-2xl font-bold text-center mb-10">Shelters & Helplines in Hyderabad</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactInfoList.map((contact, index) => (
                <ContactInfo key={contact.id} contact={contact} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 bg-muted/30">
          <div className="container px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-10">
                <MessageSquare className="text-paws-green mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="glass-card overflow-hidden border-none">
                    <AccordionTrigger className="px-4 py-3 font-medium text-lg hover:no-underline hover:text-paws-green">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-10">Find Us in Hyderabad</h2>
              <div className="rounded-xl overflow-hidden h-[400px] glass-card p-4">
                <div className="w-full h-full relative rounded-lg overflow-hidden">
                  <iframe 
                    title="Hyderabad Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.32396256838!2d78.24323162466424!3d17.412281196554146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1593593390822!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline" className="group">
                  <span>View Larger Map</span>
                  <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
