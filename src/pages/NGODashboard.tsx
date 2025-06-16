
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Package, Users } from 'lucide-react';

const availableDonations = [
  {
    id: 1,
    title: "Fresh Fruits & Vegetables",
    donor: "Green Grocery Store",
    quantity: "20 kg",
    distance: "1.2 km",
    expiryTime: "2 hours",
    description: "Mixed seasonal fruits and vegetables, good quality"
  },
  {
    id: 2,
    title: "Surplus Cooked Meals",
    donor: "Spice Route Restaurant",
    quantity: "50 servings",
    distance: "0.8 km",
    expiryTime: "4 hours",
    description: "Indian vegetarian meals, ready to serve"
  },
  {
    id: 3,
    title: "Bakery Items",
    donor: "Daily Bread Bakery",
    quantity: "12 kg",
    distance: "2.1 km",
    expiryTime: "6 hours",
    description: "Bread, pastries, and baked goods from today"
  }
];

export default function NGODashboard() {
  useEffect(() => {
    document.title = 'NGO Dashboard - Food Connect';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12">
          <div className="container px-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">NGO Dashboard</h1>
              <p className="text-muted-foreground">Find and claim food donations to help your community.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-paws-green/10 rounded-lg">
                      <Package className="h-6 w-6 text-paws-green" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-muted-foreground">Food Collected</p>
                      <p className="text-2xl font-bold">156 kg</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-muted-foreground">People Served</p>
                      <p className="text-2xl font-bold">1,245</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Clock className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-muted-foreground">Pending Pickups</p>
                      <p className="text-2xl font-bold">4</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Package className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-muted-foreground">This Month</p>
                      <p className="text-2xl font-bold">45 kg</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Available Donations */}
            <Card>
              <CardHeader>
                <CardTitle>Available Food Donations</CardTitle>
                <CardDescription>
                  Claim food donations from nearby donors before they expire
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {availableDonations.map((donation) => (
                    <div key={donation.id} className="border rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{donation.title}</h3>
                          <p className="text-muted-foreground">{donation.donor}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="mb-2">
                            <Clock className="w-3 h-3 mr-1" />
                            {donation.expiryTime} left
                          </Badge>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {donation.distance} away
                          </p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-medium mb-1">Quantity: {donation.quantity}</p>
                        <p className="text-sm text-muted-foreground">{donation.description}</p>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1">
                          Claim Donation
                        </Button>
                        <Button variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
