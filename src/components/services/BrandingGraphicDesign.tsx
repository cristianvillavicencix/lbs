import React from 'react';
import { ArrowLeft, Palette, CheckCircle, Eye, Brush, Phone, Star, Image, FileText } from 'lucide-react';

const BrandingGraphicDesign: React.FC = () => {
  const services = [
    "Logo design and brand identity",
    "Business card and stationery design",
    "Brochures and marketing materials",
    "Social media graphics",
    "Website graphics and banners",
    "Vehicle wraps and signage",
    "Packaging design",
    "Brand guidelines and style guides"
  ];

  const designTypes = [
    {
      icon: Star,
      title: "Brand Identity",
      description: "Complete visual identity for your business",
      includes: ["Logo design", "Color palette", "Typography", "Brand guidelines"]
    },
    {
      icon: Image,
      title: "Marketing Materials",
      description: "Professional print and digital materials",
      includes: ["Brochures", "Flyers", "Business cards", "Banners"]
    },
    {
      icon: FileText,
      title: "Digital Graphics",
      description: "Graphics for online and social media",
      includes: ["Social media posts", "Web banners", "Email graphics", "Digital ads"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-700 px-8 py-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-white bg-opacity-20 p-4 rounded-2xl mr-6">
                  <Palette className="h-12 w-12" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2">Branding & Graphic Design</h1>
                  <p className="text-xl text-red-100">
                    Professional visual identity and marketing materials for your business
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Branding & Design Services</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Strong branding is essential for Latino businesses to stand out and build trust with customers. Our professional design services help you create a memorable visual identity that reflects your values and attracts your target audience.
                </p>
                
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Professional Branding Matters</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Build trust and credibility with customers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Stand out from competitors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Create consistent brand recognition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Communicate your values and personality</span>
                    </li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900">Our Services Include</h3>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Design Categories</h2>
                <div className="space-y-6">
                  {designTypes.map((type, index) => (
                    <div key={index} className="bg-gradient-to-r from-white to-red-50 border border-red-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="bg-red-100 p-3 rounded-lg mr-4">
                          <type.icon className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900">{type.title}</h4>
                          <p className="text-gray-600">{type.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {type.includes.map((item, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Design Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { step: 1, title: "Discovery", desc: "Understand your business", icon: Eye },
                  { step: 2, title: "Concept", desc: "Initial design ideas", icon: Brush },
                  { step: 3, title: "Design", desc: "Create visual concepts", icon: Palette },
                  { step: 4, title: "Refine", desc: "Perfect the details", icon: Star },
                  { step: 5, title: "Deliver", desc: "Final files and assets", icon: CheckCircle }
                ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-br from-red-500 to-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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
                <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Visual Impact</h3>
                <p className="text-gray-600 text-sm">Designs that capture attention and make lasting impressions</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <Brush className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Custom Creativity</h3>
                <p className="text-gray-600 text-sm">Unique designs tailored to your business and audience</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Brand Consistency</h3>
                <p className="text-gray-600 text-sm">Cohesive visual identity across all materials</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-pink-700 p-8 rounded-2xl text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Ready to Build Your Brand?</h2>
                  <p className="text-red-100 mb-6 text-lg">
                    Let us help you create a professional brand identity that sets you apart from the competition and connects with your customers. Start with a free brand consultation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition-colors font-semibold inline-flex items-center justify-center">
                      <Phone className="h-5 w-5 mr-2" />
                      Call (475) 257-0243
                    </button>
                    <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors font-semibold">
                      Free Brand Consultation
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                    <Palette className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Complete Package</h3>
                    <p className="text-red-100">Logo, colors, fonts, and guidelines for consistent branding</p>
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

export default BrandingGraphicDesign;