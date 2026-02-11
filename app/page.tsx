import Hero from "@/components/Hero";
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
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <Testimonials />
      <InstallSection />
      <Footer />
    </>
  );
}
