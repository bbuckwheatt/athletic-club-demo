import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import HomePage from "@/pages/HomePage";
import FeaturePage from "@/pages/FeaturePage";
import LoginPage from "@/pages/LoginPage";
import AdminPage from "@/pages/AdminPage";
import NotFound from "@/pages/not-found";

function DefaultChat() {
  const [location] = useLocation();
  
  useEffect(() => {
    if (location === "/admin" || location === "/login") {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.customgpt.ai/js/chat.js";
    script.defer = true;
    
    script.onload = () => {
      const initScript = document.createElement("script");
      initScript.textContent = `
        (function(){
          function init(){
            if (window.CustomGPT) {
              CustomGPT.init({
                p_id:'85396',
                p_key:'b245dc87c03576ed6bdf3b4a3c7e820b'
              })
            }
          }
          document.readyState === 'complete' ? init() : window.addEventListener('load', init);
        })();
      `;
      document.body.appendChild(initScript);
    };
    
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      const initScripts = document.querySelectorAll('script');
      initScripts.forEach(s => {
        if (s.textContent && s.textContent.includes('CustomGPT.init')) {
          document.body.removeChild(s);
        }
      });
    };
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/feature/:slug" component={FeaturePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/admin" component={AdminPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <DefaultChat />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
