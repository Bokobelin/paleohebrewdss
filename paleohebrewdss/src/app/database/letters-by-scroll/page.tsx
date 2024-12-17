import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LettersByScroll() {
  return (
    <div className="bg-cyan-900 min-h-screen">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cyan-950 text-gray-100">
        <Header />
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl text-center">Letters by Scroll</h1>
            <div className="flex flex-col mt-6 gap-4 items-center text-center gray-500">
            <Link href="/database/letters-by-scroll/1q3"><Button variant="link" className="hover:text-gray-500">1Q3 (1QpaleoLev-Num)</Button></Link>
            <Link href="/database/letters-by-scroll/2q5"><Button variant="link" className="hover:text-gray-500">2Q5 (2QpaleoLev)</Button></Link>
            <Link href="/database/letters-by-scroll/4q11"><Button variant="link" className="hover:text-gray-500">4Q11 (4QpaleoGen-Exodl)</Button></Link>
            <Link href="/database/letters-by-scroll/4q12"><Button variant="link" className="hover:text-gray-500">4Q12 (4QpaleoGenm)</Button></Link>
            <Link href="/database/letters-by-scroll/4q22"><Button variant="link" className="hover:text-gray-500">4Q22 (4QpaleoExodm)</Button></Link>
            <Link href="/database/letters-by-scroll/4q45"><Button variant="link" className="hover:text-gray-500">4Q45 (4QpaleoDeutr)</Button></Link>
            <Link href="/database/letters-by-scroll/4q46"><Button variant="link" className="hover:text-gray-500">4Q46 (4QpaleoDeuts)</Button></Link>
            <Link href="/database/letters-by-scroll/4q101"><Button variant="link" className="hover:text-gray-500">4Q101 (4QpaleoJobc)</Button></Link>
            <Link href="/database/letters-by-scroll/4q123"><Button variant="link" className="hover:text-gray-500">4Q123 (4QpaleoParaJosh)</Button></Link>
            <Link href="/database/letters-by-scroll/4q124"><Button variant="link" className="hover:text-gray-500">4Q124 (4QpaleoUnid1)</Button></Link>
            <Link href="/database/letters-by-scroll/4q125"><Button variant="link" className="hover:text-gray-500">4Q125 (4QpaleoUnid2)</Button></Link>
            <Link href="/database/letters-by-scroll/6q1"><Button variant="link" className="hover:text-gray-500">6Q1 (6QpaleoGen)</Button></Link>
            <Link href="/database/letters-by-scroll/6q2"><Button variant="link" className="hover:text-gray-500">6Q2 (6QpaleoLev)</Button></Link>
            <Link href="/database/letters-by-scroll/11q1"><Button variant="link" className="hover:text-gray-500">11Q1 (11QpaleoLeva)</Button></Link>
            <Link href="/database/letters-by-scroll/11q22"><Button variant="link" className="hover:text-gray-500">11Q22 (11QpalUnid)</Button></Link>
            <Link href="/database/letters-by-scroll/Mas1o"><Button variant="link" className="hover:text-gray-500">Mas1o (Mas pap paleoText of Samaritan Origin)</Button></Link>
            <Link href="/database/letters-by-scroll/divine"><Button variant="link" className="hover:text-gray-500">Divine Names</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
