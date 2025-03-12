
const Clients = () => {
  const clients = [
    'Haier', 'Godrej', 'Tata', 'Mahindra', 'John Deere', 'Whirlpool', 'Carrier'
  ];

  return (
    <section id="clients" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="section-heading">Clients & Partners</h2>
          <div className="accent-bar mx-auto"></div>
          <p className="text-sanika-gray text-lg max-w-3xl mx-auto">
            We work with leading brands across the automotive and white goods industries,
            delivering quality components that meet their exacting standards.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="glass-panel flex items-center justify-center p-10 aspect-square transition-all duration-300 hover:shadow-md"
            >
              <p className="text-2xl font-bold text-sanika-blue">{client}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-sanika-gray text-lg italic max-w-3xl mx-auto">
            "Trusted by industry leaders for our commitment to quality,
            innovation, and reliable delivery."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
