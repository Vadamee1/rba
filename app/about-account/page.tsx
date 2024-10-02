"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

import { characterNameFont } from "@/config/fonts";
import { aboutMe } from "@/constants/accordions";

export default function AboutMe() {
  return (
    <Accordion className="w-full" variant="shadow">
      {aboutMe.map((item) => (
        <AccordionItem
          key={item.key}
          startContent={<item.startContent size={25} />}
          title={item.title}
        >
          <div
            className={`flex flex-col gap-3 ${characterNameFont.className} m-2`}
          >
            {item.content.map((con) => (
              <p key={con}>{con}</p>
            ))}
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
