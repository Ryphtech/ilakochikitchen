import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/assets/hero-image.png";
import HeroBananaLeaf from "@/assets/hero-banana-leaf.png";
import HeroGrass from "@/assets/hero-grass.png";
import FallingLeaf from "@/assets/falling-leaf-hero.png";

const FALLING_LEAVES = [
    {
        leftPct: 15,
        durationSec: 12,
        delaySec: 0,
        variant: "fall" as const,
        opacity: 0.8,
    },
    {
        leftPct: 35,
        durationSec: 15,
        delaySec: 2,
        variant: "fall" as const,
        opacity: 0.6,
    },
    {
        leftPct: 52,
        durationSec: 11,
        delaySec: 0,
        variant: "fall" as const,
        opacity: 0.9,
    },
    {
        leftPct: 70,
        durationSec: 13,
        delaySec: 4,
        variant: "fall" as const,
        opacity: 0.7,
    },
    {
        leftPct: 85,
        durationSec: 10,
        delaySec: 1,
        variant: "fall" as const,
        opacity: 0.85,
    },
    {
        leftPct: 25,
        durationSec: 14,
        delaySec: 6,
        variant: "fall" as const,
        opacity: 0.5,
    },
    {
        leftPct: 60,
        durationSec: 12,
        delaySec: 3,
        variant: "fall" as const,
        opacity: 0.75,
    },
];
export default function Hero() {
    return (
        <section className="relative w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden px-6">
            {/* Falling Leaves Effect */}
            <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
                {FALLING_LEAVES.map((leaf, i) => (
                    <div
                        key={i}
                        className="absolute top-[-50px] w-8 h-8 md:w-10 md:h-10"
                        style={{
                            left: `${leaf.leftPct}%`,
                            animation: `${leaf.variant} ${leaf.durationSec}s linear infinite`,
                            animationDelay: `${leaf.delaySec}s`,
                            opacity: leaf.opacity,
                        }}
                    >
                        <Image
                            src={FallingLeaf}
                            alt="Falling leaf"
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>
            {/* Animated Background Elements - Opening Reveal */}
            <div className="absolute inset-0 pointer-events-none z-0 border-0">
                {/* Left Opening Leaf */}
                <div className="absolute bottom-[-10%] left-[-15%] w-[80%] md:w-1/2 h-full animate-reveal-left origin-bottom-right z-20">
                    <div className="relative w-full h-full opacity-40">
                        <Image
                            src={HeroBananaLeaf}
                            alt="Decorative banana leaf"
                            fill
                            className="object-contain rotate-[-15deg]"
                        />
                    </div>
                </div>
                {/* Right Opening Leaf */}
                <div className="absolute bottom-[-10%] right-[-15%] w-[80%] md:w-1/2 h-full animate-reveal-right origin-bottom-left z-20">
                    <div className="relative w-full h-full opacity-40">
                        <Image
                            src={HeroBananaLeaf}
                            alt="Decorative banana leaf"
                            fill
                            className="object-contain scale-x-[-1] rotate-[15deg]"
                        />
                    </div>
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/50 to-background-light dark:via-background-dark/50 dark:to-background-dark z-10"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                {/* Central Hero Image with Reveal Effect */}
                <div className="relative group opacity-0 animate-fade-in-entry">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-[#8ae68a]/20 blur-3xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative w-[320px] h-[320px] md:w-[550px] md:h-[550px] md:-translate-y-8 lg:-translate-y-12">
                        {/* Fake button-style labels (doesn't affect layout) */}
                        <div className="absolute top-0 md:top-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                            <div className="flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white/80 dark:bg-black/40 backdrop-blur px-3 py-2 shadow-sm whitespace-nowrap">
                                <span className="text-[10px] md:text-sm font-semibold text-text-main dark:text-white tracking-wide">
                                    Seafood
                                </span>
                                <span className="w-px h-4 bg-black/10 dark:bg-white/20" />
                                <span className="text-[10px] md:text-sm font-semibold text-text-main dark:text-white tracking-wide">
                                    Nadan Kitchen
                                </span>
                            </div>
                        </div>
                        <Image
                            src={HeroImage}
                            alt="Signature Kerala fish curry served in a traditional clay pot with banana leaf"
                            fill
                            className="object-contain transform transition duration-700 hover:scale-105"
                            priority
                        />
                    </div>
                </div>

                {/* Continuous animated CTA (leaf-shaped) */}
                <div className="pointer-events-auto relative z-40 -mt-16 md:-mt-44 lg:-mt-52 opacity-0 animate-[fade-in_1.5s_ease-out_3s_forwards]">
                    <Link
                        id="hero-leaf-cta"
                        href="#"
                        className="relative inline-flex items-center justify-center select-none hover:scale-105 transition-transform group"
                        aria-label="Explore menu"
                    >
                        <div className="relative w-[150px] h-[100px] flex items-center justify-center">
                            {/* Pulsating Leaf Background */}
                            <div className="absolute inset-0 animate-[leaf-cta_2.6s_ease-in-out_infinite]">
                                <Image
                                    src={FallingLeaf}
                                    alt=""
                                    fill
                                    className="opacity-40 rotate-90 object-contain"
                                    priority
                                />
                            </div>

                            {/* Static Single-Line Text with Outline Badge */}
                            <div className="relative z-10 px-6 py-2 rounded-full border border-white/40 backdrop-blur-md bg-white/10 shadow-lg whitespace-nowrap">
                                <span className="text-xs md:text-sm font-bold text-white tracking-[0.2em] uppercase">
                                    explore our kitchen
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Grass Field at the bottom */}
            <div className="absolute bottom-[-20px] left-0 w-full h-32 z-30 pointer-events-none flex items-end opacity-0 animate-[fade-in-grass_1.5s_ease-out_1.2s_forwards]">
                <div className="flex w-full animate-[sway_10s_ease-in-out_infinite]">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="relative flex-1 h-32 min-w-[200px] -ml-10 first:ml-0"
                        >
                            <Image
                                src={HeroGrass}
                                alt="Grass field decoration"
                                fill
                                className="object-cover object-bottom opacity-80"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
