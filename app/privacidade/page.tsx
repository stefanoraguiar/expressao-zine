import type { Metadata } from "next";
import { LegalArticle } from "@/components/LegalArticle";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidade",
};

export default function PrivacidadePage() {
  return (
    <LegalArticle title="Privacidade">
      <p>
        A {site.legalName} é um projeto independente, não uma empresa. Este
        texto descreve, em linguagem simples, que dados entram em jogo quando
        visitas o site ou encomendas a zine.
      </p>
      <p>
        <strong>Contacto:</strong>{" "}
        <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </p>
      <h2 className="pt-4 font-display text-2xl tracking-wide">O que não fazemos</h2>
      <p>
        Este site não usa cookies de análise, publicidade ou redes sociais. Não
        há newsletter, contas nem formulários. Não guardamos uma base de dados
        com os teus dados.
      </p>
      <h2 className="pt-4 font-display text-2xl tracking-wide">Encomendas</h2>
      <p>
        Se comprares a edição, o pagamento e a morada de envio são tratados
        pela Stripe (processador). A Stripe pode recolher o teu nome, email,
        morada e dados de pagamento para concluir a compra e prevenir fraude.
      </p>
      <p>
        Nós não armazenamos uma cópia desses dados no site. Vemos a encomenda
        no painel da Stripe apenas para imprimir e enviar o exemplar. A
        finalidade é cumprir o contrato de venda.
      </p>
      <h2 className="pt-4 font-display text-2xl tracking-wide">Alojamento</h2>
      <p>
        O site é um conjunto de páginas estáticas no GitHub Pages. O anfitrião
        processa pedidos técnicos (endereço IP, tipo de browser) o tempo
        necessário ao funcionamento. Sem perfilagem.
      </p>
      <h2 className="pt-4 font-display text-2xl tracking-wide">Os teus direitos</h2>
      <p>
        Nos termos do RGPD podes pedir acesso, retificação, apagamento,
        limitação ou oposição, e apresentar reclamação a uma autoridade de
        controlo (em Portugal, a CNPD). Escreve para {site.email}.
      </p>
      <p>
        Se a Stripe tratar dados fora da União Europeia, fá-lo com as
        salvaguardas que publica nos seus termos (incluindo cláusulas-tipo).
      </p>
      <p className="text-[0.85rem] text-water">
        Este aviso não é aconselhamento jurídico.
      </p>
    </LegalArticle>
  );
}
