
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, Clock, CheckCircle, Users } from 'lucide-react';

const recentDonations = [
  {
    id: 1,
    title: "Fresh Vegetable Mix",
    quantity: "15 kg",
    status: "picked-up",
    ngo: "Food For All Foundation",
    date: "2024-01-15",
    time: "14:30"
  },
  {
    id: 2,
    title: "Surplus Bread & Pastries",
    quantity: "8 kg",
    status: "pending",
    ngo: "Hope Kitchen",
    date: "2024-01-16",
    time: "16:00"
  },
  {
    id: 3,
    title: "Cooked Rice & Dal",
    quantity: "25 servings",
    status: "claimed",
    ngo: "Community Care NGO",
    date: "2024-01-16",
    time: "18:30"
  }
];

export default function DonorDashboard() {
  useEffect(() => {
    document.title = 'Donor Dashboard - Food Connect';
    window.scrollTo(0, 0);
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'picked-up':
        return <Badge className="bg-green-100 text-green-800">Picked Up</Badge>;
      case 'claimed':
        return <Badge className="bg-blue-100 text-blue-800">Claimed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12">
          <div className="container px-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Donor Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Manage your food donations and track their impact.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-paws-green/10 rounded-lg">
                      <Users className="h-6 w-6 text-paws-green" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-muted-foreground">Total Donations</p>
                      <p className="text-2xl font-bold">24</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-muted-foreground">Successfully Picked Up</p>
                      <p className="text-2xl font-bold">18</p>
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
                      <p className="text-sm font-medium text-muted-foreground">Pending Pickup</p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-muted-foreground">People Fed</p>
                      <p className="text-2xl font-bold">342</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="flex items-center">
                <PlusCircle className="mr-2 h-4 w-4" />
                Post New Donation
              </Button>
              <Button variant="outline">View All Donations</Button>
            </div>

            {/* Recent Donations */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Donations</CardTitle>
                <CardDescription>
                  Track the status of your latest food donations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDonations.map((donation) => (
                    <div key={donation.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium">{donation.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {donation.quantity} • {donation.ngo}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {donation.date} at {donation.time}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        {getStatusBadge(donation.status)}
                        <Button variant="ghost" size="sm">
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
