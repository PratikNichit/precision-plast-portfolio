
import { useState, useEffect } from 'react';

const bannerImages = [
  'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e',  // White building
  'https://images.unsplash.com/photo-1518005020951-eccb494ad742',  // Modern architecture
  'https://images.unsplash.com/photo-1486718448742-163732cd1544',  // Minimalist structure
  'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a',  // Gray building low angle
];

const RotatingBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {bannerImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 bg-cover bg-center bg-no-repeat ${
            index === currentImageIndex ? 'opacity-70' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-sanika-blue bg-opacity-80 mix-blend-multiply" />
    </div>
  );
};

export default RotatingBanner;
