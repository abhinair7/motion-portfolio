"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
            <div className="z-10 text-center mix-blend-difference text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter"
                >
                    Abhishek Nair
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-gray-400 mt-4 font-medium tracking-wide"
                >
                    Data & Business Analyst
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
}
