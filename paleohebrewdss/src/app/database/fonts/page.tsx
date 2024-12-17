import Header from "@/components/header";

export default function LettersByScroll() {
  return (
    <div className="bg-cyan-950 min-h-screen">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cyan-950 text-gray-100">
        <Header />
        <div className="flex flex-col w-full gap-4">
            <h1 className="text-3xl text-center">Palaeo-Hebrew Fonts</h1>
            <p>Please use the following credit line: &quot;Font designed by Antony Perrot&quot;</p>
        </div>
      </div>
    </div>
  );
}
