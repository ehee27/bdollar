import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";

const HeroTextReveal = () => {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#177312"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Bdollar$mart<span className="text-[#177312]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#177312"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          Eficiency for Financial Professionals{" "}
          <span className="text-[#177312]">Design Engineers</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#177312"} duration={0.5}>
        <div className="mt-6">
          <p>
            -&gt; 20+ free and open-source animated components built with
            <span className="font-semibold text-[#177312]">React</span>,
            <span className="font-semibold text-[#177312]">Typescript</span>,
            <span className="font-semibold text-[#177312]">Tailwind CSS</span>,
            and
            <span className="font-semibold text-[#177312]">Motion</span>
            . <br />
            -&gt; 100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#177312"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#177312]">Explore</Button>
      </BoxReveal>
    </div>
  );
};

export default HeroTextReveal;
