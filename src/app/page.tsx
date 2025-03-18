import Banner from "@/components/Landing/Banner";
import Data from "@/components/Landing/Data";
import FeatureBrands from "@/components/Landing/FeatureBrands";

export default function Home() {
  return (
    <div className="bg-black">
      <Banner />
      <Data/>
      <FeatureBrands/>
    </div>
  );
}
