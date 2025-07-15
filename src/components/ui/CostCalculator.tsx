import React, { useState } from 'react';
import { Calculator, Home, Droplets, Zap, TreePine, DollarSign } from 'lucide-react';

interface CalculatorData {
  serviceType: string;
  propertySize: string;
  damageLevel: string;
  urgency: string;
  location: string;
}

const CostCalculator: React.FC = () => {
  const [formData, setFormData] = useState<CalculatorData>({
    serviceType: '',
    propertySize: '',
    damageLevel: '',
    urgency: '',
    location: ''
  });
  
  const [estimate, setEstimate] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const serviceTypes = [
    { id: 'roofing', name: 'Reparación de Techo', icon: Home, basePrice: 5000 },
    { id: 'water-damage', name: 'Daño por Agua', icon: Droplets, basePrice: 3000 },
    { id: 'fire-damage', name: 'Daño por Incendio', icon: Zap, basePrice: 8000 },
    { id: 'tree-damage', name: 'Daño por Árboles', icon: TreePine, basePrice: 2500 }
  ];

  const calculateEstimate = () => {
    if (!formData.serviceType || !formData.propertySize || !formData.damageLevel) {
      return;
    }

    const service = serviceTypes.find(s => s.id === formData.serviceType);
    if (!service) return;

    let basePrice = service.basePrice;

    // Property size multiplier
    const sizeMultipliers = {
      'small': 0.7,
      'medium': 1.0,
      'large': 1.5,
      'extra-large': 2.0
    };

    // Damage level multiplier
    const damageMultipliers = {
      'minor': 0.5,
      'moderate': 1.0,
      'severe': 1.8,
      'extensive': 2.5
    };

    // Urgency multiplier
    const urgencyMultipliers = {
      'standard': 1.0,
      'urgent': 1.3,
      'emergency': 1.6
    };

    const sizeMultiplier = sizeMultipliers[formData.propertySize as keyof typeof sizeMultipliers] || 1;
    const damageMultiplier = damageMultipliers[formData.damageLevel as keyof typeof damageMultipliers] || 1;
    const urgencyMultiplier = urgencyMultipliers[formData.urgency as keyof typeof urgencyMultipliers] || 1;

    const finalEstimate = basePrice * sizeMultiplier * damageMultiplier * urgencyMultiplier;
    
    setEstimate(Math.round(finalEstimate));
    setShowResults(true);
  };

  const resetCalculator = () => {
    setFormData({
      serviceType: '',
      propertySize: '',
      damageLevel: '',
      urgency: '',
      location: ''
    });
    setEstimate(null);
    setShowResults(false);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4">
          <Calculator className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Calculadora de Costos</h2>
        <p className="text-gray-600">Obtén una estimación instantánea para tu proyecto</p>
      </div>

      {!showResults ? (
        <div className="space-y-8">
          {/* Service Type */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              Tipo de Servicio
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceTypes.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setFormData({...formData, serviceType: service.id})}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    formData.serviceType === service.id
                      ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <service.icon className={`h-6 w-6 ${
                      formData.serviceType === service.id ? 'text-blue-600' : 'text-gray-500'
                    }`} />
                    <span className="font-medium text-gray-900">{service.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Property Size */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              Tamaño de la Propiedad
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { id: 'small', name: 'Pequeña\n(<1,500 sq ft)' },
                { id: 'medium', name: 'Mediana\n(1,500-2,500 sq ft)' },
                { id: 'large', name: 'Grande\n(2,500-4,000 sq ft)' },
                { id: 'extra-large', name: 'Extra Grande\n(>4,000 sq ft)' }
              ].map((size) => (
                <button
                  key={size.id}
                  onClick={() => setFormData({...formData, propertySize: size.id})}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                    formData.propertySize === size.id
                      ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <span className="font-medium text-gray-900 whitespace-pre-line text-sm">
                    {size.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Damage Level */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              Nivel de Daño
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { id: 'minor', name: 'Menor', color: 'green' },
                { id: 'moderate', name: 'Moderado', color: 'yellow' },
                { id: 'severe', name: 'Severo', color: 'orange' },
                { id: 'extensive', name: 'Extenso', color: 'red' }
              ].map((level) => (
                <button
                  key={level.id}
                  onClick={() => setFormData({...formData, damageLevel: level.id})}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                    formData.damageLevel === level.id
                      ? `border-${level.color}-500 bg-${level.color}-50 shadow-lg scale-105`
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <span className="font-medium text-gray-900">{level.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Urgency */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              Urgencia
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: 'standard', name: 'Estándar (1-2 semanas)' },
                { id: 'urgent', name: 'Urgente (3-5 días)' },
                { id: 'emergency', name: 'Emergencia (24-48 horas)' }
              ].map((urgency) => (
                <button
                  key={urgency.id}
                  onClick={() => setFormData({...formData, urgency: urgency.id})}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                    formData.urgency === urgency.id
                      ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <span className="font-medium text-gray-900">{urgency.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={calculateEstimate}
              disabled={!formData.serviceType || !formData.propertySize || !formData.damageLevel}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            >
              Calcular Estimación
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center space-y-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl mb-6">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Estimación de Costo</h3>
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-4">
              ${estimate?.toLocaleString()}
            </div>
            <p className="text-gray-600 mb-6">
              Esta es una estimación aproximada. El costo final puede variar según las condiciones específicas del proyecto.
            </p>
            
            <div className="bg-white rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Detalles de la Estimación:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="text-left">
                  <span className="font-medium">Servicio:</span> {serviceTypes.find(s => s.id === formData.serviceType)?.name}
                </div>
                <div className="text-left">
                  <span className="font-medium">Tamaño:</span> {formData.propertySize}
                </div>
                <div className="text-left">
                  <span className="font-medium">Daño:</span> {formData.damageLevel}
                </div>
                <div className="text-left">
                  <span className="font-medium">Urgencia:</span> {formData.urgency}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetCalculator}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Nueva Estimación
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Solicitar Cotización Oficial
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CostCalculator;