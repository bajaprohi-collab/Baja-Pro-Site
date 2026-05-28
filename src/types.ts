export type ServiceCategory = "remodeling" | "painting" | "tile" | "repairs" | "airbnb" | "bath_kitchen" | "outdoor" | "custom";

export type QualityTier = "comfort" | "premium" | "luxury";

export interface Message {
  role: "user" | "assistant";
  content: string;
  isDemo?: boolean;
}

export interface ScopeItem {
  id: string;
  name: string;
  basePrice: number; // base price multiplier or price per room/sft
  unit: string;
  category: ServiceCategory;
  description: string;
  defaultSelected: boolean;
}

export interface ProjectEstimate {
  id: string;
  category: ServiceCategory;
  sizeSft: number;
  quality: QualityTier;
  selectedScopeIds: string[];
  totalCost: number;
  materialsCost: number;
  laborCost: number;
  timeframeWeeks: number;
  date: string;
  clientName?: string;
  clientEmail?: string;
  clientPhone?: string;
  projectNote?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  location: string;
  description: string;
  remodelingHighlights: string[];
  image: string;
  category: ServiceCategory;
  standardsMet: string[];
}
