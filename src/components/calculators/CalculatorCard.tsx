import React from 'react';
import { Calculator, AlertCircle, ArrowRight } from 'lucide-react';
import { MedicalCalculator } from '../../types/calculator';
import { cn } from '../../lib/utils';

interface CalculatorCardProps {
  calculator: MedicalCalculator;
  onClick: () => void;
}

export const CalculatorCard: React.FC<CalculatorCardProps> = ({
  calculator,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full p-6 bg-white rounded-lg shadow-sm border-2",
        "hover:border-primary/40 transition-all duration-200",
        "text-left space-y-4"
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Calculator className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{calculator.name}</h3>
            <p className="text-sm text-gray-500">{calculator.category}</p>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400" />
      </div>

      <p className="text-sm text-gray-600 line-clamp-2">
        {calculator.description}
      </p>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2 text-gray-500">
          <AlertCircle className="w-4 h-4" />
          <span>Nível de Evidência: {calculator.evidenceLevel}</span>
        </div>
        <span className="text-primary">
          Ver mais
        </span>
      </div>
    </button>
  );
};