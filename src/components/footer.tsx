import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-gray-50">
            <div className="container py-12 md:py-16 m-auto px-2">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div>
                        <h3 className="text-sm font-semibold">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-muted-foreground hover:text-primary"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/careers"
                                    className="text-sm text-muted-foreground hover:text-primary"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-sm text-muted-foreground hover:text-primary"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Products</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    href="/products/appliances"
                                    className="text-sm text-muted-foreground hover:text-primary"
                                >
                                    Appliances
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products/electronics"
                                    className="text-sm text-muted-foreground hover:text-primary"
                                >
                                    Electronics
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products/furniture"
                                    className="text-sm text-muted-foreground hover:text-primary"
                                >
                                    Furniture
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Support</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    href="/help"
                                    className="text-sm text-muted-foreground hover:text-primary"
                                >
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-sm text-muted-foreground hover:text-primary"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-sm text-muted-foreground hover:text-primary"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Connect</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <div className="flex space-x-4">
                                    <Link
                                        href="#"
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        <Facebook className="h-5 w-5" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        <Instagram className="h-5 w-5" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        <Twitter className="h-5 w-5" />
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <Link
                                    href="tel:+1234567890"
                                    className="text-sm text-muted-foreground hover:text-primary"
                                >
                                    +91 7038582805
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="mailto:support@rentease.com"
                                    className="text-sm text-muted-foreground hover:text-primary"
                                >
                                    support@onrent.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8">
                    <p className="text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} OnRent. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
