import Image from "next/image";
import { Star, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        name: "Aman Singh",
        role: "Working Professional",
        comment:
            "OnRent made furnishing my new apartment so convenient. Their service is exceptional!",
        rating: 5,
        image: "/user.png",
    },
    {
        name: "Jatin Chankapure",
        role: "Student",
        comment:
            "Affordable rentals and great quality products. Perfect for my temporary stay!",
        rating: 4,
        image: "/user.png",
    },
    {
        name: "Pratik Gaikwad",
        role: "Student",
        comment:
            "The convenience of having appliances delivered and installed is unmatched.",
        rating: 4,
        image: "/user.png",
    },
];

export default function TestimonialSection() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">
                        What Our Customers Say
                    </h2>
                    <p className="text-muted-foreground mt-2">
                        Relied on by satisfied households everywhere
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <Card
                            key={testimonial.name}
                            className="border-none shadow-md"
                        >
                            <CardContent className="p-6">
                                <div className="flex gap-1 mb-4">
                                    {Array.from({
                                        length: testimonial.rating,
                                    }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-4 w-4 fill-primary text-primary"
                                        />
                                    ))}
                                </div>
                                <p className="text-muted-foreground mb-4">
                                    {testimonial.comment}
                                </p>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={testimonial.image || <User />}
                                        alt={testimonial.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="font-semibold">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
