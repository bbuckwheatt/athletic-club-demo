import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { CategoryCard } from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { Dumbbell, Waves, Users, Activity, Heart, Sparkles } from "lucide-react";
import heroImage from "@assets/stock_images/modern_athletic_club_8ded36b3.jpg";
import tennisImage from "@assets/stock_images/outdoor_tennis_court_58faf30c.jpg";
import poolImage from "@assets/stock_images/indoor_swimming_pool_07f09045.jpg";
import fitnessImage from "@assets/stock_images/personal_training_se_0e5e1ba6.jpg";
import pickleballImage from "@assets/stock_images/pickleball_court_act_8d372807.jpg";
import type { Feature } from "@shared/schema";

const featuredFeatures: Feature[] = [
  {
    id: "1",
    slug: "tennis-courts",
    name: "Tennis Courts",
    description: "Six championship-quality courts with professional lighting. Open play and lessons available.",
    category: "tennis",
    badge: "Popular",
    image: tennisImage,
    features: ["6 championship courts", "Professional lighting", "Lessons available", "Tournament hosting"],
    details: {
      "Courts": "6 outdoor courts",
      "Surface": "Hard court",
      "Lighting": "LED professional",
      "Hours": "6am - 10pm"
    },
    capacity: "Up to 24 players",
    available: true,
  },
  {
    id: "2",
    slug: "swimming-pool",
    name: "Swimming Pool",
    description: "Olympic-size heated pool with lap lanes and family swim areas. Year-round swimming.",
    category: "pool",
    badge: "New Hours",
    image: poolImage,
    features: ["Olympic-size pool", "Heated year-round", "Lap lanes", "Family swim area"],
    details: {
      "Length": "50 meters",
      "Lanes": "8 lap lanes",
      "Temperature": "82°F",
      "Type": "Indoor heated"
    },
    capacity: "100 swimmers",
    available: true,
  },
  {
    id: "3",
    slug: "personal-training",
    name: "Personal Training",
    description: "One-on-one training with certified professionals. Customized programs for your goals.",
    category: "fitness",
    badge: "Special Rates",
    image: fitnessImage,
    features: ["Certified trainers", "Custom programs", "Nutrition guidance", "Progress tracking"],
    details: {
      "Sessions": "30 or 60 minutes",
      "Trainers": "NASM certified",
      "Programs": "Fully customized",
      "Packages": "Multiple options"
    },
    available: true,
  },
  {
    id: "4",
    slug: "pickleball-courts",
    name: "Pickleball Courts",
    description: "Four dedicated pickleball courts. Open play, leagues, and tournaments throughout the year.",
    category: "pickleball",
    badge: "New",
    image: pickleballImage,
    features: ["4 dedicated courts", "Open play daily", "Leagues & tournaments", "Equipment available"],
    details: {
      "Courts": "4 dedicated courts",
      "Surface": "Sport court",
      "Equipment": "Paddles available",
      "Events": "Weekly tournaments"
    },
    available: true,
  },
];

const categories = [
  { name: "Tennis", icon: Activity, count: 6 },
  { name: "Pool & Aquatics", icon: Waves, count: 3 },
  { name: "Fitness", icon: Dumbbell, count: 8 },
  { name: "Pickleball", icon: Activity, count: 4 },
  { name: "Social Events", icon: Users, count: 12 },
  { name: "Wellness", icon: Heart, count: 5 },
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
              alt="Modern athletic club fitness center"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
              Elevate Your Lifestyle
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-medium" data-testid="text-hero-subtitle">
              Experience world-class fitness, wellness, and community at Needham's premier athletic club. Your journey to better health starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" data-testid="button-hero-join">
                Join Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
                data-testid="button-hero-tour"
              >
                Schedule a Tour
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24" id="features">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-features-title">
                Featured Amenities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our premium facilities and programs designed for your success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {featuredFeatures.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24 bg-muted" id="categories">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-categories-title">
                Explore All Activities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From fitness to wellness, find the perfect activity for you
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
                  State-of-the-Art Facilities
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our club features cutting-edge equipment, expert staff, and beautiful facilities designed to help you achieve your fitness and wellness goals in comfort and style.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're looking to improve your tennis game, swim laps, work with a personal trainer, or enjoy our social events, we provide the perfect environment for every member of your family.
                </p>
                <Button size="lg" data-testid="button-learn-more">
                  Learn More About Our Facilities
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={poolImage}
                    alt="Olympic pool facility"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Become a Member Today
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Join the Needham Athletic Club community and gain access to world-class facilities, expert instruction, and a supportive environment. Special membership rates available now.
            </p>
            <Button size="lg" variant="default" data-testid="button-membership">
              View Membership Options
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
