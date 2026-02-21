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
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Left Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="/menu"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Menu
                    </Link>
                    <Link
                        href="/#gallery"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Story
                    </Link>
                </nav>

                {/* Logo Center */}
                <Link
                    href="/"
                    className="flex items-center gap-3 group transition-all duration-500"
                >
                    <div className={`relative w-12 h-12 group-hover:rotate-12 transition-all duration-500 ${isScrolled ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
                        }`}>
                        <Image
                            src={Logo}
                            alt="Ila Kochi Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h1 className="text-2xl font-black tracking-tighter uppercase whitespace-nowrap">
                        Ila Kochi
                    </h1>
                </Link>

                {/* Right Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="/#reservations"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Reservations
                    </Link>
                    <Link
                        href="/#contact"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-color-text-main dark:text-white"
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
