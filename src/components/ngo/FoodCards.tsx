
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Clock, User, Filter, Search } from 'lucide-react';
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
  serviceArea: string;
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
    serviceArea: "Bangalore",
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
    serviceArea: "Bangalore",
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
    serviceArea: "Bangalore",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop",
    notes: "Suitable for animals too",
    status: "available"
  },
  {
    id: 4,
    title: "🍗 Chicken Biryani",
    quantity: "8 Portions",
    type: "non-veg",
    suitableFor: "Humans",
    postedBy: "Biryani House",
    pickupTime: "8:30 PM",
    expiryTime: "10:30 PM",
    location: "Indiranagar, Bangalore",
    serviceArea: "Bangalore",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d49a?w=300&h=200&fit=crop",
    notes: "Fresh and hot",
    status: "available"
  },
  {
    id: 5,
    title: "🥗 Fresh Salad Bowl",
    quantity: "12 Bowls",
    type: "veg",
    suitableFor: "Humans",
    postedBy: "Health Corner Cafe",
    pickupTime: "7:30 PM",
    expiryTime: "9:30 PM",
    location: "HSR Layout, Bangalore",
    serviceArea: "Bangalore",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
    notes: "Organic vegetables used",
    status: "available"
  },
  {
    id: 6,
    title: "🍖 Mutton Curry",
    quantity: "6 Portions",
    type: "non-veg",
    suitableFor: "Humans",
    postedBy: "Traditional Kitchen",
    pickupTime: "9:00 PM",
    expiryTime: "11:00 PM",
    location: "Jayanagar, Bangalore",
    serviceArea: "Bangalore",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=200&fit=crop",
    notes: "Authentic recipe",
    status: "available"
  }
];

interface FoodCardsProps {
  userServiceArea?: string;
}

export default function FoodCards({ userServiceArea = "Bangalore" }: FoodCardsProps) {
  const [donations, setDonations] = useState<FoodDonation[]>(mockDonations);
  const [claimedDonations, setClaimedDonations] = useState<FoodDonation[]>([]);
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const { toast } = useToast();

  // Filter donations based on type and service area
  const filteredDonations = donations.filter(donation => {
    const matchesType = typeFilter === 'all' || donation.type === typeFilter;
    const matchesServiceArea = donation.serviceArea.toLowerCase().includes(userServiceArea.toLowerCase());
    return matchesType && matchesServiceArea;
  });

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
      case 'veg': return 'bg-green-100 text-green-800 border-green-200';
      case 'non-veg': return 'bg-red-100 text-red-800 border-red-200';
      case 'mixed': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeEmoji = (type: string) => {
    switch (type) {
      case 'veg': return '🌱';
      case 'non-veg': return '🍖';
      case 'mixed': return '🥘';
      default: return '🍽️';
    }
  };

  return (
    <div className="space-y-8">
      {/* Enhanced Header Section */}
      <div className="text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-orange-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-full">
              <Search className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Available Food Near You
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fresh donations in your service area ({userServiceArea}). Filter by preference and claim what you need to serve your community.
          </p>
        </div>
      </div>

      {/* Enhanced Filter Section */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl border border-blue-100">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white rounded-lg shadow-sm">
            <Filter className="h-5 w-5 text-blue-600" />
          </div>
          <span className="font-semibold text-gray-700">Filter by Type:</span>
        </div>
        
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-48 bg-white border-2 border-blue-200 hover:border-blue-300 transition-colors">
            <SelectValue placeholder="Select food type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">🍽️ All Types</SelectItem>
            <SelectItem value="veg">🌱 Vegetarian</SelectItem>
            <SelectItem value="non-veg">🍖 Non-Vegetarian</SelectItem>
            <SelectItem value="mixed">🥘 Mixed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Enhanced Food Cards Grid */}
      <div>
        {filteredDonations.length === 0 ? (
          <div className="text-center py-12">
            <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No donations found</h3>
            <p className="text-gray-500">Try adjusting your filters or check back later for new donations.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredDonations.map((donation, index) => (
              <Card 
                key={donation.id} 
                className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] bg-gradient-to-br from-white to-gray-50/50 border-2 border-transparent hover:border-blue-200 relative overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-0 relative z-10">
                  {donation.image && (
                    <div className="relative overflow-hidden">
                      <img 
                        src={donation.image} 
                        alt={donation.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <Badge className={`absolute top-3 right-3 ${getTypeColor(donation.type)} border shadow-lg`}>
                        {getTypeEmoji(donation.type)} {donation.type}
                      </Badge>
                    </div>
                  )}
                  
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-xl group-hover:text-blue-600 transition-colors duration-300">
                        {donation.title}
                      </h3>
                      {!donation.image && (
                        <Badge className={`${getTypeColor(donation.type)} border shadow-sm`}>
                          {getTypeEmoji(donation.type)} {donation.type}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="font-semibold text-blue-800">Quantity</p>
                        <p className="text-blue-600 font-bold">{donation.quantity}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="font-semibold text-green-800">For</p>
                        <p className="text-green-600 font-bold">{donation.suitableFor}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-gray-50 p-3 rounded-lg">
                      <User className="h-4 w-4 text-blue-500" />
                      <span className="font-medium">{donation.postedBy}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-blue-600 bg-blue-50 p-2 rounded-lg">
                        <Clock className="h-4 w-4" />
                        <div>
                          <p className="font-medium">Pickup</p>
                          <p>{donation.pickupTime}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-red-600 bg-red-50 p-2 rounded-lg">
                        <Clock className="h-4 w-4" />
                        <div>
                          <p className="font-medium">Expires</p>
                          <p>{donation.expiryTime}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-orange-50 p-3 rounded-lg">
                      <MapPin className="h-4 w-4 text-orange-500" />
                      <span className="font-medium">{donation.location}</span>
                    </div>
                    
                    {donation.notes && (
                      <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                        <p className="text-sm text-yellow-800 italic font-medium">
                          💡 "{donation.notes}"
                        </p>
                      </div>
                    )}
                    
                    <Button 
                      onClick={() => handleClaim(donation.id)}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      🤝 Claim This Donation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* My Pickups Section */}
      {claimedDonations.length > 0 && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border border-green-200">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="p-2 bg-green-500 rounded-lg">
              <Badge className="text-white bg-transparent border-0">📋</Badge>
            </div>
            My Claimed Donations
          </h3>
          <div className="space-y-4">
            {claimedDonations.map((donation) => (
              <Card key={`claimed-${donation.id}`} className="border-l-4 border-l-green-500 bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <h4 className="font-semibold text-lg">{donation.title}</h4>
                      <p className="text-sm text-muted-foreground">Donor: {donation.postedBy}</p>
                      <p className="text-sm text-muted-foreground">Location: {donation.location}</p>
                    </div>
                    <div className="text-right space-y-2">
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">⏳ Pending Pickup</Badge>
                      <p className="text-sm text-red-600 font-medium">Expires: {donation.expiryTime}</p>
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
