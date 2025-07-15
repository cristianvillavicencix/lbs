import React from 'react';
import { ArrowLeft, Search, CheckCircle, Target, TrendingUp, Phone, DollarSign, BarChart, MousePointer } from 'lucide-react';

const GoogleAds: React.FC = () => {
  const services = [
    "Google Ads campaign setup",
    "Keyword research and selection",
    "Ad copy creation and optimization",
    "Landing page optimization",
    "Bid management and optimization",
    "Performance tracking and reporting",
    "A/B testing and refinement",
    "Local advertising campaigns"
  ];

  const campaignTypes = [
    {
      icon: Search,
      title: "Search Campaigns",
      description: "Appear when customers search for your services",
      benefits: ["High intent traffic", "Immediate visibility", "Cost-effective"]
    },
    {
      icon: Target,
      title: "Local Campaigns",
      description: "Target customers in your service area",
      benefits: ["Geographic targeting", "Local visibility", "Drive foot traffic"]
    },
    {
      icon: MousePointer,
      title: "Display Campaigns",
      description: "Visual ads across Google's network",
      benefits: ["Brand awareness", "Retargeting", "Visual impact"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center text-yellow-600 hover:text-yellow-800 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 px-8 py-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-white bg-opacity-20 p-4 rounded-2xl mr-6">
                  <Search className="h-12 w-12" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2">Google Ads Management</h1>
                  <p className="text-xl text-yellow-100">
                    Drive immediate traffic and leads with targeted Google advertising
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Google Ads Services</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Google Ads is one of the most effective ways for Latino businesses to reach customers who are actively searching for their services. Our certified Google Ads specialists create and manage campaigns that deliver real results.
                </p>
                
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Google Ads?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Immediate visibility in search results</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Target customers actively searching for your services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Control your budget and only pay for clicks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Measurable results and ROI tracking</span>
                    </li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900">Our Services Include</h3>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Campaign Types</h2>
                <div className="space-y-6">
                  {campaignTypes.map((type, index) => (
                    <div key={index} className="bg-gradient-to-r from-white to-yellow-50 border border-yellow-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                          <type.icon className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900">{type.title}</h4>
                          <p className="text-gray-600">{type.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {type.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Google Ads Management Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: 1, title: "Research", desc: "Keyword and competitor analysis", icon: Search },
                  { step: 2, title: "Setup", desc: "Campaign creation and optimization", icon: Target },
                  { step: 3, title: "Launch", desc: "Monitor and adjust bids", icon: TrendingUp },
                  { step: 4, title: "Optimize", desc: "Continuous improvement", icon: BarChart }
                ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.step}. {item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Cost Control</h3>
                <p className="text-gray-600 text-sm">Set your budget and only pay when someone clicks your ad</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Precise Targeting</h3>
                <p className="text-gray-600 text-sm">Reach customers in your service area at the right time</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Detailed Reporting</h3>
                <p className="text-gray-600 text-sm">Track every click, call, and conversion</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-8 rounded-2xl text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Ready to Start Getting More Customers?</h2>
                  <p className="text-yellow-100 mb-6 text-lg">
                    Google Ads can start driving qualified leads to your business immediately. Let our certified specialists create and manage campaigns that deliver results within your budget.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-yellow-600 px-6 py-3 rounded-lg hover:bg-yellow-50 transition-colors font-semibold inline-flex items-center justify-center">
                      <Phone className="h-5 w-5 mr-2" />
                      Call (475) 257-0243
                    </button>
                    <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-yellow-600 transition-colors font-semibold">
                      Free Google Ads Audit
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Immediate Results</h3>
                    <p className="text-yellow-100">Start getting clicks and leads as soon as your ads go live</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAds;