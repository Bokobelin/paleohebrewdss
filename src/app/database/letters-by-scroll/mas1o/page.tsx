import Header from "@/components/header";
import ImageGallery from "@/components/imageGallery";
import Link from "next/link";

export default function LettersByScroll() {
  return (
    <div className="bg-cyan-950 min-h-screen">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cyan-950 text-gray-100">
        <Header />
        <div className="flex flex-col w-full gap-4">
            <h1 className="text-3xl text-center">Mas1o (Mas pap paleoText of Samaritan Origin)</h1>
            <h3 className="text-xl">Recto</h3>
            <p>Images of the IAA (frag. 1):</p>
            <ul className="list-disc pl-6">
                <li><Link href="http://www.deadseascrolls.org.il/explore-the-archive/image/B-487881" className="underline">Full Spectrum Color Image</Link></li>
                <li><Link href="http://www.deadseascrolls.org.il/explore-the-archive/image/B-487882" className="underline">Infrared Image</Link></li>
            </ul>
            <ImageGallery folder="img/mas1o/recto"/>

            <h3 className="text-xl">Verso</h3>
            <ImageGallery folder="img/mas1o/verso"/>
            </div>
        </div>
    </div>
  );
}
