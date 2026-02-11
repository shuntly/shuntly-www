import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Testimonials() {
  const shuffled = shuffle(testimonials);

  return (
    <section
      id="testimonials"
      className="py-10 px-8 bg-[linear-gradient(135deg,var(--color-cream)_0%,#F0DEB4_50%,var(--color-cream)_100%)]"
    >
      <p className="font-terminal text-[0.85rem] tracking-[0.3em] uppercase text-rust mb-2 text-center">
        Field Reports
      </p>
      <h2 className="font-righteous text-[clamp(2rem,5vw,3.5rem)] text-brown mb-2 text-center">
        Agents Speak Out
      </h2>

      <div className="flex gap-8 overflow-x-auto py-6 px-4 snap-x snap-mandatory scroll-smooth">
        {shuffled.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>
    </section>
  );
}
