import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import InsuranceEstimates from './components/services/InsuranceEstimates';
import Roofing from './components/services/Roofing';
import Siding from './components/services/Siding';
import WaterDamage from './components/services/WaterDamage';
import DigitalMarketing from './components/services/DigitalMarketing';
import SEO from './components/services/SEO';
import Restoration from './components/services/Restoration';
import Asbestos from './components/services/Asbestos';
import TreeDamage from './components/services/TreeDamage';
import SocialMedia from './components/services/SocialMedia';
import GoogleAds from './components/services/GoogleAds';
import FacebookAds from './components/services/FacebookAds';
import WebDesign from './components/services/WebDesign';
import BrandingGraphicDesign from './components/services/BrandingGraphicDesign';
import EmailMarketing from './components/services/EmailMarketing';
import TestimonialCarousel from './components/ui/TestimonialCarousel';
import ProjectGallery from './components/ui/ProjectGallery';
import CostCalculator from './components/ui/CostCalculator';
import ChatWidget from './components/ui/ChatWidget';
import BackToTop from './components/ui/BackToTop';
import FAQ from './components/ui/FAQ';
import BlogSection from './components/ui/BlogSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const HomePage = () => (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Services />
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proyectos Completados
            </h2>
            <p className="text-xl text-gray-600">
              Vea algunos de nuestros trabajos de restauración más recientes
            </p>
          </div>
          <ProjectGallery />
        </div>
      </div>
      <About />
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialCarousel />
        </div>
      </div>
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Calculadora de Costos
            </h2>
            <p className="text-xl text-gray-600">
              Obtén una estimación instantánea para tu proyecto
            </p>
          </div>
          <CostCalculator />
        </div>
      </div>
      <FAQ />
      <BlogSection />
      <Contact />
      <Footer />
      <ChatWidget />
      <BackToTop />
    </>
  );

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/services/insurance-estimates" element={<InsuranceEstimates />} />
          <Route path="/services/roofing" element={<Roofing />} />
          <Route path="/services/siding" element={<Siding />} />
          <Route path="/services/water-damage" element={<WaterDamage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/restoration" element={<Restoration />} />
          <Route path="/services/asbestos" element={<Asbestos />} />
          <Route path="/services/tree-damage" element={<TreeDamage />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/google-ads" element={<GoogleAds />} />
          <Route path="/services/facebook-ads" element={<FacebookAds />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/branding-graphic-design" element={<BrandingGraphicDesign />} />
          <Route path="/services/email-marketing" element={<EmailMarketing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;