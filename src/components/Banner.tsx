"use client";

import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import BannerImg from "@/assets/banner1.jpeg";

export default function Banner() {
    return (
        <section className="relative w-full h-[400px] md:h-[600px] overflow-hidden group">
            <Reveal className="h-full w-full">
                {/* Background Image with Automatic Zoom Effect */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={BannerImg}
                        alt="Kochi backwaters scenery banner"
                        fill
                        className="object-cover animate-[banner-zoom_20s_linear_infinite]"
                        priority
                    />

                    {/* Modern Overlay for Texture and Depth - Darkened for a more cinematic feel */}
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
                </div>

                {/* Content - Automatic Fade In */}
                <div className="relative z-10 h-full w-full flex items-center justify-center">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <div className="opacity-0 animate-[fade-in_2s_ease-out_forwards]">
                            <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight uppercase leading-tight">
                                EXPERIENCE THE TRADITION AND AUTHENTIC TASTE OF SEAFOOD RECIPE
                            </h2>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
