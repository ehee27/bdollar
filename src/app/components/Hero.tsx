import Image from "next/image";
import { TextAnimate } from "@/components/magicui/text-animate";
import HeroButtons from "./HeroButtons";
import { VerticalWordRotate } from "./textAnimations/VerticalWordRotate";

const heroText = ["SMARTER CONVERSIONS", "STRONGER TEAMS", "FASTER RESULTS"];

const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 text-white py-3 px-20">
        <div className="flex flex-col gap-2 justify-center col-span-2 p-3">
          {/* <HeroTextReveal /> */}
          {heroText.map((item, i) => (
            <TextAnimate
              key={i}
              animation="blurIn"
              by="line"
              once
              className="text-6xl font-black"
            >
              {item}
            </TextAnimate>
          ))}

          <div className="w-[80%] mt-8 text-white">
            <TextAnimate
              animation="blurInUp"
              by="line"
              delay={0.3}
              once
              className="font-bold"
            >
              Bdollar$mart is an all-in-on system for high-impact client
              checkups, team training, and agent management, built to scale with
              you.
            </TextAnimate>
          </div>
          <div className="flex flex-col gap-6 mt-7">
            <HeroButtons />
            <VerticalWordRotate />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-3">
          <Image
            className="dark:invert -ml-45"
            src="/clientDashboard.png"
            alt="Next.js logo"
            width={190}
            height={29}
            priority
          />
          <Image
            className="dark:invert -mt-60 -mr-10"
            src="/agentDashboard.png"
            alt="Next.js logo"
            width={280}
            height={58}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
