import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Noto_Serif,
  Playfair_Display,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const characterNameFont = Noto_Serif({
  subsets: ["latin"],
});

export const infoCharacterFont = Playfair_Display({
  subsets: ["latin"],
});
