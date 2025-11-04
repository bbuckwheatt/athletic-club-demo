import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { Flame, Pizza, Soup, Snowflake, ShoppingBag, Armchair } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_Backyard_Gathering_Scene_81809acf.png";
import flamesImage from "@assets/generated_images/Fire_Pit_Flames_Closeup_b0759f45.png";
import summitImage from "@assets/generated_images/Summit_Fire_Pit_Product_c2790bd4.png";
import bonfireImage from "@assets/generated_images/Bonfire_Fire_Pit_Product_1af6c87a.png";
import infinityImage from "@assets/generated_images/Infinity_Flame_Propane_Pit_6ede2f35.png";
import griddleImage from "@assets/generated_images/Steelfire_Griddle_Product_a32c0886.png";
import type { Product } from "@shared/schema";

const featuredProducts: Product[] = [
  {
    id: "1",
    slug: "infinity-flame-propane-fire-pit",
    name: "Infinity Flame Propane Fire Pit",
    description: "Our first-ever Propane Fire Pit. Wood-fire feel + integrated tabletop. Seats 5–8.",
    price: 599.99,
    category: "fire-pits",
    badge: "New Propane Fire Pit",
    image: infinityImage,
    features: ["Propane powered", "Integrated tabletop", "No wood or ash", "Seats 5-8 people"],
    specifications: {
      "Fuel Type": "Propane",
      "Diameter": "27 inches",
      "Weight": "65 lbs",
      "Material": "Stainless Steel"
    },
    seatingCapacity: "5-8 people",
    inStock: true,
  },
  {
    id: "2",
    slug: "summit-24-fire-pit",
    name: "Summit 24\" Fire Pit",
    description: "Our most advanced. Lights 3x faster. Tallest, brightest flame. Seats 5–7 people.",
    price: 479.99,
    originalPrice: 599.99,
    category: "fire-pits",
    badge: "New",
    image: summitImage,
    features: ["Lights 3x faster", "Tallest flame", "Advanced airflow", "Premium stainless steel"],
    specifications: {
      "Diameter": "24 inches",
      "Height": "16.5 inches",
      "Weight": "38 lbs",
      "Material": "304 Stainless Steel"
    },
    seatingCapacity: "5-7 people",
    inStock: true,
  },
  {
    id: "3",
    slug: "bonfire-fire-pit-stand-bundle",
    name: "Bonfire 19.5\" + Stand Bundle",
    description: "Our most popular Fire Pit. FREE Roasting Sticks gift included. Seats 4-6 people.",
    price: 349.99,
    category: "fire-pits",
    badge: "Gift Included",
    image: bonfireImage,
    features: ["Most popular size", "Free roasting sticks", "Includes stand", "Portable design"],
    specifications: {
      "Diameter": "19.5 inches",
      "Height": "14 inches",
      "Weight": "20 lbs",
      "Material": "304 Stainless Steel"
    },
    seatingCapacity: "4-6 people",
    inStock: true,
  },
  {
    id: "4",
    slug: "steelfire-30-griddle-stand-bundle",
    name: "Steelfire 30\" Griddle + Stand Holiday Bundle",
    description: "Commercial-grade griddle + stand built for backyard chefs. Zero to sear in 7 mins.",
    price: 1199.99,
    originalPrice: 1379.99,
    category: "griddles",
    badge: "New",
    image: griddleImage,
    features: ["Commercial-grade", "30-inch cooking surface", "Quick heat-up", "Professional stand"],
    specifications: {
      "Cooking Surface": "30 inches",
      "Material": "Stainless Steel",
      "Heat-up Time": "7 minutes",
      "BTU": "60,000"
    },
    inStock: true,
  },
];

const categories = [
  { name: "Fire Pits", icon: Flame, count: 12 },
  { name: "Pizza Ovens", icon: Pizza, count: 5 },
  { name: "Griddles", icon: Soup, count: 8 },
  { name: "Coolers", icon: Snowflake, count: 6 },
  { name: "Accessories", icon: ShoppingBag, count: 24 },
  { name: "Furniture", icon: Armchair, count: 10 },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Backyard gathering around fire pit"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
              Give the Gift of Gathering
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-medium" data-testid="text-hero-subtitle">
              From the world's most popular fire pits to award-winning pizza ovens, give gifts that turn moments into lasting memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" data-testid="button-hero-deals">
                Shop Holiday Deals
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
                data-testid="button-hero-propane"
              >
                Shop Propane Fire Pit
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24" id="products">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-products-title">
                New Products & Bestsellers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our latest innovations and customer favorites
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24 bg-muted" id="categories">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-categories-title">
                Shop by Category
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our complete collection of outdoor gear
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.name} {...category} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-innovation-title">
                  The Innovation Behind Smokeless
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Patented smokeless design with Signature 360° Airflow and Secondary Burn eliminates nearly all smoke. Burns 400° hotter than standard fires to maximize the smokeless experience.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  No more dodging smoky clouds or smelling like a campfire. Our advanced engineering creates a cleaner, more enjoyable fire experience for you and your guests.
                </p>
                <Button size="lg" data-testid="button-learn-more">
                  Learn More About Our Technology
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={flamesImage}
                    alt="Smokeless fire pit flames"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24 bg-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Hot Gift Ideas for Everyone
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Moms, Dads, Outdoor Adventurers, Hosts, Backyard Chefs, Bosses, Friends, & more—find great gifts to turn any backyard, campsite, or patio into the perfect place to gather & make memories.
            </p>
            <Button size="lg" variant="default" data-testid="button-gift-guide">
              Explore Our Holiday Gift Guide
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
