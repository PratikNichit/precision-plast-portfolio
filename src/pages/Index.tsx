
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Facilities from '@/components/Facilities';
import Clients from '@/components/Clients';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Sanika Plast - Precision Plastic Solutions";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Facilities />
      <Clients />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
