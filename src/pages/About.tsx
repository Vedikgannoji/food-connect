
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Users, Target, Heart, Award } from 'lucide-react';

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108755-2616b602fcd?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Mike Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
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
        <section className="py-20 bg-gradient-to-br from-paws-green/10 to-paws-brown/10">
          <div className="container px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-paws-green">Food Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground">
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
                  Food Connect was born from a simple observation: while millions go hungry, 
                  perfectly good food gets wasted every day. In 2023, our founder Sarah witnessed 
                  a restaurant throwing away fresh food while people nearby struggled to find their next meal.
                </p>
                <p className="text-muted-foreground mb-6">
                  That moment sparked the idea for a platform that could bridge this gap. Today, 
                  Food Connect uses real-time technology to connect food donors with NGOs, 
                  ensuring surplus food reaches those who need it most before it goes to waste.
                </p>
                <Button onClick={() => navigate('/join-donor')}>
                  Join Our Mission
                </Button>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop" 
                  alt="Food distribution" 
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center p-4 bg-paws-green/10 rounded-full mb-4">
                    <div className="text-paws-green">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-paws-green text-white">
          <div className="container px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of donors and NGOs who are already making an impact through Food Connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => navigate('/join-donor')}
              >
                Become a Donor
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-paws-green"
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
