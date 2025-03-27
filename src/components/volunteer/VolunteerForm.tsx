
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { volunteerInterests } from '@/lib/data';
import { Heart, Send } from 'lucide-react';

export default function VolunteerForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!name.trim() || !email.trim() || !interest) {
      toast({
        title: "Error",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call with timeout
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create volunteer object
      const volunteerData = {
        id: Date.now().toString(),
        name,
        email,
        interest,
        message,
        date: new Date().toISOString()
      };

      // Log the data (in a real app, you would send this to an API)
      console.log('Volunteer application submitted:', volunteerData);
      
      // Show success message
      toast({
        title: "Application Submitted",
        description: "Thank you for volunteering! We'll contact you soon with more information.",
      });

      // Reset form
      setName('');
      setEmail('');
      setInterest('');
      setMessage('');
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
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
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg bg-background/50"
        />
      </div>

      <div className="space-y-4">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg bg-background/50"
        />
      </div>

      <div className="space-y-4">
        <Label htmlFor="interest">Area of Interest</Label>
        <select
          id="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full rounded-lg bg-background/50 px-3 py-2 border border-input"
        >
          <option value="">Select your interest</option>
          {volunteerInterests.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        <Label htmlFor="message">Why do you want to volunteer? (Optional)</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your motivation, relevant experience, or skills"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
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
            <Heart size={16} className="mr-2" /> Submit Application
          </>
        )}
      </Button>
      
      <p className="text-xs text-center text-muted-foreground">
        By submitting this form, you agree to be contacted regarding volunteer opportunities. 
        We respect your privacy and will never share your information with third parties.
      </p>
    </form>
  );
}
