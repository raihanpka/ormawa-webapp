import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const imgBackground = "https://www.figma.com/api/mcp/asset/df792807-d119-43d0-a393-f05ba4ac3464";
const imgVector = "https://www.figma.com/api/mcp/asset/5e630563-0977-40fd-9288-a0b6ace7f8d6";
const imgVector1 = "https://www.figma.com/api/mcp/asset/d0818138-9c64-4ea0-860f-6c526c1c7a02";
const imgVector2 = "https://www.figma.com/api/mcp/asset/f6225cce-cc0c-4a3c-b1ad-ff9c0d3e0f56";
const imgVector3 = "https://www.figma.com/api/mcp/asset/33c843c8-66a5-4f93-8064-1257a5eb9076";
const imgVector4 = "https://www.figma.com/api/mcp/asset/71ab3cd5-fd84-4a6e-abca-673d7b17af17";
const imgVector5 = "https://www.figma.com/api/mcp/asset/ca2c84e3-3cf3-48fd-b994-5ed85708ee44";
const imgVector6 = "https://www.figma.com/api/mcp/asset/dfb402d7-b5f6-4a3e-9b70-06e0a1c061c5";
const imgVector7 = "https://www.figma.com/api/mcp/asset/28690812-dd71-4e17-998a-fa0a18d0ac96";
const imgVector550 = "https://www.figma.com/api/mcp/asset/1d49afd9-b7da-449b-ae60-03b0164c3a34";
const imgPhoto1 = "https://www.figma.com/api/mcp/asset/63653f39-cb07-4a1d-aa2f-0126b9cc97fd";
const imgPhoto2 = "https://www.figma.com/api/mcp/asset/5ca1104c-84d4-444c-b6f0-7d8c8058fb94";
const imgPhoto3Vertical = "https://www.figma.com/api/mcp/asset/37cf7746-100f-441e-bab9-af6aa2ba29ec";
const imgPhoto4Vertical = "https://www.figma.com/api/mcp/asset/92d0f1f1-6642-4d45-a641-70e3c7530b9e";
const imgVector478 = "https://www.figma.com/api/mcp/asset/0ebbc56f-e595-4e37-a948-d8d26e489bc3";

export function KeyTakeawaysSlide5({ className }: { className?: string }) {
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
    <div className={cn("flex flex-col items-center gap-[33px] w-full", className)} data-node-id="976:3219">
      {/* Title */}
      <p 
        className={cn(
          "font-['Barmeno,sans-serif'] text-[24px] md:text-[48px] leading-[1.2] md:leading-[0.93] text-[#1f1f1f] text-center tracking-[-1.44px] whitespace-normal md:whitespace-pre-wrap max-w-[834px] px-4",
          "font-medium"
        )}
      >
        <span className="font-bold">Refleksi 2025 menegaskan satu hal: </span>
        <span className="font-bold">kualitas program </span>
        <span className="font-bold">dan </span>
        <span className="font-bold">strategi yang tepat </span>
        <span>tetap jadi </span>
        <span className="underline decoration-solid underline-offset-auto">kunci kinerja Ormawa</span>
      </p>

      {/* Card */}
      <div 
        className="relative bg-white rounded-[16.759px] w-full max-w-[1030px] aspect-[1030/636] shadow-[0px_0px_22.016px_0px_rgba(0,0,0,0.15)] overflow-clip"
        data-node-id="976:3370"
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
            <div className="absolute left-[-282.18px] top-[-381px] w-[1594.578px] h-[2217px]" data-node-id="976:3371">
              <div className="absolute left-[75.18px] top-[271px] w-[1464px] h-[1946px] mix-blend-overlay opacity-[0.23]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img className="absolute h-full left-[-16.48%] max-w-none top-0 w-[132.95%]" alt="" src={imgBackground} />
                </div>
              </div>

              {/* Main Image Section */}
              <div className="absolute left-[358.18px] top-[411px] w-[879px] h-[273px] overflow-hidden rounded-[15.188px]">
                
                {/* Vector Group */}
                <div className="absolute inset-[-0.21%_-9.45%_-25.93%_29.59%]">
                  {/* Vector 1 */}
                  <div className="absolute flex inset-[0.11%_-9.45%_-25.93%_64.88%] items-center justify-center">
                    <div className="flex-none h-[391.814px] rotate-[270deg] scale-y-[-100%] w-[343.503px]">
                      <img className="block max-w-none size-full" alt="" src={imgVector} />
                    </div>
                  </div>
                  {/* Vector 2 */}
                  <div className="absolute flex inset-[0.1%_-9.45%_36.39%_76.27%] items-center justify-center">
                    <div className="flex-none h-[291.686px] rotate-[270deg] scale-y-[-100%] w-[173.382px]">
                      <img className="block max-w-none size-full" alt="" src={imgVector1} />
                    </div>
                  </div>
                  {/* Vector 3 */}
                  <div className="absolute flex inset-[0.11%_36.78%_41.3%_29.59%] items-center justify-center">
                    <div className="flex-none h-[295.653px] rotate-[270deg] scale-y-[-100%] w-[159.955px]">
                      <img className="block max-w-none size-full" alt="" src={imgVector2} />
                    </div>
                  </div>
                  {/* Vector 4 */}
                  <div className="absolute flex inset-[38.15%_36.6%_28.18%_51.58%] items-center justify-center">
                    <div className="flex-none h-[103.92px] rotate-[270deg] scale-y-[-100%] w-[91.93px]">
                      <img className="block max-w-none size-full" alt="" src={imgVector3} />
                    </div>
                  </div>
                  {/* Vector 5 */}
                  <div className="absolute flex inset-[46.36%_36.44%_16.41%_56.87%] items-center justify-center">
                    <div className="flex-none h-[58.838px] rotate-[270deg] scale-y-[-100%] w-[101.647px]">
                      <img className="block max-w-none size-full" alt="" src={imgVector4} />
                    </div>
                  </div>
                  {/* Vector 6 */}
                  <div className="absolute flex inset-[42.93%_32.51%_17.31%_63.88%] items-center justify-center">
                    <div className="flex-none h-[31.748px] rotate-[270deg] scale-y-[-100%] w-[108.548px]">
                      <img className="block max-w-none size-full" alt="" src={imgVector5} />
                    </div>
                  </div>
                  {/* Vector 7 */}
                  <div className="absolute flex inset-[-0.21%_-9.45%_90.4%_98.71%] items-center justify-center">
                    <div className="flex-none h-[94.443px] rotate-[270deg] scale-y-[-100%] w-[26.767px]">
                      <img className="block max-w-none size-full" alt="" src={imgVector6} />
                    </div>
                  </div>
                  {/* Vector 8 */}
                  <div className="absolute flex inset-[0.11%_51.88%_96.42%_43.56%] items-center justify-center">
                    <div className="flex-none h-[40.117px] rotate-[270deg] scale-y-[-100%] w-[9.499px]">
                      <img className="block max-w-none size-full" alt="" src={imgVector7} />
                    </div>
                  </div>
                </div>

                {/* Orange Vector Shape */}
                <div className="absolute left-[246.8px] top-[34.17px] w-[643.587px] h-[324.192px]">
                  <div className="absolute inset-[-29.28%_-14.75%]">
                    <img className="block max-w-none size-full" alt="" src={imgVector550} />
                  </div>
                </div>

                {/* Background Photo */}
                <div className="absolute left-[-7.59px] top-[102.52px] w-[970.27px] h-[607.427px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img className="absolute h-[226.11%] left-[-0.04%] max-w-none top-[-126.11%] w-[100.07%]" alt="" src={imgPhoto1} />
                  </div>
                </div>

                {/* Tilted Photo */}
                <div className="absolute flex h-[236.618px] items-center justify-center left-[440.45px] top-[227.57px] w-[499.302px]">
                  <div className="flex-none rotate-[6.636deg]">
                    <div className="h-[182.196px] relative w-[481.472px]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img className="absolute h-[2260.2%] left-[-221.84%] max-w-none top-[-1419.26%] w-[604.65%]" alt="" src={imgPhoto2} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Left Side Vertical Photos */}
                <div className="absolute left-[-212.63px] top-[-751.8px]">
                  <div className="absolute left-[-94.99px] top-[-751.8px] w-[973.99px] h-[1377.724px]">
                    <img className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" alt="" src={imgPhoto3Vertical} />
                  </div>
                  <div className="absolute left-[-212.63px] top-[-601.07px] w-[973.99px] h-[1377.724px]">
                    <img className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" alt="" src={imgPhoto4Vertical} />
                  </div>
                </div>

                {/* Refleksi Kinerja Text */}
                <div className="absolute left-[43.67px] top-[34.17px] text-white leading-[1.3]">
                  <p className="font-['Fraunces',sans-serif] font-bold text-[68.75px] tracking-[-1.375px]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                    Refleksi
                  </p>
                  <p className="font-['Fraunces',sans-serif] font-bold text-[68.75px] tracking-[-1.375px] mt-[0px]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                    Kinerja
                  </p>
                  <p className="font-['Satoshi',sans-serif] text-[26.996px] tracking-[-0.27px] mt-[24px]">
                    Sinergi Layanan & Strategi
                  </p>
                </div>
              </div>

              {/* Bottom Stats Section */}
              <div className="absolute left-[358.18px] top-[698px] w-[879px]">
                {/* Layanan Ditmawa */}
                <div className="absolute left-0 top-0 w-[278px] text-[#bd7a2c]">
                  <p className="font-['Fraunces',sans-serif] font-bold text-[51.161px] tracking-[-1.5348px] leading-[0.93] w-[278.099px]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                    Layanan Ditmawa
                  </p>
                  <p className="font-['Satoshi',sans-serif] text-[18.308px] tracking-[-0.1831px] leading-[0.95] mt-[6px]">
                    Positif & Relevan.
                  </p>
                </div>

                {/* Peran Medsos */}
                <div className="absolute left-0 top-[141px] w-[278.099px] text-[#bd7a2c]">
                  <p className="font-['Fraunces',sans-serif] font-bold text-[51.161px] tracking-[-1.5348px] leading-[0.93] w-[278.099px]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                    Peran Medsos
                  </p>
                  <p className="font-['Satoshi',sans-serif] text-[18.308px] tracking-[-0.1831px] leading-[0.95] mt-[11.351px]">
                    Efektif menjangkau audiens.
                  </p>
                </div>

                {/* Divider */}
                <div className="absolute left-0 top-0 w-[298px] h-[274px]">
                  <div className="absolute inset-[0_-0.16%_0_0]">
                    <img className="block max-w-none size-full" alt="" src={imgVector478} />
                  </div>
                </div>

                {/* Right Side Content */}
                <div className="absolute left-[330.12px] top-[23.3px] text-[#bd7a2c]">
                  <p className="font-['Satoshi',sans-serif] font-bold text-[26.445px] tracking-[-0.2644px] leading-[0.95] w-[242.155px] whitespace-pre-wrap">
                    Fokus dan Dampak
                  </p>
                  <p className="font-['Fraunces',sans-serif] font-bold text-[57.918px] tracking-[-1.7375px] leading-[0.93] w-[525.929px] whitespace-pre-wrap mt-[13px]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                    Redefinisi Tolok Ukur Keberhasilan Ormawa
                  </p>
                  <p className="font-['Satoshi',sans-serif] text-[18.308px] tracking-[-0.1831px] leading-[0.95] w-[463.499px] whitespace-pre-wrap mt-[160px]">
                    Relevansi konten lebih utama daripada sekadar angka viral.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
