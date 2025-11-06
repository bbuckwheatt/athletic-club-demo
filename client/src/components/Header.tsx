import { Menu, X, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logoImage from "@assets/agent_profile_logo_1762395854388.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          Elevate Your Fitness. Join the Needham Athletic Club Community.
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a
              href="/"
              className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-3 py-2 -mx-3 -my-2"
              data-testid="link-home"
            >
              <img src={logoImage} alt="Athletic Club" className="h-10 w-10" />
              <div className="text-xl font-bold text-primary">
                Needham Athletic Club
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              <a
                href="/"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-testid="link-nav-home"
              >
                Home
              </a>
              <a
                href="/#features"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-testid="link-nav-features"
              >
                Features
              </a>
              <a
                href="/membership"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-testid="link-nav-membership"
              >
                Membership
              </a>
              <a
                href="/faq"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-testid="link-nav-faq"
              >
                FAQ
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="hidden md:inline-flex"
                onClick={() => window.location.href = '/login'}
                data-testid="button-login-header"
              >
                Log In
              </Button>
              
              <Button
                variant="default"
                className="hidden md:inline-flex"
                onClick={() => window.location.href = '/membership'}
                data-testid="button-join"
              >
                Join Now
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-menu-toggle"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a
                href="/"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-testid="link-mobile-home"
              >
                Home
              </a>
              <a
                href="/#features"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-testid="link-mobile-features"
              >
                Features
              </a>
              <a
                href="/membership"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-testid="link-mobile-membership"
              >
                Membership
              </a>
              <a
                href="/faq"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-testid="link-mobile-faq"
              >
                FAQ
              </a>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => window.location.href = '/login'}
                data-testid="button-login-mobile"
              >
                Log In
              </Button>
              
              <Button
                variant="default"
                size="sm"
                className="w-full"
                onClick={() => window.location.href = '/membership'}
                data-testid="button-join-mobile"
              >
                Join Now
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
