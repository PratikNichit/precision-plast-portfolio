
import { ChevronDown } from 'lucide-react';
import RotatingBanner from './RotatingBanner';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <RotatingBanner />
      <div className="absolute inset-0 bg-grain opacity-5 pointer-events-none"></div>
      <div className="container mx-auto container-padding pt-16 md:pt-20 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div 
            className="bg-sanika-blue/10 text-white text-xs md:text-sm px-4 py-1 rounded-full mb-4 md:mb-6 backdrop-blur-sm animate-fade-in"
          >
            Established 2009 | Pune, India
          </div>
          <h1 
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            Your Trusted Partner for 
            <span className="text-white block mt-1 md:mt-2">Precision Plastic Solutions</span>
          </h1>
          <p 
            className="text-white text-base md:text-xl max-w-2xl mb-6 md:mb-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            Sanika Plast Pvt. Ltd. provides innovative plastic components for major brands
            like Haier, Godrej, and Tata. Delivering excellence in plastic injection molding since 2009.
          </p>
          <a
            href="#products"
            className="btn-primary flex items-center gap-2 hover:translate-y-[-5px] transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            Explore Our Work
            <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 md:h-8 md:w-8 text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
