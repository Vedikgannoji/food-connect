
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StoryCard from '@/components/stories/StoryCard';
import StoryForm from '@/components/stories/StoryForm';
import { rescueStories } from '@/lib/data';
import { BookOpen, PawPrint, MapPin } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';

export default function Stories() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 3;
  
  // Calculate current stories to display
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = rescueStories.slice(indexOfFirstStory, indexOfLastStory);
  const totalPages = Math.ceil(rescueStories.length / storiesPerPage);

  useEffect(() => {
    document.title = 'Indian Rescue Stories - Paws Project';
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
                <BookOpen size={14} className="inline mr-1" /> Stories from India
              </span>
              <h1 className={`text-3xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                Indian Rescue Stories
              </h1>
              <p className={`text-muted-foreground text-lg mb-8 transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                Read inspiring stories of animal rescues from across India. 
                From street dogs in Hyderabad to elephants in sanctuaries, 
                each story represents a life transformed through compassion.
              </p>
              <div className={`flex justify-center gap-2 transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <span className="inline-flex items-center text-sm gap-1 bg-muted/50 px-3 py-1 rounded-full">
                  <PawPrint size={14} /> Animal Welfare
                </span>
                <span className="inline-flex items-center text-sm gap-1 bg-muted/50 px-3 py-1 rounded-full">
                  <MapPin size={14} /> India
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-12">
          <div className="container px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentStories.map((story, index) => (
                <StoryCard key={story.id} story={story} index={index} />
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination className="mt-10">
                <PaginationContent>
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink 
                        isActive={currentPage === index + 1} 
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(index + 1);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={currentPage === index + 1 ? 'border-paws-green text-paws-green' : ''}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </section>

        {/* Submit Your Story */}
        <section className="py-12 bg-muted/50">
          <div className="container px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Share Your Indian Rescue Story</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Have you rescued an animal in India or volunteered with animal welfare in the region? 
                  Share your experiences to inspire others and help build our community of animal advocates.
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
