import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { AgeGate } from "@/components/AgeGate";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { AGE_STORAGE_KEY, site } from "@/lib/site";
import "./globals.css";

const plaster = localFont({
  src: "./fonts/Plaster-Regular.ttf",
  variable: "--font-plaster",
  display: "swap",
});

const elite = localFont({
  src: "./fonts/SpecialElite-Regular.ttf",
  variable: "--font-elite",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.edition}`,
    description: site.description,
    locale: "pt_PT",
    type: "website",
    images: ["/images/cover.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      className={`${plaster.variable} ${elite.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-sea">
        <Script id="age-check" strategy="beforeInteractive">
          {`try{if(localStorage.getItem(${JSON.stringify(AGE_STORAGE_KEY)})==="1")document.documentElement.dataset.age="ok"}catch(e){}`}
        </Script>
        <AgeGate />
        <div className="site-shell">
          <a
            href="#conteudo"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
          >
            Saltar para o conteúdo
          </a>
          <SiteHeader />
          <div id="conteudo">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
