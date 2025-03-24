
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
  return (
    <section id="clients" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Clients</h2>
          <div className="accent-bar mx-auto"></div>
          <p className="text-sanika-gray text-lg max-w-3xl mx-auto">
            We are proud to work with some of the most respected brands across industries,
            providing them with high-quality plastic components.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {clientList.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-soft hover:shadow-md transition-all duration-300"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
