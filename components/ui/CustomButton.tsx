import { Button } from "@nextui-org/button";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  startContent?: ReactNode;
  endContent?: ReactNode;
  isIconOnly?: boolean;
  title: string;
  link?: boolean;
  href?: string;
}

export default function CustomButton({
  color,
  endContent,
  href,
  isIconOnly,
  link,
  radius,
  size,
  startContent,
  title,
  variant,
}: Props) {
  return (
    <Button
      as={link ? Link : Button}
      color={color ? color : "default"}
      endContent={endContent ? endContent : ""}
      href={link ? href : ""}
      isIconOnly={isIconOnly}
      radius={radius ? radius : "sm"}
      size={size ? size : "md"}
      startContent={startContent ? startContent : ""}
      variant={variant ? variant : "solid"}
    >
      {title}
    </Button>
  );
}
