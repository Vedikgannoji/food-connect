
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { incidentTypes } from '@/lib/data';
import { Camera, Send, Upload } from 'lucide-react';

export default function ReportForm() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [incidentType, setIncidentType] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!name.trim() || !location.trim() || !incidentType || !description.trim()) {
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
      
      // Create report object
      const reportData = {
        id: Date.now().toString(),
        name,
        location,
        incidentType,
        description,
        imageUrl: imagePreview,
        date: new Date().toISOString()
      };

      // Log the data (in a real app, you would send this to an API)
      console.log('Report submitted:', reportData);
      
      // Show success message
      toast({
        title: "Report Submitted",
        description: "Thank you for your report. We will review it and take appropriate action.",
      });

      // Reset form
      setName('');
      setLocation('');
      setIncidentType('');
      setDescription('');
      setImage(null);
      setImagePreview(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your report. Please try again.",
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
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg bg-background/50"
        />
      </div>

      <div className="space-y-4">
        <Label htmlFor="location">Location of Incident</Label>
        <Input
          id="location"
          placeholder="Address or description of location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="rounded-lg bg-background/50"
        />
      </div>

      <div className="space-y-4">
        <Label htmlFor="incidentType">Type of Incident</Label>
        <select
          id="incidentType"
          value={incidentType}
          onChange={(e) => setIncidentType(e.target.value)}
          className="w-full rounded-lg bg-background/50 px-3 py-2 border border-input"
        >
          <option value="">Select incident type</option>
          {incidentTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        <Label htmlFor="description">Description of Incident</Label>
        <Textarea
          id="description"
          placeholder="Please provide details about what you witnessed"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          className="rounded-lg bg-background/50"
        />
      </div>

      <div className="space-y-4">
        <Label htmlFor="image">Upload Image or Video (Optional)</Label>
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-6 transition-all duration-300 hover:border-primary/50 bg-background/30">
          <input
            type="file"
            id="image"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*,video/*"
            className="hidden"
          />
          
          {imagePreview ? (
            <div className="w-full">
              <img
                src={imagePreview}
                alt="Preview"
                className="h-48 mx-auto object-contain rounded-lg"
              />
              <div className="flex justify-center mt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setImage(null);
                    setImagePreview(null);
                  }}
                  className="rounded-full"
                >
                  Remove Image
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <Camera className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground mb-2">Drag and drop or click to upload</p>
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="rounded-full"
              >
                <Upload size={16} className="mr-2" /> Choose File
              </Button>
            </div>
          )}
        </div>
        <p className="text-xs text-muted-foreground">
          Supported formats: JPG, PNG, GIF, MP4, MOV (max 10MB)
        </p>
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
            <Send size={16} className="mr-2" /> Submit Report
          </>
        )}
      </Button>
    </form>
  );
}
