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
    <div className="flex items-center justify-between h-[5vh] bg-black text-white p-5 shadow-sm shadow-zinc-500">
      <Image
        className="dark:invert"
        src="/logoWhite.png"
        alt="Next.js logo"
        width={150}
        height={40}
        priority
      />
      <div className="flex gap-6 text-sm font-bold p-2">
        {links.map((item, i) => (
          <Link key={i} href={item.link}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
