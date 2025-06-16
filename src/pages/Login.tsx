
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [donorData, setDonorData] = useState({ email: '', password: '' });
  const [ngoData, setNgoData] = useState({ email: '', password: '' });
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Login - Food Connect';
    window.scrollTo(0, 0);
  }, []);

  const handleDonorLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful!",
      description: "Welcome back! Redirecting to your dashboard...",
    });
    setTimeout(() => navigate('/donor-dashboard'), 1500);
  };

  const handleNGOLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful!",
      description: "Welcome back! Redirecting to your dashboard...",
    });
    setTimeout(() => navigate('/ngo-dashboard'), 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-20">
          <div className="container px-6">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-4">Welcome Back</h1>
                <p className="text-muted-foreground">
                  Sign in to continue your food rescue journey
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Login to Food Connect</CardTitle>
                  <CardDescription>
                    Choose your account type to sign in
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="donor" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="donor">Food Donor</TabsTrigger>
                      <TabsTrigger value="ngo">NGO Partner</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="donor">
                      <form onSubmit={handleDonorLogin} className="space-y-4">
                        <div>
                          <Label htmlFor="donor-email">Email</Label>
                          <Input
                            id="donor-email"
                            type="email"
                            value={donorData.email}
                            onChange={(e) => setDonorData(prev => ({ ...prev, email: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="donor-password">Password</Label>
                          <Input
                            id="donor-password"
                            type="password"
                            value={donorData.password}
                            onChange={(e) => setDonorData(prev => ({ ...prev, password: e.target.value }))}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          Sign In as Donor
                        </Button>
                      </form>
                    </TabsContent>
                    
                    <TabsContent value="ngo">
                      <form onSubmit={handleNGOLogin} className="space-y-4">
                        <div>
                          <Label htmlFor="ngo-email">Email</Label>
                          <Input
                            id="ngo-email"
                            type="email"
                            value={ngoData.email}
                            onChange={(e) => setNgoData(prev => ({ ...prev, email: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="ngo-password">Password</Label>
                          <Input
                            id="ngo-password"
                            type="password"
                            value={ngoData.password}
                            onChange={(e) => setNgoData(prev => ({ ...prev, password: e.target.value }))}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          Sign In as NGO
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-6 text-center text-sm text-muted-foreground">
                    <p>Don't have an account?</p>
                    <div className="flex justify-center gap-4 mt-2">
                      <Button variant="link" onClick={() => navigate('/join-donor')}>
                        Join as Donor
                      </Button>
                      <Button variant="link" onClick={() => navigate('/join-ngo')}>
                        Join as NGO
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
