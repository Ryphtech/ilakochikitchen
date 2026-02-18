"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import DishCard from "./DishCard";
import Reveal from "./Reveal";

export default function SignatureDishes() {
    const dishes = useMemo(
        () => [
            {
                name: "Meen Pollichathu",
                description:
                    "Pearl Spot fish marinated in spicy masala, wrapped in banana leaf and grilled to perfection.",
                image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBpZj7IOsraa2faZQIFkhNJibpXLsDFk9WIVV2Ogsdq0DsCty4dI7aCPl4VFDf89WGEPmvcdiQSUPwm-6VfrF4IXHSZ4CfWuHVTppBjj6w2ecBhgvHcBSzltIeGsDfy7Vt0iG_dZlNAzu7kvhLAQxYdosw5a9b4xovF-nvW_2OrFYfEP2fN1WndRLZI7jPya_mcRrg2Aym36JGNXS-hA9mPy65M7lpI6C_3ts1pexiokJWgDkihkZQR97CgQVF5E1_jywyA768VOFI",
                tag: "Bestseller",
            },
            {
                name: "Kerala Prawn Curry",
                description:
                    "Juicy tiger prawns cooked in a rich coconut milk gravy with raw mangoes and curry leaves.",
                image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBDCUk2F1I2HvXJlhSGy6FO6ultX6IePJ2WBUT9AO1HvYGRX5PAnpC6ddFSLuHz6BTvjBHx7yT86KVx4rEQlIG2qn_Zkd2Bj3mzO74AeL778Pxm4N1GnY8yREOU15dzwrwuNo-9Sfg2jbdMhVl01_2hAhcl-RWteJtDtVXA47Eybkp4ouNz3gDDDep9obcVEGflUcXPB68awkbCdnk2OLfIYYXRN842UCYxl-CwO2CTYPTc---lywtsMOBH77b_wzEu5s9r5dK_onM",
            },
            {
                name: "Tropical Harvest",
                description:
                    "A refreshing salad of raw papaya, green mango, and grated coconut with a lime-chili dressing.",
                image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuD5-Xg9ut1umh5fUwbgkcUN7nfRA0XcVM9EpayNQsGz_kUYJYSM-aWXO5_YJKeLXyZhkBnOELgkqEMG1O9l3ZGK_DqtQVI_rGTS71P01XUERGERFTeZKG7NuJzB6E9fHn0TQACLeryyEesQond9j7M8MTs2eP-qzA33VxZQRESbfANeiSTs7jgDqH6wWKJWwy8CI2CkqUQGYf-ur4nm22_QM8oUmwWhP0GWp2yokUMLlhxEnHGG_oLginSmpqA9zV1QviWMoV2r2I8",
                tag: "Vegan",
                tagColor: "bg-primary",
                tagTextColor: "text-background-dark",
            },
        ],
        []
    );

    const mobileScrollerRef = useRef<HTMLDivElement | null>(null);
    const [activeIdx, setActiveIdx] = useState(0);

    useEffect(() => {
        // Respect reduced motion
        if (typeof window !== "undefined") {
            const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
            if (reduced) return;
        }

        const id = window.setInterval(() => {
            setActiveIdx((v) => (v + 1) % dishes.length);
        }, 2000);

        return () => window.clearInterval(id);
    }, [dishes.length]);

    useEffect(() => {
        const scroller = mobileScrollerRef.current;
        if (!scroller) return;
        const child = scroller.children.item(activeIdx) as HTMLElement | null;
        if (!child) return;

        scroller.scrollTo({
            left: child.offsetLeft,
            behavior: "smooth",
        });
    }, [activeIdx]);

    return (
        <section className="py-24 px-6 bg-white dark:bg-zinc-900/50">
            <Reveal>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                                Our Menu
                            </span>
                            <h2 className="text-4xl font-bold tracking-tight">
                                Signature Coastal Dishes
                            </h2>
                        </div>
                        <Link
                            href="#"
                            className="text-text-main dark:text-white font-semibold hover:text-primary flex items-center gap-1 group"
                        >
                            See Full Menu
                            <span className="material-symbols-outlined text-primary transition-transform group-hover:translate-x-1">
                                arrow_right_alt
                            </span>
                        </Link>
                    </div>

                    {/* Mobile: 2-cards-per-view auto carousel */}
                    <div
                        ref={mobileScrollerRef}
                        className="md:hidden flex overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory -mx-2 px-2"
                    >
                        {dishes.map((dish, index) => (
                            <div key={index} className="snap-start w-1/2 shrink-0 px-2 pb-2">
                                <DishCard {...dish} />
                            </div>
                        ))}
                    </div>

                    {/* Desktop/Tablet: grid */}
                    <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
                        {dishes.map((dish, index) => (
                            <DishCard key={index} {...dish} />
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
