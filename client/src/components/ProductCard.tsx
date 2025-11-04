import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const savings = product.originalPrice ? product.originalPrice - product.price : 0;
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
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

  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 h-full flex flex-col" data-testid={`card-product-${product.id}`}>
      <a href={`/product/${product.slug}`} className="block relative" data-testid={`link-product-image-${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            data-testid={`img-product-${product.id}`}
          />
        </div>
        {product.badge && (
          <Badge className="absolute top-4 left-4 font-semibold" data-testid={`badge-${product.id}`}>
            {product.badge}
          </Badge>
        )}
      </a>

      <CardContent className="p-6 flex-1 flex flex-col">
        <a href={`/product/${product.slug}`} data-testid={`link-product-name-${product.id}`}>
          <h3 className="font-semibold text-xl mb-2 hover:text-primary transition-colors" data-testid={`text-product-name-${product.id}`}>
            {product.name}
          </h3>
        </a>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1" data-testid={`text-description-${product.id}`}>
          {product.description}
        </p>

        <div className="mb-4">
          {product.originalPrice && (
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg line-through text-muted-foreground" data-testid={`text-original-price-${product.id}`}>
                ${product.originalPrice.toFixed(2)}
              </span>
              <Badge variant="destructive" className="text-xs" data-testid={`badge-savings-${product.id}`}>
                Save ${savings.toFixed(2)}
              </Badge>
            </div>
          )}
          <div className="text-3xl font-bold" data-testid={`text-price-${product.id}`}>
            ${product.price.toFixed(2)}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full" 
          size="lg" 
          onClick={handleAddToCart}
          data-testid={`button-add-cart-${product.id}`}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
