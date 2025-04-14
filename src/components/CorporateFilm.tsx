
import React from 'react';
import { Play } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface CorporateFilmProps {
  className?: string;
}

const CorporateFilm: React.FC<CorporateFilmProps> = ({ className = '' }) => {
  const isMobile = useIsMobile();
  
  const openVideoModal = () => {
    // For simplicity, we're just opening a YouTube video in a new tab
    // In a real implementation, you might want to use a modal/dialog component
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };

  return (
    <section className={`section-padding bg-white ${className}`}>
      <div className="container mx-auto container-padding">
        <div className="text-center mb-10">
          <h2 className="section-heading">Corporate Film</h2>
          <div className="accent-bar mx-auto"></div>
          <p className="text-sanika-gray text-lg max-w-3xl mx-auto mb-8">
            Take a virtual tour of our state-of-the-art manufacturing facility and learn about our innovative processes.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
            onClick={openVideoModal}
          >
            {/* Video thumbnail */}
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="/lovable-uploads/e538cc7a-9396-4f4a-9ab8-21e287b093a5.png" 
                alt="Sanika Plast Corporate Film" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-sanika-blue bg-opacity-80 rounded-full p-4 transform transition-transform duration-300 group-hover:scale-110">
                <Play className="h-8 w-8 text-white" fill="white" />
              </div>
            </div>
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-sanika-darkgray to-transparent opacity-40"></div>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p className="font-semibold text-lg md:text-xl">Experience the Sanika Advantage</p>
            </div>
          </div>
          
          <div className="mt-6 text-sm text-sanika-gray text-center">
            Click to watch our corporate film
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateFilm;
