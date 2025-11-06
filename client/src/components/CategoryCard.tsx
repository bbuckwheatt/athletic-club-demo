import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  count?: number;
}

export function CategoryCard({ name, icon: Icon, count }: CategoryCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 group" data-testid={`card-category-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="p-8 flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1" data-testid={`text-category-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {name}
          </h3>
          {count !== undefined && (
            <p className="text-sm text-muted-foreground">{count} facilities</p>
          )}
        </div>
      </div>
    </Card>
  );
}
