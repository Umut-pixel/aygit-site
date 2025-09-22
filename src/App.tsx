import React from 'react';
import { useState } from "react";
import { Footer } from "../components/Footer";
import { Preloader } from "../components/Preloader";
import { Router } from "../router/Router";
import { usePathTracking } from "../hooks/usePathTracking";
import { selectHeader, shouldUseInnerPageBackground } from "../utils/headerUtils";
import { NO_HEADER_FOOTER_PAGES } from "../constants/pageRoutes";


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const currentPath = usePathTracking();

  // BULLETPROOF preloader completion handler
  const handlePreloaderComplete = () => {
    try {
      setIsLoading(false);
    } catch (error) {
      // Silent fallback - always show app
      setIsLoading(false);
    }
  };

  const isInnerPage = shouldUseInnerPageBackground(currentPath);
  const shouldHideHeaderFooter = NO_HEADER_FOOTER_PAGES.includes(currentPath);

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  if (shouldHideHeaderFooter) {
    return (
      <div className="min-h-screen">
        <Router />
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isInnerPage ? 'bg-white' : ''}`}>
      {selectHeader(currentPath)}
      <Router />
      <Footer />
    </div>
  );
}