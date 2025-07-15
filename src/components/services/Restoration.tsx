import React from 'react';
import { ArrowLeft, RefreshCw, CheckCircle, Clock, Shield, Phone, Wrench, Home, Zap } from 'lucide-react';

const Restoration: React.FC = () => {
  const services = [
    "Fire damage restoration",
    "Smoke and soot removal",
    "Storm damage repair",
    "Structural repairs",
    "Content cleaning and restoration",
    "Odor removal and deodorization",
    "Board-up and tarping services",
    "Complete property reconstruction"
  ];

  const restorationTypes = [
    {
      icon: Zap,
      title: "Fire Damage",
      description: "Complete fire damage restoration including structural repairs and smoke removal",
      features: ["Structural assessment", "Smoke removal", "Content restoration", "Reconstruction"]
    },
    {
      icon: RefreshCw,
      title: "Storm Damage",
      description: "Comprehensive storm damage repair from wind, hail, and flooding",
      features: ["Emergency boarding", "Roof repairs", "Water extraction", "Structural drying"]
    },
    {
      icon: Home,
      title: "General Restoration",
      description: "Complete property restoration for various types of damage",
      features: ["Damage assessment", "Cleanup services", "Repairs", "Final inspection"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 px-8 py-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-white bg-opacity-20 p-4 rounded-2xl mr-6">
                  <RefreshCw className="h-12 w-12" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2">Property Restoration</h1>
                  <p className="text-xl text-purple-100">
                    Complete restoration services for damaged properties
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Restoration Services</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  When disaster strikes, our certified restoration professionals are here to help. We provide comprehensive property restoration services to return your home or business to its pre-loss condition quickly and efficiently.
                </p>
                
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Emergency Response</h3>
                  <p className="text-gray-700 mb-4">
                    Time is critical in restoration situations. Our emergency response team is available around the clock to minimize damage and begin the restoration process immediately.
                  </p>
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Emergency: (475) 257-0243
                  </button>
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
                <h2 className="text-3xl font-bold text-gray-900">Restoration Types</h2>
                <div className="space-y-6">
                  {restorationTypes.map((type, index) => (
                    <div key={index} className="bg-gradient-to-r from-white to-purple-50 border border-purple-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="bg-purple-100 p-3 rounded-lg mr-4">
                          <type.icon className="h-6 w-6 text-purple-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">{type.title}</h4>
                      </div>
                      <p className="text-gray-700 mb-4">{type.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {type.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Restoration Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: 1, title: "Emergency Contact", desc: "24/7 response team", icon: Phone },
                  { step: 2, title: "Assessment", desc: "Damage evaluation", icon: Shield },
                  { step: 3, title: "Restoration", desc: "Professional repair work", icon: Wrench },
                  { step: 4, title: "Final Inspection", desc: "Quality assurance", icon: CheckCircle }
                ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Step {item.step}: {item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-8 rounded-2xl text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Need Restoration Services?</h2>
                  <p className="text-purple-100 mb-6 text-lg">
                    Don't let property damage disrupt your life. Contact our certified restoration experts for immediate assistance and professional service.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold inline-flex items-center justify-center">
                      <Phone className="h-5 w-5 mr-2" />
                      Call (475) 257-0243
                    </button>
                    <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                      Free Assessment
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                    <Clock className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Available 24/7</h3>
                    <p className="text-purple-100">Emergency restoration services</p>
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

export default Restoration;