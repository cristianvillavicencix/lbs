import React from 'react';
import { ArrowRight, Shield, Smartphone, Users, Globe, Play } from 'lucide-react';
import ParallaxSection from './ui/ParallaxSection';
import AnimatedSection from './ui/AnimatedSection';

const Hero: React.FC = () => {
  const [showVideo, setShowVideo] = React.useState(false);

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <ParallaxSection speed={0.3}>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        </ParallaxSection>
        <ParallaxSection speed={0.5}>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </ParallaxSection>
        <ParallaxSection speed={0.2}>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </ParallaxSection>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left relative z-10">
            <AnimatedSection animation="slideUp">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Latinos Business</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Support</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="slideUp" delay={200}>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Professional property restoration and digital marketing services for the Latino community. From insurance estimates to complete digital strategies.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={400}>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105">
                    Get Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => setShowVideo(true)}
                    className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-medium hover:bg-white hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Video
                  </button>
                </div>
              </div>
            </AnimatedSection>

            {/* Trust Indicators */}
            <AnimatedSection animation="fadeIn" delay={600}>
              <div className="mt-12 flex flex-wrap items-center gap-8 opacity-70">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">24/7 Emergency Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-sm text-gray-600">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                  <span className="text-sm text-gray-600">500+ Projects Completed</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <AnimatedSection animation="slideLeft" delay={300} className="relative mx-auto w-full lg:max-w-md">
              <div className="relative">
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Shield, title: 'Insurance', desc: 'Professional estimates', color: 'from-blue-500 to-blue-600', delay: '0s' },
                      { icon: Users, title: 'Restoration', desc: 'Complete services', color: 'from-green-500 to-green-600', delay: '0.5s' },
                      { icon: Smartphone, title: 'Marketing', desc: 'Digital strategies', color: 'from-purple-500 to-purple-600', delay: '1s' },
                      { icon: Globe, title: 'Web Design', desc: 'Professional websites', color: 'from-orange-500 to-orange-600', delay: '1.5s' }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
                        style={{ animationDelay: item.delay }}
                      >
                        <div className={`inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br ${item.color} mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                          <item.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl max-w-4xl w-full aspect-video">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-4 -right-4 bg-white text-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              ✕
            </button>
            <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Video coming soon...</p>
                <p className="text-sm opacity-70">Learn about our services and success stories</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;