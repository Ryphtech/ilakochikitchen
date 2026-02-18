import React from "react";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Footer() {
    return (
        <footer className="bg-background-light dark:bg-background-dark pt-16 pb-8 border-t border-black/5 dark:border-white/5">
            <Reveal>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        {/* Brand */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-3xl text-primary">
                                    eco
                                </span>
                                <h2 className="text-2xl font-black uppercase">Ila Kochi</h2>
                            </div>
                            <p className="text-text-muted dark:text-gray-400 text-sm">
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
                    <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted dark:text-gray-500">
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
                </div>
            </Reveal>
        </footer>
    );
}
