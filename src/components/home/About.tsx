
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'}`}>
            <span className="inline-block py-1 px-3 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-6">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">We're dedicated to animal welfare and safety</h2>
            <p className="text-muted-foreground mb-6">
              The Paws Project was founded on a simple belief: every animal deserves care, protection, and respect. 
              Our organization works to prevent cruelty, provide education, and promote the welfare of animals through 
              community engagement and direct action.
            </p>
            <p className="text-muted-foreground mb-8">
              We envision a world where animals are free from abuse, neglect, and suffering. Through our programs 
              and with help from volunteers like you, we're making that vision a reality—one animal at a time.
            </p>
            <Button 
              className="rounded-full bg-primary hover:bg-primary/90"
              onClick={() => navigate('/volunteer')}
            >
              Join Our Mission <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[50px]'}`}>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e" 
                alt="Dog being rescued" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-secondary/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute bottom-[-30px] left-[-30px] w-60 h-60 bg-primary/20 rounded-full blur-3xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
