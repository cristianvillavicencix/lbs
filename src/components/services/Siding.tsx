import React from 'react';
import { ArrowLeft, Home, CheckCircle, Palette, Shield, Phone, Thermometer } from 'lucide-react';

const Siding: React.FC = () => {
  const services = [
    "Vinyl siding installation",
    "Fiber cement siding",
    "Wood siding repair and replacement",
    "Aluminum siding",
    "Siding inspection and assessment",
    "Trim and fascia work",
    "Insulation installation",
    "Color matching and design consultation"
  ];

  const sidingTypes = [
    {
      name: "Vinyl Siding",
      description: "Low maintenance and cost-effective",
      benefits: ["Weather resistant", "Easy to clean", "Variety of colors"]
    },
    {
      name: "Fiber Cement",
      description: "Durable and fire-resistant option",
      benefits: ["Pest resistant", "Won't rot or warp", "Paintable surface"]
    },
    {
      name: "Wood Siding",
      description: "Natural beauty and classic appeal",
      benefits: ["Eco-friendly", "Customizable", "Timeless aesthetic"]
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
          <div className="bg-gradient-to-r from-green-600 to-green-800 px-8 py-12 text-white">
            <div className="flex items-center mb-4">
              <Home className="h-12 w-12 mr-4" />
              <h1 className="text-4xl font-bold">Siding Services</h1>
            </div>
            <p className="text-xl text-green-100">
              Professional exterior siding installation and repair services
            </p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Siding Solutions</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Transform your home's exterior with our professional siding services. We offer a wide range of materials and styles to enhance your property's curb appeal while providing superior protection against the elements.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Services</h3>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Siding Materials</h2>
                <div className="space-y-6">
                  {sidingTypes.map((type, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{type.name}</h4>
                      <p className="text-gray-600 mb-3">{type.description}</p>
                      <div className="space-y-1">
                        {type.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Benefits of Professional Siding</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Weather Protection</h3>
                  <p className="text-gray-600 text-sm">Superior protection against wind, rain, and UV rays</p>
                </div>
                <div className="text-center">
                  <Thermometer className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Energy Efficiency</h3>
                  <p className="text-gray-600 text-sm">Improved insulation reduces energy costs</p>
                </div>
                <div className="text-center">
                  <Palette className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Curb Appeal</h3>
                  <p className="text-gray-600 text-sm">Enhance your home's aesthetic and value</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Low Maintenance</h3>
                  <p className="text-gray-600 text-sm">Durable materials require minimal upkeep</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-green-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Free Siding Consultation</h2>
              <p className="text-gray-700 mb-6">
                Get expert advice on the best siding solution for your home. Our team will assess your property and provide personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (475) 257-0243
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Siding;