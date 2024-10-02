import HomeBody from "@/components/pages/home/HomeBody";
import HomeFooter from "@/components/pages/home/HomeFooter";
import HomeHeader from "@/components/pages/home/HomeHeader";
import CustomCard from "@/components/ui/CustomCard";

export default function Home() {
  return (
    <div className="flex justify-center items-">
      <CustomCard
        body={<HomeBody />}
        footer={<HomeFooter />}
        header={<HomeHeader />}
      />
    </div>
  );
}
