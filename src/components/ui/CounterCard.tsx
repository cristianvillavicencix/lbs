import React, { useEffect } from 'react';
import { useScrollAnimation, useCountUp } from '../../hooks/useScrollAnimation';

interface CounterCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix?: string;
  label: string;
  color: string;
  delay?: number;
}

const CounterCard: React.FC<CounterCardProps> = ({ 
  icon: Icon, 
  value, 
  suffix = '', 
  label, 
  color,
  delay = 0 
}) => {
  const { ref, isVisible } = useScrollAnimation();
  const { count, startAnimation } = useCountUp(value, 2000);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        startAnimation();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, startAnimation, delay]);

  return (
    <div 
      ref={ref}
      className={`bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br ${color} mb-6 transform transition-transform duration-300 hover:scale-110`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

export default CounterCard;