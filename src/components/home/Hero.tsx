
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export default function Hero() {
  const navigate = useNavigate();
  const { user, userType } = useAuth();

  const handleDonateClick = () => {
    if (user && userType === 'donor') {
      navigate('/donor-dashboard');
    } else {
      navigate('/join-donor');
    }
  };

  const handleNGOClick = () => {
    if (user && userType === 'ngo') {
      navigate('/ngo-dashboard');
    } else {
      navigate('/join-ngo');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container px-6 py-32 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Transform Food Waste into
            <span className="text-blue-400 block mt-2">Hope & Nourishment</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-delay max-w-3xl mx-auto">
            Every day, millions of meals go to waste while people go hungry. 
            Join our mission to bridge this gap and create a world where surplus food saves lives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            {user ? (
              // Show appropriate button based on user type
              userType === 'donor' ? (
                <Button 
                  size="lg" 
                  onClick={handleDonateClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Donate Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              ) : userType === 'ngo' ? (
                <Button 
                  size="lg" 
                  onClick={handleNGOClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Find Food <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              ) : null
            ) : (
              // Show both buttons for non-authenticated users
              <>
                <Button 
                  size="lg" 
                  onClick={handleDonateClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Donate Food <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={handleNGOClick}
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Join as NGO <Heart className="ml-2 h-5 w-5" />
                </Button>
              </>
            )}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in-delay-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-2 text-blue-400">2M+</h3>
              <p className="text-gray-200">Meals Saved</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-2 text-blue-400">500+</h3>
              <p className="text-gray-200">Active NGOs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-2 text-blue-400">1K+</h3>
              <p className="text-gray-200">Food Donors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
