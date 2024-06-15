import CharacterCard from "@/components/shared/CharacterCard";
import { gilgamesh } from "@/constants/gilgamesh";
import { Character } from "@/types/characters";

export default function Home() {
  const { body, eyes, characterData, footer, link }: Character = gilgamesh;

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
