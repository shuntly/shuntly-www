import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

const featured = testimonials[Math.floor(Math.random() * testimonials.length)];

export default function Hero() {
  return (
    <section className="hero-bg relative min-h-screen flex flex-col items-center justify-center text-center">
      <div className="hero-conic absolute -top-1/2 -left-1/2 w-[200%] h-[200%]" />

      <div className="animate-fade-slide-down inline-block bg-rust/60 text-cream font-terminal text-[0.9rem] tracking-[0.2em] px-5 py-[0.4em] uppercase -rotate-3 mb-6 relative z-[1]">
        ⚠ Public Service Announcement ⚠
      </div>

      <h1 className="animate-fade-slide-down [animation-delay:0.15s] font-righteous text-[clamp(3rem,8vw,5rem)] leading-none text-brown relative z-[1]">
        Your Agents Have Secrets:
        <br />
        Call{" "}
        <span className="inline-block pb-1 bg-gradient-to-br from-burnt-orange to-mustard bg-clip-text text-transparent">
          Shuntly
        </span>
      </h1>

      <p className="animate-fade-slide-down [animation-delay:0.3s] font-special-elite text-[clamp(1.1rem,2.5vw,1.6rem)] text-rust mt-8 max-w-[600px] leading-relaxed relative z-[1]">
        Wiretap your LLM traffic.
        <br />
        Python &amp; TypeScript.
      </p>

      <div className="cta-row-responsive animate-fade-slide-down [animation-delay:0.6s] flex gap-4 mt-6 flex-wrap justify-center relative z-[1]">
        <a
          href="#how"
          className="cta-btn relative font-terminal text-[0.9rem] tracking-[0.08em] py-2 px-4  border-brown bg-transparent text-brown no-underline cursor-pointer transition-all hover:bg-mustard hover:border-mustard hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          See How It Works
        </a>
      </div>

      <a
        href="#testimonials"
        className="animate-fade-slide-down [animation-delay:0.8s] relative z-[1] mt-10 opacity-80 no-underline cursor-pointer"
      >
        <TestimonialCard t={featured} />
      </a>
    </section>
  );
}
