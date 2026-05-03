import heroImg from "@/assets/katti-hero.png";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-24 lg:pt-0 grid lg:grid-cols-2 overflow-hidden"
    >
      {/* Left */}
      <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-12 lg:py-32 order-2 lg:order-1">
        <span
          className="inline-flex items-center gap-2 self-start border border-gold/40 px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase text-gold mb-7 animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <span className="text-[8px]">✦</span> Mentora · Palestrante · Autora
        </span>

        <h1
          className="font-serif text-[clamp(2.5rem,7vw,5rem)] leading-[1.05] text-cream animate-fade-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          Conexões que
          <br />
          <em className="not-italic font-serif italic text-gold block">transformam.</em>
        </h1>

        <div
          className="w-14 h-px bg-gold my-7 animate-fade-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        />

        <p
          className="body-text max-w-md mb-10 animate-fade-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          Mais de 40 anos construindo relacionamentos estratégicos, liderança feminina e resultados
          com propósito. Da Amazônia para o mundo — com fé e estratégia.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up"
          style={{ animationDelay: "0.75s", opacity: 0 }}
        >
          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 bg-gold text-primary-foreground px-7 py-4 text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] uppercase hover:bg-gold-light hover:-translate-y-0.5 transition-all"
          >
            Ver Serviços <ArrowRight size={14} />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center border border-gold/50 text-gold px-7 py-4 text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase hover:border-gold hover:bg-gold/10 hover:-translate-y-0.5 transition-all"
          >
            Falar com Katti
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 lg:mt-20 grid grid-cols-3 gap-4 sm:gap-10 max-w-md">
          {[
            { n: "40+", l: "Anos de Carreira" },
            { n: "640+", l: "Rede de Membros" },
            { n: "24", l: "Anos de Empresa" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gold leading-none">
                {s.n}
              </div>
              <div className="mt-2 text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-foreground/60">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right image */}
      <div className="relative order-1 lg:order-2 min-h-[55vh] lg:min-h-screen overflow-hidden">
        <img
          src={heroImg}
          alt="Katti Elleres, mentora e palestrante"
          className="w-full h-full object-cover object-center animate-fade-in opacity-0"
          loading="eager"
        />
        {/* gradient overlays for blending */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)) 0%, transparent 30%), linear-gradient(to top, hsl(var(--background)) 0%, transparent 25%)",
          }}
        />
        <div className="hidden lg:block absolute left-0 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-gold to-transparent opacity-40" />
      </div>
    </section>
  );
}
