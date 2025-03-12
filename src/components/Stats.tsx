
import { TrendingUp, Users, Factory, DollarSign } from 'lucide-react';

const Stats = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="section-heading">Numbers That Define Us</h2>
          <div className="accent-bar mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-panel p-8 text-center">
            <div className="flex justify-center mb-4">
              <TrendingUp className="h-12 w-12 text-sanika-blue" />
            </div>
            <div className="text-4xl font-bold text-red-600 mb-2">107%</div>
            <p className="text-sanika-gray">YoY Growth in PAT</p>
          </div>

          <div className="glass-panel p-8 text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-sanika-blue" />
            </div>
            <div className="text-4xl font-bold text-red-600 mb-2">3,800+</div>
            <p className="text-sanika-gray">Employees</p>
          </div>

          <div className="glass-panel p-8 text-center">
            <div className="flex justify-center mb-4">
              <Factory className="h-12 w-12 text-sanika-blue" />
            </div>
            <div className="text-4xl font-bold text-red-600 mb-2">8</div>
            <p className="text-sanika-gray">State-of-the-art manufacturing facilities</p>
          </div>

          <div className="glass-panel p-8 text-center">
            <div className="flex justify-center mb-4">
              <DollarSign className="h-12 w-12 text-sanika-blue" />
            </div>
            <div className="text-4xl font-bold text-red-600 mb-2">₹2,800</div>
            <p className="text-sanika-gray">Sales guidance for FY2024 (in crores)</p>
          </div>

          <div className="glass-panel p-8 text-center">
            <div className="flex justify-center mb-4">
              <TrendingUp className="h-12 w-12 text-sanika-blue" />
            </div>
            <div className="text-4xl font-bold text-red-600 mb-2">181%</div>
            <p className="text-sanika-gray">YoY growth in product business</p>
          </div>

          <div className="glass-panel p-8 text-center">
            <div className="flex justify-center mb-4">
              <DollarSign className="h-12 w-12 text-sanika-blue" />
            </div>
            <div className="text-4xl font-bold text-red-600 mb-2">₹2,148</div>
            <p className="text-sanika-gray">Turnover in FY2023 (in crores)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
