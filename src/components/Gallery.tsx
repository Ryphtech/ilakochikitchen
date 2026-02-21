"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

// Import local assets
import Gallery1 from "@/assets/ilakochi-gallery-1.jpeg";
import Gallery2 from "@/assets/ilakochi-gallery-2.jpeg";
import Gallery3 from "@/assets/ilakochi-gallery-3.jpeg";
import HangPlant from "@/assets/ourstory-top-hangplant.png";

const GALLERY_IMAGES = [Gallery1, Gallery2, Gallery3];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
        }, 5000); // 5 seconds for each image
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="gallery" className="relative z-10 py-24 px-6 bg-white dark:bg-background-dark">
            {/* Black Fade Blend Effect at the top — Behind plants */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/40 to-transparent z-[2] pointer-events-none" />

            {/* Micro-blend overlap on top of plants for a seamless gradual fade junction */}
            <div className="absolute top-0 left-0 w-full h-[30px] bg-gradient-to-b from-black to-transparent z-[10] pointer-events-none" />

            {/* Edge-to-Edge Hanging Plants Canopy — Shifted further down for maximum visibility */}
            <div className="absolute top-0 left-0 w-full z-[5] pointer-events-none h-[500px] overflow-hidden translate-y-0">
                <div className="flex w-[110%] -ml-[5%] justify-center -space-x-12 md:-space-x-16">
                    {[...Array(60)].map((_, i) => (
                        <Reveal
                            key={i}
                            delay={10 + i * 20}
                            threshold={0.01}
                            once={true}
                            initialStyle={{ opacity: 0, transform: "translateY(-80px)" }}
                            className="flex-shrink-0"
                        >
                            <div
                                className="relative"
                                style={{
                                    width: `${140 + (i % 6) * 15}px`,
                                    height: `${320 + (i % 4) * 40}px`,
                                    marginTop: "0", // Standardized to top of masked container
                                    zIndex: i % 10
                                }}
                            >
                                <div
                                    className="w-full h-full relative"
                                    style={{
                                        transform: `rotate(${(i % 2 === 0 ? 1 : -1) * (i % 4)}deg)`
                                    }}
                                >
                                    <Image
                                        src={HangPlant}
                                        alt=""
                                        fill
                                        className="object-contain object-top"
                                        priority={i > 25 && i < 35}
                                    />
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            <Reveal>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        {/* Left Column: Story Content */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div>
                                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                                    Our Heritage
                                </span>
                                <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6 uppercase">
                                    The Story of <br /> Ila Kochi
                                </h2>
                            </div>
                            <div className="space-y-6 text-text-muted dark:text-gray-300 text-lg leading-relaxed italic">
                                <p>
                                    "Ila" – meaning leaf in Malayalam – represents the soul of our kitchen.
                                    Our story began with a simple vision: to bring the authentic,
                                    earthy flavors of a traditional Kerala home to the heart of the city.
                                </p>
                                <p>
                                    In every dish we serve, you'll find the rhythm of the backwaters and
                                    the warmth of our coastal hospitality. We cook with the seasons,
                                    using recipes passed down through generations, ensuring that every
                                    meal is a tribute to our rich culinary heritage.
                                </p>
                                <p>
                                    From the selection of hand-pounded spices to the final touch on a
                                    banana leaf, Ila Kochi is a celebration of life, nature, and the
                                    timeless art of clean, soulful cooking.
                                </p>
                            </div>

                            <div className="pt-8 block">
                                <div className="inline-flex items-center gap-4 py-3 px-6 rounded-full border border-primary/20 bg-primary/5">
                                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                                    <span className="text-sm font-bold tracking-widest uppercase text-primary">
                                        Experience the Tradition
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: 3:4 Gallery Carousel - Reduced size */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]">
                                {GALLERY_IMAGES.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                                            }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Gallery image ${index + 1}`}
                                            fill
                                            className={`object-cover transition-transform duration-[5s] ease-linear ${index === currentIndex ? "scale-110" : "scale-100"
                                                }`}
                                            priority={index === 0}
                                        />
                                        {/* Subtle overlay for depth */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                    </div>
                                ))}

                                {/* Image Progress Indicators */}
                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                                    {GALLERY_IMAGES.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`h-1 rounded-full transition-all duration-500 ${index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
