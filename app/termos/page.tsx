import type { Metadata } from "next";
import { LegalArticle } from "@/components/LegalArticle";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos",
};

export default function TermosPage() {
  return (
    <LegalArticle title="Termos de compra">
      <p>
        A {site.legalName} vende a 1.ª edição da zine como projeto
        independente, sem NIF de atividade. Ao encomendar, aceitas estas
        condições.
      </p>
      <h2 className="pt-4 font-display text-2xl tracking-wide">O objeto</h2>
      <p>
        Publicação impressa, {site.pages} páginas, {site.edition}, {site.month}.
        O conteúdo inclui nu artístico. A encomenda é um exemplar físico, não um
        ficheiro.
      </p>
      <h2 className="pt-4 font-display text-2xl tracking-wide">Preço e pagamento</h2>
      <p>
        O preço da edição é {site.priceLabel}. A compra antes do fechamento
        custa {site.preprintPriceLabel}. Os valores no pagamento (incluindo
        portes) aparecem em euros no Stripe antes de confirmares. O pagamento
        é processado pela Stripe. Não guardamos dados do cartão.
      </p>
      <h2 className="pt-4 font-display text-2xl tracking-wide">Envio</h2>
      <p>
        {site.shippingLabel}. Prazo estimado: {site.deliveryEstimate}. A morada
        é a que indicares no checkout. Se a alfândega ou o correio atrasarem a
        entrega, avisamos quando soubermos.
      </p>
      <h2 className="pt-4 font-display text-2xl tracking-wide">
        Direito de resolução
      </h2>
      <p>
        Em compras à distância tens 14 dias, a contar da receção, para
        resolveres o contrato sem indicares motivo. Avisa-nos por email. O
        exemplar deve voltar nas mesmas condições, por tua conta, salvo se o
        defeito for nosso.
      </p>
      <p>
        Se o objeto chegar danificado, escreve com fotografias e tratamos da
        troca ou do reembolso.
      </p>
      <h2 className="pt-4 font-display text-2xl tracking-wide">Contacto</h2>
      <p>
        <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </p>
      <p className="text-[0.85rem] text-water">
        Estas condições não substituem a lei aplicável nem aconselhamento
        jurídico.
      </p>
    </LegalArticle>
  );
}
