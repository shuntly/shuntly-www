import { problems } from "@/data/problems";

export default function ProblemSection() {
  return (
    <section className="py-10 px-8 text-center bg-[linear-gradient(135deg,var(--color-cream)_0%,#F0DEB4_50%,var(--color-cream)_100%)]">
      <p className="font-terminal text-[0.85rem] tracking-[0.3em] uppercase text-rust mb-2">
        The Problem
      </p>
      <h2 className="font-righteous text-[clamp(2rem,5vw,3.5rem)] text-brown mb-10">
        What Is Your Agent Doing
        <br />
        Behind Your Back?
      </h2>
      <div className="max-w-[700px] mx-auto bg-cream border-2 border-dashed border-tan p-4 flex flex-col gap-4">
        {problems.map((p) => (
          <div key={p.number} className="text-left">
            <h3 className="font-righteous text-[1.1rem] text-rust">
              {p.title}
            </h3>
            <p className="text-[0.95rem] text-brown/80 mt-1">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
