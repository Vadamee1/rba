import CharacterCard from "@/components/shared/CharacterCard";
import { kayn } from "@/constants/kayn";
import { Character } from "@/types/characters";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vadam - RBA",
  description: "Presentación para la comunidad de roleplay",
  icons: {
    icon: "/IconKayn.png",
  },
};

export default function Kayn() {
  const { body, eyes, characterData, footer, link }: Character = kayn;

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
