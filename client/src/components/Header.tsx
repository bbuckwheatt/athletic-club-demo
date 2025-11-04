import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartSheet } from "@/components/CartSheet";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If not on homepage, navigate there first
    if (location !== '/') {
      setLocation('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          Give the gift of gathering. Shop our best holiday deals all season long.
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2 -mx-3 -my-2" data-testid="link-home">
              <div className="text-2xl font-bold text-primary">
                Solo Stove
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-nav-home">
                Home
              </Link>
              <button
                onClick={() => scrollToSection('products')}
                className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                data-testid="link-nav-products"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('categories')}
                className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                data-testid="link-nav-categories"
              >
                Categories
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <CartSheet />

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
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-home"
              >
                Home
              </Link>
              <button
                onClick={() => {
                  scrollToSection('products');
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-medium hover:text-primary transition-colors text-left"
                data-testid="link-mobile-products"
              >
                Products
              </button>
              <button
                onClick={() => {
                  scrollToSection('categories');
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-medium hover:text-primary transition-colors text-left"
                data-testid="link-mobile-categories"
              >
                Categories
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
