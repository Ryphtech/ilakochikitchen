"use client";

import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import BannerImg from "@/assets/banner1.jpeg";

export default function Banner() {
    return (
        <section className="relative w-full h-[400px] md:h-[600px] overflow-hidden group">
            <Reveal className="h-full w-full">
                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={BannerImg}
                        alt="Kochi backwaters scenery banner"
                        fill
                        className="object-cover transition-transform duration-[10s] ease-linear group-hover:scale-110"
                        priority
                    />

                    {/* Modern Overlay for Texture and Depth - Darkened for a more cinematic feel */}
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60"></div>
                </div>

                {/* Optional subtle content if needed later */}
                <div className="relative z-10 h-full w-full flex items-center justify-center pointer-events-none">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-3 backdrop-blur-md bg-white/10 px-6 py-3 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                            <span className="text-white text-sm font-bold tracking-[0.3em] uppercase">
                                Traditional & Authentic
                            </span>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
