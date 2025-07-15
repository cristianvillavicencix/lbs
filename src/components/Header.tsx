import React from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [servicesOpen, setServicesOpen] = React.useState(false);

  const services = [
    { name: 'Insurance Estimates', path: '/services/insurance-estimates' },
    { name: 'Roofing', path: '/services/roofing' },
    { name: 'Water Damage', path: '/services/water-damage' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'SEO', path: '/services/seo' },
    { name: 'Web Design', path: '/services/web-design' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>🚨 Emergency 24/7: (475) 257-0243</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>📧 info@latinossupport.com</span>
              <span>📍 Stamford, CT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src="https://yourfiles.cloud/uploads/85762c5954998231db205492ac5eb212/logo-ezgif.com-webp-to-jpg-converter.jpg" 
                alt="Latinos Business Support" 
                className="h-12 w-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <a
                      href="#services"
                      className="block px-6 py-3 text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
                    >
                      View All Services →
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About Us</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>(475) 257-0243</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="h-4 w-4" />
              <span>info@latinossupport.com</span>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Quote
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About Us</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;