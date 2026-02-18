"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-background-dark/80 border-b border-[#e7f3e7] dark:border-white/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Left Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="#"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Menu
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Story
                    </Link>
                </nav>

                {/* Logo Center */}
                <Link href="#" className="flex items-center gap-2 group">
                    <div className="text-primary group-hover:rotate-12 transition-transform duration-500">
                        <span className="material-symbols-outlined text-4xl">eco</span>
                    </div>
                    <h1 className="text-2xl font-black tracking-tighter uppercase">
                        Ila Kochi
                    </h1>
                </Link>

                {/* Right Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="#"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Reservations
                    </Link>
                    <Link
                        href="#"
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
                    <Link href="#" className="font-medium hover:text-primary">
                        Menu
                    </Link>
                    <Link href="#" className="font-medium hover:text-primary">
                        Story
                    </Link>
                    <Link href="#" className="font-medium hover:text-primary">
                        Reservations
                    </Link>
                    <Link href="#" className="font-medium hover:text-primary">
                        Contact
                    </Link>
                </div>
            )}
        </header>
    );
}
