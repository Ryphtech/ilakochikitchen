import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SignatureDishes from "@/components/SignatureDishes";
import Story from "@/components/Story";
import Reviews from "@/components/Reviews";
import ReservationBanner from "@/components/ReservationBanner";
import Footer from "@/components/Footer";
import LeafScrollFollower from "@/components/LeafScrollFollower";
import FallingLeaf from "@/assets/falling-leaf-hero.png";

export default function Home() {
  return (
    <main className="bg-background-light dark:bg-background-dark text-text-main dark:text-white min-h-screen flex flex-col font-display selection:bg-primary selection:text-white">
      {/* Desktop-only floating leaf that follows scroll behind content */}
      <LeafScrollFollower anchorId="hero-leaf-cta" leafSrc={FallingLeaf} sizePx={140} />

      {/* Keep all content above the floating leaf */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <SignatureDishes />
        <Story />
        <Reviews />
        <ReservationBanner />
        <Footer />
      </div>
    </main>
  );
}
