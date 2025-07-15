import React from 'react';
import { ArrowLeft, Globe, CheckCircle, Smartphone, Monitor, Phone, Zap, Shield, Search } from 'lucide-react';

const WebDesign: React.FC = () => {
  const services = [
    "Custom website design",
    "Responsive mobile optimization",
    "E-commerce development",
    "Content management systems",
    "Website maintenance and updates",
    "Domain and hosting setup",
    "SSL certificates and security",
    "Website speed optimization"
  ];

  const features = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Websites that look perfect on all devices",
      details: ["Responsive layouts", "Touch-friendly navigation", "Fast mobile loading"]
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Built to rank well in search engines",
      details: ["Clean code structure", "Fast loading speeds", "SEO-friendly URLs"]
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Protected with modern security measures",
      details: ["SSL certificates", "Regular backups", "Security monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 px-8 py-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-white bg-opacity-20 p-4 rounded-2xl mr-6">
                  <Globe className="h-12 w-12" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2">Web Design & Development</h1>
                  <p className="text-xl text-purple-100">
                    Professional websites that grow your business online
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Professional Web Design</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Your website is often the first impression customers have of your business. We create professional, responsive websites that not only look great but also drive results for Latino businesses.
                </p>
                
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Your Business Needs a Website</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Establish credibility and professionalism</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Reach customers 24/7 online</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Showcase your services and portfolio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Generate leads and increase sales</span>
                    </li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900">Our Services Include</h3>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-white to-purple-50 border border-purple-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="bg-purple-100 p-3 rounded-lg mr-4">
                          <feature.icon className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900">{feature.title}</h4>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {feature.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Web Development Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { step: 1, title: "Planning", desc: "Strategy and requirements", icon: Globe },
                  { step: 2, title: "Design", desc: "Visual mockups", icon: Monitor },
                  { step: 3, title: "Development", desc: "Code and build", icon: Zap },
                  { step: 4, title: "Testing", desc: "Quality assurance", icon: Shield },
                  { step: 5, title: "Launch", desc: "Go live", icon: CheckCircle }
                ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-br from-purple-500 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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
                <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Custom Design</h3>
                <p className="text-gray-600 text-sm">Unique designs tailored to your brand and business</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Fast Loading</h3>
                <p className="text-gray-600 text-sm">Optimized for speed and performance</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <Smartphone className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Mobile Ready</h3>
                <p className="text-gray-600 text-sm">Perfect on all devices and screen sizes</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-700 p-8 rounded-2xl text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Ready for a New Website?</h2>
                  <p className="text-purple-100 mb-6 text-lg">
                    Let us create a professional website that represents your business and helps you attract more customers. Get started with a free consultation and quote.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold inline-flex items-center justify-center">
                      <Phone className="h-5 w-5 mr-2" />
                      Call (475) 257-0243
                    </button>
                    <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                      Free Website Consultation
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                    <Globe className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Complete Solution</h3>
                    <p className="text-purple-100">Design, development, hosting, and ongoing support</p>
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

export default WebDesign;