import Header from "@/components/header";
import Image from "next/image";

export default function Tables() {
    return (
        <div className="bg-black min-h-screen">
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-gray-100">
                <Header />
                <h1 className="text-3xl pb-8">Tables</h1>
                <div className="flex flex-col items-center justify-center gap-8 pb-16 pt-8">
                    <div className="flex flex-row items-center justify-center gap-4">
                        <Image
                            src="/pdf.png"
                            width={100}
                            height={100}
                            alt="PDF Icon"
                            className="rounded-lg object-cover"
                        />
                        <a
                            href="/Auto-contrast_Paleo-Hebrew-Script_DSS.pdf"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            General view of the Paleo-Hebrew Dead Sea Scrolls
                        </a>
                        [PDF ~6.3MB]
                    </div>
                    <div className="flex flex-row items-center justify-center gap-4">
                        <Image
                            src="/pdf.png"
                            width={100}
                            height={100}
                            alt="PDF Icon"
                            className="rounded-lg object-cover"
                        />
                        <a
                            href="/Courbes_divine-names-qumran_table.pdf"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Divine names table
                        </a>
                        [PDF ~1.6MB]
                    </div>
                </div>
                <h4 className="text-lg pt-8">
                    Please use the following credit line when using these tables: Table made by Antony Perrot.
                </h4>
            </div>
        </div>
    );
}
