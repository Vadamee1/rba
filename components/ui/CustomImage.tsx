import { Image } from "@nextui-org/react";

interface Props {
  alt: string;
  className?: string;
  src: string;
  width: number;
  height?: number;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  shadow?: "none" | "sm" | "md" | "lg";
}

export default function CustomImage({
  alt,
  className,
  height,
  radius,
  shadow,
  src,
  width,
}: Props) {
  return (
    <Image
      alt={alt}
      className={className}
      height={height}
      radius={radius ? radius : "none"}
      shadow={shadow ? shadow : "none"}
      src={src}
      width={width}
    />
  );
}
