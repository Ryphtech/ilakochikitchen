"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/assets/hero-image.png";
import HeroBananaLeaf from "@/assets/hero-banana-leaf.png";
import HeroGrass from "@/assets/hero-grass.png";
import FallingLeaf from "@/assets/falling-leaf-hero.png";
import TreeBranch from "@/assets/tree-branch-hero.png";
import HeroBanner1 from "@/assets/hero-banner-1.jpeg";
import HeroBanner2 from "@/assets/hero-banner-2.jpeg";
import HeroBanner3 from "@/assets/hero-banner-3.jpg";

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

const DISPLAY_BANNERS = [
    HeroBanner2, HeroBanner3, // Clones for end-to-start transition
    HeroBanner1, HeroBanner2, HeroBanner3, // Main items
    HeroBanner1, HeroBanner2 // Clones for start-to-end transition
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = React.useState(2); // Start at the "real" first image (HeroBanner1)
    const [isTransitioning, setIsTransitioning] = React.useState(true);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setCurrentIndex((prev) => prev + 1);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        // When we reach the end of the main set (index 5 is the clone of HeroBanner1)
        if (currentIndex === 5) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(2); // Jump back to the real HeroBanner1
            }, 1000); // Matches transition duration
            return () => clearTimeout(timer);
        }
        // If we somehow go backwards (index 1 is clone of HeroBanner3)
        if (currentIndex === 1) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(4); // Jump to real HeroBanner3
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [currentIndex]);

    return (
        <section className="relative w-full h-dvh mt-[-56px] sm:mt-[-64px] md:mt-[-80px] lg:mt-[-96px] pt-[56px] sm:pt-[64px] md:pt-[80px] lg:pt-[96px] flex flex-col items-center justify-center overflow-hidden px-6">
            {/* Tree Branches — Top Left & Right */}
            {/* Left Branch */}
            <div className="absolute top-0 left-0 w-[45%] md:w-[30%] h-auto z-30 pointer-events-none">
                <div className="opacity-0 animate-[branch-slide-down_2s_ease-out_0.5s_both]">
                    <div className="animate-[branch-shake_7s_ease-in-out_infinite_2.5s_both] origin-top-left">
                        <Image
                            src={TreeBranch}
                            alt="Decorative tree branch"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
            {/* Right Branch */}
            <div className="absolute top-0 right-0 w-[45%] md:w-[30%] h-auto z-30 pointer-events-none">
                <div className="opacity-0 animate-[branch-slide-down_2s_ease-out_0.8s_both]">
                    <div className="scale-x-[-1] origin-center">
                        <div className="animate-[branch-shake_8s_ease-in-out_infinite_2.8s_both] origin-top-left">
                            <Image
                                src={TreeBranch}
                                alt="Decorative tree branch"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Falling Leaves Effect */}
            <div className="absolute top-[56px] sm:top-[64px] md:top-[80px] lg:top-[96px] left-0 right-0 bottom-0 pointer-events-none z-40 overflow-hidden">
                {FALLING_LEAVES.map((leaf, i) => (
                    <div
                        key={i}
                        className="absolute w-6 h-6 md:w-10 md:h-10"
                        style={{
                            left: `${leaf.leftPct}%`,
                            animation: `${leaf.variant} ${leaf.durationSec}s linear infinite`,
                            animationDelay: `${leaf.delaySec + 2}s`,
                            animationFillMode: "backwards",
                            "--leaf-opacity": leaf.opacity,
                        } as React.CSSProperties}
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
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/20 to-background-light dark:via-background-dark/20 dark:to-background-dark z-10"></div>
            </div>

            <div className="relative z-40 flex flex-col items-center text-center max-w-4xl mx-auto space-y-4 md:space-y-6 -translate-y-8 md:-translate-y-12 lg:-translate-y-16">
                {/* Central Hero Image with Reveal Effect */}
                <div className="relative group opacity-0 animate-fade-in-entry">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-[#8ae68a]/20 blur-3xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative w-[280px] h-[280px] md:w-[480px] md:h-[480px]">
                        {/* Fake button-style labels (mobile only) */}
                        <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 z-20 pointer-events-none md:hidden">
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

                {/* Mobile CTA Button — Clean & Glassy */}
                <div className="md:hidden pointer-events-auto relative z-40 mb-2 opacity-0 animate-[fade-in_1.5s_ease-out_3s_forwards]">
                    <Link
                        id="hero-leaf-cta"
                        href="/menu"
                        className="px-8 py-3 rounded-full border border-white/40 backdrop-blur-md bg-white/10 shadow-lg whitespace-nowrap inline-flex items-center justify-center hover:scale-105 transition-transform group"
                        aria-label="Explore menu"
                    >
                        <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                            explore our kitchen
                        </span>
                    </Link>
                </div>

                {/* Social Media Icons — Glassy Style */}
                <div className="flex items-center gap-4 mt-4 md:-mt-24 pointer-events-auto relative z-40 opacity-0 animate-[fade-in_1.5s_ease-out_3.5s_forwards]">
                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/ila_kochi_?igsh=dTIwa3pvcDVxaHp2"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="w-11 h-11 rounded-full backdrop-blur-xl bg-white/15 flex items-center justify-center shadow-2xl hover:bg-white/25 hover:scale-110 transition-all duration-300"
                    >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                    </a>

                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/ilakochi"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="w-11 h-11 rounded-full backdrop-blur-xl bg-white/15 flex items-center justify-center shadow-2xl hover:bg-white/25 hover:scale-110 transition-all duration-300"
                    >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </a>

                    {/* JustDial */}
                    <a
                        href="https://jsdl.in/DT-25LFHL4WKJE"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="JustDial"
                        className="w-11 h-11 rounded-full backdrop-blur-xl bg-white/15 flex items-center justify-center shadow-2xl hover:bg-white/25 hover:scale-110 transition-all duration-300"
                    >
                        <span className="text-white text-xs font-black tracking-tight leading-none">JD</span>
                    </a>
                </div>
            </div>

            {/* Smooth Rotating Carousel */}
            <div
                className="relative z-40 w-full overflow-hidden mt-2 md:-mt-8 opacity-0 animate-[fade-in_1.5s_ease-out_4s_forwards]"
                style={{
                    '--item-width': '65vw',
                    '--gap': '12px',
                } as React.CSSProperties}
            >
                <div className="flex justify-center md:[--item-width:450px] md:[--gap:24px]">
                    <div
                        className={`flex items-center ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
                        style={{
                            // Since we have 7 items and justify-center on the parent, 
                            // the middle item (index 3) is naturally centered at 0 translation.
                            // We shift relative to that index.
                            transform: `translateX(calc(${(3 - currentIndex)} * (var(--item-width) + var(--gap))))`
                        }}
                    >
                        {DISPLAY_BANNERS.map((banner, idx) => {
                            const isActive = idx === currentIndex;

                            return (
                                <div
                                    key={idx}
                                    className={`relative aspect-video rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 transition-all duration-1000 ease-out ${isActive ? 'scale-105 z-10 opacity-100' : 'scale-90 z-0 opacity-40'
                                        }`}
                                    style={{
                                        width: 'var(--item-width)',
                                        marginRight: 'var(--gap)'
                                    }}
                                >
                                    <Image
                                        src={banner}
                                        alt={`Hero banner ${idx}`}
                                        fill
                                        className={`object-cover transition-all duration-1000 ${!isActive ? 'blur-[4px]' : 'blur-0'}`}
                                        priority={isActive}
                                    />
                                    <div className={`absolute inset-0 transition-colors duration-1000 ${!isActive ? 'bg-black/40' : 'bg-transparent'}`}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>




            {/* Grass Field at the bottom */}
            <div className="absolute bottom-0 left-0 w-full h-16 md:h-20 z-50 pointer-events-none flex items-end opacity-0 animate-[fade-in-grass_1.5s_ease-out_1.2s_forwards]">
                <div className="flex w-full animate-[sway_10s_ease-in-out_infinite]">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="relative flex-1 h-16 md:h-20 min-w-[200px] -ml-10 first:ml-0"
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

            {/* Final Bottom Fade — Ensures grass "melts" into body background */}
            <div className="absolute bottom-0 left-0 w-full h-8 md:h-12 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent z-40 pointer-events-none" />
        </section >
    );
}
