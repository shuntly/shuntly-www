import { features } from "@/data/features";

export default function FeaturesSection() {
  return (
    <section className="py-10 px-8 bg-paper">
      <p className="font-terminal text-[0.85rem] tracking-[0.3em] uppercase text-rust mb-3 text-center">
        What You Get
      </p>
      <h2 className="font-righteous text-[clamp(2rem,5vw,3.5rem)] text-brown mb-8 text-center">
        The Full Dossier
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 max-w-[1000px] mx-auto">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-cream border-2 border-dashed border-tan p-7 text-center transition-all duration-200 hover:border-solid hover:border-burnt-orange hover:-translate-y-[3px]"
          >
            <div className="text-[2.5rem] mb-3">{f.icon}</div>
            <h3 className="font-righteous text-[1.1rem] text-rust mb-2">
              {f.title}
            </h3>
            <p className="text-[0.9rem] leading-relaxed opacity-80">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
