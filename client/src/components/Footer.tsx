import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted mt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold text-sm">Hours</h3>
                <p className="text-xs text-muted-foreground">Mon-Fri: 5am-10pm</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold text-sm">Location</h3>
                <p className="text-xs text-muted-foreground">Needham, MA</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold text-sm">Contact</h3>
                <p className="text-xs text-muted-foreground">(555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold text-sm">Email</h3>
                <p className="text-xs text-muted-foreground">info@needhamac.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">Needham Athletic Club</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Your premier destination for fitness, wellness, and community in Needham, MA. Elevate your lifestyle with our world-class facilities.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-tennis">Tennis</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-pool">Pool</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-fitness">Fitness</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-pickleball">Pickleball</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Stay Connected</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to receive updates on events, classes, and club news.
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
            <p>© Needham Athletic Club, 2025 | Needham, MA</p>
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
