import Image from "next/image";

type PlateProps = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
};

export function Plate({ src, alt, caption, priority }: PlateProps) {
  return (
    <figure className="relative bg-night">
      <div className="relative aspect-[5/6] w-full sm:aspect-[16/8]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
        <div className="grain" />
      </div>
      {caption ? (
        <figcaption className="px-5 py-3 text-[0.65rem] uppercase tracking-[0.18em] text-cream/70 sm:px-8">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
