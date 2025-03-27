
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SafetyCard from '@/components/safety/SafetyCard';
import { safetyTips } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
        {/* Header */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className={`inline-block py-1 px-3 rounded-full bg-secondary/30 text-secondary-foreground text-sm font-medium mb-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                Animal Safety
              </span>
              <h1 className={`text-3xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                Education for Better Animal Care
              </h1>
              <p className={`text-muted-foreground text-lg mb-8 transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
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
