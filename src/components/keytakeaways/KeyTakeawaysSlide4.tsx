import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const imgBackground = "https://www.figma.com/api/mcp/asset/f0342943-2f1c-4062-82dd-4fbc6098e4fc";
const imgVector = "https://www.figma.com/api/mcp/asset/cbbe6bfa-ab23-40f0-af2f-454bcc40ae53";
const imgVector1 = "https://www.figma.com/api/mcp/asset/4f7a45af-3269-4ce1-bf56-8f0edf999414";
const imgVector2 = "https://www.figma.com/api/mcp/asset/44c18bcd-0da2-4e72-b02e-d059d00c805e";
const imgVector3 = "https://www.figma.com/api/mcp/asset/ed8e444e-8b6b-4bdc-9cbe-18c8a577cedb";
const imgVector4 = "https://www.figma.com/api/mcp/asset/d7a228be-4737-4f61-8723-a136d01825eb";
const imgVector5 = "https://www.figma.com/api/mcp/asset/dff3df80-0b49-484b-be36-d4adff022d2a";
const imgVector6 = "https://www.figma.com/api/mcp/asset/688ad302-e678-4a94-bd1a-a2d3b9d65465";
const imgVector7 = "https://www.figma.com/api/mcp/asset/45daeed1-c601-466c-a2ab-39be4d10a13d";
const imgVector549 = "https://www.figma.com/api/mcp/asset/c8cfc78f-1285-4bcb-9585-6aa6e8683b3b";
const imgPhoto1 = "https://www.figma.com/api/mcp/asset/70b36b67-f92d-4ef9-9af8-e5c618e25a90";
const imgPhoto2 = "https://www.figma.com/api/mcp/asset/4bd8e0bc-0460-4cf8-a694-510154482ca9";
const imgPhoto3 = "https://www.figma.com/api/mcp/asset/34b566cc-c251-4963-90df-86cbec522172";
const imgVector478 = "https://www.figma.com/api/mcp/asset/75cba1c6-d2da-456f-84fe-621017a37eba";

export function KeyTakeawaysSlide4({ className }: { className?: string }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      const maxCardWidth = 1150;
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
    <div className={cn("flex flex-col items-center gap-[33px] w-full", className)} data-node-id="976:3176">
      {/* Title */}
      <p 
        className={cn(
          "font-['Barmeno,sans-serif'] text-[24px] md:text-[48px] leading-[1.2] md:leading-[0.93] text-[#1f1f1f] text-center tracking-[-1.44px] whitespace-normal md:whitespace-pre-wrap max-w-[850px] px-4",
          "font-medium"
        )}
      >
        <span className="font-bold">Ormawa 2025 </span>
        <span className="font-bold">makin kolaboratif</span>
        <span className="font-bold">, </span>
        <span className="font-bold">kuat </span>
        <span>pada </span>
        <span className="font-bold">sektor pendidikan, </span>
        <span>kualitas dan eksposur publik jadi </span>
        <span>meningkat</span>
      </p>

      {/* Card */}
      <div 
        className="relative bg-white rounded-[16.759px] w-full max-w-[1030px] aspect-[1030/636] shadow-[0px_0px_22.016px_0px_rgba(0,0,0,0.15)] overflow-clip"
        data-node-id="976:3335"
        style={{ aspectRatio: '1030/636' }}
      >
        {/* Scaled Content Container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div 
            className="relative w-[1030px] h-[636px] origin-top-left"
            style={{
              transform: `scale(${scale})`
            }}
          >
            
            {/* Background */}
            <div className="absolute left-[-282.18px] top-[-381px] w-[1594.578px] h-[2217px]" data-node-id="976:3336">
              <div className="absolute left-[75.18px] top-[271px] w-[1464px] h-[1946px] mix-blend-overlay opacity-[0.23]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img className="absolute h-full left-[-16.48%] max-w-none top-0 w-[132.95%]" alt="" src={imgBackground} />
                </div>
              </div>

              {/* Main Image Section */}
              <div className="absolute left-[358.18px] top-[425px] w-[879px] h-[282px] overflow-hidden rounded-[15.188px]">
                
                {/* Vector Icons Composition */}
                <div className="absolute inset-[-4.81%_-9.45%_-17.3%_29.59%]">
                  {/* Vector 1 */}
                  <div className="absolute flex inset-[-4.51%_-9.45%_-17.3%_64.88%] items-center justify-center">
                    <div className="flex-none h-[391.814px] rotate-[270deg] scale-y-[-100%] w-[343.503px]">
                      <img className="block max-w-none size-full" alt="" src={imgVector} />
                    </div>
                  </div>
                  {/* Vector 2 */}
                  <div className="absolute flex inset-[-4.51%_-9.45%_43.03%_76.27%] items-center justify-center">
                    <div className="flex-none h-[291.686px] rotate-[270deg] scale-y-[-100%] w-[173.382px]">
                      <img className="block max-w-none size-full" alt="" src={imgVector1} />
                    </div>
                  </div>
                  {/* Vector 3 */}
                  <div className="absolute flex inset-[-4.51%_36.78%_47.79%_29.59%] items-center justify-center">
                    <div className="flex-none h-[295.653px] rotate-[270deg] scale-y-[-100%] w-[159.955px]">
                      <img className="block max-w-none size-full" alt="" src={imgVector2} />
                    </div>
                  </div>
                  {/* Vector 4 */}
                  <div className="absolute flex inset-[32.32%_36.6%_35.08%_51.58%] items-center justify-center">
                    <div className="flex-none h-[103.92px] rotate-[270deg] scale-y-[-100%] w-[91.93px]">
                      <img className="block max-w-none size-full" alt="" src={imgVector3} />
                    </div>
                  </div>
                  {/* Vector 5 */}
                  <div className="absolute flex inset-[40.27%_36.44%_23.69%_56.87%] items-center justify-center">
                    <div className="flex-none h-[58.838px] rotate-[270deg] scale-y-[-100%] w-[101.647px]">
                      <img className="block max-w-none size-full" alt="" src={imgVector4} />
                    </div>
                  </div>
                  {/* Vector 6 */}
                  <div className="absolute flex inset-[36.95%_32.51%_24.56%_63.88%] items-center justify-center">
                    <div className="flex-none h-[31.748px] rotate-[270deg] scale-y-[-100%] w-[108.548px]">
                      <img className="block max-w-none size-full" alt="" src={imgVector5} />
                    </div>
                  </div>
                  {/* Vector 7 */}
                  <div className="absolute flex inset-[-4.81%_-9.45%_95.32%_98.71%] items-center justify-center">
                    <div className="flex-none h-[94.443px] rotate-[270deg] scale-y-[-100%] w-[26.767px]">
                      <img className="block max-w-none size-full" alt="" src={imgVector6} />
                    </div>
                  </div>
                  {/* Vector 8 */}
                  <div className="absolute flex inset-[-4.51%_51.88%_101.14%_43.56%] items-center justify-center">
                    <div className="flex-none h-[40.117px] rotate-[270deg] scale-y-[-100%] w-[9.499px]">
                      <img className="block max-w-none size-full" alt="" src={imgVector7} />
                    </div>
                  </div>
                </div>

                {/* Orange Vector Shape */}
                <div className="absolute left-[324.35px] top-[64.84px] w-[570.133px] h-[278.129px]">
                  <div className="absolute inset-[-36.09%_-17.61%]">
                    <img className="block max-w-none size-full" alt="" src={imgVector549} />
                  </div>
                </div>

                {/* Background Photo */}
                <div className="absolute left-[136.69px] top-[135.08px] w-[784.752px] h-[491.285px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img className="absolute h-[226.11%] left-[-0.04%] max-w-none top-[-126.11%] w-[100.07%]" alt="" src={imgPhoto1} />
                  </div>
                </div>

                {/* Tilted Photo */}
                <div className="absolute flex h-[236.618px] items-center justify-center left-[442.35px] top-[201.53px] w-[499.302px]">
                  <div className="flex-none rotate-[6.636deg]">
                    <div className="h-[182.196px] relative w-[481.472px]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img className="absolute h-[2260.2%] left-[-221.84%] max-w-none top-[-1419.26%] w-[604.65%]" alt="" src={imgPhoto2} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Top Photo */}
                <div className="absolute left-[586px] top-[14px] w-[238.988px] h-[342px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img className="absolute h-[451.52%] left-[-158.62%] max-w-none top-[-200%] w-[456.79%]" alt="" src={imgPhoto3} />
                  </div>
                </div>

                {/* Lanskap Kolaborasi Text */}
                <div className="absolute left-[49px] top-0 w-[342.16px] text-white leading-[1.3]">
                  <div className="flex flex-col pb-[18px]">
                    <p className="font-['Fraunces',sans-serif] font-bold text-[68.75px] tracking-[-1.375px]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                      Lanskap
                    </p>
                    <p className="font-['Fraunces',sans-serif] font-bold text-[68.75px] tracking-[-1.375px] -mt-[10px]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                      Kolaborasi
                    </p>
                  </div>
                  <p className="font-['Satoshi',sans-serif] text-[26.996px] tracking-[-0.27px] w-[307.555px] mt-[2px]">
                    Frekuensi, Mitra, & Dampak Program
                  </p>
                </div>
              </div>

              {/* Bottom Stats Section */}
              <div className="absolute left-[359.17px] top-[721px] w-[879px]">
                {/* 3-5 Kali */}
                <div className="absolute left-[0.99px] top-[7px] w-[211.976px] text-[#3b066d]">
                  <p className="font-['Fraunces',sans-serif] font-bold text-[63.05px] tracking-[-1.8915px] leading-[1.3]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                    3–5 Kali
                  </p>
                  <p className="font-['Satoshi',sans-serif] text-[19.172px] tracking-[-0.1917px] leading-[0.95]">
                    Frekuensi Dominan per Tahun
                  </p>
                </div>

                {/* Divider Line 1 */}
                <div className="absolute left-0 top-0 w-[312px] h-[252px]">
                  <div className="absolute inset-[0_-0.16%_0_0]">
                    <img className="block max-w-none size-full" alt="" src={imgVector478} />
                  </div>
                </div>

                {/* Sektor Pendidikan */}
                <div className="absolute left-0 top-[132px] w-[281.922px] text-[#3b066d]">
                  <p className="font-['Fraunces',sans-serif] font-bold text-[51.864px] tracking-[-2.5932px] leading-[0.96] w-[281.922px] whitespace-pre-wrap" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                    Sektor Pendidikan
                  </p>
                  <p className="font-['Satoshi',sans-serif] text-[19.172px] tracking-[-0.1917px] leading-[0.95] mt-[9.905px]">
                    Fokus Mitra Utama
                  </p>
                </div>

                {/* Peningkatan Kualitas */}
                <p className="absolute left-[346.69px] top-[31.49px] font-['Fraunces',sans-serif] font-bold text-[#3b066d] text-[63.05px] tracking-[-1.8915px] leading-[0.93] w-[485.366px] whitespace-pre-wrap" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                  Peningkatan Kualitas dan Jejaring
                </p>

                {/* Tantangan */}
                <p className="absolute left-[352.63px] top-[229.6px] font-['Satoshi',sans-serif] text-[#3b066d] text-[19.172px] tracking-[-0.1917px] leading-[0.95] w-[485.366px] whitespace-pre-wrap">
                  Tantangan: Perluasan Eksposur Publik
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
