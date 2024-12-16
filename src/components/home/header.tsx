import Link from "next/link";


export function Header() {
  return (
    <header className="container flex items-center justify-between gap-10 py-4">
      <Link href={"/"} className="flex items-center gap-3">
        <span className=" rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
          codelearnhub
        </span>
      </Link>

      <div className="flex items-center gap-10">
        <nav className="md:flex items-center gap-10 justify-end">
          <Link href={"/about"}>
              About
          </Link>
        </nav>
      </div>
    </header>
  );
}
