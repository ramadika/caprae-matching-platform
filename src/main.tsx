import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";
import "./index.css";
import ScrollToTop from "@/utils/ScrollToTop";
import Landing from "@/pages/landing";
import SellerOnboarding from "@/pages/onboarding/seller-onboarding";
import BuyerOnboarding from "@/pages/onboarding/buyer-onboarding";
import SellerDashboard from "@/pages/dashboard/seller-dashboard";
import BuyerDashboard from "@/pages/dashboard/buyer-dashboard";
import Matching from "@/pages/matching";
import Deals from '@/pages/deals'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding/seller" element={<SellerOnboarding />} />
        <Route path="/onboarding/buyer" element={<BuyerOnboarding />} />
        <Route path="/dashboard/seller" element={<SellerDashboard />} />
        <Route path="/dashboard/buyer" element={<BuyerDashboard />} />
        <Route path="/discover" element={<Matching />} />
        <Route path="/deals" element={<Deals />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
