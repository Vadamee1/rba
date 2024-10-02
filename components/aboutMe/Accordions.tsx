import { Accordion, AccordionItem } from "@nextui-org/react";

import { AccordionType } from "@/types/accordions";

interface Props {
  data: AccordionType[];
}

export default function Accordions({ data }: Props) {
  return (
    <Accordion>
      {data.map((item) => (
        <AccordionItem key={item.key} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
