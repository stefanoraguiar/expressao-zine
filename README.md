# Expressão

Site da 1.ª edição — [expressao.online](https://expressao.online).

## Local

```bash
npm install
npm run dev
```

## Publicar (GitHub Pages)

O site é estático. Cada push para `main` gera e publica `out/` via GitHub Actions.

### Namecheap → expressao.online

Em **Domain List → Manage → Advanced DNS**, apaga o parking/URL redirect da Namecheap e cria:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `<o-teu-user>.github.io` |

TTL pode ficar automático. HTTPS fica a cargo do GitHub (demora até algumas horas depois do DNS).

### Stripe (dois preços)

Cria dois [Payment Links](https://dashboard.stripe.com/payment-links) em EUR, com morada de envio limitada à UE e redirect de sucesso para `https://expressao.online/sucesso/`:

1. **Compra antes do fechamento** — 8 €  
   Secret: `NEXT_PUBLIC_STRIPE_PAYMENT_LINK_PREPRINT`
2. **1.ª edição** — 12 € (quando estiver pronta)  
   Secret: `NEXT_PUBLIC_STRIPE_PAYMENT_LINK_FINAL`

No repositório: **Settings → Secrets and variables → Actions**. Depois volta a correr o workflow **Deploy**. Sem o URL, o botão fica em “Pagamento em breve”.
