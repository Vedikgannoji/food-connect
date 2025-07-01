import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Clock, User, Leaf, Beef, Utensils } from 'lucide-react';
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
    title: "Vegetable Fried Rice",
    quantity: "15 Plates",
    type: "veg",
    suitableFor: "Humans",
    postedBy: "Spice Garden Restaurant",
    pickupTime: "7:00 PM",
    expiryTime: "9:00 PM",
    location: "MG Road, Bangalore",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=250&fit=crop&auto=format",
    notes: "Kept in refrigerator, packed individually",
    status: "available"
  },
  {
    id: 3,
    title: "Mixed Curry",
    quantity: "5 Kg",
    type: "mixed",
    suitableFor: "Both",
    postedBy: "Golden Spoon Catering",
    pickupTime: "8:00 PM",
    expiryTime: "10:00 PM",
    location: "Whitefield, Bangalore",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=250&fit=crop&auto=format",
    notes: "Contains both vegetarian and non-vegetarian items",
    status: "available"
  },
  {
    id: 5,
    title: "Dal and Rice",
    quantity: "8 Portions",
    type: "veg",
    suitableFor: "Humans",
    postedBy: "Community Kitchen",
    pickupTime: "6:00 PM",
    expiryTime: "8:00 PM",
    location: "HSR Layout, Bangalore",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=250&fit=crop&auto=format",
    notes: "Nutritious home-style meal",
    status: "available"
  },
  {
    id: 6,
    title: "Fruit Salad",
    quantity: "12 Bowls",
    type: "veg",
    suitableFor: "Both",
    postedBy: "Fresh Fruits Corner",
    pickupTime: "5:30 PM",
    expiryTime: "7:00 PM",
    location: "Brigade Road, Bangalore",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=250&fit=crop&auto=format",
    notes: "Fresh seasonal fruits, suitable for all ages",
    status: "available"
  },
  {
    id: 7,
    title: "Pizza Slices",
    quantity: "25 Slices",
    type: "veg",
    suitableFor: "Humans",
    postedBy: "Milano Pizzeria",
    pickupTime: "8:30 PM",
    expiryTime: "10:30 PM",
    location: "Commercial Street, Bangalore",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop&auto=format",
    notes: "Margherita and veggie supreme pizzas",
    status: "available"
  },
  {
    id: 8,
    title: "Mutton Curry",
    quantity: "6 Kg",
    type: "non-veg",
    suitableFor: "Humans",
    postedBy: "Nawab's Kitchen",
    pickupTime: "7:00 PM",
    expiryTime: "9:00 PM",
    location: "Fraser Town, Bangalore",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=250&fit=crop&auto=format",
    notes: "Spicy traditional mutton curry with rice",
    status: "available"
  },
  {
    id: 9,
    title: "Bread Rolls",
    quantity: "30 Pieces",
    type: "veg",
    suitableFor: "Humans",
    postedBy: "Baker's Delight",
    pickupTime: "6:45 PM",
    expiryTime: "8:45 PM",
    location: "Jayanagar, Bangalore",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=250&fit=crop&auto=format",
    notes: "Fresh baked rolls with butter",
    status: "available"
  },
  {
    id: 10,
    title: "Fish Curry",
    quantity: "4 Kg",
    type: "non-veg",
    suitableFor: "Humans",
    postedBy: "Coastal Kitchen",
    pickupTime: "7:15 PM",
    expiryTime: "9:15 PM",
    location: "Malleshwaram, Bangalore",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop&auto=format",
    notes: "Traditional fish curry with coconut",
    status: "available"
  },
  {
    id: 11,
    title: "Vegetable Soup",
    quantity: "15 Bowls",
    type: "veg",
    suitableFor: "Both",
    postedBy: "Healthy Bites Cafe",
    pickupTime: "6:15 PM",
    expiryTime: "8:15 PM",
    location: "RT Nagar, Bangalore",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=250&fit=crop&auto=format",
    notes: "Nutritious mixed vegetable soup",
    status: "available"
  },
  {
    id: 12,
    title: "Pasta Salad",
    quantity: "18 Portions",
    type: "veg",
    suitableFor: "Humans",
    postedBy: "Italian Corner",
    pickupTime: "7:45 PM",
    expiryTime: "9:45 PM",
    location: "Electronic City, Bangalore",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=250&fit=crop&auto=format",
    notes: "Cold pasta salad with fresh vegetables",
    status: "available"
  },
  {
    id: 13,
    title: "Paneer Butter Masala",
    quantity: "12 Portions",
    type: "veg",
    suitableFor: "Humans",
    postedBy: "Taste of India",
    pickupTime: "7:30 PM",
    expiryTime: "9:30 PM",
    location: "Basavanagudi, Bangalore",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=250&fit=crop&auto=format",
    notes: "Rich and creamy paneer curry with naan",
    status: "available"
  },
  {
    id: 14,
    title: "Grilled Chicken",
    quantity: "8 Portions",
    type: "non-veg",
    suitableFor: "Humans",
    postedBy: "BBQ Express",
    pickupTime: "8:15 PM",
    expiryTime: "10:15 PM",
    location: "Rajajinagar, Bangalore",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=250&fit=crop&auto=format",
    notes: "Juicy grilled chicken with herbs",
    status: "available"
  },
  {
    id: 15,
    title: "Vegetable Pulao",
    quantity: "20 Portions",
    type: "veg",
    suitableFor: "Humans",
    postedBy: "Home Delights",
    pickupTime: "6:45 PM",
    expiryTime: "8:45 PM",
    location: "Hebbal, Bangalore",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=250&fit=crop&auto=format",
    notes: "Aromatic basmati rice with mixed vegetables",
    status: "available"
  },
  {
    id: 16,
    title: "Idli Sambar",
    quantity: "25 Sets",
    type: "veg",
    suitableFor: "Humans",
    postedBy: "South Indian Kitchen",
    pickupTime: "6:00 PM",
    expiryTime: "8:00 PM",
    location: "Marathahalli, Bangalore",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=250&fit=crop&auto=format",
    notes: "Traditional South Indian breakfast with coconut chutney",
    status: "available"
  },
  {
    id: 17,
    title: "Mixed Vegetable Curry",
    quantity: "10 Kg",
    type: "veg",
    suitableFor: "Both",
    postedBy: "Green Garden Restaurant",
    pickupTime: "7:00 PM",
    expiryTime: "9:00 PM",
    location: "Yeshwanthpur, Bangalore",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=250&fit=crop&auto=format",
    notes: "Healthy mixed vegetable curry with roti",
    status: "available"
  },
  {
    id: 18,
    title: "Egg Fried Rice",
    quantity: "14 Portions",
    type: "non-veg",
    suitableFor: "Humans",
    postedBy: "Dragon Kitchen",
    pickupTime: "8:00 PM",
    expiryTime: "10:00 PM",
    location: "Banashankari, Bangalore",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=250&fit=crop&auto=format",
    notes: "Flavorful fried rice with scrambled eggs",
    status: "available"
  },
  {
    id: 20,
    title: "Rajma Rice",
    quantity: "16 Portions",
    type: "veg",
    suitableFor: "Humans",
    postedBy: "Punjab Kitchen",
    pickupTime: "7:15 PM",
    expiryTime: "9:15 PM",
    location: "Vijayanagar, Bangalore",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=250&fit=crop&auto=format",
    notes: "Kidney beans curry with steamed rice",
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
        title: "Donation Claimed Successfully",
        description: "Please ensure pickup before expiry time.",
      });
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'veg': return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-700';
      case 'non-veg': return 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-700';
      case 'mixed': return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-700';
      default: return 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'veg': return <Leaf className="h-3 w-3" />;
      case 'non-veg': return <Beef className="h-3 w-3" />;
      case 'mixed': return <Utensils className="h-3 w-3" />;
      default: return null;
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
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Available Food Near You
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Review available donations in your area and claim what's needed to serve your community.
          </p>
        </div>

        {/* Professional Filter Section */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="font-medium text-gray-700 dark:text-gray-200 text-sm">Filter by Type:</span>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-48 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                  <SelectValue placeholder="Select food type" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <SelectItem value="all" className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <div className="flex items-center gap-2">
                      <Utensils className="h-4 w-4" />
                      <span>All Types</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="veg" className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <div className="flex items-center gap-2">
                      <Leaf className="h-4 w-4 text-emerald-600" />
                      <span>Vegetarian</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="non-veg" className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <div className="flex items-center gap-2">
                      <Beef className="h-4 w-4 text-red-600" />
                      <span>Non-Vegetarian</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="mixed" className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <div className="flex items-center gap-2">
                      <Utensils className="h-4 w-4 text-amber-600" />
                      <span>Mixed</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Professional Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredDonations.map((donation) => (
            <Card 
              key={donation.id} 
              className="group hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="md:w-2/5 relative overflow-hidden">
                    <div className="relative h-48 md:h-full">
                      <img 
                        src={donation.image} 
                        alt={donation.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop&auto=format";
                        }}
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className={`${getTypeColor(donation.type)} font-medium px-2 py-1 border text-xs`}>
                          <div className="flex items-center gap-1">
                            {getTypeIcon(donation.type)}
                            <span>{donation.type === 'veg' ? 'VEG' : donation.type === 'non-veg' ? 'NON-VEG' : 'MIXED'}</span>
                          </div>
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/5 p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                          {donation.title}
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-600 dark:text-gray-400">Quantity:</span>
                          <span className="text-blue-600 dark:text-blue-400 font-medium">{donation.quantity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-600 dark:text-gray-400">Suitable for:</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-medium">{donation.suitableFor}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
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
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <MapPin className="h-4 w-4" />
                        <span>{donation.location}</span>
                      </div>
                      
                      {donation.notes && (
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border-l-4 border-blue-400 dark:border-blue-500">
                          <p className="text-sm text-blue-800 dark:text-blue-200">
                            <strong>Note:</strong> {donation.notes}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      onClick={() => handleClaim(donation.id)}
                      className="mt-4 w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-medium py-2.5 rounded-md transition-colors duration-200"
                    >
                      Claim This Donation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* My Claimed Donations Section - Updated Layout */}
      {claimedDonations.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-100">
            My Claimed Donations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {claimedDonations.map((donation) => (
              <Card key={`claimed-${donation.id}`} className="border-l-4 border-l-amber-500 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 hover:shadow-md transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={donation.image} 
                        alt={donation.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop&auto=format";
                        }}
                      />
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{donation.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <strong>Quantity:</strong> {donation.quantity}
                          </p>
                        </div>
                        <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 px-3 py-1 text-xs">
                          Pending Pickup
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <p><strong>Donor:</strong> {donation.postedBy}</p>
                        <p><strong>Location:</strong> {donation.location}</p>
                      </div>
                      
                      <div className="flex justify-between items-center pt-2">
                        <p className="text-sm text-red-600 dark:text-red-400 font-medium">
                          Expires: {donation.expiryTime}
                        </p>
                        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2">
                          Confirm Pickup
                        </Button>
                      </div>
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
