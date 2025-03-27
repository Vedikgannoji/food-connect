
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactInfo from '@/components/contact/ContactInfo';
import { contactInfoList, faqs } from '@/lib/data';
import { Phone, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        {/* Header */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className={`inline-block py-1 px-3 rounded-full bg-secondary/30 text-secondary-foreground text-sm font-medium mb-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <Phone size={14} className="inline mr-1" /> Contact Us
              </span>
              <h1 className={`text-3xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                Contact & Resources
              </h1>
              <p className={`text-muted-foreground text-lg mb-8 transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                Find local animal shelters, helplines, and other resources to assist with 
                animal welfare issues. Help is always just a call away.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-12">
          <div className="container px-6">
            <h2 className="text-2xl font-bold text-center mb-10">Shelters & Helplines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactInfoList.map((contact, index) => (
                <ContactInfo key={contact.id} contact={contact} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 bg-muted/50">
          <div className="container px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-10">
                <MessageSquare className="text-primary mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.id} className="glass-card overflow-hidden">
                    <Button
                      variant="ghost"
                      className="w-full flex items-center justify-between p-4 text-left"
                      onClick={() => toggleFAQ(faq.id)}
                    >
                      <span className="font-medium text-lg">{faq.question}</span>
                      {openFAQ === faq.id ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </Button>
                    <div
                      className={`px-4 pb-4 transition-all duration-300 ease-in-out ${
                        openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-10">Find Us</h2>
              <div className="rounded-xl overflow-hidden h-[400px] glass-card p-4">
                <div className="w-full h-full relative rounded-lg overflow-hidden">
                  <iframe 
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130653093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1625145894618!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
