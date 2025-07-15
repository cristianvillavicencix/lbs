import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Home, Droplets, RefreshCw, AlertTriangle, TreePine, Smartphone, Share2, Search, Facebook, Globe, Palette, Mail } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const Services: React.FC = () => {
  const insuranceServices = [
    {
      icon: Shield,
      title: 'Insurance Estimates',
      description: 'Professional evaluations for property insurance claims.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Home,
      title: 'Roofing',
      description: 'Residential and commercial roof repair and installation.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Home,
      title: 'Siding',
      description: 'Exterior siding installation and repair for your home.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Droplets,
      title: 'Water Damage',
      description: 'Water damage repair and restoration services.',
      color: 'bg-cyan-100 text-cyan-600'
    },
    {
      icon: RefreshCw,
      title: 'Restoration',
      description: 'Complete property restoration services.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: AlertTriangle,
      title: 'Asbestos',
      description: 'Safe and professional asbestos removal.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: TreePine,
      title: 'Tree Damage',
      description: 'Repair of damage caused by fallen trees.',
      color: 'bg-emerald-100 text-emerald-600'
    }
  ];

  const marketingServices = [
    {
      icon: Smartphone,
      title: 'Digital Marketing',
      description: 'Complete digital strategies to grow your business.',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Professional management of your social media profiles.',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Search,
      title: 'Google Ads',
      description: 'Effective Google advertising campaigns for more customers.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Facebook,
      title: 'Facebook Ads',
      description: 'Targeted advertising on Facebook and Instagram.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Search,
      title: 'SEO',
      description: 'Search engine optimization for better rankings.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Professional and responsive websites for your business.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Palette,
      title: 'Branding & Graphic Design',
      description: 'Professional visual identity for your brand.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Effective email campaigns to engage your customers.',
      color: 'bg-teal-100 text-teal-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn" className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Our Services
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            We offer complete property restoration and digital marketing services for the Latino community.
          </p>
        </AnimatedSection>

        {/* Insurance & Restoration Services */}
        <div className="mt-16">
          <AnimatedSection animation="slideUp" delay={200}>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Restoration & Insurance Services
            </h3>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {insuranceServices.map((service, index) => (
              <AnimatedSection 
                key={index} 
                animation="slideUp" 
                delay={300 + index * 100}
                className="relative group"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`inline-flex items-center justify-center p-4 rounded-2xl ${service.color.replace('text-', 'bg-').replace('100', '500')} mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="mt-auto">
                    <Link 
                      to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace(/[^a-z0-9-]/g, '')}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors group"
                    >
                      Learn more 
                      <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Marketing Services */}
        <div className="mt-16">
          <AnimatedSection animation="slideUp" delay={200}>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Digital Marketing Services
            </h3>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {marketingServices.map((service, index) => (
              <AnimatedSection 
                key={index} 
                animation="slideUp" 
                delay={300 + index * 100}
                className="relative group"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`inline-flex items-center justify-center p-4 rounded-2xl ${service.color.replace('text-', 'bg-').replace('100', '500')} mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="mt-auto">
                    <Link 
                      to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace(/[^a-z0-9-]/g, '')}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors group"
                    >
                      Learn more 
                      <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;