"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Rent Utilites", href: "/products" },
    // { name: "How It Works", href: "/how-it-works" },
    { name: "About", href: "/about" },
    // { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between m-auto">
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
                <nav className="flex flex-1 items-center justify-end space-x-6">
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
                {/* <div className="flex items-center space-x-4">
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="relative h-8 w-8 rounded-full"
                                >
                                    <User className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    <Link href="/dashboard">Dashboard</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/profile">Profile</Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <button className="w-full text-left">
                                        Sign out
                                    </button>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button asChild variant="default">
                            <Link href="/sign-in">Sign In</Link>
                        </Button>
                    )}
                </div> */}
            </div>
        </header>
    );
}
