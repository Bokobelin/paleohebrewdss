import Header from "@/components/header";
import ImageGallery from "@/components/imageGallery";
import Link from "next/link";

export default function LettersByScroll() {
  return (
    <div className="bg-cyan-950 min-h-screen">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cyan-950 text-gray-100">
        <Header />
        <div className="flex flex-col w-full gap-4">
            <h1 className="text-3xl text-center">1Q3 (1QpaleoLev-Num)</h1>
            <h3 className="text-xl">First Hand</h3>
            <p>
            Images of the IAA (especially frag. 3 and 5):
            </p>
            <ul className="list-disc pl-6">
                <li><Link href="http://gallica.bnf.fr/ark:/12148/btv1b8551261c.r=Qumran?rk=21459;2" className="underline">Full Spectrum Color Image</Link> (via Gallica)</li>
                <li><Link href="http://www.deadseascrolls.org.il/explore-the-archive/image/B-278286" className="underline">Infrared Image</Link> (via IAA)</li>
            </ul>
            <ImageGallery folder="img/1q3/fh"/>

            <h3 className="text-xl">Second Hand</h3>
            <p>
            Images of the IAA [especially frags. 16, 18 (rotated -6.38°) and 20]:
            </p>
            <ul className="list-disc pl-6">
                <li><Link href="http://www.deadseascrolls.org.il/explore-the-archive/image/B-277300" className="underline">Infrared Image</Link> (via IAA)</li>
            </ul>
            <ImageGallery folder="img/1q3/sh"/>

            <h3 className="text-xl">Third Hand</h3>
            <p>
            Images of the IAA (frag. 22):
            </p>
            <ul className="list-disc pl-6">
                <li><Link href="http://www.deadseascrolls.org.il/explore-the-archive/image/B-277300" className="underline">Infrared Image</Link> (via IAA)</li>
            </ul>
            <ImageGallery folder="img/1q3/th"/>

            <h3 className="text-xl">Fourth Hand</h3>
            <p>
            Images of the IAA (frag. 22):
            </p>
            <ul className="list-disc pl-6">
                <li><Link href="http://www.deadseascrolls.org.il/explore-the-archive/image/B-277300" className="underline">Infrared Image</Link> (via IAA)</li>
            </ul>
            <ImageGallery folder="img/1q3/foh"/>
        </div>
        </div>
    </div>
  );
}
