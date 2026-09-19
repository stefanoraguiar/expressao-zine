import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-night px-5 py-10 text-[0.7rem] uppercase tracking-[0.16em] text-cream/80 sm:px-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p>
          {site.name}
          <span className="mt-2 block normal-case tracking-normal text-cream/55">
            Contém nu artístico.
          </span>
        </p>
        <ul className="flex flex-col gap-2 sm:items-end">
          <li>
            <a className="hover:text-terracotta" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </li>
          <li>
            <a className="hover:text-terracotta" href="/privacidade">
              Privacidade
            </a>
          </li>
          <li>
            <a className="hover:text-terracotta" href="/termos">
              Termos
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
