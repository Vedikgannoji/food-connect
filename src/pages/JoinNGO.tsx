
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function JoinNGO() {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    registrationNumber: '',
    capacity: '',
    address: '',
    description: '',
    serviceArea: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    document.title = 'Join as NGO - Food Connect';
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "NGO Registration Submitted!",
      description: "We'll verify your organization and contact you within 48 hours.",
    });
    // Reset form
    setFormData({
      organizationName: '',
      contactName: '',
      email: '',
      phone: '',
      registrationNumber: '',
      capacity: '',
      address: '',
      description: '',
      serviceArea: ''
    });
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
                <h1 className="text-4xl font-bold mb-4">Join as an NGO Partner</h1>
                <p className="text-xl text-muted-foreground">
                  Connect with food donors and help distribute surplus food to those in need.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>NGO Registration</CardTitle>
                  <CardDescription>
                    Register your NGO to start receiving food donations through our platform.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="organizationName">Organization Name *</Label>
                      <Input
                        id="organizationName"
                        value={formData.organizationName}
                        onChange={(e) => handleInputChange('organizationName', e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contactName">Contact Person *</Label>
                        <Input
                          id="contactName"
                          value={formData.contactName}
                          onChange={(e) => handleInputChange('contactName', e.target.value)}
                          required
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
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="registrationNumber">Registration Number</Label>
                        <Input
                          id="registrationNumber"
                          value={formData.registrationNumber}
                          onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                          placeholder="NGO/Trust registration number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="capacity">Daily Serving Capacity *</Label>
                        <Select value={formData.capacity} onValueChange={(value) => handleInputChange('capacity', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select capacity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="50-100">50-100 people</SelectItem>
                            <SelectItem value="100-250">100-250 people</SelectItem>
                            <SelectItem value="250-500">250-500 people</SelectItem>
                            <SelectItem value="500+">500+ people</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="serviceArea">Service Area *</Label>
                        <Input
                          id="serviceArea"
                          value={formData.serviceArea}
                          onChange={(e) => handleInputChange('serviceArea', e.target.value)}
                          placeholder="e.g., Central Mumbai, South Delhi"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Organization Address *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Complete address with landmark"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">About Your Organization *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Tell us about your mission, the communities you serve, and your experience with food distribution"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Submit NGO Registration
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
