import React from 'react';
import { ArrowLeft, Home, CheckCircle, Shield, Wrench, Phone, Star } from 'lucide-react';

const Roofing: React.FC = () => {
  const services = [
    "Roof inspection and assessment",
    "Shingle replacement and repair",
    "Metal roofing installation",
    "Flat roof systems",
    "Emergency roof repairs",
    "Gutter installation and repair",
    "Roof ventilation systems",
    "Skylight installation"
  ];

  const materials = [
    {
      name: "Asphalt Shingles",
      description: "Durable and cost-effective option",
      warranty: "25-30 years"
    },
    {
      name: "Metal Roofing",
      description: "Long-lasting and energy efficient",
      warranty: "40-50 years"
    },
    {
      name: "Tile Roofing",
      description: "Premium aesthetic and durability",
      warranty: "50+ years"
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
          <div className="bg-gradient-to-r from-red-600 to-red-800 px-8 py-12 text-white">
            <div className="flex items-center mb-4">
              <Home className="h-12 w-12 mr-4" />
              <h1 className="text-4xl font-bold">Roofing Services</h1>
            </div>
            <p className="text-xl text-red-100">
              Professional roofing installation, repair, and maintenance
            </p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Roofing Services</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  From minor repairs to complete roof replacements, our experienced team provides comprehensive roofing solutions for residential and commercial properties. We use only the highest quality materials and proven installation techniques.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Services Include</h3>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Roofing Materials</h2>
                <div className="space-y-6">
                  {materials.map((material, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{material.name}</h4>
                      <p className="text-gray-600 mb-2">{material.description}</p>
                      <div className="flex items-center text-sm text-green-600">
                        <Shield className="h-4 w-4 mr-1" />
                        <span>Warranty: {material.warranty}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Roofing Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Materials</h3>
                  <p className="text-gray-600 text-sm">Premium roofing materials from trusted manufacturers</p>
                </div>
                <div className="text-center">
                  <Wrench className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Expert Installation</h3>
                  <p className="text-gray-600 text-sm">Certified professionals with years of experience</p>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Warranty Protection</h3>
                  <p className="text-gray-600 text-sm">Comprehensive warranties on materials and labor</p>
                </div>
                <div className="text-center">
                  <Phone className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">24/7 Emergency</h3>
                  <p className="text-gray-600 text-sm">Emergency roof repair services available</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-red-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Roof Repair</h2>
              <p className="text-gray-700 mb-6">
                Storm damage? Leak emergency? Our team is available 24/7 for urgent roofing repairs to protect your property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency: (475) 257-0243
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Schedule Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roofing;