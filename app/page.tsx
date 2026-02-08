import Hero from "@/components/Hero";
import SurveillanceTicker from "@/components/SurveillanceTicker";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import Testimonials from "@/components/Testimonials";
import InstallSection from "@/components/InstallSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <SurveillanceTicker /> */}
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <Testimonials />
      <InstallSection />
      <Footer />
    </>
  );
}
