import Link from "next/link";

import CustomImage from "@/components/ui/CustomImage";
import { multimuseURL } from "@/constants/accounts/multimuse";
import { sunURL } from "@/constants/accounts/luis-miguel";
import { titleFont } from "@/config/fonts";

export default function HomeFooter() {
  return (
    <div>
      <h4 className={`text-center ${titleFont.className} text-xl mb-5`}>
        Perfiles:
      </h4>
      <div className="flex gap-5 justify-center w-full">
        <Link href={multimuseURL}>
          <CustomImage
            alt="Multimuse Profile"
            className="object-cover"
            height={100}
            radius="md"
            src="/images/characters/gilgamesh/Body.png"
            width={100}
          />
        </Link>
        <Link href={sunURL}>
          <CustomImage
            alt="Luis Miguel Profile"
            className="object-cover"
            height={100}
            radius="md"
            src="/images/characters/kayn/Body.jpg"
            width={100}
          />
        </Link>
      </div>
    </div>
  );
}
