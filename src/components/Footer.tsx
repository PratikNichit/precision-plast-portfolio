
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sanika-darkgray text-white pt-16 pb-8">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">SANIKA PLAST</h3>
            <p className="text-gray-300 mb-6">
              Your trusted partner for precision plastic solutions since 2009, delivering innovation and quality.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Products', 'Facilities', 'Clients', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              {['Automotive Components', 'Home Appliances', 'In-Mold Decoration'].map((item) => (
                <li key={item}>
                  <a 
                    href="#products" 
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <address className="text-gray-300 not-italic">
              Gat No-565/2, Koregaon Bhima,<br />
              Pune-Nagar Road, Pune-412208<br />
              Maharashtra, India<br /><br />
              <a href="tel:02137252600" className="hover:text-white transition-colors">02137-252600</a><br />
              <a href="mailto:sanikaplast2010@gmail.com" className="hover:text-white transition-colors">sanikaplast2010@gmail.com</a>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Sanika Plast Pvt. Ltd. All rights reserved.
            </p>
            <div className="text-gray-400 text-sm">
              <span>Privacy Policy</span>
              <span className="mx-2">|</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
