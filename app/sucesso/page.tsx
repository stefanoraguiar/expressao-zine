import type { Metadata } from "next";
import { LegalArticle } from "@/components/LegalArticle";

export const metadata: Metadata = {
  title: "Obrigado",
  robots: { index: false, follow: false },
};

export default function SucessoPage() {
  return (
    <LegalArticle title="Obrigado">
      <p>
        O pagamento foi recebido. Vamos imprimir e enviar a 1.ª edição para a
        morada que indicaste no Stripe.
      </p>
      <p>
        Recebes o comprovativo no email usado na compra. Se algo falhar no
        caminho, escreve-nos — sem pressão.
      </p>
      <p>
        <a className="cta" href="/#inicio">
          Voltar ao início
        </a>
      </p>
    </LegalArticle>
  );
}
