import CustomButton from "@/components/ui/CustomButton";
import { siteConfig } from "@/config/site";

export default function HomeBody() {
  const { aboutMe, characters } = siteConfig.router;

  return (
    <div className="flex flex-col w-full px-5 py-5 gap-2">
      <CustomButton
        link
        color="danger"
        href={aboutMe.href}
        radius="sm"
        title="About account"
        variant="ghost"
      />
      <CustomButton
        link
        color="danger"
        href={characters.href}
        radius="sm"
        title="Characters"
        variant="ghost"
      />
    </div>
  );
}
