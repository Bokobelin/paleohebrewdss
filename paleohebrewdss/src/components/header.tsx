import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="z-10 relative flex flex-col w-full items-center justify-center gap-4 px-4 py-6 text-2xl bg-cyan-950 sm:text-3xl sm:mt-20 lg:my-6">
      <h1 className="z-10 text-center text-gray-100">
        Paleo-Hebrew Dead Sea Scrolls
      </h1>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        <Link href="/" passHref>
          <Button className="text-gray-300">
            Home
          </Button>
        </Link>
        <Link href="/database" passHref>
          <Button className="text-gray-300">
            Database
          </Button>
        </Link>
        <Link href="/credits" passHref>
          <Button className="text-gray-300">
            Credits
          </Button>
        </Link>
      </div>
    </div>
  );
}
