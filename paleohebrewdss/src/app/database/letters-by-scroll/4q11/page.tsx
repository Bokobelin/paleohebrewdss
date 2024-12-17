import Header from "@/components/header";
import ImageGallery from "@/components/imageGallery";
import Link from "next/link";

export default function LettersByScroll() {
  return (
    <div className="bg-cyan-950 min-h-screen">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cyan-950 text-gray-100">
        <Header />
        <div className="flex flex-col w-full gap-4">
            <h1 className="text-3xl text-center">4Q11 (4QpaleoGen-Exodl)</h1>
            <p>
            Go to the images on the <Link href="http://go%20to%20the%20images%20on%20the%20leon%20levy%20dead%20sea%20scrolls%20digital%20library%20at%20the%20israel%20antiquities%20authority'/" className="underline">Leon Levy Dead Sea Scrolls Digital Library at the Israel Antiquities Authority</Link>.
            </p>
            <ImageGallery folder="img/4q11"/>
        </div>
        </div>
    </div>
  );
}
