import React from "react";
import Image from "next/image";

interface DishCardProps {
    image: string;
    name: string;
    description: string;
    tag?: string;
    tagColor?: string;
    tagTextColor?: string;
}

export default function DishCard({
    image,
    name,
    description,
    tag,
    tagColor = "bg-white/90 dark:bg-black/80",
    tagTextColor = "text-text-main dark:text-white",
}: DishCardProps) {
    return (
        <div className="group bg-background-light dark:bg-background-dark rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    unoptimized
                />
                {tag && (
                    <div
                        className={`absolute top-4 right-4 ${tagColor} ${tagTextColor} backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm`}
                    >
                        {tag}
                    </div>
                )}
            </div>
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{name}</h3>
                </div>
                <p className="text-text-muted dark:text-gray-400 text-sm mb-6 line-clamp-2">
                    {description}
                </p>
            </div>
        </div>
    );
}
