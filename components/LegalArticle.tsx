import type { ReactNode } from "react";

export function LegalArticle({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="bg-paper px-5 pb-24 pt-28 text-sea sm:px-8 sm:pt-32">
      <article className="mx-auto max-w-xl">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-water">
          Expressão
        </p>
        <h1 className="mt-5 font-display text-4xl leading-none tracking-wide sm:text-5xl">
          {title}
        </h1>
        <div className="mt-10 space-y-5 text-[1.02rem] leading-8">{children}</div>
      </article>
    </main>
  );
}
