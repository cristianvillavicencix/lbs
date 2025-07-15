import React from 'react';
import { ArrowLeft, FileText, Phone, Mail, MapPin } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </button>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
            <p className="text-gray-600">Welcome to Latinos Business Support LLC</p>
          </div>

          <div className="prose max-w-none">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">Agreement</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Latinos Business Support LLC. By using our services, you agree to the following terms and conditions. Please read them carefully.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Use of Our Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  You must follow all policies available through our services. You must not misuse our services or use them in any way that could harm our business or other users.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Data Protection</h2>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to protecting your personal information in accordance with our Privacy Policy. Your data will be handled with the utmost care and security.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  We provide our services "as is." Latinos Business Support LLC will not be liable for damages or losses resulting from the use of our services, except as required by law.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Service Modifications</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may modify these terms at any time. We will notify you of important changes on our website. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content, trademarks, and intellectual property on our website and services belong to Latinos Business Support LLC or our licensors. You may not use our intellectual property without written permission.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to terminate or suspend access to our services at any time, with or without notice, for any reason including violation of these terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These terms are governed by the laws of the State of Connecticut, United States. Any disputes will be resolved in the courts of Connecticut.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">If you have any questions about these terms, you can contact us at:</p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Latinos Business Support LLC</p>
                    <p>37 W Washington Ave, Stamford, CT 06902, United States</p>
                    <p>Tax ID: 33-2697106</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span>(475) 257-0243</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span>info@latinossupport.com</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-3">🌐</span>
                  <span>www.latinossupport.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;