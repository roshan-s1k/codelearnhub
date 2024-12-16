import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-10 relative overflow-hidden">

      <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-center text-balance">
        Every great coder was once a beginner. Take the first step!
      </h2>
      <Button className="cursor-pointer border-border bg-black hover:bg-slate-500" size={"lg"} variant={"default"} asChild={true}>
        <Link href={"/dashboard"}>Get Started</Link>
      </Button>
    </section>
  );
}
