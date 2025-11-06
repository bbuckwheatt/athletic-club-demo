import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft } from "lucide-react";
import { Link } from "wouter";

export default function MembershipPage() {
  const membershipTiers = [
    {
      name: "Individual",
      price: "$75",
      period: "/month",
      features: [
        "Full access to all club facilities",
        "Unlimited group fitness classes",
        "One complimentary personal training session",
        "State-of-the-art fitness center",
        "Aquatics center access",
        "Luxurious locker rooms with sauna & steam room"
      ]
    },
    {
      name: "Family",
      price: "$125",
      period: "/month",
      features: [
        "All Individual membership benefits",
        "Coverage for two adults",
        "Up to three children under 18",
        "Complimentary Kids Club access",
        "Family-friendly recreational pool",
        "Group fitness classes for all ages"
      ],
      popular: true
    },
    {
      name: "Corporate",
      price: "Custom",
      period: "pricing",
      features: [
        "Customizable plans for businesses",
        "Invest in employee health & wellness",
        "Flexible membership options",
        "Group rates available",
        "Dedicated account support",
        "Special corporate events"
      ]
    }
  ];

  const amenities = [
    {
      title: "State-of-the-Art Fitness Center",
      description: "Featuring a wide range of cardio and strength training equipment"
    },
    {
      title: "Aquatics Center",
      description: "Including a lap pool, recreational pool, and hot tub"
    },
    {
      title: "Group Fitness Classes",
      description: "A diverse schedule of classes, from yoga and spin to HIIT and Zumba"
    },
    {
      title: "Luxurious Locker Rooms",
      description: "With private showers, saunas, and steam rooms"
    },
    {
      title: "Childcare Services",
      description: "Complimentary access to our Kids Club for family memberships"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-24 pb-4">
        <Link href="/">
          <Button variant="ghost" data-testid="button-back-home">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="text-membership-title">
              Membership Plans
            </h1>
            <p className="text-base md:text-lg opacity-90" data-testid="text-membership-subtitle">
              Discover the perfect membership plan to fit your lifestyle and fitness goals
            </p>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-tiers-title">
              Choose Your Plan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All memberships include access to our state-of-the-art facilities, group fitness classes, 
              and a community dedicated to wellness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <Card 
                key={tier.name} 
                className={`relative ${tier.popular ? 'border-primary shadow-lg' : ''}`}
                data-testid={`card-membership-${tier.name.toLowerCase()}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">/{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={tier.popular ? "default" : "outline"}
                    onClick={() => window.location.href = '/contact'}
                    data-testid={`button-join-${tier.name.toLowerCase()}`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Included */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-amenities-title">
              Amenities Included
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our memberships provide a comprehensive wellness experience with access to all these facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {amenities.map((amenity, index) => (
              <Card key={index} data-testid={`card-amenity-${index}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{amenity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Joining Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl mb-2">Join Our Community Today</CardTitle>
              <CardDescription className="text-base">
                We're excited to welcome you to the Athletic Club
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                A one-time initiation fee of <span className="font-semibold text-foreground">$100</span> is 
                required for all new memberships.
              </p>
              <p className="text-muted-foreground">
                Be sure to ask about our current promotions, which may include waived initiation fees 
                or a free month of membership!
              </p>
              <div className="pt-4">
                <Button 
                  size="lg" 
                  onClick={() => window.location.href = '/contact'}
                  data-testid="button-contact-us"
                >
                  Contact Us to Join
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
