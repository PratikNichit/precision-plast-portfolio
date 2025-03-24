
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us - Sanika Plast";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <About />
        
        {/* Our Story Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-heading text-left mb-6">Our Story</h2>
                <div className="accent-bar mb-8"></div>
                
                <div className="space-y-6 text-sanika-gray">
                  <p>
                    In 2009, Mr. Sanjay Patil founded Sanika Plast with just a single molding machine. 
                    Since the beginning, we have been customer-centric and focused only on delivering 
                    premium quality products.
                  </p>
                  <p>
                    This vision has driven our steady expansion, and today, Sanika Plast is well-equipped 
                    with modern injection moulding machines, offering a range of pre and post-molding activities. 
                    We have become one of India's leading manufacturers and suppliers of injection molding plastic.
                  </p>
                  <p>
                    Besides this, we have also been known as a plastic injection molding brand that excels in 
                    understanding the unique needs of customers and providing tailored end-to-end molding solutions.
                  </p>
                  <p>
                    And the growth doesn't stop here! With every new evolving need worldwide, we see an opportunity 
                    to deliver even greater value.
                  </p>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/lovable-uploads/92fd2263-6b25-4d93-8951-f616acc8cbd2.png"
                  alt="Our Story" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Founders Section */}
        <section className="section-padding bg-sanika-lightgray">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="section-heading">Our Founders</h2>
              <div className="accent-bar mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-panel p-8 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-sanika-blue">
                  <img 
                    src="https://placehold.co/400x400/e2e8f0/1F3A93?text=SP" 
                    alt="Sanjay Patil" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sanika-darkgray">Sanjay Patil</h3>
                <p className="text-sanika-blue mb-4">Founder & Managing Director</p>
                <p className="text-sanika-gray">
                  With over 20 years of experience in plastic manufacturing, Sanjay's vision 
                  and leadership have been instrumental in the company's growth.
                </p>
              </div>
              
              <div className="glass-panel p-8 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-sanika-blue">
                  <img 
                    src="https://placehold.co/400x400/e2e8f0/1F3A93?text=AP" 
                    alt="Anita Patil" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sanika-darkgray">Anita Patil</h3>
                <p className="text-sanika-blue mb-4">Co-Founder & Finance Director</p>
                <p className="text-sanika-gray">
                  Anita's financial acumen and strategic planning have helped 
                  Sanika Plast achieve sustainable growth and financial stability.
                </p>
              </div>
              
              <div className="glass-panel p-8 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-sanika-blue">
                  <img 
                    src="https://placehold.co/400x400/e2e8f0/1F3A93?text=RJ" 
                    alt="Rajesh Joshi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sanika-darkgray">Rajesh Joshi</h3>
                <p className="text-sanika-blue mb-4">Technical Director</p>
                <p className="text-sanika-gray">
                  With extensive expertise in polymer engineering, Rajesh leads our technical 
                  innovation and ensures the highest quality standards.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
