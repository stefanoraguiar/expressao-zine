import Image from "next/image";
import { BuyButton } from "@/components/BuyButton";
import { Plate } from "@/components/Plate";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <section
        id="inicio"
        className="relative flex h-svh min-h-[36rem] items-end justify-center overflow-hidden bg-sea"
      >
        <Image
          src="/images/cover.webp"
          alt="Capa da Expressão: figura de braços abertos no Atlântico, com o título em letras brancas."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="grain" />
        <p className="relative mb-8 px-5 text-center text-[0.65rem] uppercase tracking-[0.28em] text-white/80">
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
              Um objeto impresso. {site.pages} páginas. Fotos e textos de{" "}
              {site.theme}: autorretratos, a Rita ao sol, um texto da Jade, um
              ensaio de shibari, uma crónica de amores de verão, uma colagem da
              Maré.
            </p>
            <p>
              Impressão e envio feitos à mão, a partir daqui, para a União
              Europeia.
            </p>
          </div>
          <dl className="mt-12 space-y-3 text-[0.8rem] uppercase tracking-[0.16em]">
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
          <div className="mt-14">
            <BuyButton />
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
                expressar sem viés financeiro, sem um objetivo claro de
                sucesso. Sucesso é chegar até aqui e ter estas páginas
                impressas.
              </p>
              <p>
                Feito com as Ritas e a Jade, e com o projeto gráfico da Maré.
                Acabou o Verão, e começou a Expressão. Que o teu Outono seja
                também assim.
              </p>
            </div>
          </div>
          <dl className="space-y-4 text-[0.75rem] uppercase tracking-[0.16em] text-cream/75">
            <div>
              <dt className="text-cream/45">Fotos e edição</dt>
              <dd className="mt-1">Stefano Aguiar</dd>
            </div>
            <div>
              <dt className="text-cream/45">Modelo</dt>
              <dd className="mt-1">Rita Bandeira</dd>
            </div>
            <div>
              <dt className="text-cream/45">Texto</dt>
              <dd className="mt-1">Jade Nunes · Stefano Aguiar · Maré</dd>
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
