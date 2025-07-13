import Image from "next/image";
import React from "react";
import TextFlip from "./textAnimations/TextFlip";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Subscribe from "./forms/Subscribe";

const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 text-white">
        <div className="flex flex-col gap-2 justify-center col-span-2 p-3">
          {/* <HeroTextReveal /> */}
          <p className="text-5xl font-extrabold">HERO TITLE</p>
          <TextFlip />
          <div className="w-[80%] mt-5 text-zinc-500">
            <TypingAnimation
              children="Hero subtext. This is the subtext that makes the subtext go. Hero
              subtext. This is the subtext that makes the subtext go. Hero
              subtext. This is the subtext that makes the subtext go."
            />
          </div>

          <Subscribe />
        </div>
        <div className="flex flex-col justify-center items-center p-3">
          RIGHT COL
          <Image
            className="dark:invert -ml-45"
            src="/clientDashboard.png"
            alt="Next.js logo"
            width={160}
            height={29}
            priority
          />
          <Image
            className="dark:invert -mt-60 -mr-10"
            src="/agentDashboard.png"
            alt="Next.js logo"
            width={240}
            height={58}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
