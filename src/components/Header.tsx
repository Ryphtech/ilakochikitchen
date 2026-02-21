"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/hero-image.png";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-500 ${isScrolled
            ? "bg-white/80 dark:bg-background-dark/80 border-b border-[#e7f3e7] dark:border-white/10 py-0"
            : "bg-transparent border-transparent py-2"
            }`}>
            <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 md:h-20 flex items-center">
                {/* Left Nav — flex-1 on desktop to balance right side */}
                <div className="flex-1 hidden md:flex items-center">
                    <nav className="flex items-center gap-8">
                        <Link href="/menu" className="text-sm font-medium text-text-main dark:text-white hover:text-primary transition-colors">Menu</Link>
                        <Link href="/#gallery" className="text-sm font-medium text-text-main dark:text-white hover:text-primary transition-colors">Story</Link>
                    </nav>
                </div>

                {/* Logo + Brand — perfectly centered on desktop, flex-1 left on mobile */}
                <div className="flex-1 flex md:flex-none justify-start md:justify-center">
                    <Link
                        href="/"
                        className="flex items-center gap-2 group transition-all duration-500"
                    >
                        {/* Logo image: hidden at top, slides in on scroll */}
                        <div className={`relative shrink-0 transition-all duration-500 overflow-hidden
                            ${isScrolled
                                ? "w-8 h-8 md:w-12 md:h-12 opacity-100 translate-x-0"
                                : "w-0 h-8 md:w-0 md:h-12 opacity-0 -translate-x-2"
                            } group-hover:rotate-12`}>
                            <Image src={Logo} alt="Ila Kochi Logo" fill className="object-contain" />
                        </div>
                        {/* Brand text: shifts right as logo expands */}
                        <h1 className={`font-black tracking-tighter uppercase whitespace-nowrap transition-all duration-500 text-text-main dark:text-white
                            ${isScrolled ? "text-xl md:text-2xl" : "text-2xl md:text-2xl"}`}>
                            Ila Kochi
                        </h1>
                    </Link>
                </div>

                {/* Right Nav — flex-1 on desktop to balance left side */}
                <div className="flex-1 hidden md:flex items-center justify-end">
                    <nav className="flex items-center gap-8">
                        <Link href="/#reservations" className="text-sm font-medium text-text-main dark:text-white hover:text-primary transition-colors">Reservations</Link>
                        <Link href="/#contact" className="text-sm font-medium text-text-main dark:text-white hover:text-primary transition-colors">Contact</Link>
                    </nav>
                </div>

                {/* Mobile Menu Toggle — remains on right */}
                <button
                    className="md:hidden p-2 text-color-text-main dark:text-white shrink-0"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="material-symbols-outlined">
                        {isMenuOpen ? "close" : "menu"}
                    </span>
                </button>
            </div>

            {/* Mobile Menu (Optional, added for functionality) */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-background-dark border-b border-[#e7f3e7] dark:border-white/10 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
                    <Link href="/menu" className="font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                        Menu
                    </Link>
                    <Link href="/#gallery" className="font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                        Story
                    </Link>
                    <Link href="/#reservations" className="font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                        Reservations
                    </Link>
                    <Link href="/#contact" className="font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                        Contact
                    </Link>
                </div>
            )}
        </header>
    );
}
