import Header from "@/components/header";
import Image from "next/image";

export default function Database() {
  return (
    <div className="bg-cyan-950 min-h-screen">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cyan-950 text-gray-100">
        <Header />
        <h1 className="text-3xl">Database</h1>
        <div className="flex flex-row gap-14 justify-center items-center text-center">
          <a href="/database/paper" className="grid gap-8 items-center w-full justify-items-center">
            <div>
              <Image
                src="/paper.png"
                width={150}
                height={150}
                alt="Paper"
                style={{ objectFit: "cover", width: "150px" }}
                className="rounded-lg"
              />
              <h3 className="text-2xl text-center">Paper</h3>
            </div>
          </a>
          <a href="/database/tables" className="grid gap-8 items-center w-full justify-items-center">
            <div>
              <Image
                src="/tables.png"
                width={150}
                height={150}
                alt="Tables"
                style={{ objectFit: "cover", width: "150px" }}
                className="rounded-lg"
              />
              <h3 className="text-2xl text-center">Tables</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
