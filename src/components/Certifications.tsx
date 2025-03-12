
import { Award, Shield, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: 'IATF 16949:2016',
      icon: Shield,
      description: 'International standard for automotive quality management systems'
    },
    {
      name: 'ISO 9001:2015',
      icon: Award,
      description: 'Quality management systems standard'
    },
    {
      name: 'ZED Bronze Certification',
      icon: CheckCircle,
      description: 'Zero Defect Zero Effect quality model certification'
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-sanika-lightgray">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="section-heading">Certifications</h2>
          <div className="accent-bar mx-auto"></div>
          <p className="text-sanika-gray text-lg max-w-3xl mx-auto">
            Our commitment to quality and excellence is reflected in our industry certifications,
            demonstrating our adherence to international standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="glass-panel p-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]"
            >
              <div className="w-20 h-20 mb-6 bg-sanika-blue/10 rounded-full flex items-center justify-center">
                <cert.icon className="h-10 w-10 text-sanika-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-sanika-darkgray">{cert.name}</h3>
              <p className="text-sanika-gray">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sanika-gray mb-6">
            Our certifications reflect our dedication to maintaining the highest standards of
            quality, safety, and environmental responsibility in all our operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
