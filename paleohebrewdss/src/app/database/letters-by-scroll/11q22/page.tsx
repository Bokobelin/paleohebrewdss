import Header from "@/components/header";
import ImageGallery from "@/components/imageGallery";
import Link from "next/link";

export default function LettersByScroll() {
  return (
    <div className="bg-cyan-950 min-h-screen">
      <div className="grid grid-rows-[20px_1fr_auto] items-center justify-items-center min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cyan-950 text-gray-100">
        <Header />
        <div className="flex flex-col w-full gap-4">
            <h1 className="text-3xl text-center">11Q22 (11QpalUnid)</h1>
            <Link href="http://www.deadseascrolls.org.il/explore-the-archive/manuscript/11Q22-1" className="underline">Images of the IAA</Link>
            <ImageGallery folder="img/11q22"/>
            </div>
        </div>
    </div>
  );
}
