
import { RescueStory } from '@/lib/types';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Calendar, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface StoryCardProps {
  story: RescueStory;
  index: number;
}

export default function StoryCard({ story, index }: StoryCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  
  // Format the date in Indian style (DD-MM-YYYY)
  const formattedDate = new Date(story.date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Check if content is lengthy
  const isLongContent = story.content.length > 150;
  const displayContent = expanded ? story.content : isLongContent ? `${story.content.slice(0, 150)}...` : story.content;

  // Fallback image if the story image doesn't load
  const fallbackImage = "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2000&auto=format&fit=crop";

  return (
    <AnimatedCard delay={index * 150} className="h-full">
      <Card className="flex flex-col h-full overflow-hidden group border-none shadow-lg hover:shadow-xl transition-all duration-300">
        {story.imageUrl && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={story.imageUrl}
              alt={story.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = fallbackImage;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}
        
        <CardHeader className="pb-2">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Calendar size={14} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
          <h3 className="text-xl font-bold">{story.title}</h3>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">
            {displayContent}
          </p>
          {isLongContent && (
            <Button 
              variant="link" 
              className="p-0 h-auto mt-2 font-medium"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Read less' : 'Read more'}
            </Button>
          )}
        </CardContent>
        
        <CardFooter className="flex justify-between items-center pt-2 border-t">
          <span className="text-sm font-medium">By {story.author}</span>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full hover:bg-paws-green/10"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart 
              size={18} 
              className={`transition-colors duration-300 ${isLiked ? 'fill-paws-green text-paws-green' : 'text-muted-foreground'}`}
            />
          </Button>
        </CardFooter>
      </Card>
    </AnimatedCard>
  );
}
