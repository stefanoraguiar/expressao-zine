const links = [
  { href: "/#inicio", label: "Início" },
  { href: "/#encomendar", label: "Encomendar" },
  { href: "/#sobre", label: "Sobre" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 mix-blend-difference">
      <nav
        aria-label="Principal"
        className="flex items-center justify-between px-5 py-5 text-[0.7rem] uppercase tracking-[0.22em] text-white sm:px-8"
      >
        <a href="/#inicio" className="font-display text-[0.95rem] tracking-[0.18em]">
          Expressão
        </a>
        <ul className="flex gap-5 sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-cream">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
