import Content from "./components/Content";
import Hero from "./components/Hero";

export default function Home() {
  return (
    // <div className="flex flex-col items-center justify-items-center min-h-screen border-2 border-red-400">
    // Lower bubble
    // <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#ffff_40%,#177312_100%)]">
    <div className="absolute inset-0 -z-10 h-full items-center px-5 py-24 [background:radial-gradient(125%_100%_at_30%_10%,#0160cc_30%,#076d1a_80%)]">
      <main className="flex flex-col w-[100%] p-2">
        <Hero />
        <Content />
      </main>
    </div>
  );
}

// Lower Green
// <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#177312_100%)]">

// right circle radial
// <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#177312,transparent)]">
