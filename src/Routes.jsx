import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundary";
import Homepage from "@/pages/homepage";
import SalonSpaExperience from "@/pages/salon-spa-experience";
import FarmFreshSustainability from "@/pages/farm-fresh-sustainability";
import Contact from "@/pages/contact";

const Routes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ErrorBoundary>
        <RouterRoutes>
          <Route path="/" element={<Homepage />} />
          <Route path="/salon" element={<SalonSpaExperience />} />
          <Route path="/farm" element={<FarmFreshSustainability />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Homepage />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;