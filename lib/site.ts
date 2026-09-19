export const AGE_STORAGE_KEY = "expressao-age-21";

export const site = {
  name: "Expressão",
  edition: "1.ª edição",
  month: "Setembro 2026",
  pages: 32,
  theme: "o Verão",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://expressao.online",
  email: "ola@expressao.online",
  legalName: "Expressão",
  priceLabel: "12 €",
  preprintPriceLabel: "8 €",
  shippingLabel: "Envio para a União Europeia",
  deliveryEstimate: "2 a 4 semanas após o pagamento",
  description:
    "Zine independente. 1.ª edição, setembro 2026. Sem pressão. Apenas 21+.",
  paymentLink: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ?? "",
} as const;

export const checkoutEnabled = Boolean(site.paymentLink);
