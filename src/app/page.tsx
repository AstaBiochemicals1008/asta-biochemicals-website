import Hero from "@/components/home/Hero";
import ProductCards from "@/components/home/ProductCards";
import QualityBand from "@/components/home/QualityBand";
import GlobalMap from "@/components/home/GlobalMap";
import WhyAsta from "@/components/home/WhyAsta";

export default function HomePage() {
  // asta-page-home tunes the shared reveal to this prototype's 70px/0.94.
  return (
    <div className="asta-page-home">
      <Hero />
      <ProductCards />
      <QualityBand />
      <GlobalMap />
      <WhyAsta />
    </div>
  );
}
