
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Animal Education',
    description: 'Learn about proper animal care, behavior, and rights to become a more responsible pet owner and animal advocate.',
    icon: '📚',
    link: '/safety'
  },
  {
    id: 2,
    title: 'Report Cruelty',
    description: 'See something concerning? Report animal cruelty incidents through our simple, confidential reporting system.',
    icon: '🚨',
    link: '/report'
  },
  {
    id: 3,
    title: 'Volunteer Program',
    description: 'Join our network of dedicated volunteers and make a tangible difference in animals\' lives in your community.',
    icon: '✋',
    link: '/volunteer'
  },
  {
    id: 4,
    title: 'Rescue Stories',
    description: 'Read inspiring stories of rescued animals and share your own experiences with the community.',
    icon: '📖',
    link: '/stories'
  }
];

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
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
    <section ref={sectionRef} className="py-20 bg-muted/50">
      <div className="container px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`inline-block py-1 px-3 rounded-full bg-secondary/30 text-secondary-foreground text-sm font-medium mb-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            What We Do
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 delay-100 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            Making a Difference for Animals
          </h2>
          <p className={`text-muted-foreground transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            Through education, advocacy, and direct action, we work to improve the lives of 
            animals in our community and beyond. Explore our key initiatives below.
          </p>
        </div>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedCard key={feature.id} delay={index * 150}>
              <div className="p-6 h-full flex flex-col">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{feature.description}</p>
                <Button 
                  variant="ghost" 
                  className="self-start p-0 hover:bg-transparent hover:text-primary"
                  onClick={() => navigate(feature.link)}
                >
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
