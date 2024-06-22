import CharacterCard from "@/components/shared/CharacterCard";
import { chisaki } from "@/constants/chisaki";
import { Character } from "@/types/characters";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vadam - RBA",
  description: "Presentación para la comunidad de roleplay",
  icons: {
    icon: "/ChisakiIcon.jpeg",
  },
};

export default function ChisakiPage() {
  const { body, eyes, characterData, footer, link }: Character = chisaki;

  return (
    <div className="w-full">
      <CharacterCard
        bodyImage={body}
        character={characterData}
        eyesImage={eyes}
        footerImage={footer}
        link={link}
      />
    </div>
  );
}
