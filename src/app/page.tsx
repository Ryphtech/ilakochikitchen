import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SignatureDishes from "@/components/SignatureDishes";
import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import ReservationBanner from "@/components/ReservationBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background-light dark:bg-background-dark text-text-main dark:text-white min-h-screen flex flex-col font-display selection:bg-primary selection:text-white">
      {/* Keep all content within the flow */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <SignatureDishes />
        <Banner />
        <Gallery />
        <Reviews />
        <ReservationBanner />
        <Footer />
      </div>
    </main>
  );
}
