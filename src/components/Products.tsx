
import { useState } from 'react';
import { Car, Home, Palette } from 'lucide-react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('automotive');

  const tabData = {
    automotive: {
      title: 'Automotive Components',
      description: 'High-quality plastic components for the automotive industry with precision engineering and durability.',
      items: ['Fuel opening lids', 'Air vents', 'Car interior parts', 'Dashboard components', 'Console trims']
    },
    appliances: {
      title: 'Home Appliances',
      description: 'Reliable plastic parts for leading home appliance manufacturers designed for longevity and performance.',
      items: ['Washing machine parts', 'Refrigerator components', 'Air conditioner parts', 'Kitchen appliance housings', 'Control panel frames']
    },
    capabilities: {
      title: 'Manufacturing Capabilities',
      description: 'Advanced manufacturing processes and material expertise to meet diverse industry requirements.',
      items: ['In-Mold Decoration (IMD)', 'ABS, Nylon, PP materials', 'Precision molding', 'Surface finishing', 'Assembly services']
    }
  };

  return (
    <section id="products" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="section-heading">Products & Services</h2>
          <div className="accent-bar mx-auto"></div>
          <p className="text-sanika-gray text-lg max-w-3xl mx-auto">
            We specialize in manufacturing high-quality plastic components for diverse industries,
            utilizing advanced molding technologies and premium materials.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-10">
          <button
            onClick={() => setActiveTab('automotive')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg mr-4 mb-4 transition-all duration-200 ${
              activeTab === 'automotive'
                ? 'bg-sanika-blue text-white shadow-sm'
                : 'bg-gray-100 text-sanika-darkgray hover:bg-gray-200'
            }`}
          >
            <Car className="h-5 w-5" />
            <span>Automotive</span>
          </button>
          <button
            onClick={() => setActiveTab('appliances')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg mr-4 mb-4 transition-all duration-200 ${
              activeTab === 'appliances'
                ? 'bg-sanika-blue text-white shadow-sm'
                : 'bg-gray-100 text-sanika-darkgray hover:bg-gray-200'
            }`}
          >
            <Home className="h-5 w-5" />
            <span>Home Appliances</span>
          </button>
          <button
            onClick={() => setActiveTab('capabilities')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg mb-4 transition-all duration-200 ${
              activeTab === 'capabilities'
                ? 'bg-sanika-blue text-white shadow-sm'
                : 'bg-gray-100 text-sanika-darkgray hover:bg-gray-200'
            }`}
          >
            <Palette className="h-5 w-5" />
            <span>Capabilities</span>
          </button>
        </div>

        <div className="glass-panel p-10 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-4 text-sanika-blue">{tabData[activeTab as keyof typeof tabData].title}</h3>
          <p className="text-sanika-gray mb-8">{tabData[activeTab as keyof typeof tabData].description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabData[activeTab as keyof typeof tabData].items.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-soft border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-sanika-blue mr-3"></div>
                  <p className="text-sanika-darkgray font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
