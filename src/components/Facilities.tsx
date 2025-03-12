
import { Factory, Warehouse } from 'lucide-react';

const Facilities = () => {
  return (
    <section id="facilities" className="section-padding bg-gradient-to-b from-white to-sanika-lightgray">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="section-heading">Manufacturing Facilities</h2>
          <div className="accent-bar mx-auto"></div>
          <p className="text-sanika-gray text-lg max-w-3xl mx-auto">
            Our state-of-the-art manufacturing facilities are equipped with advanced machinery to deliver
            high-quality plastic components with precision and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-panel p-8 transition-all duration-300 hover:translate-y-[-5px] overflow-hidden group">
            <div className="relative h-64 mb-6 rounded-lg overflow-hidden bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <Factory className="h-20 w-20" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-sanika-blue text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium">View Facility Images</p>
              </div>
            </div>
            <h3 className="section-subheading">Koregaon Bhima Plant</h3>
            <ul className="space-y-3 text-sanika-gray">
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3"></div>
                <p>25,000 sq.ft. state-of-the-art facility</p>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3"></div>
                <p>Modern injection molding machinery</p>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3"></div>
                <p>Quality control laboratories</p>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3"></div>
                <p>Dedicated assembly areas</p>
              </li>
            </ul>
          </div>

          <div className="glass-panel p-8 transition-all duration-300 hover:translate-y-[-5px] overflow-hidden group">
            <div className="relative h-64 mb-6 rounded-lg overflow-hidden bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <Warehouse className="h-20 w-20" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-sanika-blue text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium">View Facility Images</p>
              </div>
            </div>
            <h3 className="section-subheading">Shirval Unit</h3>
            <ul className="space-y-3 text-sanika-gray">
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3"></div>
                <p>10 injection molding machines</p>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3"></div>
                <p>250–1000 ton capacity</p>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3"></div>
                <p>Advanced material handling systems</p>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-sanika-blue mt-2 mr-3"></div>
                <p>Finished product storage facility</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-sanika-gray mb-6">
            Our facilities operate 24/7 to meet customer demands with precision and quality.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Schedule a Visit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
