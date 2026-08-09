import LandingHeader from "@/components/shared/LandingHeader";
import Footer from "@/components/shared/Footer";
import HeroBanner from "@/components/landing/HeroBanner";
import FeatureSection from "@/components/landing/FeatureSection";
import CurriculumPreview from "@/components/landing/CurriculumPreview";
import TrustSection from "@/components/landing/TrustSection";
import CallToAction from "@/components/landing/CallToAction";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f2] text-slate-950">
      <LandingHeader />
      <main>
        <HeroBanner />
        <FeatureSection />
        <CurriculumPreview />
        <TrustSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
