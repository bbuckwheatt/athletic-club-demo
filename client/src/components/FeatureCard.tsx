import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Feature } from "@shared/schema";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 h-full flex flex-col" data-testid={`card-feature-${feature.id}`}>
      <a href={`/feature/${feature.slug}`} className="block relative" data-testid={`link-feature-image-${feature.id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={feature.image}
            alt={feature.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            data-testid={`img-feature-${feature.id}`}
          />
        </div>
        {feature.badge && (
          <Badge className="absolute top-4 left-4 font-semibold" data-testid={`badge-${feature.id}`}>
            {feature.badge}
          </Badge>
        )}
      </a>

      <CardContent className="p-6 flex-1 flex flex-col">
        <a href={`/feature/${feature.slug}`} data-testid={`link-feature-name-${feature.id}`}>
          <h3 className="font-semibold text-xl mb-2 hover:text-primary transition-colors" data-testid={`text-feature-name-${feature.id}`}>
            {feature.name}
          </h3>
        </a>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1" data-testid={`text-description-${feature.id}`}>
          {feature.description}
        </p>

        {feature.capacity && (
          <div className="text-sm text-muted-foreground mb-4" data-testid={`text-capacity-${feature.id}`}>
            <span className="font-medium">Capacity:</span> {feature.capacity}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full" 
          size="lg"
          asChild
          data-testid={`button-learn-more-${feature.id}`}
        >
          <a href={`/feature/${feature.slug}`}>Learn More</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
