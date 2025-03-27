
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ReportForm from '@/components/report/ReportForm';
import { AlertTriangle } from 'lucide-react';

export default function Report() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = 'Report Animal Cruelty - Paws Project';
    window.scrollTo(0, 0);
    
    // Trigger animations after a small delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className={`inline-block py-1 px-3 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <AlertTriangle size={14} className="inline mr-1" /> Report
              </span>
              <h1 className={`text-3xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                Report Animal Cruelty
              </h1>
              <p className={`text-muted-foreground text-lg mb-8 transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                If you witness animal abuse or neglect, please report it immediately. 
                Your action could save an animal's life. All reports are confidential.
              </p>
            </div>
          </div>
        </section>

        {/* Report Form */}
        <section className="py-12">
          <div className="container px-6">
            <div className="max-w-2xl mx-auto">
              <ReportForm />
            </div>

            <div className="max-w-3xl mx-auto mt-12 p-6 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Important Information</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>For emergencies where an animal's life is in immediate danger, please call your local animal control or emergency services first.</li>
                <li>Submit as much detail as possible to help our investigation team.</li>
                <li>Photos and videos are extremely helpful evidence, but only take them if it's safe to do so.</li>
                <li>Your identity will be kept confidential unless you specify otherwise.</li>
                <li>We will follow up on all credible reports and coordinate with local authorities when necessary.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
