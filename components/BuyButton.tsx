type BuyButtonProps = {
  href: string;
  label: string;
};

export function BuyButton({ href, label }: BuyButtonProps) {
  if (!href) {
    return (
      <p className="cta-quiet">
        {label}
        <span className="mt-2 block text-[0.7rem] tracking-[0.14em]">
          Pagamento em breve
        </span>
      </p>
    );
  }

  return (
    <a className="cta" href={href} rel="noopener noreferrer">
      {label}
    </a>
  );
}
