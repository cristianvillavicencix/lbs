import React from 'react';
import { ArrowLeft, Droplets, CheckCircle, Clock, Shield, Phone, AlertTriangle } from 'lucide-react';

const WaterDamage: React.FC = () => {
  const services = [
    "Emergency water extraction",
    "Structural drying and dehumidification",
    "Mold prevention and remediation",
    "Carpet and upholstery cleaning",
    "Hardwood floor restoration",
    "Drywall and insulation replacement",
    "Content cleaning and restoration",
    "Insurance claim assistance"
  ];

  const emergencySteps = [
    {
      step: 1,
      title: "Immediate Response",
      description: "24/7 emergency response team",
      time: "Within 1 hour"
    },
    {
      step: 2,
      title: "Water Extraction",
      description: "Remove standing water quickly",
      time: "1-4 hours"
    },
    {
      step: 3,
      title: "Drying Process",
      description: "Industrial dehumidifiers and fans",
      time: "3-5 days"
    },
    {
      step: 4,
      title: "Restoration",
      description: "Repair and restore damaged areas",
      time: "1-2 weeks"
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
          <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 px-8 py-12 text-white">
            <div className="flex items-center mb-4">
              <Droplets className="h-12 w-12 mr-4" />
              <h1 className="text-4xl font-bold">Water Damage Restoration</h1>
            </div>
            <p className="text-xl text-cyan-100">
              24/7 emergency water damage restoration and repair services
            </p>
          </div>

          <div className="p-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-3">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                <h2 className="text-xl font-bold text-red-900">Emergency Water Damage?</h2>
              </div>
              <p className="text-red-800 mb-4">
                Time is critical in water damage situations. Contact us immediately for 24/7 emergency response.
              </p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Emergency: (475) 257-0243
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Water Damage Services</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Water damage can occur from various sources including floods, burst pipes, roof leaks, or appliance failures. Our certified technicians respond quickly to minimize damage and begin the restoration process immediately.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Services Include</h3>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Response Process</h2>
                <div className="space-y-6">
                  {emergencySteps.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <span className="text-sm text-cyan-600 font-medium">{item.time}</span>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Water Damage Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Rapid Response</h3>
                  <p className="text-gray-600 text-sm">24/7 emergency service with quick response times</p>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Certified Technicians</h3>
                  <p className="text-gray-600 text-sm">IICRC certified water damage restoration specialists</p>
                </div>
                <div className="text-center">
                  <Droplets className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Advanced Equipment</h3>
                  <p className="text-gray-600 text-sm">Industrial-grade extraction and drying equipment</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Insurance Assistance</h3>
                  <p className="text-gray-600 text-sm">Direct insurance billing and claim support</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-cyan-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prevention Tips</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Regular Maintenance</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Inspect plumbing regularly</li>
                    <li>• Clean gutters and downspouts</li>
                    <li>• Check roof for damage</li>
                    <li>• Maintain appliance hoses</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Emergency Preparedness</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Know water shut-off locations</li>
                    <li>• Keep emergency contact numbers</li>
                    <li>• Document your property</li>
                    <li>• Review insurance coverage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterDamage;