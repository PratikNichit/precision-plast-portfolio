
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Products from '@/components/Products';
import Footer from '@/components/Footer';

const ProductsPage = () => {
  useEffect(() => {
    document.title = "Products - Sanika Plast";
    window.scrollTo(0, 0);
    
    // Initialize animations for this page
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
      <div className="pt-20 md:pt-24">
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
