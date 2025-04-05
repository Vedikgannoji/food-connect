
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  HoverCard,
  HoverCardTrigger,
  HoverCardContent 
} from '@/components/ui/hover-card';

// Laws data with detailed descriptions
const animalProtectionLaws = [
  {
    id: "pca1960",
    name: "Prevention of Cruelty to Animals Act, 1960",
    shortDescription: "Fundamental law preventing unnecessary pain or suffering to animals",
    fullDescription: "This Act establishes the Animal Welfare Board of India and defines various forms of cruelty to animals. It prohibits beating, kicking, overriding, overloading, torturing, and causing unnecessary pain to any animal. Penalties include fines and imprisonment for repeated offenses. The Act allows for the creation of rules to prevent animal cruelty in various contexts.",
    year: "1960"
  },
  {
    id: "wpa1972",
    name: "Wildlife Protection Act, 1972",
    shortDescription: "Comprehensive legislation for wildlife conservation in India",
    fullDescription: "The Wildlife Protection Act provides for the protection of wild animals, birds, and plants. It establishes a network of protected areas, regulates hunting, and prohibits trade in wildlife and wildlife products. The Act carries severe penalties for violations, including imprisonment up to seven years and substantial fines for poaching endangered species.",
    year: "1972"
  },
  {
    id: "transport1978",
    name: "Transport of Animals Rules, 1978",
    shortDescription: "Rules for safe and humane transportation of animals",
    fullDescription: "These rules specify the conditions for transporting animals by rail, road, air, or sea. They mandate appropriate space, food, water, and care during transport. The regulations aim to minimize stress and injuries to animals during transit and hold transporters accountable for animal welfare.",
    year: "1978"
  },
  {
    id: "exp2001",
    name: "Experimental Animals Rules, 2001",
    shortDescription: "Regulations for the use of animals in scientific experiments",
    fullDescription: "These rules regulate the use of animals in scientific research and experimentation. They require registration of establishments conducting animal experiments, mandate the formation of institutional ethics committees, and promote the principle of 3Rs - Replace, Reduce, and Refine - to minimize animal suffering in research.",
    year: "2001"
  },
  {
    id: "perf2001",
    name: "Performing Animals Rules, 2001",
    shortDescription: "Rules governing the use of animals in entertainment and performances",
    fullDescription: "These rules regulate the training and exhibition of animals for entertainment purposes. They require registration for using animals in films, circuses, or other performances and set standards for their treatment. These regulations aim to prevent cruelty and ensure proper care of animals used in the entertainment industry.",
    year: "2001"
  },
  {
    id: "slaughter2001",
    name: "Slaughter House Rules, 2001",
    shortDescription: "Guidelines for humane slaughter of animals for food",
    fullDescription: "These rules establish standards for the design, management, and operation of slaughterhouses. They require proper facilities, trained personnel, and humane slaughter methods to minimize animal suffering. The regulations also cover ante-mortem and post-mortem inspections to ensure food safety and animal welfare.",
    year: "2001"
  },
  {
    id: "breeding2017",
    name: "Prevention of Cruelty to Animals (Dog Breeding and Marketing) Rules, 2017",
    shortDescription: "Regulations for dog breeding, marketing, and pet shops",
    fullDescription: "These rules regulate dog breeding establishments and mandate registration with the Animal Welfare Board of India. They specify minimum standards for housing, breeding practices, and care of dogs. The rules also require proper record-keeping and prohibit breeding dogs with inheritable diseases or abnormalities.",
    year: "2017"
  },
  {
    id: "cattle2017",
    name: "Prevention of Cruelty to Animals (Regulation of Livestock Markets) Rules, 2017",
    shortDescription: "Rules to prevent cruelty to animals in livestock markets",
    fullDescription: "These rules regulate the operation of livestock markets to ensure animal welfare. They prohibit cruelty to animals during transport and sale, require proper facilities at market sites, and establish committees to monitor compliance. The regulations aim to prevent unnecessary suffering of animals in market environments.",
    year: "2017"
  }
];

export default function AnimalProtectionLaws() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = 'Animal Protection Laws - Paws Project';
    window.scrollTo(0, 0);
    
    // Trigger animations after a small delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="py-12 md:py-20 relative">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2071&auto=format&fit=crop" 
              alt="Legal protection for animals" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60 dark:from-black/90 dark:via-black/80 dark:to-black/70"></div>
          </div>
          
          <div className="container px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className={`inline-block py-1 px-3 rounded-full bg-secondary/30 text-white text-sm font-medium mb-6 transition-all duration-700 ease-out backdrop-blur-sm ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                Legal Framework
              </span>
              <h1 className={`text-3xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ease-out text-white ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                Animal Protection Laws in India
              </h1>
              <p className={`text-white/90 text-lg mb-8 transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                A comprehensive guide to the legal framework that protects animals in India.
                Hover over each law to learn more about its provisions and implications.
              </p>
            </div>
          </div>
        </section>

        {/* Laws Section */}
        <section className="py-16">
          <div className="container px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {animalProtectionLaws.map((law, index) => (
                  <HoverCard key={law.id}>
                    <HoverCardTrigger asChild>
                      <div 
                        className={`glass-card p-6 rounded-xl transition-all duration-500 cursor-pointer hover:shadow-lg ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-lg mb-2">{law.name}</h3>
                            <p className="text-sm text-muted-foreground">{law.shortDescription}</p>
                          </div>
                          <span className="bg-primary/10 text-primary text-xs font-semibold py-1 px-2 rounded">
                            {law.year}
                          </span>
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 p-4">
                      <h4 className="font-semibold mb-2">{law.name}</h4>
                      <p className="text-sm">{law.fullDescription}</p>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto glass-card p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Resources for Legal Support</h2>
              <p className="text-muted-foreground mb-8 text-center">
                If you witness animal cruelty or need legal assistance for animal protection, 
                these resources can help you take appropriate action.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-background/50 rounded-lg">
                  <h3 className="font-medium mb-2">Animal Welfare Board of India</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    The statutory advisory body established under the PCA Act that promotes animal welfare.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Visit Website
                  </Button>
                </div>
                
                <div className="p-4 bg-background/50 rounded-lg">
                  <h3 className="font-medium mb-2">Wildlife Crime Control Bureau</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Government agency established to combat organized wildlife crime in India.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Visit Website
                  </Button>
                </div>
                
                <div className="p-4 bg-background/50 rounded-lg">
                  <h3 className="font-medium mb-2">Legal Templates & Forms</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Download templates for filing complaints related to animal cruelty.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Download Forms
                  </Button>
                </div>
                
                <div className="p-4 bg-background/50 rounded-lg">
                  <h3 className="font-medium mb-2">Animal Law Resources</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Educational materials on animal protection laws and advocacy.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
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
