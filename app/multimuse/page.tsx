import CharacterCard from "@/components/shared/CharacterCard";
import { multimuse } from "@/constants/multimuse";
import { Character } from "@/types/characters";

export default function Kayn() {
  const { body, eyes, characterData, footer, link }: Character = multimuse;

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
