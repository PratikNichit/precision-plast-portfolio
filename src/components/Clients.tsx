
import { useEffect, useState } from 'react';

const clientList = [
  { name: 'Haier', logo: 'https://placehold.co/200x80/e2e8f0/1F3A93?text=Haier' },
  { name: 'Godrej', logo: 'https://placehold.co/200x80/e2e8f0/1F3A93?text=Godrej' },
  { name: 'Tata', logo: 'https://placehold.co/200x80/e2e8f0/1F3A93?text=Tata' },
  { name: 'Samsung', logo: 'https://placehold.co/200x80/e2e8f0/1F3A93?text=Samsung' },
  { name: 'LG', logo: 'https://placehold.co/200x80/e2e8f0/1F3A93?text=LG' },
  { name: 'Reliance', logo: 'https://placehold.co/200x80/e2e8f0/1F3A93?text=Reliance' },
  { name: 'Bosch', logo: 'https://placehold.co/200x80/e2e8f0/1F3A93?text=Bosch' },
  { name: 'Honda', logo: 'https://placehold.co/200x80/e2e8f0/1F3A93?text=Honda' },
  { name: 'Mahindra', logo: 'https://placehold.co/200x80/e2e8f0/1F3A93?text=Mahindra' },
  { name: 'Bajaj', logo: 'https://placehold.co/200x80/e2e8f0/1F3A93?text=Bajaj' },
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
        <div className="text-center mb-16">
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
                className={`flex items-center justify-center p-6 bg-white rounded-lg shadow-soft hover:shadow-md transition-all duration-500 transform ${
                  isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-14 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sanika-gray italic">
            "We value the trusted partnerships we've built with our clients over the years, delivering consistent quality and reliability."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
