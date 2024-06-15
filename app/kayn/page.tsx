import CharacterCard from "@/components/shared/CharacterCard";
import { kayn } from "@/constants/kayn";
import { Character } from "@/types/characters";

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
