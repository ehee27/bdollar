import { ShinyButton } from "@/components/magicui/shiny-button";

const HeroButtons = () => {
  return (
    <div className="flex gap-4">
      <ShinyButton className="bg-black/90 text-white font-bold">
        Request Demo
      </ShinyButton>
      <ShinyButton className="bg-white text-zinc-600 font-bold">
        Learn More
      </ShinyButton>
    </div>
  );
};

export default HeroButtons;
