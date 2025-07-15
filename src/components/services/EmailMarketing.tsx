import React from 'react';
import { ArrowLeft, Mail, CheckCircle, Users, TrendingUp, Phone, Send, BarChart, Heart } from 'lucide-react';

const EmailMarketing: React.FC = () => {
  const services = [
    "Email campaign strategy",
    "Newsletter design and creation",
    "Automated email sequences",
    "Customer segmentation",
    "A/B testing and optimization",
    "Performance tracking and analytics",
    "List building and management",
    "Email template design"
  ];

  const campaignTypes = [
    {
      icon: Send,
      title: "Welcome Series",
      description: "Introduce new subscribers to your business",
      benefits: ["Build relationships", "Share your story", "Set expectations"]
    },
    {
      icon: Heart,
      title: "Promotional Campaigns",
      description: "Promote special offers and services",
      benefits: ["Drive sales", "Increase bookings", "Clear inventory"]
    },
    {
      icon: BarChart,
      title: "Newsletter Campaigns",
      description: "Regular updates and valuable content",
      benefits: ["Stay top-of-mind", "Share expertise", "Build trust"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center text-teal-600 hover:text-teal-800 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-700 px-8 py-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-white bg-opacity-20 p-4 rounded-2xl mr-6">
                  <Mail className="h-12 w-12" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2">Email Marketing</h1>
                  <p className="text-xl text-teal-100">
                    Effective email campaigns to engage customers and drive sales
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Email Marketing Services</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Email marketing remains one of the most effective ways to reach customers directly. Our email marketing services help Latino businesses build relationships, drive sales, and keep customers engaged with personalized, professional campaigns.
                </p>
                
                <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Email Marketing Works</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Direct communication with your customers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>High return on investment (ROI)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Personalized messaging and offers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Measurable results and analytics</span>
                    </li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900">Our Services Include</h3>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Campaign Types</h2>
                <div className="space-y-6">
                  {campaignTypes.map((type, index) => (
                    <div key={index} className="bg-gradient-to-r from-white to-teal-50 border border-teal-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="bg-teal-100 p-3 rounded-lg mr-4">
                          <type.icon className="h-6 w-6 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900">{type.title}</h4>
                          <p className="text-gray-600">{type.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {type.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Email Marketing Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: 1, title: "Strategy", desc: "Plan campaign goals", icon: BarChart },
                  { step: 2, title: "Design", desc: "Create email templates", icon: Mail },
                  { step: 3, title: "Send", desc: "Launch campaigns", icon: Send },
                  { step: 4, title: "Analyze", desc: "Track performance", icon: TrendingUp }
                ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">List Building</h3>
                <p className="text-gray-600 text-sm">Grow your subscriber list with targeted opt-in strategies</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">High Open Rates</h3>
                <p className="text-gray-600 text-sm">Compelling subject lines and timing optimization</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Detailed Analytics</h3>
                <p className="text-gray-600 text-sm">Track opens, clicks, conversions, and ROI</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-600 to-cyan-700 p-8 rounded-2xl text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Ready to Connect with Your Customers?</h2>
                  <p className="text-teal-100 mb-6 text-lg">
                    Email marketing can help you build stronger relationships with your customers and drive more sales. Let us create effective email campaigns that get results for your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold inline-flex items-center justify-center">
                      <Phone className="h-5 w-5 mr-2" />
                      Call (475) 257-0243
                    </button>
                    <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-teal-600 transition-colors font-semibold">
                      Free Email Strategy Session
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                    <Mail className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Automated Campaigns</h3>
                    <p className="text-teal-100">Set up automated sequences that work while you sleep</p>
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

export default EmailMarketing;