import React from "react";
import Image from "next/image";

interface ReviewCardProps {
    quote: string;
    name: string;
    role: string;
    image: string;
    className?: string;
}

export default function ReviewCard({
    quote,
    name,
    role,
    image,
    className = "",
}: ReviewCardProps) {
    return (
        <div
            className={`bg-white dark:bg-zinc-800/50 p-8 rounded-2xl shadow-sm border border-black/5 dark:border-white/5 relative ${className}`}
        >
            <span className="material-symbols-outlined text-4xl text-primary/20 absolute top-6 right-6">
                format_quote
            </span>
            <div className="flex gap-1 text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm">
                        star
                    </span>
                ))}
            </div>
            <p className="text-text-main dark:text-gray-200 mb-6 italic">
                &quot;{quote}&quot;
            </p>
            <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <Image src={image} alt={name} fill className="object-cover" unoptimized />
                </div>
                <div className="text-left">
                    <p className="text-sm font-bold">{name}</p>
                    <p className="text-xs text-text-muted">{role}</p>
                </div>
            </div>
        </div>
    );
}
