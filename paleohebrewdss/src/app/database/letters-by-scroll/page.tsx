import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LettersByScroll() {
  return (
    <div className="bg-cyan-950 min-h-screen">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cyan-950 text-gray-100">
        <Header />
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl text-center">Letters by Scroll</h1>
            <div className="flex flex-col mt-6 gap-4 items-center text-center">
            <Link href="/database/letters-by-scroll/1q3"><Button variant="link" className="hover:text-gray-500">1Q3 (1QpaleoLev-Num)</Button></Link>
            <Link href="/database/letters-by-scroll/2"><Button variant="link" className="hover:text-gray-500">2Q5 (2QpaleoLev)</Button></Link>
            <Link href="/database/letters-by-scroll/3"><Button variant="link" className="hover:text-gray-500">4Q11 (4QpaleoGen-Exodl)</Button></Link>
            <Link href="/database/letters-by-scroll/4"><Button variant="link" className="hover:text-gray-500">4Q12 (4QpaleoGenm)</Button></Link>
            <Link href="/database/letters-by-scroll/5"><Button variant="link" className="hover:text-gray-500">4Q22 (4QpaleoExodm)</Button></Link>
            <Link href="/database/letters-by-scroll/6"><Button variant="link" className="hover:text-gray-500">4Q45 (4QpaleoDeutr)</Button></Link>
            <Link href="/database/letters-by-scroll/7"><Button variant="link" className="hover:text-gray-500">4Q46 (4QpaleoDeuts)</Button></Link>
            <Link href="/database/letters-by-scroll/8"><Button variant="link" className="hover:text-gray-500">4Q101 (4QpaleoJobc)</Button></Link>
            <Link href="/database/letters-by-scroll/9"><Button variant="link" className="hover:text-gray-500">4Q123 (4QpaleoParaJosh)</Button></Link>
            <Link href="/database/letters-by-scroll/10"><Button variant="link" className="hover:text-gray-500">4Q124 (4QpaleoUnid1)</Button></Link>
            <Link href="/database/letters-by-scroll/11"><Button variant="link" className="hover:text-gray-500">4Q125 (4QpaleoUnid2)</Button></Link>
            <Link href="/database/letters-by-scroll/12"><Button variant="link" className="hover:text-gray-500">6Q1 (6QpaleoGen)</Button></Link>
            <Link href="/database/letters-by-scroll/13"><Button variant="link" className="hover:text-gray-500">6Q2 (6QpaleoLev)</Button></Link>
            <Link href="/database/letters-by-scroll/14"><Button variant="link" className="hover:text-gray-500">11Q1 (11QpaleoLeva)</Button></Link>
            <Link href="/database/letters-by-scroll/15"><Button variant="link" className="hover:text-gray-500">11Q22 (11QpalUnid)</Button></Link>
            <Link href="/database/letters-by-scroll/16"><Button variant="link" className="hover:text-gray-500">Mas1o (Mas pap paleoText of Samaritan Origin)</Button></Link>
            <Link href="/database/letters-by-scroll/17"><Button variant="link" className="hover:text-gray-500">Divine Names</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
