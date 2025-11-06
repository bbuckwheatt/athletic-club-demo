import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { Check, Clock, MapPin, Users, ChevronLeft } from "lucide-react";
import tennisImage from "@assets/stock_images/outdoor_tennis_court_58faf30c.jpg";
import poolImage from "@assets/stock_images/indoor_swimming_pool_07f09045.jpg";
import fitnessImage from "@assets/stock_images/personal_training_se_0e5e1ba6.jpg";
import pickleballImage from "@assets/stock_images/pickleball_court_act_8d372807.jpg";
import type { Feature } from "@shared/schema";

const features: Record<string, Feature> = {
  "tennis-courts": {
    id: "1",
    slug: "tennis-courts",
    name: "Tennis Courts",
    description: "Six championship-quality courts with professional lighting. Open play and lessons available.",
    category: "tennis",
    badge: "Popular",
    image: tennisImage,
    features: [
      "6 championship-quality hard courts",
      "Professional LED lighting for night play",
      "Private lessons with certified instructors",
      "Round-robin tournaments every month",
      "Ball machine available for practice",
      "Members-only court reservation system"
    ],
    details: {
      "Courts": "6 outdoor hard courts",
      "Surface": "Premium hard court surface",
      "Lighting": "LED professional lighting",
      "Hours": "6am - 10pm daily",
      "Lessons": "Available with certified pros",
      "Reservations": "Online booking system"
    },
    capacity: "Up to 24 players",
    available: true,
  },
  "swimming-pool": {
    id: "2",
    slug: "swimming-pool",
    name: "Swimming Pool",
    description: "Olympic-size heated pool with lap lanes and family swim areas. Year-round swimming.",
    category: "pool",
    badge: "New Hours",
    image: poolImage,
    features: [
      "50-meter Olympic-size indoor pool",
      "Heated year-round to 82°F",
      "8 dedicated lap lanes",
      "Separate family swim area",
      "Swim lessons for all ages and abilities",
      "Masters swim team and water aerobics"
    ],
    details: {
      "Length": "50 meters (Olympic size)",
      "Lanes": "8 lap lanes",
      "Temperature": "82°F year-round",
      "Type": "Indoor heated",
      "Depth": "3.5 - 12 feet",
      "Hours": "5am - 9pm daily"
    },
    capacity: "100 swimmers",
    available: true,
  },
  "personal-training": {
    id: "3",
    slug: "personal-training",
    name: "Personal Training",
    description: "One-on-one training with certified professionals. Customized programs for your goals.",
    category: "fitness",
    badge: "Special Rates",
    image: fitnessImage,
    features: [
      "NASM and ACE certified trainers",
      "Fully customized workout programs",
      "Nutrition guidance and meal planning",
      "Progress tracking and assessments",
      "Flexible scheduling options",
      "Small group training available"
    ],
    details: {
      "Sessions": "30 or 60 minutes",
      "Trainers": "NASM & ACE certified",
      "Programs": "Fully customized",
      "Packages": "5, 10, or 20 session packages",
      "Assessment": "Complimentary initial consultation",
      "Specialties": "Weight loss, strength, sports performance"
    },
    available: true,
  },
  "pickleball-courts": {
    id: "4",
    slug: "pickleball-courts",
    name: "Pickleball Courts",
    description: "Four dedicated pickleball courts. Open play, leagues, and tournaments throughout the year.",
    category: "pickleball",
    badge: "New",
    image: pickleballImage,
    features: [
      "4 dedicated indoor courts",
      "Premium sport court surface",
      "Open play sessions daily",
      "Competitive leagues for all skill levels",
      "Monthly tournaments and events",
      "Paddles and balls available for members"
    ],
    details: {
      "Courts": "4 dedicated indoor courts",
      "Surface": "Premium sport court",
      "Equipment": "Paddles available to borrow",
      "Events": "Weekly open play and tournaments",
      "Leagues": "Beginner to advanced",
      "Hours": "7am - 9pm daily"
    },
    available: true,
  },
};

export default function FeaturePage() {
  const [, params] = useRoute<{ slug: string }>("/feature/:slug");
  const { toast } = useToast();
  
  const feature = params?.slug ? features[params.slug] : null;

  useEffect(() => {
    if (feature) {
      document.title = `${feature.name} - Needham Athletic Club`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${feature.description} ${feature.capacity ? `Capacity: ${feature.capacity}.` : ''} Located at Needham Athletic Club in Needham, MA.`);
      }
    }
  }, [feature]);

  if (!feature) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center px-4 py-16">
            <h1 className="text-4xl font-bold mb-4">Feature Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The feature you're looking for doesn't exist.
            </p>
            <Link href="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleContactClick = () => {
    toast({
      title: "Contact Request",
      description: "A membership consultant will contact you shortly.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Link href="/">
            <Button variant="ghost" className="mb-6 -ml-4" data-testid="button-back">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="relative rounded-2xl overflow-hidden bg-muted mb-6">
                <img
                  src={feature.image}
                  alt={feature.name}
                  className="w-full h-auto"
                  data-testid="img-feature-main"
                />
                {feature.badge && (
                  <Badge className="absolute top-6 left-6 text-base px-4 py-2" data-testid="badge-feature">
                    {feature.badge}
                  </Badge>
                )}
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-feature-name">
                  {feature.name}
                </h1>
                <p className="text-xl text-muted-foreground" data-testid="text-feature-description">
                  {feature.description}
                </p>
              </div>

              {feature.capacity && (
                <div className="mb-6 flex items-center gap-2 text-muted-foreground">
                  <Users className="h-5 w-5" />
                  <span data-testid="text-capacity">{feature.capacity}</span>
                </div>
              )}

              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-primary">
                        <Clock className="h-5 w-5" />
                        <span className="font-semibold">Hours</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature.details["Hours"] || "See details"}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-primary">
                        <MapPin className="h-5 w-5" />
                        <span className="font-semibold">Location</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Needham, MA
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-primary">
                        <Users className="h-5 w-5" />
                        <span className="font-semibold">Access</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Members Only
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4 mb-8">
                <Button 
                  size="lg" 
                  className="w-full text-lg"
                  onClick={handleContactClick}
                  data-testid="button-contact"
                >
                  Contact Us About Membership
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full text-lg"
                  onClick={handleContactClick}
                  data-testid="button-schedule-tour"
                >
                  Schedule a Tour
                </Button>
              </div>

              <Separator className="my-8" />

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6" data-testid="text-features-title">
                  Features & Amenities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {feature.features.map((item, index) => (
                    <div key={index} className="flex items-start gap-3" data-testid={`feature-item-${index}`}>
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-8" />

              <div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="details">
                    <AccordionTrigger className="text-xl font-semibold" data-testid="accordion-details">
                      Facility Details
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 gap-4 pt-4">
                        {Object.entries(feature.details).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                            <span className="font-medium text-muted-foreground">{key}</span>
                            <span className="text-right" data-testid={`detail-${key.toLowerCase().replace(/\s+/g, '-')}`}>{value}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="membership">
                    <AccordionTrigger className="text-xl font-semibold" data-testid="accordion-membership">
                      Membership Information
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-4">
                        <p className="text-muted-foreground">
                          Access to {feature.name} is included with all Needham Athletic Club memberships.
                          We offer individual, couple, and family membership options.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Unlimited access during operating hours</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Priority booking for events and tournaments</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Access to all club facilities and amenities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Member rates on lessons and training</span>
                          </li>
                        </ul>
                        <Button onClick={handleContactClick} data-testid="button-membership-info">
                          Learn About Membership Options
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq">
                    <AccordionTrigger className="text-xl font-semibold" data-testid="accordion-faq">
                      Frequently Asked Questions
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 pt-4">
                        <div>
                          <h4 className="font-semibold mb-2">Do I need to be a member to use this facility?</h4>
                          <p className="text-sm text-muted-foreground">
                            Yes, all facilities at the Needham Athletic Club are exclusive to our members and their guests.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Can I bring guests?</h4>
                          <p className="text-sm text-muted-foreground">
                            Yes, members can bring guests. Guest policies and fees vary by membership level.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">How do I book or reserve?</h4>
                          <p className="text-sm text-muted-foreground">
                            Members can use our online booking system or mobile app to reserve facilities in advance.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Are lessons or training available?</h4>
                          <p className="text-sm text-muted-foreground">
                            Yes, we offer professional instruction for members at all skill levels. Contact us for pricing and availability.
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
