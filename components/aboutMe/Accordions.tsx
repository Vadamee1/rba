import { AccordionType } from "@/types/accordions";
import { Accordion, AccordionItem } from "@nextui-org/react";

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
