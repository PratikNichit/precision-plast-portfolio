
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Sanika Plast - Precision Plastic Solutions";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;
