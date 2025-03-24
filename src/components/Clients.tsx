
import { useState, useEffect } from 'react';

const clientLogos = [
  { name: 'Haier', logo: 'https://placehold.co/200x100/e2e8f0/1F3A93?text=Haier' },
  { name: 'Godrej', logo: 'https://placehold.co/200x100/e2e8f0/1F3A93?text=Godrej' },
  { name: 'Tata', logo: 'https://placehold.co/200x100/e2e8f0/1F3A93?text=Tata' },
  { name: 'Samsung', logo: 'https://placehold.co/200x100/e2e8f0/1F3A93?text=Samsung' },
  { name: 'LG', logo: 'https://placehold.co/200x100/e2e8f0/1F3A93?text=LG' },
  { name: 'Reliance', logo: 'https://placehold.co/200x100/e2e8f0/1F3A93?text=Reliance' },
  { name: 'Bosch', logo: 'https://placehold.co/200x100/e2e8f0/1F3A93?text=Bosch' },
  { name: 'Honda', logo: 'https://placehold.co/200x100/e2e8f0/1F3A93?text=Honda' },
  { name: 'Mahindra', logo: 'https://placehold.co/200x100/e2e8f0/1F3A93?text=Mahindra' },
  { name: 'Bajaj', logo: 'https://placehold.co/200x100/e2e8f0/1F3A93?text=Bajaj' },
];

const Clients = () => {
  return (
    <section id="clients" className="py-16 bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Clients</h2>
          <div className="accent-bar mx-auto"></div>
          <p className="text-sanika-gray text-lg max-w-3xl mx-auto">
            We are proud to partner with industry leaders who trust our quality and precision.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
          {clientLogos.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 glass-panel hover:shadow-md transition-all duration-300"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
