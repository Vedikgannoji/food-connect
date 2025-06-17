
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Heart, Users, Target, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const team = [
  {
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Emily Rodriguez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "David Kim",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  }
];

const stats = [
  { icon: Users, number: "50K+", label: "Lives Impacted" },
  { icon: Heart, number: "2M+", label: "Meals Saved" },
  { icon: Target, number: "500+", label: "Partner NGOs" },
  { icon: Award, number: "95%", label: "Success Rate" }
];

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'About Us - Food Connect';
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
              backgroundImage: `url('https://images.unsplash.com/photo-1469671879946-301258355999?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 container px-6 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-blue-400">Food Connect</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We're on a mission to eliminate food waste while fighting hunger, one connection at a time.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Food Connect was created to solve a simple but serious problem of food going to waste while people and animals go hungry. We built a platform that bridges this gap by instantly connecting food donors with NGOs nearby. With just a few clicks, surplus food finds its way to someone who needs it.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                  What started as a small idea grew into a purpose-driven project focused on impact. We believe that with the right tech, even leftovers can change lives and every donation counts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted">
          <div className="container px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Together, we're making a real difference in communities across the globe.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="pt-6">
                    <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Passionate individuals working together to create a world without food waste.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="pt-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
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
              backgroundImage: `url('https://images.unsplash.com/photo-1532294409540-30ad5c1a31ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="relative z-10 container px-6 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Join thousands of donors and NGOs who are already making an impact through Food Connect.
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
