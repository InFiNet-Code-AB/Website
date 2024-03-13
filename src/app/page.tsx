import { HeroSection } from "@/components/HeroSection/HeroSection";
import { NavigationMenu } from "@/components/Navigation/Navigation";

export default function Home() {
  return (
    <div className="dark dark:my-dark-bg bg-gradient-to-r from-fuchsia-200 to-blue-300 h-screen">
      <NavigationMenu />
      <HeroSection />

      {/* <img
        src="/logo-light-long.png"
        className="hover:-skew-y-12 hover:-translate-y-6 hover:translate-x-6 hover:scale-125 ease-in-out duration-300"
      ></img> */}
      {/* <HeroSection /> */}
    </div>
  );
}
