import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Story() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <Reveal>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <div className="order-2 lg:order-1 space-y-8">
                            <div>
                                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                                    Our Story
                                </span>
                                <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                                    Born from the <br /> Shores of Kochi
                                </h2>
                            </div>
                            <div className="space-y-4 text-text-muted dark:text-gray-300 text-lg leading-relaxed">
                                <p>
                                    At Ila, we believe that food is the most intimate connection we
                                    have with nature. Our journey began in the backwaters of Kerala,
                                    where life moves at the pace of the tides.
                                </p>
                                <p>
                                    We source our spices directly from hillside plantations and our
                                    seafood from local fishermen who respect the ocean. Every plate
                                    is a tribute to the lush, tropical abundance of the Malabar
                                    coast.
                                </p>
                            </div>
                            <div className="pt-4 flex gap-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-3xl font-bold text-text-main dark:text-white">
                                        15+
                                    </span>
                                    <span className="text-sm text-text-muted uppercase tracking-wide">
                                        Years of Heritage
                                    </span>
                                </div>
                                <div className="w-px bg-primary/30 h-12"></div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-3xl font-bold text-text-main dark:text-white">
                                        100%
                                    </span>
                                    <span className="text-sm text-text-muted uppercase tracking-wide">
                                        Organic Spices
                                    </span>
                                </div>
                            </div>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors mt-4"
                            >
                                Read Our Full Story
                                <span className="material-symbols-outlined text-lg">
                                    arrow_forward
                                </span>
                            </Link>
                        </div>
                        {/* Image Grid */}
                        <div className="order-1 lg:order-2 relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 translate-y-8">
                                    <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-lg">
                                        <Image
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjszj-C1--5flFQvNkEyplelaxL79jY1WAMzzUcBHnKpqIiqIJboJS4d3bYtKCx8g9SeD9PKw4ro0LQ7VsCv2dclufwqEBVV714egKCsJtDEVs32MRIeqfrh0ZkvOY_kXWAhCUHvj6DJ8JzauCJJ2EGIKv99RwrhY_5jvVr3niHOrqOVSqgRK7pq07DGccTjzOcPqkVFhARAuL4PvsWvcfIWYJh8hh8e31NTNmHsqJR6C1icQJ5Jf9cL2BTPZmCTYWlOakoQNIsHM"
                                            alt="Chef preparing spices in a traditional kitchen"
                                            fill
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-lg">
                                        <Image
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYsMa7eXYwHpeZqOQb3IHOD6CkHrtlAcZz_0Xei9IYTEjqvGzyQbbYyi8j6uhoWqHFmX3YSGMyPdvh-Rmr2196GwF_GfIMzT7qhVWrNUuASX19sT_EBnj8MtRtdUUmUjXoLrRU_-CVjG8TFEZKFKfhCmqndgBsuZ3ULu-Fm4TNK5dXlCyoJPUxxNQ-f69S22eNvrgLD1_lK-5aswCqmki1NYOtNWHkLUU4F-wqUJfv98E0jY4UDR5dH02Qxd8XYr67ilhT7N1GtR8"
                                            alt="Restaurant interior with warm lighting and plants"
                                            fill
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Element */}
                            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
