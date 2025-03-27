
import { RescueStory } from '@/lib/types';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Calendar } from 'lucide-react';

interface StoryCardProps {
  story: RescueStory;
  index: number;
}

export default function StoryCard({ story, index }: StoryCardProps) {
  // Format the date
  const formattedDate = new Date(story.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <AnimatedCard delay={index * 150} className="h-full">
      <div className="flex flex-col h-full">
        {story.imageUrl && (
          <div className="relative h-48 overflow-hidden rounded-t-xl">
            <img
              src={story.imageUrl}
              alt={story.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <Calendar size={14} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">{story.title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">
            {story.content.length > 150 
              ? `${story.content.slice(0, 150)}...` 
              : story.content}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">By {story.author}</span>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
}
