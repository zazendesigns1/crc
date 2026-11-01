import Image from "next/image";

/** Listing photo. `focus` shifts the crop so the placeholder gallery shows different framings. */
export default function PropertyPhoto({ src, alt, focus = "50% 50%", sizes = "(max-width: 700px) 100vw, 400px", priority }: { src: string; alt: string; focus?: string; sizes?: string; priority?: boolean }) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover", objectPosition: focus }} />;
}
