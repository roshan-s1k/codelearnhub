import { Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className=" flex justify-between pr-10 pl-10 mt-10 pb-16 pt-10 flex-wrap ">
            <div className="flex basis-full md:flex-col md:justify-start md:basis-auto justify-between gap-8">
                <Link href={"/"} className="flex items-center gap-3">
                <span className="font-bold font-heading text-xl">
                    codelearnhub
                </span>
                </Link>
                <Link href={"https://www.github.com/roshan-s1k/codelearnhub"}>
                    <Github /> <span className="font-bold">Source code</span>
                </Link>
            </div>
            <div className="mt-10 flex flex-col basis-1/2 md:mt-0 md:basis-auto gap-5   ">
                <h3 className="font-semibold">  Developers</h3>
                <Link  className="text-sm text-muted-foreground hover:text-foreground" href={"https://www.linkedin.com/in/abinaya-chitra-39242a300/"}>Abinaya Chitra</Link>
                <Link className="text-sm text-muted-foreground hover:text-foreground"  href={"https://www.linkedin.com/in/jeyashalin"}>Jeyashalin Ricchi</Link>
            </div>
    </footer>
  )
}
