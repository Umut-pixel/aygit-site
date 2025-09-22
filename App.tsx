import { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import { Preloader } from "./components/Preloader";
import { Router } from "./router/Router";
import { usePathTracking } from "./hooks/usePathTracking";
import { selectHeader, shouldUseInnerPageBackground } from "./utils/headerUtils";
import { NO_HEADER_FOOTER_PAGES } from "./constants/pageRoutes";
// No notification system import - using direct feedback
import DevOnlyLogger from "./components/DevOnlyLogger";

// GoogleAnalytics özelliği import etmek yerine içeriye eklenip inline edildi. -- fixed
function GoogleAnalytics({ gtagId }: { gtagId: string }) {
  useEffect(() => {
    if (!gtagId || gtagId === "YOUR_GA_TRACKING_ID") return;

    // GA script yükle
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
    script.async = true;
    document.head.appendChild(script);

    // gtag setup
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }

    gtag("js", new Date());
    gtag("config", gtagId);

    return () => {
      // Cleanup - script'i kaldır
      const existingScript = document.querySelector(`script[src*="${gtagId}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [gtagId]);

  return null;
}

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
        <GoogleAnalytics gtagId="YOUR_GA_TRACKING_ID" />
        <DevOnlyLogger />
        <Router />
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isInnerPage ? 'bg-white' : ''}`}>
      <GoogleAnalytics gtagId="YOUR_GA_TRACKING_ID" />
      <DevOnlyLogger />
      {selectHeader(currentPath)}
      <Router />
      <Footer />
    </div>
  );
}