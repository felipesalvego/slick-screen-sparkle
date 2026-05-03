import { useState, type FormEvent } from "react";
import { Phone, Mail, Globe, Instagram, Youtube, Linkedin } from "lucide-react";
import { toast } from "sonner";

const contacts = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+55 (11) 94603-3119",
    href: "https://wa.me/5511946033119",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "kattielleres@gmail.com",
    href: "mailto:kattielleres@gmail.com",
  },
  {
    icon: Globe,
    label: "Links",
    value: "linktr.ee/kattielleres",
    href: "https://linktr.ee/kattielleres",
  },
];

const socials = [
  { Icon: Instagram, href: "https://instagram.com/kattielleres", label: "Instagram" },
  { Icon: Youtube, href: "https://www.youtube.com/@kattielleres", label: "YouTube" },
  { Icon: Linkedin, href: "https://linktr.ee/kattielleres", label: "LinkedIn" },
];

export default function Contato() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const nome = data.get("nome");
    const interesse = data.get("interesse");
    const mensagem = data.get("mensagem");
    const text = `Olá Katti! Sou ${nome}.%0AInteresse: ${interesse}%0A%0A${mensagem}`;
    setTimeout(() => {
      window.open(`https://wa.me/5511946033119?text=${text}`, "_blank");
      toast.success("Mensagem pronta — abrindo WhatsApp");
      setLoading(false);
    }, 400);
  };

  return (
    <section
      id="contato"
      className="py-20 sm:py-28 lg:py-32 bg-background"
    >
      <div className="container max-w-7xl px-6 sm:px-10 grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">
        <div className="reveal">
          <span className="label-eyebrow">Vamos Nos Conectar</span>
          <h2 className="heading-display mb-6">
            Inicie uma <em className="not-italic font-serif italic text-gold">Conexão</em>
            <br />
            com Propósito
          </h2>
          <p className="body-text mb-12">
            Cada mensagem é o início de uma conexão que pode transformar seu negócio, sua
            identidade e sua trajetória.
          </p>

          <div className="flex flex-col gap-7">
            {contacts.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-gold mb-1">
                      {c.label}
                    </div>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-serif text-base sm:text-lg text-cream hover:text-gold transition-colors break-all"
                    >
                      {c.value}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-3 mt-10">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                aria-label={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground hover:border-gold transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 reveal"
          style={{ transitionDelay: "150ms" }}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field name="nome" label="Nome" required />
            <Field name="empresa" label="Empresa" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field name="email" label="E-mail" type="email" />
            <Field name="telefone" label="Telefone" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] tracking-[0.18em] uppercase text-gold/70">
              Interesse
            </label>
            <select
              name="interesse"
              defaultValue="Mentoria"
              className="bg-transparent border-b border-border py-3 text-[15px] font-light text-cream outline-none focus:border-gold transition-colors"
            >
              <option className="bg-[hsl(var(--green-mid))]">Mentoria</option>
              <option className="bg-[hsl(var(--green-mid))]">Workshop 22:22</option>
              <option className="bg-[hsl(var(--green-mid))]">Palestra Corporativa</option>
              <option className="bg-[hsl(var(--green-mid))]">Café com Katti</option>
              <option className="bg-[hsl(var(--green-mid))]">Outro</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] tracking-[0.18em] uppercase text-gold/70">
              Mensagem
            </label>
            <textarea
              name="mensagem"
              rows={3}
              required
              className="bg-transparent border-b border-border py-3 text-[15px] font-light text-cream outline-none focus:border-gold transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="self-start bg-gold text-primary-foreground px-10 py-4 mt-3 text-[12px] font-semibold tracking-[0.25em] uppercase hover:bg-gold-light hover:-translate-y-0.5 transition-all disabled:opacity-60"
          >
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] tracking-[0.18em] uppercase text-gold/70">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="bg-transparent border-b border-border py-3 text-[15px] font-light text-cream outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
