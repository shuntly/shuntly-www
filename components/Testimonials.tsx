import { testimonials } from "@/data/testimonials";

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
    <section className="py-10 px-8 bg-[linear-gradient(135deg,var(--color-cream)_0%,#F0DEB4_50%,var(--color-cream)_100%)]">
      <p className="font-terminal text-[0.85rem] tracking-[0.3em] uppercase text-rust mb-3 text-center">
        Field Reports
      </p>
      <h2 className="font-righteous text-[clamp(2rem,5vw,3.5rem)] text-brown mb-2 text-center">
        Agents Speak Out
      </h2>
      <p className="font-terminal text-[0.85rem] tracking-[0.15em] text-rust text-center mb-12">
        * The following testimonials were obtained under duress
      </p>

      <div className="flex gap-8 overflow-x-auto py-6 px-4 snap-x snap-mandatory scroll-smooth">
        {shuffled.map((t) => (
          <div
            key={t.name}
            className="testimonial-card relative bg-cream border-2 border-brown p-8 min-w-[340px] max-w-[340px] shrink-0 snap-start"
            style={{ "--rot": `${t.rotation}deg` } as React.CSSProperties}
          >
            {t.stamp && (
              <div className="absolute top-4 right-4 font-terminal text-[0.7rem] tracking-[0.2em] text-rust border-2 border-rust py-[0.15em] px-2 rotate-12 opacity-60">
                {t.stamp}
              </div>
            )}
            <p className="italic text-base leading-relaxed mb-5 relative z-[1]">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-[45px] h-[45px] rounded-full border-2 border-brown flex items-center justify-center text-[1.4rem] bg-paper shrink-0">
                {t.emoji}
              </div>
              <div className="font-special-elite text-[0.85rem]">
                <div className="font-bold text-rust">{t.name}</div>
                <div className="opacity-60 text-[0.8rem]">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
