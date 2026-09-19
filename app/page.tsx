import Image from "next/image";
import { BuyButton } from "@/components/BuyButton";
import { Plate } from "@/components/Plate";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <section
        id="inicio"
        className="relative flex h-svh min-h-[36rem] items-center justify-center overflow-hidden bg-sea"
      >
        <Image
          src="/images/cover.webp"
          alt="Figura de braços abertos no Atlântico, capa da primeira edição da Expressão."
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="grain" />
        <div className="relative z-10 flex flex-col items-center px-6">
          <p className="mb-6 text-center text-[0.65rem] uppercase tracking-[0.28em] text-white/80">
            {site.edition} · {site.month}
          </p>
          <Image
            src="/images/logo.png"
            alt="Expressão"
            width={1017}
            height={1024}
            priority
            className="h-auto w-[min(34rem,96vw)] mix-blend-screen"
          />
        </div>
        <p className="absolute bottom-8 z-10 px-5 text-center text-[0.65rem] uppercase tracking-[0.28em] text-white/80">
          Sem pressão
        </p>
      </section>

      <Plate
        src="/images/retrato.webp"
        alt="Retrato solarizado de um ensaio da primeira edição."
        caption="1.ª edição · o Verão"
      />

      <section
        id="encomendar"
        className="bg-paper px-5 py-24 text-sea sm:px-8 sm:py-32"
      >
        <div className="mx-auto max-w-xl">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-water">
            {site.edition} · {site.month}
          </p>
          <h1 className="mt-6 font-display text-4xl leading-none tracking-wide sm:text-6xl">
            Encomendar
          </h1>
          <div className="mt-10 space-y-6 text-[1.05rem] leading-8">
            <p>
              Encomende a sua edição impressa da Expressão. Esta zine esta disponível exclusivamente
              na sua versão impressa. O fechamento da 1a edição está para acontecer. Enquanto isso, 
              pode encomendar antecipadamente com um desconto de 4€ e ainda ajuda o projeto.
            </p>
            <p>
              Envio gratuito para a União Europeia.
            </p>
          </div>
          <dl className="mt-12 space-y-3 text-[0.8rem] uppercase tracking-[0.16em]">
            <div className="flex justify-between gap-6 border-t border-sea/20 pt-3">
              <dt>Compra antes do fechamento</dt>
              <dd>{site.preprintPriceLabel}</dd>
            </div>
            <div className="flex justify-between gap-6 border-t border-sea/20 pt-3">
              <dt>Preço</dt>
              <dd>{site.priceLabel}</dd>
            </div>
            <div className="flex justify-between gap-6 border-t border-sea/20 pt-3">
              <dt>Envio</dt>
              <dd>{site.shippingLabel}</dd>
            </div>
            <div className="flex justify-between gap-6 border-t border-sea/20 pt-3">
              <dt>Prazo</dt>
              <dd>{site.deliveryEstimate}</dd>
            </div>
          </dl>
          <div className="mt-14 flex flex-col gap-8">
            <BuyButton
              href={site.preprintPaymentLink}
              label={`Comprar antes do fechamento — ${site.preprintPriceLabel}`}
            />
            <BuyButton
              href={site.finalPaymentLink}
              label={`Comprar a 1ª edição — ${site.priceLabel}`}
            />
          </div>
        </div>
      </section>

      <Plate
        src="/images/flare.webp"
        alt="Claridade e flare, pormenor da última página da edição."
      />

      <section
        id="sobre"
        className="bg-night px-5 py-24 text-cream sm:px-8 sm:py-32"
      >
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-cream/55">
              Sobre
            </p>
            <h2 className="mt-6 font-display text-4xl leading-none tracking-wide sm:text-6xl">
              Sem pressão
            </h2>
            <div className="mt-10 space-y-6 text-[1.05rem] leading-8 text-cream/90">
              <p>
                Chega ao fim o Verão. Nasce este projeto de uma vontade de se
                expressar. Sem viés financeiro, sem um objetivo claro de
                sucesso. Sucesso é chegar até aqui e ter estas páginas
                impressas.
              </p>
              <p>
                Feito com o apoio da Maré, da Rita e da Jade, e com o projeto gráfico da Maré.
                Acabou o Verão, e começou a Expressão. Que o teu Outono seja
                também assim.
              </p>
            </div>
          </div>
          <dl className="space-y-4 text-[0.75rem] uppercase tracking-[0.16em] text-cream/75">
            <div>
              <dt className="text-cream/45">Fotos</dt>
              <dd className="mt-1">Stefano Aguiar</dd>
            </div>
            <div>
              <dt className="text-cream/45">Modelos</dt>
              <dd className="mt-1">Rita Bandeira · Stefano Aguiar</dd>
            </div>
            <div>
              <dt className="text-cream/45">Textos</dt>
              <dd className="mt-1">Jade Nunes · Maré · Stefano Aguiar</dd>
            </div>
            <div>
              <dt className="text-cream/45">Projeto gráfico</dt>
              <dd className="mt-1">Maré</dd>
            </div>
          </dl>
        </div>
      </section>

      <Plate
        src="/images/collage.webp"
        alt="Colagem da edição: um corpo é um corpo."
        caption="Um corpo é um corpo · Maré"
      />
    </main>
  );
}
