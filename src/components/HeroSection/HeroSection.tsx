import { ActionContent } from "./ActionContent";
import { CardContent } from "./CardContent";

export const HeroSection = () => {
  return (
    <section className="dark:bg-transparent dark:text-gray-100">
      <div className="flex flex-row justify-between p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="w-1/3 flex justify-center">
          <ActionContent />
        </div>
        <div className="w-2/3 flex justify-center">
          <CardContent />
          <CardContent />
          <CardContent />
        </div>
      </div>
    </section>
  );
};
