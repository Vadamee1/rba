import { titleFont } from "@/config/fonts";

export default function HomeHeader() {
  return (
    <div className={`w-full text-center ${titleFont.className} font-bold p-2`}>
      <h1 className="text-3xl">Read before add</h1>
      <p className="text-xl">by Vadam</p>
    </div>
  );
}
