
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';
import CorporateFilm from '@/components/CorporateFilm';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us - Sanika Plast";
    window.scrollTo(0, 0);
    
    // Animation effect for the about page
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.add('translate-y-0');
          entry.target.classList.add('scale-100');
          
          // Also animate child items with the animate-item class
          const animateItems = entry.target.querySelectorAll('.animate-item');
          animateItems.forEach((item, index) => {
            setTimeout(() => {
              (item as HTMLElement).classList.add('opacity-100');
              (item as HTMLElement).classList.add('translate-y-0');
              (item as HTMLElement).classList.add('scale-100');
            }, index * 150);
          });
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Select all sections that should be animated on scroll
    const animateSections = document.querySelectorAll('.animate-on-scroll');
    
    animateSections.forEach(section => {
      section.classList.add('opacity-0');
      section.classList.add('translate-y-10');
      section.classList.add('transition-all');
      section.classList.add('duration-700');
      section.classList.add('ease-out');
      observer.observe(section);
    });
    
    return () => {
      animateSections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <About />
        <CorporateFilm className="animate-on-scroll" />
        
        {/* Our Story Section */}
        <section className="section-padding bg-white animate-on-scroll">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="section-heading text-left mb-4 md:mb-6">Our Story</h2>
                <div className="accent-bar mb-6 md:mb-8"></div>
                
                <div className="space-y-4 md:space-y-6 text-sanika-gray text-sm md:text-base">
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
              
              <div className="rounded-lg overflow-hidden shadow-md bg-sanika-lightgray p-6 md:p-8 transform transition-transform duration-500 hover:translate-y-[-5px]">
                <div className="border-l-4 border-sanika-blue pl-4 md:pl-6 italic text-sanika-gray">
                  <p className="text-lg md:text-xl mb-4">
                    "From humble beginnings to industry leadership, our journey has been defined by a relentless 
                    pursuit of excellence and innovation in plastic manufacturing."
                  </p>
                  <p className="text-right font-semibold">— Sanjay Patil, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Founders Section */}
        <section className="section-padding bg-sanika-lightgray animate-on-scroll">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="section-heading">Our Founders</h2>
              <div className="accent-bar mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="glass-panel p-6 md:p-8 text-center transition-all duration-500 hover:translate-y-[-5px] opacity-0 scale-95 animate-item" style={{ transitionDelay: "100ms" }}>
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-4 md:mb-6 border-4 border-sanika-blue">
                  <img 
                    src="https://placehold.co/400x400/e2e8f0/1F3A93?text=SP" 
                    alt="Sanjay Patil" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-sanika-darkgray">Sanjay Patil</h3>
                <p className="text-sanika-blue mb-3 md:mb-4">Founder & Managing Director</p>
                <p className="text-sanika-gray text-sm md:text-base">
                  With over 20 years of experience in plastic manufacturing, Sanjay's vision 
                  and leadership have been instrumental in the company's growth.
                </p>
              </div>
              
              <div className="glass-panel p-6 md:p-8 text-center transition-all duration-500 hover:translate-y-[-5px] opacity-0 scale-95 animate-item" style={{ transitionDelay: "300ms" }}>
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-4 md:mb-6 border-4 border-sanika-blue">
                  <img 
                    src="https://placehold.co/400x400/e2e8f0/1F3A93?text=AP" 
                    alt="Anita Patil" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-sanika-darkgray">Anita Patil</h3>
                <p className="text-sanika-blue mb-3 md:mb-4">Co-Founder & Finance Director</p>
                <p className="text-sanika-gray text-sm md:text-base">
                  Anita's financial acumen and strategic planning have helped 
                  Sanika Plast achieve sustainable growth and financial stability.
                </p>
              </div>
              
              <div className="glass-panel p-6 md:p-8 text-center transition-all duration-500 hover:translate-y-[-5px] opacity-0 scale-95 animate-item" style={{ transitionDelay: "500ms" }}>
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-4 md:mb-6 border-4 border-sanika-blue">
                  <img 
                    src="https://placehold.co/400x400/e2e8f0/1F3A93?text=RJ" 
                    alt="Rajesh Joshi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-sanika-darkgray">Rajesh Joshi</h3>
                <p className="text-sanika-blue mb-3 md:mb-4">Technical Director</p>
                <p className="text-sanika-gray text-sm md:text-base">
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
