
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FoodCards from '@/components/ngo/FoodCards';
import { Card, CardContent } from '@/components/ui/card';
import { Package, Users, Clock, CheckCircle } from 'lucide-react';

export default function NGODashboard() {
  useEffect(() => {
    document.title = 'NGO Dashboard - Food Connect';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section with Background */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container px-6 relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 text-white">NGO Dashboard</h1>
              <p className="text-xl text-gray-100">Connect with food donors and help serve your community.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-paws-green/10 rounded-lg">
                      <Package className="h-6 w-6 text-paws-green" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-muted-foreground">🧺 Donations Claimed</p>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-muted-foreground">🧒 People/Animals Helped</p>
                      <p className="text-2xl font-bold">105+</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <Clock className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-muted-foreground">⏳ Pickups Pending</p>
                      <p className="text-2xl font-bold">2</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-muted-foreground">✅ Pickups Completed</p>
                      <p className="text-2xl font-bold">10</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container px-6">
            <FoodCards />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
