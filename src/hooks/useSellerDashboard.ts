import { useState } from "react";

export function useSellerDashboard() {
  const [stats] = useState({
    profileViews: 127,
    likes: 23,
    matches: 8,
    revenue: 2450000,
    growth: 12.5,
  });

  return { stats };
}
