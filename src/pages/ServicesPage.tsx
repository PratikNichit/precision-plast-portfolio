
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Products from '@/components/Products';

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Services - Sanika Plast";
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <Products />
        
        {/* Extended Services Information */}
        <section className="section-padding bg-sanika-lightgray">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="section-heading">Our Comprehensive Solutions</h2>
              <div className="accent-bar mx-auto"></div>
              <p className="text-sanika-gray text-lg max-w-3xl mx-auto">
                We offer end-to-end plastic manufacturing solutions that address all your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="glass-panel p-8">
                <h3 className="text-xl font-semibold mb-4 text-sanika-blue">Design & Engineering Support</h3>
                <p className="text-sanika-gray mb-6">
                  Our expert team works closely with clients to optimize product designs for 
                  manufacturability, performance, and cost-effectiveness.
                </p>
                <ul className="space-y-2 text-sanika-gray">
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3 flex-shrink-0"></div>
                    <span>Design for Manufacturing (DFM) consultation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3 flex-shrink-0"></div>
                    <span>3D modeling and prototyping</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3 flex-shrink-0"></div>
                    <span>Mold flow analysis</span>
                  </li>
                </ul>
                <img 
                  src="https://placehold.co/800x500/e2e8f0/1F3A93?text=Design+Engineering" 
                  alt="Design & Engineering Support" 
                  className="w-full h-48 object-cover rounded mt-6"
                />
              </div>
              
              <div className="glass-panel p-8">
                <h3 className="text-xl font-semibold mb-4 text-sanika-blue">Material Selection Expertise</h3>
                <p className="text-sanika-gray mb-6">
                  We help you choose the right material for your application, considering factors 
                  like strength, durability, appearance, and cost.
                </p>
                <ul className="space-y-2 text-sanika-gray">
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3 flex-shrink-0"></div>
                    <span>ABS, PP, HDPE, PC, Nylon and other engineering plastics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3 flex-shrink-0"></div>
                    <span>Material testing and validation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3 flex-shrink-0"></div>
                    <span>Eco-friendly and recyclable options</span>
                  </li>
                </ul>
                <img 
                  src="https://placehold.co/800x500/e2e8f0/1F3A93?text=Material+Selection" 
                  alt="Material Selection Expertise" 
                  className="w-full h-48 object-cover rounded mt-6"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="glass-panel p-8">
                <h3 className="text-xl font-semibold mb-4 text-sanika-blue">Advanced Surface Finishing</h3>
                <p className="text-sanika-gray mb-6">
                  Enhance the appearance and functionality of your plastic parts with our 
                  comprehensive finishing services.
                </p>
                <ul className="space-y-2 text-sanika-gray">
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3 flex-shrink-0"></div>
                    <span>Texturing and polishing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3 flex-shrink-0"></div>
                    <span>Painting and printing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3 flex-shrink-0"></div>
                    <span>Chromium plating and metallization</span>
                  </li>
                </ul>
                <img 
                  src="https://placehold.co/800x500/e2e8f0/1F3A93?text=Surface+Finishing" 
                  alt="Advanced Surface Finishing" 
                  className="w-full h-48 object-cover rounded mt-6"
                />
              </div>
              
              <div className="glass-panel p-8">
                <h3 className="text-xl font-semibold mb-4 text-sanika-blue">Assembly & Packaging</h3>
                <p className="text-sanika-gray mb-6">
                  Complete end-to-end solutions from molding to final product assembly and packaging.
                </p>
                <ul className="space-y-2 text-sanika-gray">
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3 flex-shrink-0"></div>
                    <span>Component assembly and sub-assembly services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3 flex-shrink-0"></div>
                    <span>Quality inspection and testing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3 flex-shrink-0"></div>
                    <span>Custom packaging solutions</span>
                  </li>
                </ul>
                <img 
                  src="https://placehold.co/800x500/e2e8f0/1F3A93?text=Assembly+Packaging" 
                  alt="Assembly & Packaging" 
                  className="w-full h-48 object-cover rounded mt-6"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
