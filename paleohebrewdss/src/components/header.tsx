import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <div className="z-10 relative flex flex-col items-center justify-center gap-4 text-3xl bg-black pb-5">
        <h1 className="z-10 text-gray-100">Paleo-Hebrew Dead Sea Scrolls</h1>
        <div className="flex gap-4">
          <Link href="/">
            <Button>Home</Button>
          </>
          <a href="/database">
            <Button>Database</Button>
          </a>
          <a href="/credits">
            <Button>Credits</Button>
          </a>
        </div>
      </div>
    );
}
