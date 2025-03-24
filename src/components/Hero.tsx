
import { ChevronDown } from 'lucide-react';
import RotatingBanner from './RotatingBanner';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <RotatingBanner />
      <div className="absolute inset-0 bg-grain opacity-5 pointer-events-none"></div>
      <div className="container mx-auto container-padding pt-20 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-up">
          <div className="bg-sanika-blue/10 text-white text-sm px-4 py-1 rounded-full mb-6 backdrop-blur-sm">
            Established 2009 | Pune, India
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Your Trusted Partner for 
            <span className="text-white block mt-2">Precision Plastic Solutions</span>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Sanika Plast Pvt. Ltd. provides innovative plastic components for major brands
            like Haier, Godrej, and Tata. Delivering excellence in plastic injection molding since 2009.
          </p>
          <a
            href="#products"
            className="btn-primary flex items-center gap-2"
          >
            Explore Our Work
            <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
