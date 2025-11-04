import { useEffect } from "react";
import { useLocation } from "wouter";

// Extend the Window interface to include CustomGPT
declare global {
  interface Window {
    CustomGPT?: {
      init: (config: { p_id: string; p_key: string }) => void;
      refresh?: () => void;
      update?: () => void;
      reload?: () => void;
      destroy?: () => void;
    };
  }
}

export function CustomGPTRefresher() {
  const [location] = useLocation();

  useEffect(() => {
    // Wait a bit for the route to fully change
    const timer = setTimeout(() => {
      if (window.CustomGPT) {
        // Try different methods to refresh the CustomGPT widget
        if (typeof window.CustomGPT.refresh === 'function') {
          window.CustomGPT.refresh();
        } else if (typeof window.CustomGPT.update === 'function') {
          window.CustomGPT.update();
        } else if (typeof window.CustomGPT.reload === 'function') {
          window.CustomGPT.reload();
        } else {
          // If no refresh method exists, re-initialize
          window.CustomGPT.init({
            p_id: '85185',
            p_key: '8bcb58416d73636b55b0c7be9729e5d0'
          });
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
}
