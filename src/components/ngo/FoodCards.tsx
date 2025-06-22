
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, User, Camera } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FoodDonation {
  id: number;
  title: string;
  quantity: string;
  type: 'veg' | 'non-veg' | 'mixed';
  suitableFor: string;
  postedBy: string;
  pickupTime: string;
  expiryTime: string;
  location: string;
  image?: string;
  notes?: string;
  status: 'available' | 'claimed';
}

const mockDonations: FoodDonation[] = [
  {
    id: 1,
    title: "🍛 Veg Fried Rice",
    quantity: "15 Plates",
    type: "veg",
    suitableFor: "Humans",
    postedBy: "Spice Garden Restaurant",
    pickupTime: "7:00 PM",
    expiryTime: "9:00 PM",
    location: "MG Road, Bangalore",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=200&fit=crop",
    notes: "Kept in fridge, packed individually",
    status: "available"
  },
  {
    id: 2,
    title: "🥪 Fresh Sandwiches",
    quantity: "20 Pieces",
    type: "veg",
    suitableFor: "Humans",
    postedBy: "Home Kitchen",
    pickupTime: "6:30 PM",
    expiryTime: "8:30 PM",
    location: "Koramangala, Bangalore",
    notes: "Made fresh today morning",
    status: "available"
  },
  {
    id: 3,
    title: "🍲 Mixed Curry",
    quantity: "5 Kg",
    type: "mixed",
    suitableFor: "Both",
    postedBy: "Golden Spoon Catering",
    pickupTime: "8:00 PM",
    expiryTime: "10:00 PM",
    location: "Whitefield, Bangalore",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop",
    notes: "Suitable for animals too",
    status: "available"
  }
];

export default function FoodCards() {
  const [donations, setDonations] = useState<FoodDonation[]>(mockDonations);
  const [claimedDonations, setClaimedDonations] = useState<FoodDonation[]>([]);
  const { toast } = useToast();

  const handleClaim = (donationId: number) => {
    const donation = donations.find(d => d.id === donationId);
    if (donation) {
      setDonations(prev => prev.filter(d => d.id !== donationId));
      setClaimedDonations(prev => [...prev, { ...donation, status: 'claimed' }]);
      toast({
        title: "Donation Claimed Successfully!",
        description: "You've claimed this donation. Please ensure pickup before expiry.",
      });
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'veg': return 'bg-green-100 text-green-800';
      case 'non-veg': return 'bg-red-100 text-red-800';
      case 'mixed': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Available Food Section */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">🍽️ Available Food Near You</h2>
          <p className="text-muted-foreground">
            These donations are currently available in your area. Review the details and claim what's needed to serve your community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map((donation) => (
            <Card key={donation.id} className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                {donation.image && (
                  <div className="mb-4">
                    <img 
                      src={donation.image} 
                      alt={donation.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                )}
                
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg">{donation.title}</h3>
                    <Badge className={getTypeColor(donation.type)}>
                      {donation.type}
                    </Badge>
                  </div>
                  
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><strong>Quantity:</strong> {donation.quantity}</p>
                    <p><strong>Suitable For:</strong> {donation.suitableFor}</p>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{donation.postedBy}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-1 text-blue-600">
                      <Clock className="h-3 w-3" />
                      <span>Pickup: {donation.pickupTime}</span>
                    </div>
                    <div className="flex items-center gap-1 text-red-600">
                      <Clock className="h-3 w-3" />
                      <span>Expires: {donation.expiryTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{donation.location}</span>
                  </div>
                  
                  {donation.notes && (
                    <p className="text-sm text-muted-foreground italic">
                      "{donation.notes}"
                    </p>
                  )}
                  
                  <Button 
                    onClick={() => handleClaim(donation.id)}
                    className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                  >
                    🤝 Claim This Donation
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* My Pickups Section */}
      {claimedDonations.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-6">📋 My Claimed Donations</h3>
          <div className="space-y-4">
            {claimedDonations.map((donation) => (
              <Card key={`claimed-${donation.id}`} className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">{donation.title}</h4>
                      <p className="text-sm text-muted-foreground">Donor: {donation.postedBy}</p>
                      <p className="text-sm text-muted-foreground">Location: {donation.location}</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-yellow-100 text-yellow-800 mb-2">Pending Pickup</Badge>
                      <p className="text-sm text-red-600">Expires: {donation.expiryTime}</p>
                      <Button size="sm" className="mt-2">📤 Confirm Pickup</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
