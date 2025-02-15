import { ArrowRight, Truck, Clock, Shield, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductGrid from "@/components/product-grid";
import TestimonialSection from "@/components/testimonial-section";
import { prisma } from "@/lib/prismaClient";

export default async function Home() {
    const products = await prisma.product.findMany();

    return (
        <div className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section className="relative bg-gray-50">
                <div className="container mx-auto px-4 py-20">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                        <div className="flex flex-col justify-center space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Rent Premium Home Appliances
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Quality appliances at affordable monthly
                                rentals. Make your home complete without the
                                heavy investment.
                            </p>
                            <div className="flex gap-4">
                                <Button size="lg">
                                    Browse Appliances
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="lg">
                                    How it Works
                                </Button>
                            </div>
                        </div>
                        <div className="relative hidden lg:block">
                            <img
                                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Kitchen appliances"
                                width={600}
                                height={400}
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Products Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">Popular Products</h2>
                        <p className="text-muted-foreground mt-2">
                            Choose from our wide range of premium appliances
                        </p>
                    </div>
                    <ProductGrid products={products} />
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">
                            Why Choose RentEase?
                        </h2>
                        <p className="text-muted-foreground mt-2">
                            Experience hassle-free appliance rentals with
                            premium benefits
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => (
                            <Card
                                key={feature.title}
                                className="border-none shadow-none bg-transparent"
                            >
                                <CardContent className="flex flex-col items-center text-center pt-6">
                                    <div className="rounded-full bg-primary/10 p-4 mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-semibold mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <TestimonialSection />

            {/* Contact Section */}
            {/* <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold">Get in Touch</h2>
                            <p className="text-muted-foreground mt-2">
                                Have questions? We'd love to hear from you. Send
                                us a message and we'll respond as soon as
                                possible.
                            </p>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </section> */}

            {/* footer section */}
        </div>
    );
}

const features = [
    {
        title: "Free Delivery & Setup",
        description:
            "Doorstep delivery and professional installation at no extra cost",
        icon: <Truck className="h-6 w-6 text-primary" />,
    },
    {
        title: "Flexible Rental Period",
        description: "Choose rental duration that suits your needs",
        icon: <Clock className="h-6 w-6 text-primary" />,
    },
    {
        title: "Quality Assurance",
        description: "All appliances undergo rigorous quality checks",
        icon: <Shield className="h-6 w-6 text-primary" />,
    },
    {
        title: "24/7 Support",
        description: "Round-the-clock customer service for maintenance",
        icon: <PhoneCall className="h-6 w-6 text-primary" />,
    },
];
