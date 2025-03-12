
import { Factory, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-sanika-lightgray">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="section-heading">About Us</h2>
          <div className="accent-bar mx-auto"></div>
          <p className="text-sanika-gray text-lg max-w-3xl mx-auto">
            Established in 2009, Sanika Plast Pvt. Ltd. is a leading manufacturer of precision plastic components
            for the white goods and automotive sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <div className="mb-5">
              <Factory className="h-12 w-12 text-sanika-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-sanika-darkgray">Our Company</h3>
            <p className="text-sanika-gray">
              Based in Koregaon Bhima, Pune, our state-of-the-art 25,000 sq.ft. manufacturing plant is equipped
              with modern injection molding machinery to deliver high-quality plastic components.
            </p>
          </div>

          <div className="glass-panel p-8 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <div className="mb-5">
              <Target className="h-12 w-12 text-sanika-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-sanika-darkgray">Our Mission</h3>
            <p className="text-sanika-gray">
              To be a world-class plastic injection molding solution provider, driving innovation and sustainability
              while meeting the evolving needs of our customers with precision and excellence.
            </p>
          </div>

          <div className="glass-panel p-8 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <div className="mb-5">
              <Award className="h-12 w-12 text-sanika-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-sanika-darkgray">Our Vision</h3>
            <p className="text-sanika-gray">
              We focus on customer satisfaction, product quality, and cost efficiency. Our commitment is to deliver
              innovative solutions that exceed expectations and contribute to our clients' success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
