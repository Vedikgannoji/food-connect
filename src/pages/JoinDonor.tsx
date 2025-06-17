
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

export default function JoinDonor() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    donorType: '',
    organization: '',
    address: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { signUp } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Join as Donor - Food Connect';
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create auth user with proper metadata
      const { error: authError } = await signUp(
        formData.email,
        formData.password,
        formData.fullName,
        'donor'
      );

      if (authError) {
        toast({
          title: "Registration Failed",
          description: authError.message,
          variant: "destructive",
        });
        return;
      }

      // Get the current user after signup
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        // Update donor profile with additional information
        const { error: profileError } = await supabase
          .from('donor_profiles')
          .update({
            phone: formData.phone,
            donor_type: formData.donorType,
            organization: formData.organization,
            address: formData.address,
            description: formData.description
          })
          .eq('id', user.id);

        if (profileError) {
          console.error('Profile update error:', profileError);
        }
      }

      toast({
        title: "Account Created Successfully!",
        description: "Please login using your credentials to continue.",
      });

      // Navigate to login page
      setTimeout(() => navigate('/login'), 2000);

    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-20">
          <div className="container px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Join as a Food Donor</h1>
                <p className="text-xl text-muted-foreground">
                  Start making a difference by donating surplus food to those in need.
                </p>
              </div>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>Donor Registration</CardTitle>
                  <CardDescription>
                    Register as a food donor to start contributing to our mission of ending food waste.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          required
                          className="hover:border-blue-400 focus:border-blue-600 transition-colors"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="hover:border-blue-400 focus:border-blue-600 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="password">Password *</Label>
                      <Input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        required
                        minLength={6}
                        className="hover:border-blue-400 focus:border-blue-600 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                          className="hover:border-blue-400 focus:border-blue-600 transition-colors"
                        />
                      </div>
                      <div>
                        <Label htmlFor="donorType">Donor Type *</Label>
                        <Select value={formData.donorType} onValueChange={(value) => handleInputChange('donorType', value)}>
                          <SelectTrigger className="hover:border-blue-400 focus:border-blue-600 transition-colors">
                            <SelectValue placeholder="Select donor type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="individual">Individual</SelectItem>
                            <SelectItem value="restaurant">Restaurant</SelectItem>
                            <SelectItem value="grocery-store">Grocery Store</SelectItem>
                            <SelectItem value="catering">Catering Service</SelectItem>
                            <SelectItem value="event-organizer">Event Organizer</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="organization">Organization/Business Name</Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        placeholder="Leave blank if individual donor"
                        className="hover:border-blue-400 focus:border-blue-600 transition-colors"
                      />
                    </div>

                    <div>
                      <Label htmlFor="address">Address *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Complete address for food pickup"
                        required
                        className="hover:border-blue-400 focus:border-blue-600 transition-colors"
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">About You/Your Organization</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Tell us about yourself or your organization and your motivation to donate food"
                        className="hover:border-blue-400 focus:border-blue-600 transition-colors"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full hover:scale-105 transition-all duration-300 bg-blue-600 hover:bg-blue-700" 
                      disabled={loading}
                    >
                      {loading ? 'Creating Account...' : 'Create Donor Account'}
                    </Button>
                  </form>
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
