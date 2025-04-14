
import { useState } from 'react';
import { Car, Home, Palette } from 'lucide-react';
import { 
  Card,
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Products = () => {
  const [activeTab, setActiveTab] = useState('automotive');

  const tabData = {
    automotive: {
      title: 'Automotive Components',
      description: 'High-quality plastic components for the automotive industry with precision engineering and durability.',
      items: ['Fuel opening lids', 'Air vents', 'Car interior parts', 'Dashboard components', 'Console trims'],
      image: 'public/lovable-uploads/5d0a40e2-35f7-4493-893a-332358e9fbd6.png'
    },
    appliances: {
      title: 'Home Appliances',
      description: 'Reliable plastic parts for leading home appliance manufacturers designed for longevity and performance.',
      items: ['Washing machine parts', 'Refrigerator components', 'Air conditioner parts', 'Kitchen appliance housings', 'Control panel frames'],
      image: 'public/lovable-uploads/02e3f03c-5a32-459f-8a67-b6c2350b6238.png'
    },
    capabilities: {
      title: 'Manufacturing Capabilities',
      description: 'Advanced manufacturing processes and material expertise to meet diverse industry requirements.',
      items: ['In-Mold Decoration (IMD)', 'ABS, Nylon, PP materials', 'Precision molding', 'Surface finishing', 'Assembly services'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    }
  };

  return (
    <section id="products" className="section-padding animate-on-scroll">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="section-heading">Products & Services</h2>
          <div className="accent-bar mx-auto"></div>
          <p className="text-sanika-gray text-lg max-w-3xl mx-auto">
            We specialize in manufacturing high-quality plastic components for diverse industries,
            utilizing advanced molding technologies and premium materials.
          </p>
        </div>

        <Tabs defaultValue="automotive" onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-gray-100 p-1 rounded-lg">
              <TabsTrigger 
                value="automotive"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === 'automotive' ? 'data-[state=active]:bg-sanika-blue data-[state=active]:text-white' : ''
                }`}
              >
                <Car className="h-5 w-5" />
                <span>Automotive</span>
              </TabsTrigger>
              <TabsTrigger 
                value="appliances"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === 'appliances' ? 'data-[state=active]:bg-sanika-blue data-[state=active]:text-white' : ''
                }`}
              >
                <Home className="h-5 w-5" />
                <span>Home Appliances</span>
              </TabsTrigger>
              <TabsTrigger 
                value="capabilities"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === 'capabilities' ? 'data-[state=active]:bg-sanika-blue data-[state=active]:text-white' : ''
                }`}
              >
                <Palette className="h-5 w-5" />
                <span>Capabilities</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(tabData).map((tab) => (
            <TabsContent key={tab} value={tab} className="focus-visible:outline-none focus-visible:ring-0">
              <div className="glass-panel p-8 transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-sanika-blue">{tabData[tab as keyof typeof tabData].title}</h3>
                    <p className="text-sanika-gray mb-6">{tabData[tab as keyof typeof tabData].description}</p>
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md transform transition-transform duration-300 hover:scale-[1.02]">
                    <img 
                      src={tabData[tab as keyof typeof tabData].image} 
                      alt={tabData[tab as keyof typeof tabData].title} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tabData[tab as keyof typeof tabData].items.map((item, index) => (
                    <Card 
                      key={index} 
                      className="bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:translate-y-[-5px]"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-sanika-blue mr-3"></div>
                          <p className="text-sanika-darkgray font-medium">{item}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Products;
