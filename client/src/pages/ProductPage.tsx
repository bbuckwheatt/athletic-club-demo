import { useRoute, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Check, Truck, Shield, RotateCcw, ChevronLeft } from "lucide-react";
import summitImage from "@assets/generated_images/Summit_Fire_Pit_Product_c2790bd4.png";
import bonfireImage from "@assets/generated_images/Bonfire_Fire_Pit_Product_1af6c87a.png";
import infinityImage from "@assets/generated_images/Infinity_Flame_Propane_Pit_6ede2f35.png";
import griddleImage from "@assets/generated_images/Steelfire_Griddle_Product_a32c0886.png";
import type { Product } from "@shared/schema";

const products: Record<string, Product> = {
  "summit-24-fire-pit": {
    id: "2",
    slug: "summit-24-fire-pit",
    name: "Summit 24\" Fire Pit",
    description: "Our most advanced. Lights 3x faster. Tallest, brightest flame. Seats 5–7 people.",
    price: 479.99,
    originalPrice: 599.99,
    category: "fire-pits",
    badge: "New",
    image: summitImage,
    features: [
      "Lights 3x faster than previous models",
      "Tallest, brightest flame in our lineup",
      "Advanced 360° Airflow Technology",
      "Premium 304 stainless steel construction",
      "Removable ash pan for easy cleanup",
      "Lifetime warranty included"
    ],
    specifications: {
      "Diameter": "24 inches",
      "Height": "16.5 inches",
      "Weight": "38 lbs",
      "Material": "304 Stainless Steel",
      "Fuel Type": "Wood",
      "Burn Time": "3-4 hours per load"
    },
    seatingCapacity: "5-7 people",
    inStock: true,
  },
  "bonfire-fire-pit-stand-bundle": {
    id: "3",
    slug: "bonfire-fire-pit-stand-bundle",
    name: "Bonfire 19.5\" + Stand Bundle",
    description: "Our most popular Fire Pit. FREE Roasting Sticks gift included. Seats 4-6 people.",
    price: 349.99,
    category: "fire-pits",
    badge: "Gift Included",
    image: bonfireImage,
    features: [
      "Our most popular size for versatility",
      "FREE Roasting Sticks included",
      "Durable stand raises fire off ground",
      "Portable - perfect for camping or backyard",
      "Signature 360° Airflow design",
      "Easy to clean and maintain"
    ],
    specifications: {
      "Diameter": "19.5 inches",
      "Height": "14 inches",
      "Weight": "20 lbs",
      "Material": "304 Stainless Steel",
      "Fuel Type": "Wood",
      "Portability": "Highly portable"
    },
    seatingCapacity: "4-6 people",
    inStock: true,
  },
  "infinity-flame-propane-fire-pit": {
    id: "1",
    slug: "infinity-flame-propane-fire-pit",
    name: "Infinity Flame Propane Fire Pit",
    description: "Our first-ever Propane Fire Pit. Wood-fire feel + integrated tabletop. Seats 5–8.",
    price: 599.99,
    category: "fire-pits",
    badge: "New Propane Fire Pit",
    image: infinityImage,
    features: [
      "First-of-its-kind propane fire pit",
      "Wood-fire look without wood or ash",
      "Integrated tabletop surround",
      "No smoke, no sparks, no cleanup",
      "Instant ignition with control knob",
      "Perfect for entertaining guests"
    ],
    specifications: {
      "Diameter": "27 inches",
      "Weight": "65 lbs",
      "Material": "Stainless Steel & Powder Coated Steel",
      "Fuel Type": "Propane (20 lb tank)",
      "BTU Output": "55,000 BTU",
      "Run Time": "8-10 hours per tank"
    },
    seatingCapacity: "5-8 people",
    inStock: true,
  },
  "steelfire-30-griddle-stand-bundle": {
    id: "4",
    slug: "steelfire-30-griddle-stand-bundle",
    name: "Steelfire 30\" Griddle + Stand Holiday Bundle",
    description: "Commercial-grade griddle + stand built for backyard chefs. Zero to sear in 7 mins.",
    price: 1199.99,
    originalPrice: 1379.99,
    category: "griddles",
    badge: "New",
    image: griddleImage,
    features: [
      "Commercial-grade stainless steel construction",
      "30-inch expansive cooking surface",
      "Heats to 500°F in just 7 minutes",
      "Professional-grade stand included",
      "Three-zone heating for versatility",
      "Restaurant-quality results at home"
    ],
    specifications: {
      "Cooking Surface": "30 inches x 20 inches",
      "Material": "Stainless Steel",
      "Heat-up Time": "7 minutes to 500°F",
      "BTU Output": "60,000 BTU",
      "Zones": "3 independent heat zones",
      "Weight": "85 lbs with stand"
    },
    inStock: true,
  },
};

export default function ProductPage() {
  const [, params] = useRoute("/product/:slug");
  const product = params?.slug ? products[params.slug] : null;
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (!product) return;
    
    addToCart({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the product you're looking for.
          </p>
          <Link href="/" data-testid="link-home-fallback">
            <Button>Return to Home</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const savings = product.originalPrice ? product.originalPrice - product.price : 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors" data-testid="link-back-home">
            <ChevronLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                <div className="rounded-2xl overflow-hidden bg-muted shadow-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto"
                    data-testid="img-product-main"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-24">
                {product.badge && (
                  <Badge className="mb-4 text-sm py-1 px-3" data-testid="badge-product">
                    {product.badge}
                  </Badge>
                )}

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-product-name">
                  {product.name}
                </h1>

                <div className="mb-6">
                  {product.originalPrice && (
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl line-through text-muted-foreground" data-testid="text-original-price">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                      <Badge variant="destructive" className="text-sm" data-testid="badge-savings">
                        Save ${savings.toFixed(2)}
                      </Badge>
                    </div>
                  )}
                  <div className="text-4xl md:text-5xl font-bold text-primary" data-testid="text-price">
                    ${product.price.toFixed(2)}
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-6" data-testid="text-description">
                  {product.description}
                </p>

                {product.seatingCapacity && (
                  <p className="text-sm font-medium mb-6" data-testid="text-seating">
                    Seating Capacity: {product.seatingCapacity}
                  </p>
                )}

                <Separator className="my-6" />

                <div className="space-y-4 mb-8">
                  <Button 
                    size="lg" 
                    className="w-full text-lg py-6" 
                    onClick={handleAddToCart}
                    data-testid="button-add-to-cart"
                  >
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline" className="w-full text-lg py-6" data-testid="button-learn-more">
                    Learn More
                  </Button>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Free Shipping</p>
                      <p className="text-xs text-muted-foreground">On orders over $199</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Lifetime Warranty</p>
                      <p className="text-xs text-muted-foreground">Built to last a lifetime</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <RotateCcw className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">30-Day Returns</p>
                      <p className="text-xs text-muted-foreground">100% satisfaction guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full" defaultValue="features">
              <AccordionItem value="features">
                <AccordionTrigger className="text-xl font-semibold" data-testid="accordion-features">
                  Features & Benefits
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pt-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3" data-testid={`feature-${index}`}>
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="specifications">
                <AccordionTrigger className="text-xl font-semibold" data-testid="accordion-specifications">
                  Technical Specifications
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border" data-testid={`spec-${key.toLowerCase().replace(/\s+/g, '-')}`}>
                        <span className="font-medium">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="warranty">
                <AccordionTrigger className="text-xl font-semibold" data-testid="accordion-warranty">
                  Warranty & Returns
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-4">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-2">Industry Leading Warranty</h3>
                        <p className="text-sm text-muted-foreground">
                          Every Solo Stove product is built to last a lifetime. We stand behind our craftsmanship with an industry-leading warranty that covers manufacturing defects.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-2">30-Day Money Back Guarantee</h3>
                        <p className="text-sm text-muted-foreground">
                          If you're not 100% satisfied with your purchase, return it within 30 days for a full refund. No questions asked.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
