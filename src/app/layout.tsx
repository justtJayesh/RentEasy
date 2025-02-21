import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type React from "react"; // Added import for React
import MarqueeText from "@/components/marquee-text";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "OnRent - Home Appliance Rentals",
    description:
        "Rent quality home appliances with flexible plans and free delivery.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="relative min-h-screen flex flex-col">
                    <MarqueeText />
                    <Navbar />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
                {/* <Toaster /> */}
            </body>
        </html>
    );
}
