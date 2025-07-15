import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "¿Qué tipos de daños por agua pueden reparar?",
    answer: "Reparamos todo tipo de daños por agua incluyendo inundaciones, tuberías rotas, daños por tormenta, filtraciones de techo, y problemas de electrodomésticos. Nuestro equipo está certificado para manejar desde daños menores hasta restauraciones completas.",
    category: "Restauración"
  },
  {
    id: 2,
    question: "¿Cuánto tiempo toma una reparación de techo?",
    answer: "El tiempo depende del tamaño y complejidad del proyecto. Reparaciones menores pueden tomar 1-2 días, mientras que reemplazos completos pueden tomar 3-7 días. Siempre proporcionamos un cronograma detallado antes de comenzar.",
    category: "Techado"
  },
  {
    id: 3,
    question: "¿Trabajan directamente con las compañías de seguros?",
    answer: "Sí, tenemos experiencia trabajando con todas las principales compañías de seguros. Podemos ayudarte con la documentación, estimaciones, y comunicación directa con tu asegurador para facilitar el proceso de reclamo.",
    category: "Seguros"
  },
  {
    id: 4,
    question: "¿Qué incluye su servicio de marketing digital?",
    answer: "Nuestros servicios incluyen diseño web, SEO, Google Ads, Facebook Ads, gestión de redes sociales, email marketing, y branding. Creamos estrategias personalizadas para cada negocio latino.",
    category: "Marketing"
  },
  {
    id: 5,
    question: "¿Ofrecen servicios de emergencia 24/7?",
    answer: "Sí, nuestro equipo de emergencia está disponible 24 horas al día, 7 días a la semana para situaciones urgentes como daños por agua, incendio, o problemas estructurales que requieren atención inmediata.",
    category: "Emergencia"
  },
  {
    id: 6,
    question: "¿Cuánto cuesta una evaluación inicial?",
    answer: "Ofrecemos evaluaciones gratuitas para todos nuestros servicios. Esto incluye inspección de la propiedad, estimación de costos, y consulta sobre el mejor plan de acción para tu proyecto específico.",
    category: "Costos"
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', ...Array.from(new Set(faqData.map(item => item.category)))];
  const filteredFAQ = selectedCategory === 'Todos' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn" className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
            <HelpCircle className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection animation="slideUp" delay={200} className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQ.map((item, index) => (
            <AnimatedSection 
              key={item.id} 
              animation="slideUp" 
              delay={index * 100}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.question}
                  </h3>
                </div>
                <div className="ml-4">
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="h-6 w-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-500" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openItems.includes(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeIn" delay={600} className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿No encuentras la respuesta que buscas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo está aquí para ayudarte con cualquier pregunta específica sobre tu proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Contactar Ahora
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Programar Consulta
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;