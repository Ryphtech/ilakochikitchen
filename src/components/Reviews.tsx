import React from "react";
import ReviewCard from "./ReviewCard";
import Reveal from "./Reveal";

export default function Reviews() {
    const reviews = [
        {
            quote:
                "The Meen Pollichathu transported me straight back to the backwaters of Kerala. Authentic, spicy, and absolutely delicious.",
            name: "David Chen",
            role: "Food Blogger",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCof9st_ErOkbwyottLrN16xOxzQ1M5vT1GZpsKmAqOXMEIOEc3Ah1sNtjIlcS3_FElPKqpi5TEoPeFSDRYjcl0XCIWrYH2Wmi8p0PWWXo8ZqDH41sktl8p3wla4vx4gASw3JH9-_qbA7Y6-HGf6zGKqf5KF_KN_tL9X9S-VzNwEJPb9OT9GwpLlMndoTpRG-3MieLksdEpRBb6LxnYQ25v5vsMrkfIKWD3sf6ZoG_GuS160NJtx7ErGJSEI0qvTgoD3lJ6DKth8Z0",
        },
        {
            quote:
                "A hidden gem! The ambiance is so calming with all the greenery. It feels like dining inside a tropical garden.",
            name: "Sarah Jenkins",
            role: "Local Guide",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuB3rBK2FeiO_2T31MhrnSYS748PD2XlfMU0-r0yg6IpqMYgUKvOvccrseFOlEaTvYRGv6N9nTug1GpdRKmP9DZJ0WOkOMd3ru41rR0G9mNdlJfO5bBskq8fVmK29uOShRmvMq3jPE1r-GYtKiSobmTm_Sck6TVmWblF3uNwxZ5SzCKVjqvnyqUENj1zcJnE55gnDrFj7gKUc3n5PRkUfkN2JyFvTnHHS8NwiywSUMKJU_XjFeSzQBzR_GhX8TZdXX7HvMz-baHkoA4",
            className: "transform md:-translate-y-4",
        },
        {
            quote:
                "The service was impeccable and the flavors were spot on. Highly recommend the Mango Prawn Curry.",
            name: "Rahul Varma",
            role: "Verified Guest",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuChVmr-YQelt0CrBGXNjgGEMwOaI1WGZy2VdHXX_KXt_KhmpKB4W8nGXHhiuwczvvLZW35swPBIIJRWH7igh59PYJaC7tZHjA9i1ERKyeH07jWApyjtAsEuCEK5wA-vqP5jtngNkb850ObyhzkdC9RPnQbe9Hfr8Hpd_VXD7JXv-cDbGFNzWSAXr_1u_572sGNfgMlSejR1nBblA19ShRJvQ-nlEnmngwI0Fz9dr_2WKNbsWhXvdqlpdU7wUu61inBoy8A9ibwo74c",
        },
    ];

    return (
        <section className="py-24 px-6 bg-background-light dark:bg-zinc-900/30">
            <Reveal>
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Loved by Locals & Travelers
                    </h2>
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} {...review} />
                    ))}
                </div>
            </Reveal>
        </section>
    );
}
