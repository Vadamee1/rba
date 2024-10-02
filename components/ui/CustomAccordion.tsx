import { Accordion, AccordionItem } from "@nextui-org/react";

import { AccordionType } from "@/types/accordions";

interface Props {
  variant?: "light" | "shadow" | "bordered" | "splitted";
  fullWidth: boolean;
  className: string;
  data: AccordionType[];
}

export default function CustomAccordion({
  className,
  data,
  fullWidth,
  variant,
}: Props) {
  return (
    <Accordion
      className={`${className}`}
      fullWidth={fullWidth}
      variant={variant ? variant : "bordered"}
    >
      {data.map(({ content, key, title, startContent }) => (
        <AccordionItem
          key={key}
          startContent={startContent ? startContent : ""}
          title={title}
        >
          {content}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
