import React from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import Logo from "@/assets/hero-image.png";

export default function Footer() {
    return (
        <footer className="bg-background-light dark:bg-background-dark pt-16 pb-8 border-t border-black/5 dark:border-white/5">
            <Reveal>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        {/* Brand */}
                        <div className="space-y-6 flex flex-col items-center text-center">
                            <div className="flex flex-col items-center gap-4 group">
                                <div className="relative w-24 h-24 transition-transform duration-500 group-hover:scale-110">
                                    <Image
                                        src={Logo}
                                        alt="Ila Kochi Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h2 className="text-3xl font-black uppercase tracking-tighter italic">Ila Kochi</h2>
                            </div>
                            <p className="text-text-muted dark:text-gray-400 text-sm max-w-[250px]">
                                Authentic coastal cuisine inspired by nature, crafted with love.
                            </p>
                            <div className="flex gap-4 pt-2">
                                <Link
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-black/5 dark:border-white/5 shadow-sm"
                                >
                                    <span className="material-symbols-outlined text-lg">public</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-black/5 dark:border-white/5 shadow-sm"
                                >
                                    <span className="material-symbols-outlined text-lg">
                                        photo_camera
                                    </span>
                                </Link>
                            </div>
                        </div>
                        {/* Links */}
                        <div>
                            <h4 className="font-bold text-lg mb-6">Explore</h4>
                            <ul className="space-y-3 text-text-muted dark:text-gray-400">
                                <li>
                                    <Link href="#" className="hover:text-primary transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-primary transition-colors">
                                        Our Menus
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-primary transition-colors">
                                        Private Dining
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-primary transition-colors">
                                        Gift Cards
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Contact */}
                        <div>
                            <h4 className="font-bold text-lg mb-6">Contact</h4>
                            <ul className="space-y-3 text-text-muted dark:text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-0.5 text-lg">
                                        location_on
                                    </span>
                                    <span>1/234 Parade Road, Fort Kochi, Kerala, India</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-lg">
                                        call
                                    </span>
                                    <span>+91 484 234 5678</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-lg">
                                        mail
                                    </span>
                                    <span>hello@ilakochi.com</span>
                                </li>
                            </ul>
                        </div>
                        {/* Hours */}
                        <div>
                            <h4 className="font-bold text-lg mb-6">Opening Hours</h4>
                            <ul className="space-y-3 text-text-muted dark:text-gray-400">
                                <li className="flex justify-between">
                                    <span>Mon - Thu</span>
                                    <span className="font-semibold text-text-main dark:text-white">
                                        11am - 10pm
                                    </span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Fri - Sat</span>
                                    <span className="font-semibold text-text-main dark:text-white">
                                        11am - 11pm
                                    </span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Sunday</span>
                                    <span className="font-semibold text-text-main dark:text-white">
                                        10am - 10pm
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col items-center gap-6 text-sm text-text-muted dark:text-gray-500">
                        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
                            <p>© 2024 Ila Kochi Restaurant. All rights reserved.</p>
                            <div className="flex gap-6">
                                <Link href="#" className="hover:text-text-main dark:hover:text-white">
                                    Privacy Policy
                                </Link>
                                <Link href="#" className="hover:text-text-main dark:hover:text-white">
                                    Terms of Service
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
                            <span>Powered by</span>
                            <Link
                                href="https://www.ryphtech.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-primary-dark hover:text-primary transition-colors"
                            >
                                Ryphtech
                            </Link>
                        </div>
                    </div>
                </div>
            </Reveal>
        </footer>
    );
}
