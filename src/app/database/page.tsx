import Header from "@/components/header";
import Image from "next/image";

export default function Database() {
  return (
    <div className="bg-cyan-950 min-h-screen">
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-full px-8 sm:px-8 sm:py-20 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)] text-gray-100">
        <Header />
        <h1 className="text-3xl text-center">Database</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-14 justify-center items-center text-center w-full">
          <a href="/database/paper" className="grid gap-4 items-center justify-items-center">
            <div>
              <Image
                src="/paper.png"
                width={150}
                height={150}
                alt="Paper"
                style={{ objectFit: "cover", width: "150px" }}
                className="rounded-lg"
              />
              <h3 className="text-xl text-center">Paper</h3>
            </div>
          </a>
          <a href="/database/tables" className="grid gap-4 items-center justify-items-center">
            <div>
              <Image
                src="/tables.png"
                width={150}
                height={150}
                alt="Tables"
                style={{ objectFit: "cover", width: "150px" }}
                className="rounded-lg"
              />
              <h3 className="text-xl text-center">Tables</h3>
            </div>
          </a>
          <a href="/database/letters-by-scroll" className="grid gap-4 items-center justify-items-center">
            <div>
              <Image
                src="/lbs.png"
                width={150}
                height={150}
                alt="Letters by Scroll"
                style={{ objectFit: "cover", width: "150px" }}
                className="rounded-lg"
              />
              <h3 className="text-xl text-center">Letters by Scroll</h3>
            </div>
          </a>
          <a href="/database/fonts" className="grid gap-4 items-center justify-items-center">
            <div>
              <Image
                src="/font.png"
                width={150}
                height={150}
                alt="Fonts"
                style={{ objectFit: "cover", width: "150px" }}
                className="rounded-lg"
              />
              <h3 className="text-xl text-center">Fonts</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
