import { ArrowRight } from "lucide-react";

const items = [
  {
    type: "🎙 Podcast",
    title: "Conversa Pai D'égua — Ep. 07",
    desc: "Com Sandra Silva. Tema: Propósito, Visão e Network — conexão estratégica. Canal ADR Contabilidade.",
    href: "https://www.youtube.com/watch?v=ua62ByXL1bk",
    cta: "Assistir no YouTube",
  },
  {
    type: "🎙 Podcast",
    title: "Pod do Meu Jeito",
    desc: "Múltiplas participações: Branding e Networking, Edição Especial COP30, Vozes Femininas — Especial Dia das Mulheres.",
    href: "https://www.youtube.com/watch?v=ua62ByXL1bk",
    cta: "Ver episódios",
  },
  {
    type: "▶ YouTube · ADR",
    title: "Propósito, Visão e Network",
    desc: '"Mais do que estratégia — é Palavra de Deus. Existem decisões que vão além do negócio."',
    href: "https://www.youtube.com/watch?v=ua62ByXL1bk",
    cta: "Assistir",
  },
  {
    type: "🏛 Palestra · Abr 2026",
    title: "SPL 360 — CIESP Campinas",
    desc: "Facilitadora da 1ª Edição. Rodada de Negócios com foco em conexões estratégicas para empresas.",
    href: "https://instagram.com/kattielleres",
    cta: "Ver no Instagram",
  },
  {
    type: "🏛 Talk · 2025",
    title: "ASPA — Comunicação Estratégica",
    desc: '"Comunicação é a base do relacionamento. Tema decisivo para o futuro do mercado de distribuição."',
    href: "https://instagram.com/kattielleres",
    cta: "Ver no Instagram",
  },
  {
    type: "🎙 Podcast",
    title: "Entre Elas Podcast & Negócios",
    desc: "Participação sobre rede de mulheres e conexão com propósito. Movimento de liderança feminina no Pará.",
    href: "https://instagram.com/kattielleres",
    cta: "Ver no Instagram",
  },
];

export default function Midia() {
  return (
    <section id="midia" className="py-20 sm:py-28 lg:py-32 bg-background">
      <div className="container max-w-7xl px-6 sm:px-10">
        <div className="text-center mb-14 sm:mb-20 reveal">
          <span className="label-eyebrow">Na Mídia e em Eventos</span>
          <h2 className="heading-display">
            Voz que <em className="not-italic font-serif italic text-gold">Ressoa</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map((m, i) => (
            <a
              key={m.title}
              href={m.href}
              target="_blank"
              rel="noreferrer"
              className="group bg-[hsl(var(--green-card))] p-8 sm:p-10 border-t-2 border-transparent hover:border-gold hover:bg-gold/5 hover:-translate-y-1 transition-all reveal flex flex-col"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-[10px] tracking-[0.22em] uppercase text-gold mb-4">
                {m.type}
              </div>
              <h3 className="font-serif text-xl sm:text-[22px] text-cream mb-3 leading-snug">
                {m.title}
              </h3>
              <p className="text-[13px] font-light leading-[1.75] text-foreground/70 mb-6 flex-1">
                {m.desc}
              </p>
              <span className="inline-flex items-center gap-2 group-hover:gap-3 transition-all text-[11px] tracking-[0.18em] uppercase text-gold">
                {m.cta} <ArrowRight size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
