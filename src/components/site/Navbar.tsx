import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/katti-logo.png";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#pilares", label: "Pilares" },
  { href: "#servicos", label: "Serviços" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#livro", label: "Livro" },
  { href: "#midia", label: "Mídia" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b border-border transition-all ${
        scrolled ? "bg-background/95 py-3" : "bg-background/80 py-4 md:py-5"
      }`}
    >
      <nav className="container max-w-7xl flex items-center justify-between">
        <a href="#top" aria-label="Katti Elleres — Início" className="flex items-center">
          <img
            src={logo}
            alt="Katti Elleres"
            className="h-10 sm:h-12 w-auto object-contain"
            style={{ filter: "invert(1) brightness(1.05)" }}
          />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[11px] font-medium tracking-[0.22em] uppercase text-foreground/70 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              className="bg-gold text-primary-foreground px-5 py-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors"
            >
              Conectar
            </a>
          </li>
        </ul>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-cream"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="container max-w-7xl flex flex-col gap-1 py-4 border-t border-border mt-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                onClick={() => setOpen(false)}
                href={l.href}
                className="block py-3 text-[12px] tracking-[0.22em] uppercase text-foreground/80 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              onClick={() => setOpen(false)}
              href="#contato"
              className="block text-center bg-gold text-primary-foreground py-3 text-[12px] font-semibold tracking-[0.22em] uppercase"
            >
              Conectar
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
