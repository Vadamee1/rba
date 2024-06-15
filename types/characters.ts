export type Character = {
  body: string;
  characterData: CharacterData;
  eyes: string;
  footer: string;
  link: string;
};

export type CharacterData = {
  color: "danger" | "warning" | "secondary";
  exclusive: boolean;
  name: string;
  fandom: string;
};
