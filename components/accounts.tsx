import { Avatar, Image } from "@nextui-org/react";
import Link from "next/link";

export default function Accounts() {
  return (
    <div className="flex gap-5 justify-center mb-5 mt-5">
      <Link href="/">
        <Image isBlurred src="/images/navbar/Gilgamesh.jpg" width={100} />
      </Link>
      <Link href="/kayn">
        <Image isBlurred src="/images/navbar/Kayn.jpg" width={100} />
      </Link>
      {/* <Link href="/multimuse">
        <Image isBlurred src="/images/navbar/Stark.png" width={100} />
      </Link> */}
    </div>
  );
}
