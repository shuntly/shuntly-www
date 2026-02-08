import { problems } from "@/data/problems";

export default function ProblemSection() {
  return (
    <section className="problem-bg py-10 px-8 text-center">
      <p className="font-terminal text-[0.85rem] tracking-[0.3em] uppercase text-rust mb-3">
        The Problem
      </p>
      <h2 className="font-righteous text-[clamp(2rem,5vw,3.5rem)] text-brown mb-8">
        What Is Your Agent Doing
        <br />
        Behind Your Back?
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 max-w-[1000px] mx-auto">
        {problems.map((p) => (
          <div
            key={p.number}
            data-number={p.number}
            className="problem-card relative bg-cream border-2 border-brown py-8 px-6 text-left transition-transform duration-200 hover:-rotate-1 hover:scale-[1.02]"
          >
            <h3 className="font-special-elite text-[1.2rem] text-rust mb-3">
              {p.title}
            </h3>
            <p className="text-[0.95rem] leading-relaxed opacity-85">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
