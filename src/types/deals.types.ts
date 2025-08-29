export interface Deal {
  id: string;
  buyerName: string;
  buyerCompany: string;
  buyerAvatar?: string;
  businessName: string;
  offerAmount: number;
  stage: "initial" | "diligence" | "negotiation" | "closing" | "completed";
  progress: number;
  lastActivity: string;
  nextAction: string;
  documents: {
    uploaded: number;
    required: number;
  };
  aiInsights: string[];
}
