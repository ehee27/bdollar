import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    title: "About",
    link: "https://bg.ibelick.com/",
  },
  {
    title: "Features",
    link: "https://bg.ibelick.com/",
  },
  {
    title: "Pricing",
    link: "https://bg.ibelick.com/",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[5vh] bg-black/90 text-white p-5 ">
      <Image
        className="dark:invert"
        src="/logoWhite.png"
        alt="Next.js logo"
        width={150}
        height={40}
        priority
      />
      <div className="flex items-center gap-6 text-sm font-bold p-2">
        {links.map((item, i) => (
          <Link key={i} href={item.link}>
            {item.title}
          </Link>
        ))}
        <Button variant={"secondary"} className="text-xs h-[30px] w-[80px]">
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
