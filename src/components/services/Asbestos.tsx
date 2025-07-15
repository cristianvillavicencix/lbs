import React from 'react';
import { ArrowLeft, AlertTriangle, CheckCircle, Shield, Phone, FileText, Users, Clock } from 'lucide-react';

const Asbestos: React.FC = () => {
  const services = [
    "Asbestos inspection and testing",
    "Safe asbestos removal",
    "Containment and isolation",
    "Air quality monitoring",
    "Proper disposal procedures",
    "Post-removal clearance testing",
    "Documentation and reporting",
    "Emergency asbestos response"
  ];

  const safetyMeasures = [
    {
      icon: Shield,
      title: "Certified Professionals",
      description: "EPA and state-certified asbestos removal specialists"
    },
    {
      icon: Users,
      title: "Proper Equipment",
      description: "Full protective gear and specialized removal equipment"
    },
    {
      icon: AlertTriangle,
      title: "Containment Protocols",
      description: "Strict containment procedures to prevent fiber release"
    },
    {
      icon: FileText,
      title: "Legal Compliance",
      description: "Full compliance with all federal and state regulations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center text-orange-600 hover:text-orange-800 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-orange-600 via-red-600 to-red-700 px-8 py-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-white bg-opacity-20 p-4 rounded-2xl mr-6">
                  <AlertTriangle className="h-12 w-12" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2">Asbestos Removal</h1>
                  <p className="text-xl text-orange-100">
                    Safe and professional asbestos abatement services
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                <h2 className="text-xl font-bold text-red-900">Important Safety Notice</h2>
              </div>
              <p className="text-red-800 mb-4">
                Asbestos is a hazardous material that requires professional handling. Never attempt to remove asbestos-containing materials yourself. Contact certified professionals immediately.
              </p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Emergency: (475) 257-0243
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Asbestos Abatement Services</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Asbestos was commonly used in building materials until the 1980s. If your property was built before then, it may contain asbestos. Our certified professionals provide safe, legal, and thorough asbestos removal services.
                </p>
                
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Professional Removal?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      <span>Asbestos fibers are microscopic and extremely dangerous when airborne</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      <span>Improper removal can contaminate entire buildings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      <span>Legal requirements mandate certified professional removal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      <span>Health risks include lung cancer and mesothelioma</span>
                    </li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900">Our Services Include</h3>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Safety Measures</h2>
                <div className="space-y-6">
                  {safetyMeasures.map((measure, index) => (
                    <div key={index} className="bg-gradient-to-r from-white to-orange-50 border border-orange-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="bg-orange-100 p-3 rounded-lg mr-4">
                          <measure.icon className="h-6 w-6 text-orange-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">{measure.title}</h4>
                      </div>
                      <p className="text-gray-700">{measure.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Asbestos Removal Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { step: 1, title: "Inspection", desc: "Professional testing", icon: FileText },
                  { step: 2, title: "Planning", desc: "Removal strategy", icon: Shield },
                  { step: 3, title: "Containment", desc: "Area isolation", icon: AlertTriangle },
                  { step: 4, title: "Removal", desc: "Safe extraction", icon: Users },
                  { step: 5, title: "Clearance", desc: "Final testing", icon: CheckCircle }
                ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">EPA Certified</h3>
                <p className="text-gray-600 text-sm">All technicians are EPA and state certified for asbestos removal</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Full Documentation</h3>
                <p className="text-gray-600 text-sm">Complete reporting and documentation for legal compliance</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Service</h3>
                <p className="text-gray-600 text-sm">24/7 emergency asbestos response available</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-red-700 p-8 rounded-2xl text-white">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Suspect Asbestos in Your Property?</h2>
                <p className="text-orange-100 mb-6 text-lg max-w-3xl mx-auto">
                  Don't take risks with asbestos. Contact our certified professionals for safe inspection, testing, and removal services. We ensure complete safety and legal compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors font-semibold inline-flex items-center justify-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Call (475) 257-0243
                  </button>
                  <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-orange-600 transition-colors font-semibold">
                    Free Inspection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asbestos;