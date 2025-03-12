
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
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
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
