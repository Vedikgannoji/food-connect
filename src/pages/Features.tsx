
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin, Shield, Users, Zap, Heart, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: Zap,
    title: "Instant Matching",
    description: "Our smart algorithm instantly connects food donors with nearby NGOs based on location, capacity, and food type preferences.",
    color: "text-blue-600"
  },
  {
    icon: MapPin,
    title: "Real-time Tracking",
    description: "Track food donations from pickup to delivery with live updates, ensuring transparency and accountability throughout the process.",
    color: "text-blue-600"
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Get connected within minutes of posting a donation. Our platform ensures rapid response times to prevent food spoilage.",
    color: "text-blue-600"
  },
  {
    icon: Shield,
    title: "Verified Partners",
    description: "All NGOs are thoroughly verified and certified, ensuring your donations reach legitimate organizations serving communities.",
    color: "text-blue-600"
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Join a growing community of changemakers. See the collective impact of your contributions through detailed analytics.",
    color: "text-blue-600"
  },
  {
    icon: Heart,
    title: "Easy Process",
    description: "Simple three-step process: Post your donation, get matched with NGOs, coordinate pickup. It's that easy to make a difference.",
    color: "text-blue-600"
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
        <section className="relative py-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 container px-6 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powerful Features for <span className="text-blue-400">Food Rescue</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover how our innovative platform makes food donation simple, efficient, and impactful for everyone involved.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="relative z-10 container px-6 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Join thousands of donors and NGOs already making an impact through Food Connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => navigate('/join-donor')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start Donating <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate('/join-ngo')}
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Join as NGO <Heart className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
