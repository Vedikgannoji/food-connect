
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StoryCard from '@/components/stories/StoryCard';
import StoryForm from '@/components/stories/StoryForm';
import { rescueStories } from '@/lib/data';
import { BookOpen } from 'lucide-react';

export default function Stories() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = 'Rescue Stories - Paws Project';
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
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className={`inline-block py-1 px-3 rounded-full bg-secondary/30 text-secondary-foreground text-sm font-medium mb-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <BookOpen size={14} className="inline mr-1" /> Stories
              </span>
              <h1 className={`text-3xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                Rescue Stories
              </h1>
              <p className={`text-muted-foreground text-lg mb-8 transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                Read inspiring stories of animal rescues and transformations. 
                Every story represents a life changed and hope restored.
              </p>
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-12">
          <div className="container px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rescueStories.map((story, index) => (
                <StoryCard key={story.id} story={story} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Submit Your Story */}
        <section className="py-12 bg-muted/50">
          <div className="container px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Share Your Story</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Have you rescued an animal or volunteered in animal welfare? 
                  Share your experiences to inspire others and build our community.
                </p>
              </div>
              <StoryForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
