
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import VolunteerForm from '@/components/volunteer/VolunteerForm';
import { Heart } from 'lucide-react';

export default function Volunteer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = 'Volunteer & Get Involved - Paws Project';
    window.scrollTo(0, 0);
    
    // Trigger animations after a small delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const volunteerBenefits = [
    {
      title: "Make a Direct Impact",
      description: "Your time and skills directly help animals in need, from rescue operations to rehabilitation."
    },
    {
      title: "Build Your Skills",
      description: "Gain valuable experience in animal care, communication, event planning, and more."
    },
    {
      title: "Join a Community",
      description: "Connect with fellow animal lovers who share your passion for making a difference."
    },
    {
      title: "Flexible Commitment",
      description: "Volunteer as little as a few hours monthly or as much as several days weekly."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header with background image */}
        <section className="py-12 md:py-20 relative">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1626553683558-dd8051d88e02?q=80&w=2069&auto=format&fit=crop" 
              alt="Volunteers helping animals" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 dark:from-black/70 dark:to-black/50"></div>
          </div>
          
          <div className="container px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className={`inline-block py-1 px-3 rounded-full bg-secondary/30 text-white text-sm font-medium mb-6 transition-all duration-700 ease-out backdrop-blur-sm ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <Heart size={14} className="inline mr-1" /> Get Involved
              </span>
              <h1 className={`text-3xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ease-out text-white ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                Volunteer With Us
              </h1>
              <p className={`text-white/90 text-lg mb-8 transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                Your time and skills can make a world of difference for animals in need.
                Join our network of dedicated volunteers and help create a safer world for all creatures.
              </p>
            </div>
          </div>
        </section>

        {/* Volunteer Benefits */}
        <section className="py-12 bg-muted/50">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Why Volunteer With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {volunteerBenefits.map((benefit, index) => (
                  <div key={index} className="glass-card p-6">
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Form */}
        <section className="py-12">
          <div className="container px-6">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Sign Up to Volunteer</h2>
              <VolunteerForm />
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-12 bg-muted/30">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Support Through Donations</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Can't volunteer but still want to help? Your financial support allows us to rescue more animals,
                provide necessary medical care, and expand our educational programs.
              </p>
              <div className="glass-card p-8 mb-8">
                <h3 className="text-xl font-semibold mb-4">Partner Organizations</h3>
                <p className="text-muted-foreground mb-6">
                  We work with the following trusted animal welfare organizations. 
                  Your donations to these groups directly support animal rescue efforts.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-background/50 rounded-lg">
                    <h4 className="font-medium">ASPCA</h4>
                    <a href="https://www.aspca.org" target="_blank" rel="noopener noreferrer" className="text-primary text-sm">Visit Website</a>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg">
                    <h4 className="font-medium">Best Friends Animal Society</h4>
                    <a href="https://bestfriends.org" target="_blank" rel="noopener noreferrer" className="text-primary text-sm">Visit Website</a>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg">
                    <h4 className="font-medium">Humane Society</h4>
                    <a href="https://www.humanesociety.org" target="_blank" rel="noopener noreferrer" className="text-primary text-sm">Visit Website</a>
                  </div>
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
