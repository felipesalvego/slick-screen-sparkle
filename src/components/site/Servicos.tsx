import { ArrowRight, Users, Calendar, MessageCircle, Coffee, Mic, Sparkles } from "lucide-react";

const wa = (msg: string) =>
  `https://wa.me/5511946033119?text=${encodeURIComponent(msg)}`;

const servicos = [
  {
    icon: Users,
    title: "Mentoria Conexões Estratégicas",
    desc: "Programa individual e em grupo para mulheres que lideram. Foco em posicionamento, identidade, vendas e networking. Base em inteligência comportamental e espiritualidade prática.",
    cta: "Saber mais",
    href: wa("Olá Katti, tenho interesse na Mentoria Conexões Estratégicas"),
  },
  {
    icon: Calendar,
    title: "Workshop 22:22",
    desc: 'Imersão presencial: Conexões com Propósito. Fundada em João 15:5. "Pare de procurar crescimento. Comece a eliminar o que impede." Próxima edição em Belém.',
    price: "R$ 97",
    priceSuffix: "/ pessoa",
    cta: "Garantir vaga",
    href: wa("Quero garantir minha vaga no Workshop 22:22!"),
  },
  {
    icon: MessageCircle,
    title: "Rede Internacional de Networking",
    desc: "Grupo exclusivo de WhatsApp com mais de 640 mulheres em Europa, EUA, Japão e Brasil. Conexões estratégicas que atravessam fronteiras e geram oportunidades reais.",
    cta: "Entrar na rede",
    href: "https://linktr.ee/kattielleres",
    wide: true,
  },
  {
    icon: Coffee,
    title: "Café com Katti",
    desc: "O evento mensal mais esperado de Manaus. Encontro presencial de mulheres que constroem, inspiram e se reconectam com propósito.",
    cta: "Próxima edição",
    href: wa("Quero saber mais sobre o Café com Katti"),
  },
  {
    icon: Mic,
    title: "Palestras Corporativas",
    desc: "Conteúdo customizado para associações, empresas e eventos. ACP, ASPA, CIESP, Banestes, CDL Mulher e mais. Networking, liderança, performance e propósito.",
    cta: "Solicitar proposta",
    href: wa("Gostaria de solicitar uma proposta de palestra"),
  },
  {
    icon: Sparkles,
    title: "Conexão Metamorfose",
    desc: "Treinamento online em 6 aulas. Cada encontro é uma oportunidade de conhecer novas pessoas, trocar experiências e crescer com quem busca evoluir.",
    cta: "Acessar",
    href: "https://linktr.ee/kattielleres",
  },
];

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="bg-[hsl(var(--green-mid))] py-20 sm:py-28 lg:py-32"
    >
      <div className="container max-w-7xl px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-14 sm:mb-20 items-start">
          <div className="reveal">
            <span className="label-eyebrow">O Que Ofereço</span>
            <h2 className="heading-display">
              Programas e <em className="not-italic font-serif italic text-gold">Experiências</em>
            </h2>
          </div>
          <p className="body-text reveal" style={{ transitionDelay: "100ms" }}>
            Cada programa foi desenvolvido para criar conexões reais entre identidade, estratégia e
            resultado. Não há atalhos — há processo, intenção e transformação genuína.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {servicos.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={s.title}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className={`group relative bg-[hsl(var(--green-card))] border border-border p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30 overflow-hidden flex flex-col reveal ${
                  s.wide ? "sm:col-span-2 lg:col-span-3" : ""
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="absolute top-0 left-0 w-[3px] h-0 bg-gold group-hover:h-full transition-all duration-500" />

                <div className="w-11 h-11 bg-gold/15 rounded-md flex items-center justify-center mb-6">
                  <Icon size={20} className="text-gold" strokeWidth={1.5} />
                </div>

                <h3 className="font-serif text-2xl sm:text-[26px] text-cream mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] font-light leading-[1.85] text-foreground/70 mb-6 flex-1">
                  {s.desc}
                </p>

                {s.price && (
                  <div className="font-serif text-3xl sm:text-4xl font-light text-gold mb-4">
                    {s.price}{" "}
                    <small className="text-sm font-sans font-light">{s.priceSuffix}</small>
                  </div>
                )}

                <span className="inline-flex items-center gap-2 group-hover:gap-3 transition-all text-[11px] tracking-[0.18em] uppercase text-gold">
                  {s.cta} <ArrowRight size={14} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
