import { useEffect } from "react";
import { useLocation } from "wouter";

// Extend the Window interface to include CustomGPT
declare global {
  interface Window {
    CustomGPT?: any;
  }
}

export function CustomGPTRefresher() {
  const [location] = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        // Refresh CustomGPT starter question when route changes
        if (window.CustomGPT) {
          // Call retrieveProjectSettings to get fresh context from the new URL
          if (typeof window.CustomGPT.retrieveProjectSettings === 'function') {
            window.CustomGPT.retrieveProjectSettings();
          }
          
          // Then refresh the chat bubble question
          if (typeof window.CustomGPT.initChatBubbleQuestion === 'function') {
            window.CustomGPT.initChatBubbleQuestion();
          }
        }
      } catch (error) {
        console.error('Error refreshing CustomGPT:', error);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
}
