import { ArrowRight } from "lucide-react";

export default function Livro() {
  return (
    <section
      id="livro"
      className="py-20 sm:py-28 lg:py-32 bg-[hsl(var(--green-mid))]"
    >
      <div className="container max-w-7xl px-6 sm:px-10 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        <div className="reveal">
          <div
            className="relative max-w-[420px] mx-auto aspect-[3/4] p-10 sm:p-12 overflow-hidden border border-gold/30 shadow-elegant"
            style={{
              background:
                "linear-gradient(135deg, hsl(145 35% 13%) 0%, hsl(var(--green)) 100%)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-52 h-52"
              style={{
                background:
                  "radial-gradient(circle, hsl(var(--gold) / 0.15) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute top-0 left-0 bottom-0 w-1.5"
              style={{
                background:
                  "linear-gradient(to right, hsl(0 0% 0% / 0.6), hsl(var(--gold) / 0.3), hsl(0 0% 0% / 0.2))",
              }}
            />
            <p className="relative text-[11px] tracking-[0.3em] uppercase text-gold mb-6">
              Coletânea · Way Unity · 2025
            </p>
            <h3 className="relative font-serif text-3xl sm:text-4xl font-light italic text-cream leading-tight mb-12">
              O Poder do
              <br />
              Impacto
              <br />
              Networking
            </h3>
            <div className="relative text-xs text-foreground/45 font-light">
              Coautora
              <strong className="block font-serif italic text-base text-gold-light mt-1 font-normal">
                Katti Elleres
              </strong>
            </div>
            <span className="absolute bottom-5 right-8 text-[10px] tracking-[0.2em] uppercase text-foreground/20">
              Editora Way Unity
            </span>
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: "150ms" }}>
          <span className="label-eyebrow">Publicação</span>
          <h2 className="heading-display mb-6">
            Coautora de{" "}
            <em className="not-italic font-serif italic text-gold">Obra que Transforma</em>
          </h2>
          <p className="body-text mb-5">
            Networking não é ferramenta de ocasião — é construção contínua de valor. Através de
            experiências reais, o leitor aprende como transformar contatos em conquistas.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            {[
              ["Editora", "Way Unity"],
              ["Lançamento", "Agosto 2025"],
              ["Organizador", "Jhon Ricky"],
              ["Disponível em", "Livraria da Travessa"],
            ].map(([l, v]) => (
              <div key={l} className="pt-4 border-t border-border">
                <div className="text-[10px] tracking-[0.18em] uppercase text-gold mb-1.5">{l}</div>
                <div className="font-serif text-base sm:text-lg text-cream">{v}</div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/5511946033119?text=Quero%20adquirir%20o%20livro%20O%20Poder%20do%20Impacto%20Networking"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-10 bg-gold text-primary-foreground px-7 py-4 text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] uppercase hover:bg-gold-light hover:-translate-y-0.5 transition-all"
          >
            Adquirir o Livro <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
