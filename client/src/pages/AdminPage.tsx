import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  const [, setLocation] = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (!isLoggedIn) {
      setLocation("/login");
      return;
    }
    
    setIsAuthenticated(true);

    const script = document.createElement("script");
    script.src = "https://cdn.customgpt.ai/js/embed.js";
    script.defer = true;
    script.setAttribute("div_id", "customgpt_chat");
    script.setAttribute("p_id", "85391");
    script.setAttribute("p_key", "fda48515880167e643ff4f7ecb4e7705");
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [setLocation]);

  if (!isAuthenticated) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    setLocation("/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">Admin Panel</h1>
          <Button variant="outline" onClick={handleLogout} data-testid="button-logout">
            Logout
          </Button>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-5xl">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">AI Assistant</h2>
            <p className="text-muted-foreground">Chat with our custom AI agent for administrative support</p>
          </div>
          <div className="border border-border rounded-lg shadow-lg bg-card p-4">
            <div id="customgpt_chat" data-testid="div-custom-chat" className="w-full h-[700px]"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
