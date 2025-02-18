"use client";

import { motion } from "motion/react";

const MarqueeText = () => {
    return (
        <div className="w-full overflow-hidden bg-slate-900 py-1">
            <motion.div
                className="flex space-x-4 md:space-x-8 text-white text-sm md:text-base font-thin whitespace-nowrap"
                animate={{ x: ["100%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                }}
            >
                <p>
                    🏠 Currently Available Only in{" "}
                    <span className="font-normal uppercase">Pune</span> - Quality Appliance
                    Rentals at Your Service 🏠
                </p>
            </motion.div>
        </div>
    );
};

export default MarqueeText;
