const pilares = [
  {
    n: "01",
    title: "Posicionamento e Identidade",
    desc: "Posicionamento sem identidade é só barulho. Construa autoridade pessoal e de marca com consistência e essência genuína.",
  },
  {
    n: "02",
    title: "Conexões Estratégicas",
    desc: "Networking proposital — não por coincidência. Cada conexão responde ao nível de intenção que você sustenta.",
  },
  {
    n: "03",
    title: "Inteligência Emocional e Espiritual",
    desc: "Autoconhecimento como ponto de partida. Espiritualidade prática. Crenças limitantes identificadas e reconstruídas.",
  },
  {
    n: "04",
    title: "Alta Performance",
    desc: "O piloto automático é o maior risco. Escolhas maduras superam motivação efêmera. Consistência estratégica como diferencial.",
  },
  {
    n: "05",
    title: "Vendas Conscientes",
    desc: "Vender com identidade. Proposta de valor alinhada ao propósito. Estratégia onde consciência e resultado coexistem.",
  },
  {
    n: "06",
    title: "Fé e Estratégia",
    desc: "Palavra de Deus como base de decisão. Existem decisões que vão além do negócio — e é aí que a transformação acontece.",
  },
];

export default function Pilares() {
  return (
    <section
      id="pilares"
      className="relative py-20 sm:py-28 lg:py-32 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-serif font-bold text-[120px] sm:text-[200px] lg:text-[300px] text-gold/[0.03] whitespace-nowrap">
          PROPÓSITO
        </span>
      </div>

      <div className="relative container max-w-7xl px-6 sm:px-10">
        <div className="text-center mb-14 sm:mb-20 reveal">
          <span className="label-eyebrow">Os Fundamentos</span>
          <h2 className="heading-display">
            6 Pilares de <em className="not-italic font-serif italic text-gold">Transformação</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {pilares.map((p, i) => (
            <article
              key={p.n}
              className="group relative bg-[hsl(var(--green-card))] p-8 sm:p-10 transition-all hover:bg-gold/5 reveal overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-serif text-5xl font-light text-gold/20 leading-none mb-5">
                {p.n}
              </div>
              <h3 className="font-serif text-2xl text-cream mb-3 leading-tight">{p.title}</h3>
              <p className="text-[13px] font-light leading-[1.8] text-foreground/70">{p.desc}</p>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
