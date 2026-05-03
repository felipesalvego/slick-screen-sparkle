import acpLogo from "@/assets/org-logos/acp.png";
import cdlLogo from "@/assets/org-logos/cdl.png";
import ciespLogo from "@/assets/org-logos/ciesp.png";
import aspaLogo from "@/assets/org-logos/aspa.png";
import ibraLogo from "@/assets/org-logos/ibra.png";
import acedvLogo from "@/assets/org-logos/acedv.png";
import kcLogo from "@/assets/org-logos/kc.png";
import sebraeLogo from "@/assets/org-logos/sebrae.png";
import lyLogo from "@/assets/org-logos/ly.png";

const trajetoria = [
  {
    org: "K E Representações Ltda",
    role: "Sócia-Administradora · Kimberly-Clark Brasil",
    period: "2002 — Presente · Pará e Amapá",
  },
  {
    org: "Farta Colheita Comércio e Serviços",
    role: "Presidente e Fundadora",
    period: "Belém, PA",
  },
  {
    org: "CONJOVE — Conselho de Jovens Empresários",
    role: "Diretora",
    period: "Biênio 2025–2026",
  },
  {
    org: "ACP — Conselho da Mulher Empresária",
    role: "Conselheira (CME)",
    period: "Ativa",
  },
  {
    org: "Laughter Yoga International",
    role: "Leader Certificada · #22722",
    period: "Certificação Internacional",
  },
  {
    org: "Universidade da Amazônia",
    role: "Graduação em Gestão Empresarial",
    period: "2001 – 2003",
  },
];

const orgs = [
  { abbr: "ACP", name: "Assoc. Comercial do Pará", logo: acpLogo },
  { abbr: "CDL", name: "CDL Mulher", logo: cdlLogo },
  { abbr: "CIESP", name: "CIESP Campinas", logo: ciespLogo },
  { abbr: "ASPA", name: "Assoc. Produtores", logo: aspaLogo },
  { abbr: "IBRA", name: "Instituto IBRA", logo: ibraLogo },
  { abbr: "ACEDV", name: "ACEDV 50 Anos", logo: acedvLogo },
  { abbr: "KC", name: "Kimberly-Clark", logo: kcLogo },
  { abbr: "SEBRAE", name: "EMPRETEC", logo: sebraeLogo },
  { abbr: "LY", name: "Laughter Yoga", logo: lyLogo },
];

export default function Trajetoria() {
  return (
    <section id="trajetoria" className="py-20 sm:py-28 lg:py-32 bg-background">
      <div className="container max-w-7xl px-6 sm:px-10 grid lg:grid-cols-[1.2fr_1fr] gap-14 lg:gap-24 items-start">
        <div className="reveal">
          <span className="label-eyebrow">Trajetória e Associações</span>
          <h2 className="heading-display mb-10">
            24 Anos de <em className="not-italic font-serif italic text-gold">Impacto</em>
          </h2>

          <ul className="space-y-0">
            {trajetoria.map((t) => (
              <li
                key={t.org}
                className="py-6 border-b border-border flex flex-col gap-1.5"
              >
                <span className="font-serif text-xl sm:text-[22px] text-cream">{t.org}</span>
                <span className="text-[10px] sm:text-[11px] tracking-[0.13em] uppercase text-gold">
                  {t.role}
                </span>
                <span className="text-xs text-foreground/60 font-light">{t.period}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal" style={{ transitionDelay: "150ms" }}>
          <span className="label-eyebrow !mb-6">Presença em Organizações</span>
          <div className="grid grid-cols-3 gap-px bg-border">
            {orgs.map((org) => (
              <div
                key={org.abbr}
                className="bg-[hsl(var(--green-card))] py-5 px-3 flex flex-col items-center justify-center gap-2 hover:bg-gold/5 transition-colors text-center"
              >
                <img src={org.logo} alt={org.name} className="h-10 w-auto object-contain" />
                <div className="text-[9px] sm:text-[10px] tracking-[0.08em] uppercase text-foreground/60 leading-tight">
                  {org.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
