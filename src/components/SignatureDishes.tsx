"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

// Import local assets
import Dish1 from "@/assets/signatureDish-1.webp"; // Oonu
import Dish2 from "@/assets/signatureDish-2.jpg";  // Beef Curry
import Dish3 from "@/assets/signatureDish-3.webp"; // Seafood

const SIGNATURE_DISHES = [
    {
        id: 1,
        name: "Traditional Oonu",
        description: "A grand Kerala feast served on a banana leaf, featuring aromatic rice, variety of vegetable curries, pickles, and crispy pappadom. The ultimate soul food of Kerala.",
        image: Dish1,
    },
    {
        id: 2,
        name: "Nadan Beef Curry",
        description: "Tender chunks of beef slow-cooked in a spicy, aromatic gravy with roasted coconut, black pepper, and fresh curry leaves. A true classic from the heart of Kerala.",
        image: Dish2,
    },
    {
        id: 3,
        name: "Coastal Seafood Platter",
        description: "Fresh catch from the Arabian Sea, marinated in our secret mix of spices and grilled to perfection. A celebration of Kochi's rich maritime culinary heritage.",
        image: Dish3,
    },
];

export default function SignatureDishes() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % SIGNATURE_DISHES.length);
        }, 4000); // 4 seconds total cycle: 2s show, 2s transition overlap if needed (or just 4s for comfort)
        // User asked for 2sec delay for fade in, let's make the auto-play cycle comfortable.

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 px-6 bg-background-light dark:bg-background-dark overflow-hidden">
            <Reveal>
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center md:text-left">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                            The Finest Flavors
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
                            Our Signature Dishes
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-24">
                        {/* Left Column: Image Carousel */}
                        <div className="relative w-full md:w-3/5 aspect-video rounded-3xl overflow-hidden shadow-2xl">
                            {SIGNATURE_DISHES.map((dish, index) => (
                                <div
                                    key={dish.id}
                                    className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                                        }`}
                                >
                                    <Image
                                        src={dish.image}
                                        alt={dish.name}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                    {/* Subtle Overlay for better text contrast if needed */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column: Description Carousel */}
                        <div className="relative w-full md:w-2/5 flex flex-col text-center md:text-left pt-4">
                            <div className="relative min-h-[400px]">
                                {SIGNATURE_DISHES.map((dish, index) => (
                                    <div
                                        key={dish.id}
                                        className={`absolute inset-0 transition-all duration-2000 ease-in-out transform ${index === currentIndex
                                            ? "opacity-100 translate-y-0 scale-100 z-10"
                                            : "opacity-0 translate-y-8 scale-95 pointer-events-none z-0"
                                            }`}
                                    >
                                        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-text-main dark:text-white leading-tight">
                                            {dish.name}
                                        </h3>
                                        <p className="text-lg md:text-xl text-text-muted dark:text-gray-400 leading-relaxed max-w-lg">
                                            {dish.description}
                                        </p>

                                        <div className="mt-10 flex items-center justify-center md:justify-start gap-4">
                                            <div className="h-px w-12 bg-primary"></div>
                                            <span className="text-sm font-bold tracking-widest uppercase text-primary">
                                                Authentic Recipe
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Carousel Indicators */}
                            <div className="mt-12 flex items-center justify-center md:justify-start gap-3">
                                {SIGNATURE_DISHES.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`h-1.5 transition-all duration-300 rounded-full ${index === currentIndex
                                            ? "w-8 bg-primary"
                                            : "w-2 bg-black/10 dark:bg-white/20 hover:bg-black/30 dark:hover:bg-white/40"
                                            }`}
                                        aria-label={`Go to dish ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
