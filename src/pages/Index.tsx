
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Features from '@/components/home/Features';

export default function Index() {
  useEffect(() => {
    document.title = 'Food Connect - Bridge Hunger. Save Food. Connect Lives.';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
