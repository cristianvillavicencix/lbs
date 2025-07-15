import React from 'react';
import { ArrowLeft, Search, CheckCircle, TrendingUp, Target, Phone, Globe } from 'lucide-react';

const SEO: React.FC = () => {
  const services = [
    "Keyword research and analysis",
    "On-page SEO optimization",
    "Technical SEO audits",
    "Local SEO for Latino businesses",
    "Content optimization",
    "Link building strategies",
    "Google My Business optimization",
    "SEO performance reporting"
  ];

  const benefits = [
    {
      title: "Increased Visibility",
      description: "Rank higher in search results for relevant keywords",
      percentage: "75%"
    },
    {
      title: "More Website Traffic",
      description: "Attract qualified visitors to your website",
      percentage: "150%"
    },
    {
      title: "Better Conversion Rates",
      description: "Turn visitors into customers more effectively",
      percentage: "200%"
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
          <div className="bg-gradient-to-r from-green-600 to-green-800 px-8 py-12 text-white">
            <div className="flex items-center mb-4">
              <Search className="h-12 w-12 mr-4" />
              <h1 className="text-4xl font-bold">SEO Services</h1>
            </div>
            <p className="text-xl text-green-100">
              Search Engine Optimization to improve your online visibility
            </p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">SEO Optimization</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Search Engine Optimization (SEO) is crucial for Latino businesses to be found online. Our comprehensive SEO strategies help your business rank higher in search results, attract more customers, and grow your online presence.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our SEO Services</h3>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">SEO Results</h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                        <span className="text-2xl font-bold text-green-600">+{benefit.percentage}</span>
                      </div>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our SEO Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">SEO Audit</h3>
                  <p className="text-gray-600 text-sm">Comprehensive analysis of your current SEO performance</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Strategy Development</h3>
                  <p className="text-gray-600 text-sm">Custom SEO strategy based on your business goals</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Implementation</h3>
                  <p className="text-gray-600 text-sm">Execute on-page and off-page optimization</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-orange-600">4</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Monitoring</h3>
                  <p className="text-gray-600 text-sm">Track progress and adjust strategies as needed</p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Local SEO</h3>
                <p className="text-gray-600 text-sm">Optimize for local searches and Google My Business</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Keyword Ranking</h3>
                <p className="text-gray-600 text-sm">Improve rankings for high-value keywords</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <Globe className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Technical SEO</h3>
                <p className="text-gray-600 text-sm">Optimize website structure and performance</p>
              </div>
            </div>

            <div className="mt-12 bg-green-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Free SEO Audit</h2>
              <p className="text-gray-700 mb-6">
                Get a comprehensive analysis of your website's SEO performance and discover opportunities for improvement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (475) 257-0243
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Request Free Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEO;