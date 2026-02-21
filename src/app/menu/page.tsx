"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/Reveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock/Placeholder images for categories (using existing assets where possible)
import Dish1 from "@/assets/signatureDish-1.webp"; // Oonu
import Dish2 from "@/assets/signatureDish-2.jpg";  // Beef Curry/Biriyani placeholder
import Dish3 from "@/assets/signatureDish-3.webp"; // Seafood
import BannerImg from "@/assets/banner1.jpeg";

const MENU_DATA = {
    meals: [
        { name: "Ila Special Kanji", price: "₹90.00", description: "Healthy traditional rice porridge with authentic sides." },
        { name: "Pazham Kanji", price: "₹90.00", description: "Fermented rice porridge - a classic Kerala power breakfast." },
        { name: "Chicken Dum Biriyani", price: "₹90.00", description: "Fragrant Kaima rice with succulent chicken and spices." },
        { name: "Meal", price: "₹80.00", description: "Standard Kerala Oonu with all essential condiments." },
    ],
    fixedPrice: [
        { name: "Meen Mutta", price: "₹280.00", description: "Spicy fish roe fry - a rare delicacy." },
        { name: "Chemmeen Roast", price: "₹360.00" },
        { name: "Chemmeen Roast 1/2", price: "₹200.00" },
        { name: "Koonthal Roast", price: "₹380.00" },
        { name: "Koonthal Ghee Roast", price: "₹320.00" },
        { name: "Kakka Fry", price: "₹150.00" },
        { name: "Kozhova Peera", price: "₹120.00" },
        { name: "Beef Roast", price: "Check Counter" },
        { name: "Chicken Curry", price: "₹180.00" },
        { name: "Kera Mulakittathu", price: "₹220.00" },
        { name: "Ayala Fry", price: "₹90.00" },
        { name: "Marthal Tawa Fry", price: "₹200.00" },
        { name: "Vela Meen Chambally Tawa", price: "₹280.00" },
    ],
    asPerSize: [
        { name: "Kalanji Tawa Fry", price: "As per size" },
        { name: "Chembally Tawa Fry", price: "As per size" },
        { name: "Karimeen Tawa Fry", price: "As per size" },
        { name: "Kera Tawa Fry", price: "As per size" },
        { name: "Tilapi Tawa Fry", price: "As per size" },
        { name: "Kilimeen Tawa", price: "As per size" },
        { name: "Neymeen Tawa Fry", price: "As per size" },
        { name: "Avoli Tawa Fry", price: "As per size" },
        { name: "Manthal Tawa", price: "As per size" },
    ],
    juices: [
        { name: "Grape Juice", price: "₹60.00", description: "Freshly squeezed chilled grape juice." },
        { name: "Payasam", price: "₹30.00", description: "Traditional sweet dessert of the day." },
    ]
};

const MenuCategory = ({ title, items, image, dark = false }: { title: string, items: any[], image?: any, dark?: boolean }) => (
    <div className={`mb-20 ${dark ? 'bg-background-dark text-white p-8 md:p-12 rounded-[3rem] relative overflow-hidden shadow-2xl' : ''}`}>
        {dark && <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>}
        <div className={`flex flex-col ${image ? 'md:flex-row' : ''} gap-12 items-start relative z-10`}>
            {image && (
                <div className="w-full md:w-1/3">
                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                        <Image src={image} alt={title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">{title}</h3>
                        </div>
                    </div>
                </div>
            )}
            <div className={`w-full ${image ? 'md:w-2/3' : 'w-full'}`}>
                {!image && (
                    <div className="mb-8">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Premium Selection</span>
                        <h2 className={`text-4xl md:text-5xl font-black uppercase italic tracking-tighter ${dark ? 'text-white' : 'text-text-main dark:text-gray-100'}`}>{title}</h2>
                    </div>
                )}
                <div className={`grid grid-cols-1 ${!image ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-x-12 gap-y-6`}>
                    {items.map((item, idx) => (
                        <div key={idx} className={`flex justify-between items-end border-b pb-4 group ${dark ? 'border-white/10' : 'border-gray-100 dark:border-white/5'}`}>
                            <div className="flex-1 pr-4">
                                <h4 className={`text-lg font-bold group-hover:text-primary transition-colors ${dark ? 'text-white' : 'text-text-main dark:text-white'}`}>
                                    {typeof item.name === 'string' ? item.name : item.name.text}
                                </h4>
                                {item.description && (
                                    <p className="text-sm text-text-muted dark:text-gray-400 mt-1">{item.description}</p>
                                )}
                            </div>
                            <div className="text-right shrink-0">
                                <span className={`text-md font-black italic whitespace-nowrap ${dark ? 'text-primary-light' : 'text-primary'}`}>
                                    {item.price}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default function MenuPage() {
    return (
        <main className="bg-background-light dark:bg-background-dark min-h-screen font-display">
            <Header />

            {/* Hero Banner for Menu */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src={BannerImg}
                    alt="Menu Header Background"
                    fill
                    className="object-cover scale-110 blur-sm brightness-50"
                />
                <div className="relative z-10 text-center text-white">
                    <Reveal>
                        <span className="text-primary font-bold tracking-[0.5em] uppercase text-sm mb-4 block">Taste the Tradition</span>
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic">Our Menu</h1>
                    </Reveal>
                </div>
            </section>

            {/* Menu Content */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <Reveal>
                    <MenuCategory
                        title="Authentic Meals"
                        items={MENU_DATA.meals}
                        image={Dish1}
                    />
                </Reveal>

                <Reveal delay={200}>
                    <MenuCategory
                        title="Fixed Price Specialties"
                        items={MENU_DATA.fixedPrice}
                        dark={true}
                    />
                </Reveal>

                <Reveal delay={400}>
                    <MenuCategory
                        title="Fresh Catch - As Per Size"
                        items={MENU_DATA.asPerSize}
                        image={Dish3}
                    />
                </Reveal>

                <Reveal delay={600}>
                    <MenuCategory
                        title="Juices & Desserts"
                        items={MENU_DATA.juices}
                    />
                </Reveal>

                {/* Back to Home CTA */}
                <div className="text-center mt-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-black hover:scale-105 transition-transform shadow-xl"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                        Back to Home
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
