
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Utensils } from 'lucide-react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate image loading and then trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop" 
          alt="Food being prepared and shared" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-6 flex flex-col items-center text-center">
        <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block py-1 px-3 rounded-full bg-paws-green text-white text-sm font-medium mb-6 backdrop-blur-sm shadow-lg">
            Welcome to Food Connect
          </span>
        </div>
        
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          Bridge Hunger. <br className="hidden md:block" />
          Save Food. <span className="text-paws-green">Connect Lives.</span>
        </h1>
        
        <p className={`max-w-2xl text-lg text-white mb-10 transition-all duration-1000 delay-500 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          Join our mission to reduce food waste and fight hunger by connecting food donors 
          with NGOs in real-time. Together, we can ensure surplus food reaches those who need it most.
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <Button 
            size="lg" 
            className="bg-paws-green hover:bg-paws-green/90 text-white font-medium rounded-full shadow-lg relative overflow-hidden group"
            onClick={() => navigate('/join-donor')}
          >
            <Utensils className="mr-1 h-5 w-5" />
            <span className="relative z-10">Donate Food</span>
            <span className="absolute inset-0 bg-white/20 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 group overflow-hidden"
            onClick={() => navigate('/join-ngo')}
          >
            <span className="relative z-10 group-hover:translate-x-[-4px] transition-transform duration-300">Join as NGO</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            <span className="absolute inset-0 bg-white/10 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
}
