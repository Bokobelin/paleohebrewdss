import Header from "@/components/header";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-black text-gray-100">
      {/* Header */}
      <Header />

      {/* Main Section */}
      <main
        style={{
          backgroundImage: `url('/qumran.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative flex flex-col gap-8 items-center justify-center text-center w-full h-full text-white"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 p-8">
          <h1 className="text-2xl">Welcome</h1>
          <p className="w-3/4 mx-auto">
            This website aims at sharing the palaeographic work achieved on the Paleo-Hebrew texts from Qumran. This work was carried out during the EAJS-Lab workshop entitled "Research Approaches in Hebrew Bible Manuscript Studies », which took place in Aix-en-Provence in June of 2016.
            <br />
            <br />
            This website provides an access to the article, the palaeographic tables produced using LaTeX, a digital access to the images of the hebrew letters and paleo-hebrew fonts.
            <br />
            <br />
            This project, coordinated by Antony Perrot and Matthieu Richelle, could not have been accomplished without the support of the "Orient et Méditerannée" Laboratory (CNRS-UMR8167) and The Leon Levy Dead Sea Scrolls Digital Library of the Israel Antiquities Authority.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex gap-6 flex-wrap items-center justify-center p-4">
        <p className="flex items-center gap-2" rel="noopener noreferrer">
          Copyright (C) 2024 Matthieu Richelle
        </p>
      </footer>
    </div>
  );
}
