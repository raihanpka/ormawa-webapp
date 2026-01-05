import { cn } from "@/lib/utils";
import Logo from "./Logo";

const imgVector = "http://localhost:3845/assets/88cb0aaca8f7701769fbfab8d5e8d050d9deeada.svg";

type OrmawaFooterProps = {
  className?: string;
  chapter?: number;
  language?: "id" | "en";
};

const footerData = {
  id: {
    title: ["Jejak Keberlanjutan", "Organisasi", "Kemahasiswaan"],
    subtitle: "LAPORAN ORMAWA IPB 2025",
    sections: [
      "Lanskap Dinamis",
      "Kemandirian & Aksi",
      "Jejaring Kolaborasi",
      "Refleksi Kinerja",
      "Program Unggulan",
    ],
  },
  en: {
    title: ["Sustainability Footprint", "Student", "Organizations"],
    subtitle: "ORMAWA IPB REPORT 2025",
    sections: [
      "Dynamic Landscape",
      "Independence & Action",
      "Collaboration Network",
      "Performance Reflection",
      "Flagship Programs",
    ],
  },
};

export default function OrmawaFooter({
  className,
  chapter = 1,
  language = "id",
}: OrmawaFooterProps) {
  const content = footerData[language];

  return (
    <footer className={cn("w-full", className)}>
      {/* Main Footer Section */}
      <div
        className="relative overflow-hidden rounded-tl-[32px] rounded-tr-[32px] shadow-[0px_-25px_33.4px_0px_rgba(194,65,12,0.05)] px-[120px] py-[90px]"
        style={{
          background: `radial-gradient(circle at -104.86% 29.835%, rgba(55,95,223,1) 0%, rgba(37,71,176,1) 25%, rgba(19,46,129,1) 50%, rgba(9,29,91,1) 100%)`,
        }}
      >
        {/* Background Decorative Elements */}
        <div className="absolute h-[670px] left-[-912px] mix-blend-overlay top-[-141px] w-[1552px]">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
        <div className="absolute h-[670px] left-[calc(40%+88px)] mix-blend-overlay top-[-51px] w-[1552px]">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>

        <div className="relative z-10 flex items-center justify-between w-full">
          {/* Left Section - Title */}
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[12px]">
              <div className="flex flex-col items-start leading-[1.15] pb-[14px]">
                <p
                  className="bg-clip-text bg-gradient-to-b from-white from-[59.016%] to-[#92C1FF] font-satoshi text-[35.687px] text-center tracking-[-1.0706px]"
                  style={{ WebkitTextFillColor: "transparent" }}
                >
                  {content.title[0]}
                </p>
                <p
                  className="bg-clip-text bg-gradient-to-b from-white from-[59.016%] to-[#92C1FF] font-fraunces font-bold text-[88.825px] tracking-[-2.6647px] w-[387.074px]"
                  style={{
                    WebkitTextFillColor: "transparent",
                    fontVariationSettings: "'SOFT' 0, 'WONK' 1",
                  }}
                >
                  {content.title[1]}
                </p>
                <p
                  className="bg-clip-text bg-gradient-to-b from-white from-[59.016%] to-[#92C1FF] font-fraunces font-bold text-[58.807px] tracking-[-1.7642px]"
                  style={{
                    WebkitTextFillColor: "transparent",
                    fontVariationSettings: "'SOFT' 0, 'WONK' 1",
                  }}
                >
                  {content.title[2]}
                </p>
              </div>
              <p className="font-barmeno font-medium text-[24px] leading-[1.35] tracking-[3.84px] text-white text-shadow-[0px_7.064px_7.064px_rgba(0,0,0,0.25)]">
                {content.subtitle}
              </p>
            </div>
          </div>

          {/* Right Section - Info Columns */}
          <div className="flex gap-[24px] items-start justify-center">
            {/* Direktorat Info */}
            <div className="flex flex-col gap-[12px] text-white">
              <div className="font-barmeno font-medium text-[24px] leading-normal">
                <p className="mb-0">Direktorat Kemahasiswaan</p>
                <p>IPB University</p>
              </div>
              <div className="font-satoshi text-[18px] leading-normal w-[245px]">
                <p className="mb-0">
                  Gedung Andi Hakim Nasoetion Lt. 1 Kampus IPB Dramaga, Bogor
                  16680 Jawa Barat, Indonesia
                </p>
                <p className="mb-0">&nbsp;</p>
                <p>Email: ditmawa@apps.ipb.ac.id</p>
              </div>
            </div>

            {/* Report Overview */}
            <div className="flex flex-col gap-[18px] justify-center w-[162px]">
              <div className="font-barmeno font-medium text-[24px] leading-none text-white tracking-[-0.48px]">
                <p className="mb-0">
                  {language === "id" ? "Ikhtisar" : "Report"}
                </p>
                <p>{language === "id" ? "Laporan" : "Overview"}</p>
              </div>
              <div className="flex flex-col font-satoshi gap-[10px] text-[18px] leading-none text-white w-full">
                {content.sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#chapter-${index + 1}`}
                    className="hover:opacity-80 transition-opacity"
                  >
                    {section}
                  </a>
                ))}
              </div>
            </div>

            {/* Related Links */}
            <div className="flex flex-col gap-[19px] justify-center">
              <p className="font-barmeno font-medium text-[24px] leading-none text-white tracking-[-0.48px] w-[104px]">
                {language === "id" ? "Tautan Terkait" : "Related Links"}
              </p>
              <div className="flex flex-col font-satoshi gap-[12px] text-[18px] text-white">
                <a
                  href="http://ipb.ac.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer leading-none hover:opacity-80 transition-opacity"
                >
                  IPB University Official
                </a>
                <a
                  href="https://kemahasiswaan.ipb.ac.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer leading-none hover:opacity-80 transition-opacity"
                >
                  Ditmawa IPB University
                </a>
                <p className="leading-none">Merdeka Belajar (MBKM)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#131E40] flex gap-[32px] items-center justify-center overflow-hidden px-[473px] py-[17px] w-full">
        <div className="flex gap-[12px] items-start justify-center">
          <div className="h-[3.871px] w-[4.238px] relative">
            <Logo className="w-full h-full" variant="white" />
          </div>
          <div className="flex items-center">
            <div className="flex flex-col font-barmeno font-medium justify-center leading-none text-[24px] text-white">
              <p className="leading-[normal]">
                {language === "id"
                  ? "Berkolaborasi dengan Lemma Bercerita"
                  : "In collaboration with Lemma Bercerita"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-barmeno font-medium justify-center leading-none text-[24px] text-white">
          <p className="leading-[normal]">
            © Direktorat Kemahasiswaan IPB University 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
