import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartSheet } from "@/components/CartSheet";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <a
              href="/"
              className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2 -mx-3 -my-2"
              data-testid="link-home"
            >
              <div className="text-2xl font-bold text-primary">
                Solo Stove
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
                href="/#products"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-testid="link-nav-products"
              >
                Products
              </a>
              <a
                href="/#categories"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-testid="link-nav-categories"
              >
                Categories
              </a>
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
              <a
                href="/"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-testid="link-mobile-home"
              >
                Home
              </a>
              <a
                href="/#products"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-testid="link-mobile-products"
              >
                Products
              </a>
              <a
                href="/#categories"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-testid="link-mobile-categories"
              >
                Categories
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
