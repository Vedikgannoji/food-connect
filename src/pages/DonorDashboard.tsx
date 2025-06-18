
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DonorForm from '@/components/donor/DonorForm';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, CheckCircle, Clock, Package } from 'lucide-react';

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
        {/* Hero Section with Background */}
        <section className="relative py-20 bg-gradient-to-br from-paws-green/10 to-paws-brown/10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="container px-6 relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Welcome to Your Donor Dashboard</h1>
              <p className="text-xl text-muted-foreground">Make a difference by sharing your surplus food with those in need.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground mb-1">Total Donations</p>
                      <p className="text-2xl font-bold">24</p>
                    </div>
                    <div className="p-3 bg-paws-green/10 rounded-lg">
                      <Package className="h-6 w-6 text-paws-green" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground mb-1">Successfully Picked Up</p>
                      <p className="text-2xl font-bold">18</p>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground mb-1">Pending Pickup</p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <Clock className="h-6 w-6 text-yellow-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground mb-1">People Fed</p>
                      <p className="text-2xl font-bold">342</p>
                    </div>
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Form Section */}
        <section className="py-20">
          <div className="container px-6">
            <DonorForm />
          </div>
        </section>

        {/* Recent Donations Section */}
        <section className="py-20 bg-muted">
          <div className="container px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Your Recent Donations</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {recentDonations.map((donation) => (
                <Card key={donation.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{donation.title}</h3>
                        <p className="text-muted-foreground">
                          {donation.quantity} • {donation.ngo}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {donation.date} at {donation.time}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        {getStatusBadge(donation.status)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
