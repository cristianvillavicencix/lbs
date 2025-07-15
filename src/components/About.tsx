import React from 'react';
import { Users, Award, Clock, MapPin } from 'lucide-react';
import CounterCard from './ui/CounterCard';
import AnimatedSection from './ui/AnimatedSection';

const About: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Projects Completed',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      value: 10,
      suffix: '+',
      label: 'Years of Experience',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Clock,
      value: 24,
      suffix: '/7',
      label: 'Emergency Service',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MapPin,
      value: 5,
      suffix: '',
      label: 'States Served',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="space-y-8">
            <AnimatedSection animation="slideUp">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                About Us
              </h2>
              <p className="mt-4 max-w-3xl text-xl text-gray-600 leading-relaxed">
                Latinos Business Support is a company specialized in property restoration services and digital marketing. We serve the Latino community with professionalism and exceptional quality.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={200}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide high-quality services in property restoration and digital marketing, helping Latino businesses grow and prosper in the American market.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={400}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Quality and professionalism in every project',
                    'Personalized service and attention to detail',
                    'Transparency and honesty in our processes',
                    'Commitment to the Latino community'
                  ].map((value, index) => (
                    <div key={index} className="flex items-start p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <CounterCard
                  key={index}
                  icon={stat.icon}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  color={stat.color}
                  delay={index * 200}
                />
              ))}
            </div>
            
            <AnimatedSection animation="slideLeft" delay={800}>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-3">Need a quote?</h4>
                <p className="text-blue-100 mb-6">
                  Contact us to receive a free evaluation of your project.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Contact Now
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;