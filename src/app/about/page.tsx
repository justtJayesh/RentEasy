"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {  Rocket, Heart, Star } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <Image
                    src="https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Modern office hallway"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="relative z-10 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl font-bold mb-4"
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl"
                    >
                        Enhancing homes with quality appliances and essentials
                    </motion.p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold mb-8">Our Story</h2>
                        <div className="space-y-6 text-gray-600">
                            <p>
                                At ONRENT we are a trusted provider of
                                high-quality home appliances and kitchen
                                essentials, including fridges, washing machines,
                                coolers, gas stoves, and cooking utensils.
                            </p>
                            <p>
                                Our mission is to make premium products
                                accessible at affordable prices ensuring every
                                household can fulfil its needs with ease and
                                convenience. With a focuse on duribility,
                                performance, and customer satisfaction, we bring
                                you the best solutions for a comfortable and
                                efficient home. We take pride in making you feel
                                at home by providing exceptional service and
                                high-quality home essentials.
                            </p>
                            <p>
                                Our commitment is to offer reliable, affordable,
                                and efficient appliances and kitchen products
                                that enhance your everyday life. With our
                                dedication to customer satisfactions, we ensure
                                a seemless experience, making your home more
                                comfortable and convenient.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            {/* <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { number: "500+", label: "Clients Worldwide" },
                            { number: "150+", label: "Team Members" },
                            { number: "10+", label: "Years Experience" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <h3 className="text-4xl font-bold text-blue-600 mb-2">
                                    {stat.number}
                                </h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Team Section */}
            {/* <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-16"
                    >
                        Our Team
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            {
                                name: "Sarah Johnson",
                                role: "CEO & Founder",
                                image: "/placeholder.svg",
                            },
                            {
                                name: "Michael Chen",
                                role: "CTO",
                                image: "/placeholder.svg",
                            },
                            {
                                name: "Emily Rodriguez",
                                role: "Design Director",
                                image: "/placeholder.svg",
                            },
                            {
                                name: "David Kim",
                                role: "Lead Developer",
                                image: "/placeholder.svg",
                            },
                        ].map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="relative w-48 h-48 mx-auto mb-6">
                                    <Image
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {member.role}
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <Link
                                        href="#"
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <Github className="w-5 h-5" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-16"
                    >
                        Our Values
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: (
                                    <Rocket className="w-8 h-8 text-blue-600" />
                                ),
                                title: "Innovation",
                                description:
                                    "Continuously seeking modern solutions to bring you the latest in home appliance technology and kitchen convenience.",
                            },
                            {
                                icon: (
                                    <Heart className="w-8 h-8 text-blue-600" />
                                ),
                                title: "Passion",
                                description:
                                    "Dedicated to making quality home essentials accessible to every household, ensuring comfort and satisfaction in every home.",
                            },
                            {
                                icon: (
                                    <Star className="w-8 h-8 text-blue-600" />
                                ),
                                title: "Quality",
                                description:
                                    "Committed to providing durable, high-performance appliances and kitchen products that enhance your daily living experience.",
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="flex justify-center mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
