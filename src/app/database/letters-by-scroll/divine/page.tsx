import Header from "@/components/header";
import ImageGallery from "@/components/imageGallery";

export default function LettersByScroll() {
  return (
    <div className="bg-cyan-950 min-h-screen">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cyan-950 text-gray-100">
        <Header />
        <div className="flex flex-col w-full gap-4">
            <h1 className="text-3xl text-center">Divine names</h1>
            <h3 className="text-xl">1Q14 (1QpMic)</h3>
            <ImageGallery folder="img/divine/1q14"/>
            <h3 className="text-xl">1Q15 (1QpZeph)</h3>
            <ImageGallery folder="img/divine/1q15"/>
            <h3 className="text-xl">1Q35 (1QHb)</h3>
            <ImageGallery folder="img/divine/1q35"/>
            <h3 className="text-xl">1QpHab</h3>
            <ImageGallery folder="img/divine/1qpHab"/>
            <h3 className="text-xl">4Q57 (4QIsac)</h3>
            <ImageGallery folder="img/divine/4q57"/>
            <h3 className="text-xl">4Q161 (4QpIsaa)</h3>
            <ImageGallery folder="img/divine/4q161"/>
            <h3 className="text-xl">4Q171 (4QpPsa)</h3>
            <ImageGallery folder="img/divine/4q171"/>
            <h3 className="text-xl">4Q173 (4QpPsb)</h3>
            <ImageGallery folder="img/divine/4q173"/>
            <h3 className="text-xl">4Q180 (4QAgesCreat A)</h3>
            <ImageGallery folder="img/divine/4q180"/>
            <h3 className="text-xl">4Q183 (4QMidrEschate?)</h3>
            <ImageGallery folder="img/divine/4q183"/>
            <h3 className="text-xl">4Q186 (4QHor)</h3>
            <ImageGallery folder="img/divine/4q186"/>
            <h3 className="text-xl">4Q243 (4QpsDana ar)</h3>
            <ImageGallery folder="img/divine/4q243"/>
            <h3 className="text-xl">4Q267 (4QDb)</h3>
            <ImageGallery folder="img/divine/4q267"/>
            <h3 className="text-xl">4Q268 (4QDc)</h3>
            <ImageGallery folder="img/divine/4q268"/>
            <h3 className="text-xl">4Q406(4QShirShabbg)</h3>
            <ImageGallery folder="img/divine/4q406"/>
            <h3 className="text-xl">6Q15 (6QD)</h3>
            <ImageGallery folder="img/divine/6q15"/>
            <h3 className="text-xl">11Q2 (11QLevb)</h3>
            <ImageGallery folder="img/divine/11q2"/>
            <h3 className="text-xl">11Q5 (11QPsa)</h3>
            <ImageGallery folder="img/divine/11q5"/>
            <h3 className="text-xl">8Hev1 (8HevXII gr)</h3>
            <ImageGallery folder="img/divine/8hev1"/>
        </div>
    </div>
    </div>
  );
}
