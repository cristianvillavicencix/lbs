import React from 'react';
import { ArrowLeft, Smartphone, CheckCircle, TrendingUp, Target, Phone, BarChart } from 'lucide-react';

const DigitalMarketing: React.FC = () => {
  const services = [
    "Digital strategy development",
    "Social media management",
    "Search engine optimization (SEO)",
    "Pay-per-click advertising (PPC)",
    "Content marketing",
    "Email marketing campaigns",
    "Website design and development",
    "Analytics and reporting"
  ];

  const strategies = [
    {
      title: "Brand Awareness",
      description: "Increase visibility and recognition in your target market",
      icon: Target
    },
    {
      title: "Lead Generation",
      description: "Attract and convert potential customers",
      icon: TrendingUp
    },
    {
      title: "Customer Engagement",
      description: "Build relationships and loyalty with your audience",
      icon: Smartphone
    },
    {
      title: "Performance Tracking",
      description: "Monitor and optimize campaign performance",
      icon: BarChart
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Services
        </button>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 px-8 py-12 text-white">
            <div className="flex items-center mb-4">
              <Smartphone className="h-12 w-12 mr-4" />
              <h1 className="text-4xl font-bold">Digital Marketing</h1>
            </div>
            <p className="text-xl text-indigo-100">
              Comprehensive digital strategies to grow your business online
            </p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Digital Marketing Solutions</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  In today's digital landscape, having a strong online presence is essential for business success. Our comprehensive digital marketing services help Latino businesses reach their target audience, increase brand awareness, and drive growth.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Services</h3>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Marketing Strategies</h2>
                <div className="space-y-6">
                  {strategies.map((strategy, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <strategy.icon className="h-6 w-6 text-indigo-600 mr-3" />
                        <h4 className="font-semibold text-gray-900">{strategy.title}</h4>
                      </div>
                      <p className="text-gray-600">{strategy.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Digital Marketing Matters</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">85%</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Online Research</h3>
                  <p className="text-gray-600 text-sm">of consumers research businesses online before making a purchase</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">3x</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Lead Generation</h3>
                  <p className="text-gray-600 text-sm">more leads generated through digital marketing than traditional methods</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">70%</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cost Effective</h3>
                  <p className="text-gray-600 text-sm">lower cost per lead compared to traditional advertising</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-indigo-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Grow Your Business?</h2>
              <p className="text-gray-700 mb-6">
                Let's create a customized digital marketing strategy that drives results for your business. Contact us for a free consultation and marketing audit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (475) 257-0243
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Free Marketing Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;