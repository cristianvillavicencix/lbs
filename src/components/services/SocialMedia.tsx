import React from 'react';
import { ArrowLeft, Share2, CheckCircle, TrendingUp, Users, Phone, Calendar, BarChart, Heart } from 'lucide-react';

const SocialMedia: React.FC = () => {
  const services = [
    "Social media strategy development",
    "Content creation and curation",
    "Community management",
    "Social media advertising",
    "Influencer partnerships",
    "Analytics and reporting",
    "Brand reputation management",
    "Social media training"
  ];

  const platforms = [
    {
      name: "Facebook",
      icon: "📘",
      description: "Build community and engage with local customers",
      features: ["Business pages", "Local advertising", "Community groups", "Event promotion"]
    },
    {
      name: "Instagram",
      icon: "📷",
      description: "Visual storytelling and brand showcase",
      features: ["Photo/video content", "Stories & Reels", "Shopping integration", "Influencer marketing"]
    },
    {
      name: "LinkedIn",
      icon: "💼",
      description: "Professional networking and B2B marketing",
      features: ["Company pages", "Professional content", "Lead generation", "Industry networking"]
    },
    {
      name: "TikTok",
      icon: "🎵",
      description: "Reach younger audiences with creative content",
      features: ["Short-form videos", "Trending challenges", "Creative effects", "Viral potential"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 px-8 py-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-white bg-opacity-20 p-4 rounded-2xl mr-6">
                  <Share2 className="h-12 w-12" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2">Social Media Management</h1>
                  <p className="text-xl text-pink-100">
                    Professional social media strategies to grow your online presence
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Social Media Services</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Social media is essential for Latino businesses to connect with their community and grow their customer base. Our comprehensive social media management services help you build a strong online presence and engage with your audience effectively.
                </p>
                
                <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Social Media Matters</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">•</span>
                      <span>Build brand awareness and recognition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">•</span>
                      <span>Connect directly with your community</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">•</span>
                      <span>Drive traffic to your website and business</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">•</span>
                      <span>Generate leads and increase sales</span>
                    </li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900">Our Services Include</h3>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-pink-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Social Media Platforms</h2>
                <div className="space-y-6">
                  {platforms.map((platform, index) => (
                    <div key={index} className="bg-gradient-to-r from-white to-pink-50 border border-pink-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-4">{platform.icon}</div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900">{platform.name}</h4>
                          <p className="text-gray-600">{platform.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {platform.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Social Media Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: 1, title: "Strategy", desc: "Custom social media plan", icon: BarChart },
                  { step: 2, title: "Content Creation", desc: "Engaging posts and visuals", icon: Heart },
                  { step: 3, title: "Community Management", desc: "Engage with followers", icon: Users },
                  { step: 4, title: "Analytics", desc: "Track and optimize", icon: TrendingUp }
                ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Increase Engagement</h3>
                <p className="text-gray-600 text-sm">Build meaningful connections with your audience</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Grow Followers</h3>
                <p className="text-gray-600 text-sm">Attract and retain loyal social media followers</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Track Results</h3>
                <p className="text-gray-600 text-sm">Detailed analytics and performance reporting</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-600 to-purple-700 p-8 rounded-2xl text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Social Media?</h2>
                  <p className="text-pink-100 mb-6 text-lg">
                    Let us help you build a strong social media presence that connects with your community and drives business growth. Get started with a free social media audit.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-pink-600 px-6 py-3 rounded-lg hover:bg-pink-50 transition-colors font-semibold inline-flex items-center justify-center">
                      <Phone className="h-5 w-5 mr-2" />
                      Call (475) 257-0243
                    </button>
                    <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-pink-600 transition-colors font-semibold">
                      Free Social Media Audit
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                    <Calendar className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Consistent Posting</h3>
                    <p className="text-pink-100">Regular, engaging content to keep your audience interested</p>
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

export default SocialMedia;