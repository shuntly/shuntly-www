import type { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="testimonial-card relative bg-cream border-2 border-brown pt-8 pb-4 px-4 min-w-[340px] max-w-[340px] shrink-0 snap-start"
      style={{ "--rot": `${t.rotation}deg` } as React.CSSProperties}
    >
      {t.stamp && (
        <div className="absolute top-4 right-4 font-terminal text-[0.7rem] tracking-[0.2em] text-rust border-2 border-rust py-[0.15em] px-2 rotate-12 opacity-60">
          {t.stamp}
        </div>
      )}
      <p className="italic text-base mb-4 relative z-[1]">
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
  );
}
