import Image from "next/image";
import type { Photo } from "@/data/photos";

export function PhotoFigure({ photo, sizes, className = "" }: {
  photo: Photo;
  sizes: string;
  className?: string;
}) {
  return (
    <figure className={`photo-figure ${className}`}>
      <Image src={photo.src} alt={photo.alt} width={photo.width}
        height={photo.height} sizes={sizes} loading="lazy"
        style={{ aspectRatio: `${photo.width} / ${photo.height}`, objectFit: "contain", objectPosition: "center" }} />
      {photo.caption && <figcaption>{photo.caption}</figcaption>}
    </figure>
  );
}
