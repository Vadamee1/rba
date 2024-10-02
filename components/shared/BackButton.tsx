"use client";

import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      className="w-full"
      color="danger"
      variant="flat"
      onPress={router.back}
    >
      Regresar
    </Button>
  );
}
