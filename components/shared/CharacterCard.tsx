import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";

import { characterNameFont, infoCharacterFont } from "@/config/fonts";
import { CharacterData } from "@/types/characters";

interface Props {
  character: CharacterData;
  bodyImage: string;
  eyesImage: string;
  footerImage: string;
  link: string;
}

export default function CharacterCard({
  character,
  eyesImage,
  bodyImage,
  footerImage,
  link,
}: Props) {
  const { color, fandom, name, exclusive } = character;

  return (
    <Card isBlurred>
      <CardHeader className="flex">
        <Image alt="Eyes character image" src={eyesImage} width={300} />
        <p
          className={`flex w-full justify-center text-6xl ${characterNameFont.className}`}
        >
          {name}
        </p>
      </CardHeader>
      <CardBody>
        <div className="flex justify-between items-center">
          <div className="grid w-full justify-center">
            <p className={`text-3xl ${characterNameFont.className}`}>
              {exclusive ? "Exclusive" : "Multimuse"} account
            </p>
            {/* <p className={`text-2xl ${characterNameFont.className}`}>
              Character data
            </p> */}
            <p className={`text-xl ${infoCharacterFont.className}`}>
              Fandom: {fandom}
            </p>
            <Link color={color} href={link}>
              Cuenta
            </Link>
          </div>
          <Image alt="Body character image" src={bodyImage} width={500} />
        </div>
      </CardBody>
      <CardFooter>
        <Image alt="Body character image" src={footerImage} width={600} />
      </CardFooter>
    </Card>
  );
}
