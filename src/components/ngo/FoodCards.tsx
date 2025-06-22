
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { MapPin, Clock, User, Camera, Filter } from 'lucide-react';
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
  },
  {
    id: 4,
    title: "🍗 Chicken Biryani",
    quantity: "10 Plates",
    type: "non-veg",
    suitableFor: "Humans",
    postedBy: "Royal Kitchen",
    pickupTime: "7:30 PM",
    expiryTime: "9:30 PM",
    location: "Indiranagar, Bangalore",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d4d6?w=300&h=200&fit=crop",
    notes: "Fresh and hot",
    status: "available"
  }
];

export default function FoodCards() {
  const [donations, setDonations] = useState<FoodDonation[]>(mockDonations);
  const [claimedDonations, setClaimedDonations] = useState<FoodDonation[]>([]);
  const [filterType, setFilterType] = useState<string>('all');
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
      case 'veg': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'non-veg': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'mixed': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const filteredDonations = donations.filter(donation => {
    if (filterType === 'all') return true;
    return donation.type === filterType;
  });

  return (
    <div className="space-y-8">
      {/* Available Food Section */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            🍽️ Available Food Near You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These donations are currently available in your area. Review the details and claim what's needed to serve your community.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8 flex justify-center">
          <Card className="p-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 border-2 border-blue-200 dark:border-gray-600">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-gray-700 dark:text-gray-200">Filter by type:</span>
              </div>
              <RadioGroup
                value={filterType}
                onValueChange={setFilterType}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" />
                  <label htmlFor="all" className="cursor-pointer font-medium">All</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="veg" id="veg" />
                  <label htmlFor="veg" className="cursor-pointer font-medium text-green-600">🌱 Veg</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="non-veg" id="non-veg" />
                  <label htmlFor="non-veg" className="cursor-pointer font-medium text-red-600">🍖 Non-Veg</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mixed" id="mixed" />
                  <label htmlFor="mixed" className="cursor-pointer font-medium text-orange-600">🍽️ Mixed</label>
                </div>
              </RadioGroup>
            </div>
          </Card>
        </div>

        {/* Enhanced Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredDonations.map((donation, index) => (
            <Card 
              key={donation.id} 
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] 
                ${index % 2 === 0 
                  ? 'bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-700 border-l-4 border-l-blue-500' 
                  : 'bg-gradient-to-br from-green-50 to-white dark:from-gray-700 dark:to-gray-800 border-l-4 border-l-green-500'
                } 
                animate-fade-in hover:shadow-blue-200/50 dark:hover:shadow-gray-600/50`}
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="md:w-2/5 relative overflow-hidden">
                    {donation.image ? (
                      <div className="relative h-48 md:h-full">
                        <img 
                          src={donation.image} 
                          alt={donation.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3">
                          <Badge className={`${getTypeColor(donation.type)} font-semibold px-3 py-1`}>
                            {donation.type === 'veg' ? '🌱 VEG' : donation.type === 'non-veg' ? '🍖 NON-VEG' : '🍽️ MIXED'}
                          </Badge>
                        </div>
                      </div>
                    ) : (
                      <div className="h-48 md:h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                        <Camera className="h-12 w-12 text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/5 p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {donation.title}
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-600 dark:text-gray-300">Quantity:</span>
                          <span className="text-blue-600 dark:text-blue-400 font-medium">{donation.quantity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-600 dark:text-gray-300">For:</span>
                          <span className="text-green-600 dark:text-green-400 font-medium">{donation.suitableFor}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <User className="h-4 w-4" />
                        <span className="font-medium">{donation.postedBy}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">Pickup: {donation.pickupTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">Expires: {donation.expiryTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <MapPin className="h-4 w-4" />
                        <span>{donation.location}</span>
                      </div>
                      
                      {donation.notes && (
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border-l-4 border-yellow-400">
                          <p className="text-sm text-yellow-800 dark:text-yellow-200 italic">
                            💡 "{donation.notes}"
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      onClick={() => handleClaim(donation.id)}
                      className="mt-4 w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      🤝 Claim This Donation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* My Pickups Section */}
      {claimedDonations.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            📋 My Claimed Donations
          </h3>
          <div className="space-y-4">
            {claimedDonations.map((donation) => (
              <Card key={`claimed-${donation.id}`} className="border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{donation.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Donor:</strong> {donation.postedBy}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Location:</strong> {donation.location}
                      </p>
                    </div>
                    <div className="text-right space-y-3">
                      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-3 py-1">
                        ⏳ Pending Pickup
                      </Badge>
                      <p className="text-sm text-red-600 dark:text-red-400 font-medium">
                        Expires: {donation.expiryTime}
                      </p>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                        📤 Confirm Pickup
                      </Button>
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
