
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { BookOpen, Send } from 'lucide-react';

export default function StoryForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!title.trim() || !author.trim() || !content.trim()) {
      toast({
        title: "Error",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call with timeout
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create story object
      const storyData = {
        id: Date.now().toString(),
        title,
        author,
        content,
        date: new Date().toISOString()
      };

      // Log the data (in a real app, you would send this to an API)
      console.log('Story submitted:', storyData);
      
      // Show success message
      toast({
        title: "Story Submitted",
        description: "Thank you for sharing your rescue story! It will be reviewed and published soon.",
      });

      // Reset form
      setTitle('');
      setAuthor('');
      setContent('');
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your story. Please try again.",
        variant: "destructive"
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 glass-card p-8">
      <div className="space-y-4">
        <Label htmlFor="title">Story Title</Label>
        <Input
          id="title"
          placeholder="Enter a title for your story"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-lg bg-background/50"
        />
      </div>

      <div className="space-y-4">
        <Label htmlFor="author">Your Name</Label>
        <Input
          id="author"
          placeholder="Enter your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="rounded-lg bg-background/50"
        />
      </div>

      <div className="space-y-4">
        <Label htmlFor="content">Your Story</Label>
        <Textarea
          id="content"
          placeholder="Share your animal rescue or volunteer experience"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="rounded-lg bg-background/50"
        />
      </div>

      <Button
        type="submit"
        className="w-full rounded-full bg-primary hover:bg-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-r-transparent"></div>
            Submitting...
          </>
        ) : (
          <>
            <BookOpen size={16} className="mr-2" /> Submit Story
          </>
        )}
      </Button>
    </form>
  );
}
