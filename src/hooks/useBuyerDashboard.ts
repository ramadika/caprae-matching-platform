import { useState } from "react";

export function useBuyerDashboard() {
  const [stats] = useState({
    savedBusinesses: 15,
    activeOffers: 3,
    matches: 12,
    budget: 3500000,
  });

  return { stats };
}
