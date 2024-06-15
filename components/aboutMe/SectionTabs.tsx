"use client";

import { Tab, Tabs } from "@nextui-org/react";
import Accordions from "./Accordions";
import {
  accountAccordion,
  roleplayAccordion,
  userAccordion,
} from "@/constants/accordions";

export default function SectionTabs() {
  return (
    <Tabs variant="underlined">
      <Tab key="account" title="Account">
        <Accordions data={accountAccordion} />
      </Tab>
      <Tab key="roleplay" title="Roleplay">
        <Accordions data={roleplayAccordion} />
      </Tab>
      <Tab key="user" title="User">
        <Accordions data={userAccordion} />
      </Tab>
    </Tabs>
  );
}
