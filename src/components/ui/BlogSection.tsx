import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Cómo Preparar tu Hogar para la Temporada de Huracanes",
    excerpt: "Consejos esenciales para proteger tu propiedad antes de que llegue la temporada de tormentas. Desde inspecciones de techo hasta planes de emergencia.",
    author: "Carlos Mendoza",
    date: "15 de Marzo, 2025",
    readTime: "5 min",
    category: "Prevención",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400",
    featured: true
  },
  {
    id: 2,
    title: "Marketing Digital para Negocios Latinos: Guía Completa",
    excerpt: "Estrategias efectivas para hacer crecer tu negocio latino en el mercado digital. Desde redes sociales hasta SEO local.",
    author: "María González",
    date: "12 de Marzo, 2025",
    readTime: "8 min",
    category: "Marketing",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
    featured: false
  },
  {
    id: 3,
    title: "Señales de que Necesitas Reparar tu Techo",
    excerpt: "Aprende a identificar los primeros signos de daño en el techo para evitar problemas mayores y costosos en el futuro.",
    author: "Roberto Silva",
    date: "10 de Marzo, 2025",
    readTime: "4 min",
    category: "Mantenimiento",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400",
    featured: false
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Blog y Recursos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente informado con nuestros artículos sobre restauración de propiedades, 
            marketing digital y consejos para negocios latinos.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <AnimatedSection 
              key={post.id} 
              animation="slideUp" 
              delay={index * 200}
              className="lg:col-span-2"
            >
              <article className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Destacado
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center space-x-4 mb-3 text-sm">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium group">
                      <span>Leer más</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}

          {/* Regular Posts */}
          <div className="space-y-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <AnimatedSection 
                key={post.id} 
                animation="slideLeft" 
                delay={(index + 1) * 200}
              >
                <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        Leer →
                      </button>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection animation="fadeIn" delay={800} className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Ver Todos los Artículos
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BlogSection;