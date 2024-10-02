import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

import { titleFont } from "@/config/fonts";
import BackButton from "@/components/shared/BackButton";

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex justify-center w-full">
      <Card className="mt-10 w-96">
        <CardHeader
          className={`flex ${titleFont.className} justify-center text-3xl font-bold p-5`}
        >
          About account
        </CardHeader>
        <CardBody>{children}</CardBody>
        <CardFooter>
          <BackButton />
        </CardFooter>
      </Card>
    </section>
  );
}
