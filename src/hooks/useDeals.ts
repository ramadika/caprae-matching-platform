import { useState } from "react";
import { useNavigate } from "react-router";
import { mockDeals } from "@/utils/constants";

export function useDeals() {
  const [activeTab, setActiveTab] = useState("active");
  const [deals] = useState(mockDeals);

  const navigate = useNavigate();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return { activeTab, deals, setActiveTab, navigate, formatCurrency };
}
