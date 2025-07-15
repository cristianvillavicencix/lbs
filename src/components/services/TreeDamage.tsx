import React from 'react';
import { ArrowLeft, TreePine, CheckCircle, Clock, Shield, Phone, Zap, Home, AlertTriangle } from 'lucide-react';

const TreeDamage: React.FC = () => {
  const services = [
    "Emergency tree removal",
    "Roof damage assessment and repair",
    "Structural damage evaluation",
    "Debris cleanup and removal",
    "Insurance claim documentation",
    "Temporary protective measures",
    "Complete property restoration",
    "Preventive tree maintenance"
  ];

  const damageTypes = [
    {
      icon: Home,
      title: "Roof Damage",
      description: "Repair and restoration of roof damage caused by fallen trees",
      urgency: "High Priority"
    },
    {
      icon: Zap,
      title: "Structural Damage",
      description: "Assessment and repair of structural damage to buildings",
      urgency: "Critical"
    },
    {
      icon: TreePine,
      title: "Landscape Damage",
      description: "Cleanup and restoration of damaged landscaping and outdoor areas",
      urgency: "Medium Priority"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center text-emerald-600 hover:text-emerald-800 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 px-8 py-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-white bg-opacity-20 p-4 rounded-2xl mr-6">
                  <TreePine className="h-12 w-12" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2">Tree Damage Restoration</h1>
                  <p className="text-xl text-emerald-100">
                    Emergency response and repair for tree-related property damage
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3" />
                <h2 className="text-xl font-bold text-yellow-900">Storm Emergency?</h2>
              </div>
              <p className="text-yellow-800 mb-4">
                If you have a tree emergency with immediate safety concerns, contact us right away. We provide 24/7 emergency response for dangerous tree situations.
              </p>
              <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors inline-flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Emergency: (475) 257-0243
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Tree Damage Services</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Severe weather can cause trees to fall and damage your property. Our experienced team provides comprehensive tree damage restoration services, from emergency removal to complete property repair.
                </p>
                
                <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Act Quickly?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span>Prevent further structural damage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span>Avoid water damage from exposed areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span>Ensure safety of occupants and neighbors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span>Facilitate faster insurance claim processing</span>
                    </li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900">Our Services Include</h3>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Types of Tree Damage</h2>
                <div className="space-y-6">
                  {damageTypes.map((type, index) => (
                    <div key={index} className="bg-gradient-to-r from-white to-emerald-50 border border-emerald-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                            <type.icon className="h-6 w-6 text-emerald-600" />
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">{type.title}</h4>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          type.urgency === 'Critical' ? 'bg-red-100 text-red-800' :
                          type.urgency === 'High Priority' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {type.urgency}
                        </span>
                      </div>
                      <p className="text-gray-700">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Emergency Response Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: 1, title: "Emergency Call", desc: "24/7 response team", icon: Phone, time: "Immediate" },
                  { step: 2, title: "Safety Assessment", desc: "Evaluate hazards", icon: Shield, time: "30 mins" },
                  { step: 3, title: "Tree Removal", desc: "Safe extraction", icon: TreePine, time: "2-6 hours" },
                  { step: 4, title: "Damage Repair", desc: "Property restoration", icon: Home, time: "1-7 days" }
                ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.step}. {item.title}</h3>
                    <p className="text-gray-600 text-sm mb-1">{item.desc}</p>
                    <p className="text-emerald-600 text-xs font-semibold">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">24/7 Emergency</h3>
                <p className="text-gray-600 text-sm">Round-the-clock emergency tree damage response</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600 text-sm">Fully licensed tree service and restoration professionals</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Insurance Claims</h3>
                <p className="text-gray-600 text-sm">Complete documentation and insurance claim assistance</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-8 rounded-2xl text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Tree Damage Emergency?</h2>
                  <p className="text-emerald-100 mb-6 text-lg">
                    Don't wait when trees threaten your property. Our emergency response team is available 24/7 to handle dangerous tree situations and begin restoration immediately.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold inline-flex items-center justify-center">
                      <Phone className="h-5 w-5 mr-2" />
                      Emergency: (475) 257-0243
                    </button>
                    <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition-colors font-semibold">
                      Schedule Assessment
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                    <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                    <p className="text-emerald-100">Professional equipment and trained technicians ensure safe tree removal</p>
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

export default TreeDamage;