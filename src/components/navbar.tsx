"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    // { name: "How It Works", href: "/how-it-works" },
    { name: "About", href: "/about" },
    // { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between m-auto px-5">
                <div className="mr-8">
                    <div>
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src="/logo.png"
                                alt="logo"
                                width={120}
                                height={120}
                                className="object-contain"
                            />
                            {/* <span className="text-xl font-bold">nRent</span> */}
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex flex-1 items-center justify-end space-x-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-medium transition-colors hover:text-primary ${
                                pathname === item.href
                                    ? "text-primary"
                                    : "text-muted-foreground"
                            }`}
                            scroll={true}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b">
                        <nav className="container p-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                                        pathname === item.href
                                            ? "text-primary"
                                            : "text-muted-foreground"
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
