
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SafetyCard from '@/components/safety/SafetyCard';
import { safetyTips } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight, Book } from 'lucide-react';

export default function Safety() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Animal Safety & Education - Paws Project';
    window.scrollTo(0, 0);
    
    // Trigger animations after a small delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header with background image */}
        <section className="py-12 md:py-20 relative">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1507682520764-93440a60e9b5?q=80&w=2070&auto=format&fit=crop" 
              alt="Animal safety background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60 dark:from-black/90 dark:via-black/80 dark:to-black/70"></div>
          </div>
          
          <div className="container px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className={`inline-block py-1 px-3 rounded-full bg-secondary/30 text-white text-sm font-medium mb-6 transition-all duration-700 ease-out backdrop-blur-sm ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                Animal Safety
              </span>
              <h1 className={`text-3xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ease-out text-white ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                Education for Better Animal Care
              </h1>
              <p className={`text-white/90 text-lg mb-8 transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                Learn essential tips and guidelines for animal care, rescue, and protection. 
                Equipped with knowledge, you can make a meaningful difference in animals' lives.
              </p>
            </div>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="py-16">
          <div className="container px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyTips.map((tip, index) => (
                <SafetyCard key={tip.id} tip={tip} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Animal Protection Laws Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary dark:text-secondary text-sm font-medium mb-4">
                  Legal Protection
                </span>
                <h2 className="text-3xl font-bold mb-4">Animal Protection Laws</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Understanding animal protection legislation is crucial for effective advocacy and enforcement. 
                  Learn about the legal framework that safeguards animal welfare in India.
                </p>
              </div>
              
              <div className="glass-card p-8 md:p-12 rounded-xl">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Know Your Rights & Responsibilities</h3>
                    <p className="text-muted-foreground">
                      Explore comprehensive information about animal protection laws, penalties for violations, and how to report cases effectively.
                    </p>
                  </div>
                  <div className="hidden md:block bg-primary/10 rounded-full p-6">
                    <Book size={32} className="text-primary" />
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <div className="bg-primary/10 rounded-full p-2 h-fit">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Prevention of Cruelty to Animals Act</h4>
                      <p className="text-sm text-muted-foreground">The fundamental law that addresses animal cruelty in India</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 rounded-full p-2 h-fit">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Wildlife Protection Act</h4>
                      <p className="text-sm text-muted-foreground">Protects wildlife and endangered species across the country</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 rounded-full p-2 h-fit">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Animal Rules & Regulations</h4>
                      <p className="text-sm text-muted-foreground">Guidelines for the maintenance and transportation of animals</p>
                    </div>
                  </li>
                </ul>
                
                <div className="flex justify-center">
                  <Button
                    size="lg"
                    className="rounded-full"
                    onClick={() => navigate('/animal-protection-laws')}
                  >
                    Explore Animal Protection Laws <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="py-16 bg-muted/50">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Now that you're equipped with knowledge about animal safety, take the next step 
                  by volunteering, reporting cruelty, or sharing your own rescue stories.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="rounded-full bg-primary hover:bg-primary/90"
                    onClick={() => navigate('/report')}
                  >
                    Report Animal Cruelty
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline" 
                    className="rounded-full"
                    onClick={() => navigate('/volunteer')}
                  >
                    Volunteer With Us <ArrowRight size={16} className="ml-2" />
                  </Button>
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
