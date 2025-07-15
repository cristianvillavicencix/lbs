import React from 'react';
import { ArrowLeft, Shield, Phone, Mail, MapPin } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: May 2025</p>
          </div>

          <div className="prose max-w-none">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">Our Commitment</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                At Latinos Business Support LLC, we are committed to protecting the privacy and security of the personal information of our customers, visitors, and users.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Other data voluntarily provided through our forms</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Use of Information</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Send notifications related to requested services</li>
                <li>Communicate about inquiries, estimates, or contracted services</li>
                <li>Provide customer service and support</li>
                <li>Comply with legal or regulatory requirements</li>
              </ul>
            </div>

            <div className="mb-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">SMS and Call Communication Consent</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By providing your phone number, you agree to receive calls, emails, and text messages from us. MSG & data rates may apply. Message frequency may vary.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>We will not share your mobile information with third parties or affiliates for marketing or promotional purposes</li>
                <li>We will not share your participation in an SMS campaign with any third party for purposes unrelated to providing the services of that campaign</li>
                <li>All above categories exclude text message participation and consent data; this information will not be shared with third parties</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Protection</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>We will not sell, rent, or share your information with third parties for commercial or promotional purposes</li>
                <li>We will protect your information against unauthorized access</li>
                <li>We will limit access to your information only to authorized personnel of Latinos Business Support LLC</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed">
                You have the right to request access, modification, or deletion of your personal information and to opt out of receiving communications at any time by sending "STOP".
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Links to Other Websites</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to other sites that are not under our control. We are not responsible for the privacy practices of those sites.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to update this policy at any time. Updates will be posted on this page with the corresponding date.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">If you have questions about this policy, you can contact us at:</p>
              
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

export default PrivacyPolicy;