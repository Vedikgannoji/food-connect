
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Upload, Clock, MapPin } from 'lucide-react';

export default function DonorForm() {
  const [formData, setFormData] = useState({
    foodTitle: '',
    quantity: '',
    unit: '',
    foodType: '',
    suitableFor: '',
    pickupTime: '',
    expiryTime: '',
    pickupAddress: '',
    additionalNotes: ''
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Food Donation Posted!",
      description: "Your donation has been posted successfully. NGOs can now claim it.",
    });
    // Reset form
    setFormData({
      foodTitle: '',
      quantity: '',
      unit: '',
      foodType: '',
      suitableFor: '',
      pickupTime: '',
      expiryTime: '',
      pickupAddress: '',
      additionalNotes: ''
    });
    setImagePreview(null);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">🧺 Post Surplus Food for Donation</h2>
        <p className="text-muted-foreground">
          Have extra food? Fill out the form below to let nearby NGOs know. Make an impact in just a few clicks.
        </p>
      </div>

      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="foodTitle">Food Title *</Label>
              <Input
                id="foodTitle"
                value={formData.foodTitle}
                onChange={(e) => handleInputChange('foodTitle', e.target.value)}
                placeholder='e.g., "Veg Biryani", "Bread Packets"'
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="quantity">Quantity *</Label>
                <Input
                  id="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => handleInputChange('quantity', e.target.value)}
                  placeholder="e.g., 10"
                  required
                />
              </div>
              <div>
                <Label htmlFor="unit">Unit *</Label>
                <Select value={formData.unit} onValueChange={(value) => handleInputChange('unit', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="plates">Plates</SelectItem>
                    <SelectItem value="kg">Kg</SelectItem>
                    <SelectItem value="boxes">Boxes</SelectItem>
                    <SelectItem value="packets">Packets</SelectItem>
                    <SelectItem value="servings">Servings</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="foodType">Food Type *</Label>
                <Select value={formData.foodType} onValueChange={(value) => handleInputChange('foodType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="veg">Veg</SelectItem>
                    <SelectItem value="non-veg">Non-Veg</SelectItem>
                    <SelectItem value="mixed">Mixed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="suitableFor">Suitable For *</Label>
                <Select value={formData.suitableFor} onValueChange={(value) => handleInputChange('suitableFor', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="humans">Humans</SelectItem>
                    <SelectItem value="animals">Animals</SelectItem>
                    <SelectItem value="both">Both</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="pickupTime">Pickup Time *</Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="pickupTime"
                    type="time"
                    value={formData.pickupTime}
                    onChange={(e) => handleInputChange('pickupTime', e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="expiryTime">Expiry Time *</Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="expiryTime"
                    type="time"
                    value={formData.expiryTime}
                    onChange={(e) => handleInputChange('expiryTime', e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="pickupAddress">Pickup Address *</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Textarea
                  id="pickupAddress"
                  value={formData.pickupAddress}
                  onChange={(e) => handleInputChange('pickupAddress', e.target.value)}
                  placeholder="Add clear location or use current GPS"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="imageUpload">Upload Image (optional)</Label>
              <div className="mt-2">
                <label htmlFor="imageUpload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-2 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> food image
                    </p>
                  </div>
                  <input id="imageUpload" type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
                {imagePreview && (
                  <div className="mt-4">
                    <img src={imagePreview} alt="Food preview" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="additionalNotes">Additional Notes (optional)</Label>
              <Textarea
                id="additionalNotes"
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                placeholder='e.g., "Kept in cold storage", "Packaged cleanly"'
              />
            </div>

            <Button type="submit" className="w-full bg-paws-green hover:bg-paws-green/90 transition-all duration-300 transform hover:scale-105">
              Post Food Donation
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
