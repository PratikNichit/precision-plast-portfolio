
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Facilities', id: 'facilities' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-sm py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <span className="text-sanika-blue text-2xl font-bold tracking-tight">SANIKA PLAST</span>
          </a>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sanika-darkgray hover:text-sanika-blue transition-colors duration-200 font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          <button 
            className="md:hidden text-sanika-darkgray hover:text-sanika-blue transition-colors" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-white z-50 animate-fade-in">
          <div className="flex flex-col items-center py-8 space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sanika-darkgray hover:text-sanika-blue transition-colors text-xl font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
