import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const img653899114923 = "https://www.figma.com/api/mcp/asset/d3801852-60bf-4894-bb37-a7a51be83e5a";
const imgTakBerjudul57420251220192217 = "https://www.figma.com/api/mcp/asset/4addf353-9a9f-4c4c-91eb-2f844ca21027";
const imgTakBerjudul57420251220192057 = "https://www.figma.com/api/mcp/asset/96c5e1e1-30d0-4fd1-a5d3-ff291071de47";
const imgGroup2608332 = "https://www.figma.com/api/mcp/asset/c278350b-ab90-4965-b22c-3da1ba4c1f6e";
const imgGroup2608333 = "https://www.figma.com/api/mcp/asset/db3f5c75-f350-407f-ad1a-9de33366cbaf";
const imgVector547 = "https://www.figma.com/api/mcp/asset/20226094-ff02-43cb-a758-62562ea900e5";
const imgVector462 = "https://www.figma.com/api/mcp/asset/5d0758bb-3203-4f8e-a8c6-2811a6169c40";

export function KeyTakeawaysSlide1({ className }: { className?: string }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      const maxCardWidth = 1150; // Account for padding
      if (viewportWidth < maxCardWidth) {
        setScale(Math.min(1, viewportWidth / maxCardWidth));
      } else {
        setScale(1);
      }
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className={cn("flex flex-col items-center gap-[33px] w-full", className)} data-node-id="965:3036">
      {/* Main Heading */}
      <p 
        className={cn(
          "font-['Barmeno,sans-serif'] text-[24px] md:text-[48px] leading-[1.2] md:leading-[0.93] text-[#1f1f1f] text-center tracking-[-1.44px] whitespace-normal md:whitespace-pre-wrap max-w-[987px]",
          "font-medium px-4"
        )}
        data-node-id="965:3037"
      >
        <span style={{ fontFamily: 'Barmeno, sans-serif', fontWeight: 700 }}>Ormawa wilayah</span>
        <span> menjadi </span>
        <span style={{ fontFamily: 'Barmeno, sans-serif', fontWeight: 700 }}>Sweet Spot</span>
        <span> bagi mahasiswa IPB pada tahun 2025</span>
      </p>

      {/* Card - WHITE BACKGROUND VISIBLE */}
      <div 
        className="relative bg-white rounded-[16.759px] w-full max-w-[1030px] shadow-[0px_0px_22.016px_0px_rgba(0,0,0,0.15)] overflow-clip"
        data-node-id="965:3038"
        style={{ aspectRatio: '1030/636' }}
      >
        {/* Fixed 1030x636 scaled container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="relative w-[1030px] h-[636px]"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'center center'
            }}
          >
            {/* Content starts here - position 0,0 is top-left of 1030x636 card */}
            
            {/* Background pattern overlay - stays within bounds */}
            <div className="absolute left-[75.18px] top-[-109px] w-[1464px] h-[1946px] mix-blend-overlay opacity-[0.23] pointer-events-none overflow-hidden">
              <img className="absolute h-full left-[-16.48%] max-w-none top-0 w-[132.95%]" alt="" src={img653899114923} />
            </div>
            
            {/* Blue card background */}
            <div className="absolute bg-[#123880] h-[346px] left-[58.17px] rounded-[14px] top-[42px] w-[912px]" data-node-id="965:3041" />
            
            {/* Masked photo group */}
            <div className="absolute left-[171.17px] top-[42.43px]" data-node-id="965:3042">
              {/* Photo composition with mask */}
              <div className="absolute flex left-0 top-0 items-center justify-center w-[458.65px] h-[345.43px]">
                <div className="w-full h-full rounded-[14px] overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="" 
                    src={imgTakBerjudul57420251220192217}
                  />
                </div>
              </div>
              
              {/* Second photo - overlapping */}
              <div className="absolute right-0 bottom-0 w-[300px] h-[200px]">
                <img 
                  className="w-full h-full object-cover rounded-[8px]" 
                  alt="" 
                  src={imgTakBerjudul57420251220192057}
                />
              </div>
            </div>

            {/* Text Content - Left side */}
            <p 
              className="absolute font-bold leading-[1.3] left-[124.17px] text-[56.261px] text-white top-[79.56px] tracking-[-1.1252px]" 
              style={{ fontFamily: 'Fraunces, sans-serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              data-node-id="965:3056"
            >
              Lanskap
            </p>
            <p 
              className="absolute font-bold leading-[1.3] left-[124.17px] text-[56.261px] text-white top-[136.89px] tracking-[-1.1252px]" 
              style={{ fontFamily: 'Fraunces, sans-serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              data-node-id="965:3057"
            >
              Ormawa
            </p>
            <p 
              className="absolute font-bold leading-[1.3] left-[124.17px] text-[56.261px] text-white top-[199.89px] tracking-[-1.1252px]" 
              style={{ fontFamily: 'Fraunces, sans-serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              data-node-id="965:3058"
            >
              2025
            </p>
            <p 
              className="absolute font-['Satoshi_Variable',sans-serif] leading-[1.3] left-[124.17px] text-[22.092px] text-white top-[284.46px] tracking-[-0.2209px] w-[204.906px] whitespace-pre-wrap"
              data-node-id="965:3059"
            >
              Ringkasan Lanskap Ormawa
            </p>

            {/* Bottom stats section */}
            <div className="absolute flex items-end justify-between left-[82px] bottom-[54px] w-[866px]" data-node-id="965:3060">
              {/* Pergeseran */}
              <div className="flex flex-col items-start">
                <p 
                  className="font-bold leading-[1.3] text-[#2350a6] text-[38.821px] tracking-[-1.1646px] mb-2" 
                  style={{ fontFamily: 'Fraunces, sans-serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                  data-node-id="965:3063"
                >
                  Pergeseran
                </p>
                <p className="font-['Satoshi_Variable',sans-serif] leading-[1.05] text-[#2350a6] text-[23.456px] tracking-[-0.2346px] w-[256.595px]">
                  <span className="font-bold">Komunitas</span> tumbuh pesat, <span className="font-bold">OMDA</span> mengalami penurunan tren.
                </p>
              </div>

              {/* Divider */}
              <div className="self-stretch w-[1px] bg-[#2350a6] mx-4" />

              {/* Massa */}
              <div className="flex flex-col items-start">
                <p 
                  className="font-bold leading-[1.3] text-[#2350a6] text-[38.821px] tracking-[-1.1646px] mb-2" 
                  style={{ fontFamily: 'Fraunces, sans-serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                  data-node-id="965:3067"
                >
                  Massa
                </p>
                <p className="font-['Satoshi_Variable',sans-serif] leading-[1.05] text-[#2350a6] text-[23.456px] tracking-[-0.2346px] w-[213.915px] whitespace-pre-wrap">
                  <span className="font-bold">Ormawa Wilayah</span> memegang rasio partisipasi terpadat.
                </p>
              </div>

              {/* Divider */}
              <div className="self-stretch w-[1px] bg-[#2350a6] mx-4" />

              {/* Puncak */}
              <div className="flex flex-col items-start">
                <p 
                  className="font-bold leading-[1.3] text-[#2350a6] text-[38.821px] tracking-[-1.1646px] mb-2" 
                  style={{ fontFamily: 'Fraunces, sans-serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                  data-node-id="965:3071"
                >
                  Puncak:
                </p>
                <p className="font-['Satoshi_Variable',sans-serif] leading-[1.05] text-[#2350a6] text-[23.456px] tracking-[-0.2346px] w-[213.915px] whitespace-pre-wrap">
                  <span className="font-bold">Sekolah Vokasi</span> memimpin total indeks keterlibatan.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
