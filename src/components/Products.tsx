
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
      items: [
        { 
          name: 'Fuel opening lids', 
          image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=500&q=80',
          description: 'Durable and precisely engineered fuel caps designed for perfect fitment and long-lasting performance.'
        },
        { 
          name: 'Air vents', 
          image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=500&q=80',
          description: 'Customizable interior air vents with adjustable flow control and seamless dashboard integration.'
        },
        { 
          name: 'Car interior parts', 
          image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=500&q=80',
          description: 'Premium interior components featuring superior aesthetics and ergonomic design.'
        },
        { 
          name: 'Dashboard components', 
          image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=500&q=80',
          description: 'Precision-molded dashboard parts with excellent finishing and dimensional accuracy.'
        },
        { 
          name: 'Console trims', 
          image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=500&q=80',
          description: 'Elegant console trim solutions with customizable textures and finishes for premium vehicle interiors.'
        }
      ],
      image: 'public/lovable-uploads/5d0a40e2-35f7-4493-893a-332358e9fbd6.png'
    },
    appliances: {
      title: 'Home Appliances',
      description: 'Reliable plastic parts for leading home appliance manufacturers designed for longevity and performance.',
      items: [
        { 
          name: 'Washing machine parts', 
          image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=500&q=80',
          description: 'Water-resistant components engineered for durability in high-moisture environments.'
        },
        { 
          name: 'Refrigerator components', 
          image: 'https://images.unsplash.com/photo-1601599963565-b7f49d6cf399?auto=format&fit=crop&w=500&q=80',
          description: 'Temperature-resistant shelving and storage solutions designed for optimal cooling efficiency.'
        },
        { 
          name: 'Air conditioner parts', 
          image: 'https://images.unsplash.com/photo-1581275233126-5df610239898?auto=format&fit=crop&w=500&q=80',
          description: 'Precision components for HVAC systems that ensure proper airflow and thermal regulation.'
        },
        { 
          name: 'Kitchen appliance housings', 
          image: 'https://images.unsplash.com/photo-1586803223443-9f9fa4b467b4?auto=format&fit=crop&w=500&q=80',
          description: 'Heat-resistant and durable housings for kitchen appliances with customizable finishes.'
        },
        { 
          name: 'Control panel frames', 
          image: 'https://images.unsplash.com/photo-1594631661960-34762327295a?auto=format&fit=crop&w=500&q=80',
          description: 'Ergonomic control panel frames with precise dimensional tolerances for seamless interface integration.'
        }
      ],
      image: 'public/lovable-uploads/02e3f03c-5a32-459f-8a67-b6c2350b6238.png'
    },
    capabilities: {
      title: 'Manufacturing Capabilities',
      description: 'Advanced manufacturing processes and material expertise to meet diverse industry requirements.',
      items: [
        { 
          name: 'In-Mold Decoration (IMD)', 
          image: 'public/lovable-uploads/45f099b3-a469-4248-aba5-a94820faa53d.png',
          description: 'Premium surface decoration technology that combines printing and injection molding for superior aesthetics.'
        },
        { 
          name: 'ABS, Nylon, PP materials', 
          image: 'https://images.unsplash.com/photo-1635767798638-3665390c38ce?auto=format&fit=crop&w=500&q=80',
          description: 'Extensive range of engineering polymers to meet specific application requirements and industry standards.'
        },
        { 
          name: 'Precision molding', 
          image: 'https://images.unsplash.com/photo-1577041677443-8bbdfd8cce62?auto=format&fit=crop&w=500&q=80',
          description: 'State-of-the-art molding technology ensuring tight tolerances and exceptional dimensional accuracy.'
        },
        { 
          name: 'Surface finishing', 
          image: 'https://images.unsplash.com/photo-1473621038790-b778b4750efe?auto=format&fit=crop&w=500&q=80',
          description: 'Comprehensive finishing processes including texturing, painting, and specialized surface treatments.'
        },
        { 
          name: 'Assembly services', 
          image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=500&q=80',
          description: 'Complete assembly capabilities from component integration to final product packaging.'
        }
      ],
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
                      className="bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2 text-sanika-blue">{item.name}</h4>
                        <p className="text-sanika-gray text-sm">{item.description}</p>
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
