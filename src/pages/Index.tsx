
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Products from '@/components/Products';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Sanika Plast - Precision Plastic Solutions";
    
    // Updated scroll animation effect with better reliability
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.add('translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Select all sections that should be animated on scroll
    const animateSections = document.querySelectorAll('.animate-on-scroll');
    
    animateSections.forEach(section => {
      section.classList.add('opacity-0');
      section.classList.add('translate-y-10');
      section.classList.add('transition-all');
      section.classList.add('duration-700');
      section.classList.add('ease-out');
      observer.observe(section);
    });
    
    return () => {
      animateSections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Products />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
