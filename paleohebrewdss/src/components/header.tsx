import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="z-10 relative flex flex-col items-center justify-center gap-4 text-3xl bg-cyan-950 pb-5">
      <h1 className="z-10 text-gray-100">Paleo-Hebrew Dead Sea Scrolls</h1>
      <div className="flex gap-4">
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
