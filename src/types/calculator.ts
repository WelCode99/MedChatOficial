import { z } from 'zod';

export type CalculatorCategory = 
  | 'cardiovascular'
  | 'sepsis'
  | 'stroke'
  | 'trauma'
  | 'respiratory'
  | 'renal'
  | 'hepatic'
  | 'neurologic'
  | 'obstetric'
  | 'pediatric'
  | 'metabolic'
  | 'toxicology'
  | 'hematology'
  | 'risk-assessment';

export type CalculatorInputType = 
  | 'number' 
  | 'select' 
  | 'boolean' 
  | 'radio'
  | 'checkbox'
  | 'range';

export interface CalculatorOption {
  value: string | number;
  label: string;
  points?: number;
  description?: string;
}

export interface CalculatorInput {
  id: string;
  label: string;
  type: CalculatorInputType;
  required: boolean;
  options?: CalculatorOption[];
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  description?: string;
  validation?: z.ZodType<any>;
}

export interface CalculatorResult {
  score: number;
  interpretation: string;
  recommendation?: string;
  risk?: 'low' | 'moderate' | 'high' | 'very-high';
  details?: {
    label: string;
    value: string | number;
    interpretation?: string;
  }[];
  references?: string[];
}

export interface MedicalCalculator {
  id: string;
  name: string;
  description: string;
  category: CalculatorCategory;
  inputs: CalculatorInput[];
  calculate: (values: Record<string, any>) => CalculatorResult;
  references: string[];
  version?: string;
  lastUpdated?: Date;
  evidenceLevel?: 'A' | 'B' | 'C';
  notes?: string;
}