import portrait from "@/assets/katti-portrait.png";

const tags = [
  "Mentoria",
  "Networking",
  "Alta Performance",
  "Vendas Conscientes",
  "Liderança Feminina",
  "Fé & Estratégia",
];

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-[hsl(var(--green-mid))] py-20 sm:py-28 lg:py-32"
    >
      <div className="container max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-24 items-center px-6 sm:px-10">
        <div className="relative reveal order-2 lg:order-1">
          <div className="absolute -top-4 -left-4 right-4 bottom-4 border border-gold/25 rounded-sm hidden sm:block" />
          <img
            src={portrait}
            alt="Retrato de Katti Elleres"
            className="relative w-full object-cover rounded-sm shadow-elegant"
            loading="lazy"
          />
          <div className="absolute -bottom-6 right-2 sm:-right-6 max-w-[260px] bg-gold text-primary-foreground p-5 font-serif italic text-sm sm:text-base leading-snug font-medium shadow-soft">
            "Identidade restaurada em Cristo"
          </div>
        </div>

        <div className="reveal order-1 lg:order-2">
          <span className="label-eyebrow">Quem é Katti Elleres</span>
          <h2 className="heading-display mb-7">
            Identidade,
            <br />
            Propósito e <em className="not-italic font-serif italic text-gold">Estratégia</em>
          </h2>
          <p className="body-text mb-4">
            Mentora, palestrante e autora com mais de 40 anos na área comercial e de
            desenvolvimento humano. Sua trajetória une ciência do comportamento, espiritualidade
            prática e vivência real de mercado.
          </p>
          <p className="body-text mb-4">
            Sócia-administradora da{" "}
            <strong className="text-cream font-medium">K E Representações Ltda</strong>,
            representando Kimberly-Clark no Pará e Amapá desde 2003. Fundadora da{" "}
            <strong className="text-cream font-medium">Farta Colheita Comércio e Serviços</strong>.
          </p>
          <p className="body-text">
            Especialista em{" "}
            <strong className="text-gold font-medium">Conexões Estratégicas</strong> — facilita
            ambientes de alto impacto onde identidade, propósito e rede de relacionamentos geram
            transformação real.
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {tags.map((t) => (
              <span
                key={t}
                className="text-[10px] sm:text-[11px] tracking-[0.13em] uppercase text-gold border border-gold/35 px-3 py-2 hover:bg-gold/10 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
