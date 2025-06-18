
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { User, Mail, Phone, MapPin, Building, Users, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DonorProfile {
  phone?: string;
  organization?: string;
  donor_type?: string;
  address?: string;
  description?: string;
}

interface NGOProfile {
  contact_name: string;
  organization_name: string;
  phone?: string;
  registration_number?: string;
  capacity?: string;
  service_area?: string;
  address?: string;
  description?: string;
}

export default function Profile() {
  const { user, userType, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [profile, setProfile] = useState<DonorProfile | NGOProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Profile - Food Connect';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchProfile = async () => {
      try {
        if (userType === 'donor') {
          const { data, error } = await supabase
            .from('donor_profiles')
            .select('*')
            .eq('id', user.id)
            .single();
          
          if (error && error.code !== 'PGRST116') {
            console.error('Error fetching donor profile:', error);
          } else {
            setProfile(data);
          }
        } else if (userType === 'ngo') {
          const { data, error } = await supabase
            .from('ngo_profiles')
            .select('*')
            .eq('id', user.id)
            .single();
          
          if (error && error.code !== 'PGRST116') {
            console.error('Error fetching NGO profile:', error);
          } else {
            setProfile(data);
          }
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user, userType, navigate]);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed Out",
        description: "You have been successfully signed out.",
      });
      navigate('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container px-6 py-20">
            <div className="text-center">Loading...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isDonor = userType === 'donor';
  const donorProfile = profile as DonorProfile;
  const ngoProfile = profile as NGOProfile;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-20">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Profile</h1>
                <p className="text-xl text-muted-foreground">
                  Manage your account information and preferences
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Avatar and Basic Info */}
                <div className="lg:col-span-1">
                  <Card>
                    <CardHeader className="text-center">
                      <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-paws-green/10 flex items-center justify-center">
                        <User className="w-16 h-16 text-paws-green" />
                      </div>
                      <CardTitle className="text-xl">{user?.user_metadata?.full_name || 'User'}</CardTitle>
                      <p className="text-muted-foreground capitalize">{userType}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{user?.email}</span>
                      </div>
                      <Button 
                        onClick={handleSignOut}
                        variant="outline"
                        className="w-full hover:scale-105 transition-all duration-300"
                      >
                        Sign Out
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Detailed Profile Information */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        {isDonor ? 'Donor Information' : 'NGO Information'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {isDonor ? (
                        // Donor Profile Fields
                        <>
                          {donorProfile?.phone && (
                            <div className="flex items-center space-x-3">
                              <Phone className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">Phone</p>
                                <p className="text-muted-foreground">{donorProfile.phone}</p>
                              </div>
                            </div>
                          )}
                          
                          {donorProfile?.organization && (
                            <div className="flex items-center space-x-3">
                              <Building className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">Organization</p>
                                <p className="text-muted-foreground">{donorProfile.organization}</p>
                              </div>
                            </div>
                          )}
                          
                          {donorProfile?.donor_type && (
                            <div className="flex items-center space-x-3">
                              <Users className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">Donor Type</p>
                                <p className="text-muted-foreground capitalize">{donorProfile.donor_type}</p>
                              </div>
                            </div>
                          )}
                          
                          {donorProfile?.address && (
                            <div className="flex items-start space-x-3">
                              <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                              <div>
                                <p className="font-medium">Address</p>
                                <p className="text-muted-foreground">{donorProfile.address}</p>
                              </div>
                            </div>
                          )}
                          
                          {donorProfile?.description && (
                            <div className="flex items-start space-x-3">
                              <FileText className="h-5 w-5 text-muted-foreground mt-1" />
                              <div>
                                <p className="font-medium">Description</p>
                                <p className="text-muted-foreground">{donorProfile.description}</p>
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        // NGO Profile Fields
                        <>
                          <div className="flex items-center space-x-3">
                            <Building className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">Organization Name</p>
                              <p className="text-muted-foreground">{ngoProfile?.organization_name}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <User className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">Contact Person</p>
                              <p className="text-muted-foreground">{ngoProfile?.contact_name}</p>
                            </div>
                          </div>
                          
                          {ngoProfile?.phone && (
                            <div className="flex items-center space-x-3">
                              <Phone className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">Phone</p>
                                <p className="text-muted-foreground">{ngoProfile.phone}</p>
                              </div>
                            </div>
                          )}
                          
                          {ngoProfile?.registration_number && (
                            <div className="flex items-center space-x-3">
                              <FileText className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">Registration Number</p>
                                <p className="text-muted-foreground">{ngoProfile.registration_number}</p>
                              </div>
                            </div>
                          )}
                          
                          {ngoProfile?.capacity && (
                            <div className="flex items-center space-x-3">
                              <Users className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">Daily Capacity</p>
                                <p className="text-muted-foreground">{ngoProfile.capacity}</p>
                              </div>
                            </div>
                          )}
                          
                          {ngoProfile?.service_area && (
                            <div className="flex items-center space-x-3">
                              <MapPin className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">Service Area</p>
                                <p className="text-muted-foreground">{ngoProfile.service_area}</p>
                              </div>
                            </div>
                          )}
                          
                          {ngoProfile?.address && (
                            <div className="flex items-start space-x-3">
                              <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                              <div>
                                <p className="font-medium">Address</p>
                                <p className="text-muted-foreground">{ngoProfile.address}</p>
                              </div>
                            </div>
                          )}
                          
                          {ngoProfile?.description && (
                            <div className="flex items-start space-x-3">
                              <FileText className="h-5 w-5 text-muted-foreground mt-1" />
                              <div>
                                <p className="font-medium">About Organization</p>
                                <p className="text-muted-foreground">{ngoProfile.description}</p>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
