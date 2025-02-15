import type { Metadata } from "next";
import ProductGrid from "../../components/product-grid";
import { prisma } from "@/lib/prismaClient";


export const metadata: Metadata = {
    title: "Rentable Products | RentEase",
    description:
        "Browse our wide selection of high-quality rentable home appliances and electronics.",
};

export default async function ProductsPage() {
    const products = await prisma.product.findMany();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Rentable Products</h1>
            <ProductGrid products={products} />
            
        </div>
    );
}
