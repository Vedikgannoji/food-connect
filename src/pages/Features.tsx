
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, Users, BarChart3, Bell, Shield } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="h-8 w-8 text-paws-green" />,
    title: "Real-time Food Mapping",
    description: "See available food donations on an interactive map with pickup locations and distances."
  },
  {
    icon: <Clock className="h-8 w-8 text-paws-green" />,
    title: "Instant Matching",
    description: "Our smart algorithm instantly connects food donors with nearby NGOs based on location and capacity."
  },
  {
    icon: <Users className="h-8 w-8 text-paws-green" />,
    title: "Community Network",
    description: "Join a growing network of restaurants, households, and NGOs working together to reduce food waste."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-paws-green" />,
    title: "Impact Analytics",
    description: "Track your contributions with detailed metrics on meals saved, waste reduced, and lives impacted."
  },
  {
    icon: <Bell className="h-8 w-8 text-paws-green" />,
    title: "Smart Notifications",
    description: "Get notified about food donations near you and time-sensitive pickup opportunities."
  },
  {
    icon: <Shield className="h-8 w-8 text-paws-green" />,
    title: "Quality Assurance",
    description: "Built-in safety checks and guidelines ensure all food donations meet quality standards."
  }
];

export default function Features() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Features - Food Connect';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Powerful Features for <span className="text-paws-green">Food Rescue</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Discover how Food Connect makes it easy to donate surplus food and connect with those who need it most.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-paws-green transition-colors duration-300">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop" 
              alt="Volunteers working together" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="container px-6 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Make a Difference?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of donors and NGOs already making an impact through Food Connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/join-donor')}
                className="hover:scale-105 transition-all duration-300 bg-paws-green hover:bg-paws-green/90"
              >
                Become a Donor
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => navigate('/join-ngo')}
                className="border-white text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
              >
                Join as NGO
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
