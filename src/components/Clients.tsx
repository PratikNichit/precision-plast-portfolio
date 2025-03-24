
import { useEffect, useState } from 'react';

// Updated client list with real logo URLs instead of text placeholders
const clientList = [
  { name: 'Haier', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Haier_logo.svg/2560px-Haier_logo.svg.png' },
  { name: 'Godrej', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Godrej_Logo.svg/2560px-Godrej_Logo.svg.png' },
  { name: 'Tata', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/2560px-Tata_logo.svg.png' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png' },
  { name: 'LG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png' },
  { name: 'Reliance', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png' },
  { name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bosch-logo.svg/2560px-Bosch-logo.svg.png' },
  { name: 'Honda', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png' },
  { name: 'Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mahindra_Rise_Logo.svg/2560px-Mahindra_Rise_Logo.svg.png' },
  { name: 'Bajaj', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Bajaj_Auto_logo.svg/1280px-Bajaj_Auto_logo.svg.png' },
];

const Clients = () => {
  const [visibleClients, setVisibleClients] = useState(clientList);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation effect to shuffle the clients every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        // Create a shuffled version of the client list for visual interest
        const shuffled = [...clientList].sort(() => Math.random() - 0.5);
        setVisibleClients(shuffled);
        setTimeout(() => setIsAnimating(false), 300);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clients" className="section-padding bg-gradient-to-b from-white to-sanika-lightgray">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading">Our Clients</h2>
          <div className="accent-bar mx-auto"></div>
          <p className="text-sanika-gray text-lg max-w-3xl mx-auto">
            We are proud to work with some of the most respected brands across industries,
            providing them with high-quality plastic components that meet their exacting standards.
          </p>
        </div>
        
        <div className="relative overflow-hidden py-6">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sanika-blue to-transparent opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sanika-blue to-transparent opacity-20"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
            {visibleClients.map((client, index) => (
              <div 
                key={`${client.name}-${index}`}
                className={`flex items-center justify-center p-6 bg-white rounded-lg shadow-soft hover:shadow-md transition-all duration-500 transform hover:translate-y-[-5px] ${
                  isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  animation: `fade-up 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-sanika-gray italic">
            "We value the trusted partnerships we've built with our clients over the years, delivering consistent quality and reliability."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
