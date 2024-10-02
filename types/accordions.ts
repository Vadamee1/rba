import { ReactNode } from "react";

export type AccordionType = {
  key: number;
  title: string;
  content: string;
  startContent?: ReactNode;
};
