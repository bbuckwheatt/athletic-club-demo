import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Truck, Shield, RotateCcw, CreditCard } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted mt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Truck className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold text-sm">Free Shipping</h3>
                <p className="text-xs text-muted-foreground">On orders $199+</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold text-sm">Industry Leading Warranty</h3>
                <p className="text-xs text-muted-foreground">Built to last</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <RotateCcw className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold text-sm">30-Day Returns</h3>
                <p className="text-xs text-muted-foreground">100% satisfaction</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold text-sm">Flexible Payment</h3>
                <p className="text-xs text-muted-foreground">Buy now, pay later</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">Solo Stove</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Transform your backyard into the perfect gathering place with our innovative smokeless fire pits and outdoor gear.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-firepits">Fire Pits</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-pizzaovens">Pizza Ovens</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-griddles">Griddles</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-accessories">Accessories</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Stay In The Know</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Join us around the fire for exclusive savings and new releases.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="flex-1"
                  data-testid="input-newsletter-email"
                />
                <Button data-testid="button-newsletter-submit">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© Solo Stove, 2025 | 1001 Mustang Dr. Grapevine, TX 76051</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-privacy">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-terms">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
