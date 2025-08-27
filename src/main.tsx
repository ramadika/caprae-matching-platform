import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";
import "./index.css";
import ScrollToTop from "@/utils/ScrollToTop";
import Landing from "@/pages/landing";
import Seller from "@/pages/questionnaire/seller-onboarding";
import Buyer from "@/pages/questionnaire/buyer-onboarding";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding/seller" element={<Seller />} />
        <Route path="/onboarding/buyer" element={<Buyer />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
