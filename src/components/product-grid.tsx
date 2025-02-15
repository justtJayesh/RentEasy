"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RentalRequestForm from "@/components/rental-request-form";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    available: boolean;
    image: string;
}

interface ProductGridProps {
    products: Product[];
}
const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(
        null
    );

    const handleRent = (rentObjData: Product) => {
        // console.log(rentObjData);
        setSelectedProduct(rentObjData);
    };

    return (
        <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                        <div className="relative aspect-square">
                            <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                // fill
                                className="h-full w-full object-cover"
                            />
                            {!product.available && (
                                <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                                    <Badge variant="destructive">
                                        Currently Unavailable
                                    </Badge>
                                </div>
                            )}
                        </div>
                        <CardContent className="p-4">
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="text-sm text-muted-foreground">
                                {product.description}
                            </p>
                            <p className="mt-2 text-lg font-bold">
                                Rs. {product.price}
                                <span className="text-sm font-normal text-muted-foreground">
                                    /month
                                </span>
                            </p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                            <Button
                                className="w-full"
                                disabled={!product.available}
                                onClick={() => handleRent(product)}
                            >
                                Rent Now
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* {selectedProduct && (
                <RentalRequestForm
                    isOpen={!!selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    singleProduct={selectedProduct}
                />
            )} */}

            {selectedProduct && (
                <RentalRequestForm
                    isOpen={!!selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    singleProduct={selectedProduct}
                />
            )}
        </>
    );
};

export default ProductGrid;
