export default function Quote() {
  return (
    <section className="py-20 sm:py-28 bg-[hsl(var(--green-mid))] text-center relative overflow-hidden">
      <span
        aria-hidden
        className="absolute -top-16 left-1/2 -translate-x-1/2 font-serif leading-none select-none pointer-events-none text-gold/[0.04]"
        style={{ fontSize: "clamp(180px, 30vw, 400px)" }}
      >
        ❝
      </span>
      <blockquote className="relative container max-w-3xl px-6 reveal">
        <p className="font-serif italic font-light text-cream leading-[1.5] text-[clamp(1.5rem,4vw,3rem)] mb-6">
          "Alta performance acontece quando pessoas comuns decidem viver de forma{" "}
          <em className="not-italic font-serif italic text-gold">intencional</em>."
        </p>
        <footer className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-gold">
          Katti Elleres · Mentora & Palestrante
        </footer>
      </blockquote>
    </section>
  );
}
