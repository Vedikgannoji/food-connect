
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Users, Target, Heart, Award, User } from 'lucide-react';

const teamMembers = [
  {
    name: "Sai Charan",
    role: "Founder & CEO"
  },
  {
    name: "Saranya",
    role: "CTO"
  },
  {
    name: "Rajesh Prasad",
    role: "Head of Operations"
  },
  {
    name: "Rishikesh",
    role: "Head of Community Relations"
  }
];

const stats = [
  { icon: <Users className="h-8 w-8" />, number: "10,000+", label: "People Fed" },
  { icon: <Target className="h-8 w-8" />, number: "500+", label: "Partner NGOs" },
  { icon: <Heart className="h-8 w-8" />, number: "2,500+", label: "Food Donors" },
  { icon: <Award className="h-8 w-8" />, number: "50 tons", label: "Food Saved" }
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
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop" 
              alt="Community volunteering with food distribution" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="container px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                About <span className="text-paws-green">Food Connect</span>
              </h1>
              <p className="text-xl text-white/90">
                We're on a mission to eliminate food waste while fighting hunger through 
                innovative technology and community partnerships.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-6">
                  Food Connect was created to solve a simple but serious problem of food going to waste while people and animals go hungry. We built a platform that bridges this gap by instantly connecting food donors with NGOs nearby. With just a few clicks, surplus food finds its way to someone who needs it.
                </p>
                <p className="text-muted-foreground mb-6">
                  What started as a small idea grew into a purpose-driven project focused on impact. We believe that with the right tech, even leftovers can change lives and every donation counts.
                </p>
                <Button 
                  onClick={() => navigate('/join-donor')} 
                  className="hover:scale-105 transition-all duration-300 bg-paws-green hover:bg-paws-green/90"
                >
                  Join Our Mission
                </Button>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop" 
                  alt="Food distribution" 
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 bg-muted">
          <div className="container px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-xl text-muted-foreground">
                Together, we're making a real difference in communities across the country
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 text-center group">
                  <div className="inline-flex items-center justify-center p-4 bg-paws-green/10 rounded-full mb-4 group-hover:bg-paws-green/20 transition-colors duration-300">
                    <div className="text-paws-green">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold mb-2 text-paws-green">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20">
          <div className="container px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground">
                The passionate people working to end food waste and hunger
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-paws-green/10 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3" 
                      alt={`${member.name} profile`}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop" 
              alt="Community working together" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="container px-6 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of donors and NGOs who are already making an impact through Food Connect.
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
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
                onClick={() => navigate('/join-ngo')}
              >
                Partner with Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
