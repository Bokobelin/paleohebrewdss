import Image from "next/image";
import Header from "@/components/header";

export default function Credits() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-gray-100">
            <Header />
            <h1 className="text-3xl">Credits</h1>
            <h3 className="text-2xl">Principal Investigators</h3>

            {/* Content Section */}
            <div className="grid gap-8">
                {/* First Row */}
                <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                    <Image
                        src="/iaa.png"
                        width={300}
                        height={200}
                        alt=""
                        className="self-center rounded-lg"
                        style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
                    />
                    <p>
                        The <a href="http://www.deadseascrolls.org.il/" className="underline">Leon Levy Dead Sea Scrolls Digital Library of the Israel</a> Antiquities Authority kindly provided images of the scrolls. Photographer: Shai Halevi.
                    </p>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                    <Image
                        src="/o&m.png"
                        width={300}
                        height={200}
                        alt=""
                        className="self-center rounded-lg"
                        style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
                    />
                    <p>
                        The Laboratory "<a href="http://www.orient-mediterranee.com/spip.php?rubrique101" className="underline">Orient et Mediterranean</a>" (CNRS-UMR 8167) gave us financial support.
                    </p>
                </div>
            </div>

            <h3 className="text-2xl">Affiliations</h3>
            <h4 className="text-lg">We would like to thank the following institutions for their support: Ecole Pratique des Hautes Etudes, PSL Université, UMR 7192 "Proche-Orient - Caucase" and the Deutsche Forschungsgemeinschaft (DIP grant: BE 5916/1-1. KR 1473/8-1)</h4>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 items-center justify-center">
                <a href="https://www.ephe.fr/">
                    <Image
                        src="/ephe.png"
                        width={150}
                        height={150}
                        alt="EPHE"
                        style={{ objectFit: "cover", width: "150px", height: "auto" }}
                        className="rounded-lg"
                    />
                </a>
                <a href="https://www.psl.eu/">
                    <Image
                        src="/psl.png"
                        width={150}
                        height={150}
                        alt="PSL"
                        style={{ objectFit: "cover", width: "150px", height: "auto" }}
                        className="rounded-lg"
                    />
                </a>
                <a href="https://digitorient.com/">
                    <Image
                        src="/digitorient.png"
                        width={150}
                        height={150}
                        alt="PSL"
                        style={{ objectFit: "cover", width: "150px", height: "auto" }}
                        className="rounded-lg"
                    />
                </a>
                <a href="http://www.dfg.de/en/index.jsp">
                    <Image
                        src="/dfg.png"
                        width={150}
                        height={150}
                        alt="PSL"
                        style={{ objectFit: "cover", width: "150px", height: "auto" }}
                        className="rounded-lg"
                    />
                </a>
                <a href="https://www.qumranica.org/">
                    <Image
                        src="/qumranica.png"
                        width={150}
                        height={150}
                        alt="PSL"
                        style={{ objectFit: "cover", width: "150px", height: "auto" }}
                        className="rounded-lg"
                    />
                </a>
            </div>


            {/* Footer */}
            <div className="flex flex-col gap-4 mt-8 justify-center">
                <h3 className="text-2xl items-center justify-center text-center">Authors of the original website</h3>
                <br/>
                <div className="flex flex-row gap-4">
                    <Image
                        src="/matthieu.png"
                        width={150}
                        height={150}
                        alt="PSL"
                        style={{ objectFit: "cover", width: "150px", height: "auto" }}
                        className="rounded-lg"
                        />
                    <div>
                    <p className="font-bold text-lg">Matthieu Richelle</p>
                    <br/>
                    Professor of Old Testament at the <a href="https://uclouvain.be/fr/facultes/theologie" className="underline">Université Catholique de Louvain</a>.
                    <br/>
                    Member of the <a href="https://uclouvain.be/en/research-institutes/rscs" className="underline">RSCS Institute</a>.
                    <br/>
                    <br/>
                    <br/>
                    <a href="https://uclouvain.academia.edu/MatthieuRichelle" className="underline">Academia page</a>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <Image
                        src="/antony.png"
                        width={150}
                        height={150}
                        alt="PSL"
                        style={{ objectFit: "cover", width: "150px", height: "auto" }}
                        className="rounded-lg"
                        />
                    <div>
                    <p className="font-bold text-lg">Antony Perrot</p>
                    <br/>
                    Professor of Hebrew and Old Testament at the <a href="https://flte.fr/" className="underline">FLTE</a>
                    <br/>
                    Member of the <a href="https://www.orient-mediterranee.com/spip.php?rubrique102" className="underline">UMR 8167</a>.
                    <br/>
                    <br/>
                    <br/>
                    <a href="https://ephe.academia.edu/AntonyPerrot" className="underline">Academia page</a>
                    </div>
                </div>
                <p>
                    Thanks to <a href="https://github.com/bokobelin/" className="underline">Bokobelin</a> for rewriting this website.
                </p>
            </div>
        </div>
    );
}
