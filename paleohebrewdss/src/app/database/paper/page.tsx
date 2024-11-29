import Header from "@/components/header";
import Image from "next/image";

export default function Paper() {
    return (
        <div className="bg-black min-h-screen">
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-gray-100">
                <Header />
                <h1 className="text-3xl pb-8">Paper</h1>
                <p>
                    Our paper "The Dead Sea Scrolls' Paleo-Hebrew Script: Its Roots in Hebrew Scribal Tradition" is published in <i>The Hebrew Bible Manuscripts: A Millennium</i>, Elodie Attia and Antony Perrot (eds), THB Supplement 6, Leiden, Brill, 1-74.
                    <br/>
                    <br/>
                    This work was presented at the EAJS-Lab entitled <a href="http://www.hebrewbiblemanuscripts.org/" className="underline">Research Approaches in Hebrew Bible Manuscript Studies</a> who took place in Aix-en-Provence (June, 2016).
                    <br/>
                    <br/>
                    You can download the article below:
                </p>

                <br/>

                <div className="flex flex-row items-center justify-center gap-4">
                    <Image
                        src="/pdf.png"
                        width={100}
                        height={100}
                        alt=""
                        style={{ objectFit: "cover", width: "100px", height: "auto" }}
                        className="rounded-lg" />
                        <a href="/9789004498723_PerrotRichelle_offprint.pdf" className="underline" target="_blank">The Hebrew Bible Manuscripts:
                        A Millennium</a>[PDF ~2.5MB]
                </div>
            </div>
        </div>
    );
}
