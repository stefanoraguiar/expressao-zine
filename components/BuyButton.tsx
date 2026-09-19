import { checkoutEnabled, site } from "@/lib/site";

export function BuyButton() {
  if (!checkoutEnabled) {
    return (
      <p className="cta-quiet">
        Comprar a 1ª edição
        <span className="mt-2 block text-[0.7rem] tracking-[0.14em]">
          Pagamento em breve
        </span>
      </p>
    );
  }

  return (
    <a
      className="cta"
      href={site.paymentLink}
      rel="noopener noreferrer"
    >
      Comprar a 1ª edição
    </a>
  );
}
