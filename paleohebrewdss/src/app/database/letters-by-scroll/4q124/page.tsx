    import Header from "@/components/header";
    import ImageGallery from "@/components/imageGallery";
    import Link from "next/link";

    export default function LettersByScroll() {
    return (
        <div className="bg-cyan-950 min-h-screen">
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cyan-950 text-gray-100">
            <Header />
            <div className="flex flex-col w-full gap-4">
                <h1 className="text-3xl text-center">4Q124 (4QpaleoUnid1)</h1>
                <Link href="http://www.deadseascrolls.org.il/explore-the-archive/manuscript/4Q124-1" className="underline">Images of the IAA</Link>
                <ImageGallery folder="img/4q124"/>
                </div>
            </div>
        </div>
    );
    }
