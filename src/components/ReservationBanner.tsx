import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";

export default function ReservationBanner() {
    return (
        <section className="py-20 px-6">
            <Reveal>
                <div className="max-w-7xl mx-auto bg-background-dark text-white rounded-[2rem] overflow-hidden relative shadow-2xl">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS0az3nAwpyQ36hnZ5MEAeH1ghtARJYK0rjLj9u7YrsTqC4SYsrocpBmmf4DAbmbfXN31d2hUJHi8a3XbRgYYGgzLfba1FP9Wkye-immwsjpGb2K0Oad5X7G_qMUdurNUDGgzZobXPoNzcS94VZv5TCkyxGvvLnB4f8b3vQ6PKL4djM1araiF5ZKzHc43-KdwQO_kAhTRvZBBv6cMfxbztFHU4IkqJMctKoESh-jcOB-aErKjBmMArvdTUJvR3YfAgVsZe3Nzw24g"
                            alt="Dark moody restaurant table setting"
                            fill
                            className="object-cover opacity-30"
                            unoptimized
                        />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-8">
                        <div className="max-w-xl space-y-4 text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-black">
                                Ready to Taste the Coast?
                            </h2>
                            <p className="text-gray-300 text-lg">
                                Book your table now for an unforgettable culinary journey through
                                Kerala.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <button className="px-8 py-4 bg-primary text-background-dark font-bold text-lg rounded-xl hover:bg-white hover:text-primary transition-colors min-w-[180px]">
                                Book Now
                            </button>
                            <button className="px-8 py-4 bg-transparent border border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-colors min-w-[180px]">
                                Order Online
                            </button>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
