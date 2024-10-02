import { characterNameFont } from "@/config/fonts";
import { accountAccordion } from "@/constants/accordions";

export default function Account() {
  return (
    <div>
      {accountAccordion.map((acc) => (
        <p key={acc[0]}>{acc}</p>
      ))}
    </div>
  );
}
