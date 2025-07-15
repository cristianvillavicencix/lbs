import React from 'react';
import { ArrowLeft, Facebook, CheckCircle, Users, Target, Phone, Heart, Eye, MousePointer } from 'lucide-react';

const FacebookAds: React.FC = () => {
  const services = [
    "Facebook and Instagram ad campaigns",
    "Audience research and targeting",
    "Creative design and copywriting",
    "Campaign optimization",
    "Retargeting campaigns",
    "Lead generation campaigns",
    "Video advertising",
    "Performance tracking and reporting"
  ];

  const adTypes = [
    {
      icon: Eye,
      title: "Brand Awareness",
      description: "Increase visibility and recognition in your community",
      objectives: ["Reach", "Impressions", "Brand recall"]
    },
    {
      icon: MousePointer,
      title: "Lead Generation",
      description: "Capture potential customer information",
      objectives: ["Lead forms", "Contact info", "Quote requests"]
    },
    {
      icon: Heart,
      title: "Engagement",
      description: "Build relationships with your audience",
      objectives: ["Likes & shares", "Comments", "Page follows"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 px-8 py-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-white bg-opacity-20 p-4 rounded-2xl mr-6">
                  <Facebook className="h-12 w-12" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2">Facebook & Instagram Ads</h1>
                  <p className="text-xl text-blue-100">
                    Targeted social media advertising to reach your ideal customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Facebook & Instagram Advertising</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Facebook and Instagram offer powerful advertising platforms to reach Latino communities and local customers. Our targeted campaigns help you connect with the right audience and grow your business through social media.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Facebook & Instagram Ads?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Reach over 3 billion active users worldwide</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Advanced targeting options for Latino communities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Visual storytelling with photos and videos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Cost-effective advertising with flexible budgets</span>
                    </li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900">Our Services Include</h3>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Campaign Types</h2>
                <div className="space-y-6">
                  {adTypes.map((type, index) => (
                    <div key={index} className="bg-gradient-to-r from-white to-blue-50 border border-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                          <type.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900">{type.title}</h4>
                          <p className="text-gray-600">{type.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {type.objectives.map((objective, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                            <span>{objective}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Advertising Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: 1, title: "Audience Research", desc: "Identify your ideal customers", icon: Users },
                  { step: 2, title: "Creative Development", desc: "Design compelling ads", icon: Heart },
                  { step: 3, title: "Campaign Launch", desc: "Deploy targeted campaigns", icon: Target },
                  { step: 4, title: "Optimization", desc: "Improve performance", icon: MousePointer }
                ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.step}. {item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-pink-50 p-6 rounded-xl text-center">
                <Target className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Precise Targeting</h3>
                <p className="text-gray-600 text-sm">Target by demographics, interests, behaviors, and location</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <Eye className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Visual Impact</h3>
                <p className="text-gray-600 text-sm">Engaging photos and videos that capture attention</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Community Building</h3>
                <p className="text-gray-600 text-sm">Build relationships and loyalty with your audience</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-2xl text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Ready to Reach More Customers?</h2>
                  <p className="text-blue-100 mb-6 text-lg">
                    Facebook and Instagram ads can help you connect with your community and grow your customer base. Let us create targeted campaigns that deliver real results for your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold inline-flex items-center justify-center">
                      <Phone className="h-5 w-5 mr-2" />
                      Call (475) 257-0243
                    </button>
                    <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                      Free Ad Strategy Session
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                    <Facebook className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Dual Platform Power</h3>
                    <p className="text-blue-100">Reach audiences on both Facebook and Instagram with one campaign</p>
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

export default FacebookAds;