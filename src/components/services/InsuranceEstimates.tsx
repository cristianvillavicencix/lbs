import React from 'react';
import { ArrowLeft, Shield, CheckCircle, Clock, FileText, Phone, Calculator } from 'lucide-react';

const InsuranceEstimates: React.FC = () => {
  const benefits = [
    "Accurate damage assessment",
    "Professional documentation",
    "Insurance company liaison",
    "Fast turnaround time",
    "Detailed cost breakdown",
    "Photo documentation"
  ];

  const process = [
    {
      step: 1,
      title: "Initial Inspection",
      description: "Comprehensive property assessment"
    },
    {
      step: 2,
      title: "Documentation",
      description: "Detailed photos and measurements"
    },
    {
      step: 3,
      title: "Estimate Preparation",
      description: "Professional cost analysis"
    },
    {
      step: 4,
      title: "Insurance Submission",
      description: "Direct communication with insurers"
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-12 text-white">
            <div className="flex items-center mb-4">
              <Shield className="h-12 w-12 mr-4" />
              <h1 className="text-4xl font-bold">Insurance Estimates</h1>
            </div>
            <p className="text-xl text-blue-100">
              Professional property damage assessments for insurance claims
            </p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our certified professionals provide accurate and comprehensive insurance estimates for property damage. We work directly with insurance companies to ensure you receive fair compensation for your losses.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h2>
                <div className="space-y-6">
                  {process.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Fast Service</h3>
                <p className="text-gray-600 text-sm">24-48 hour estimate delivery</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <FileText className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Detailed Reports</h3>
                <p className="text-gray-600 text-sm">Comprehensive documentation</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <Calculator className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Accurate Pricing</h3>
                <p className="text-gray-600 text-sm">Market-based cost analysis</p>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-gray-700 mb-6">
                Contact us today for a professional insurance estimate. Our team is ready to help you navigate the claims process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (475) 257-0243
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Request Quote Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceEstimates;