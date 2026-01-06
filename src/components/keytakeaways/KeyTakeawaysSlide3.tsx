// KeyTakeaways Slide 3 - Program Unggulan
// Figma Node: 976-3129

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const img2 = "https://www.figma.com/api/mcp/asset/83dd89fd-5a26-4670-9c46-c5936dc5af90";
const imgTakBerjudul57420251220192217 = "https://www.figma.com/api/mcp/asset/1ec33a22-90a0-49a1-8406-192e6fda18ec";
const imgTakBerjudul57420251220192207 = "https://www.figma.com/api/mcp/asset/9ac3cd69-76ac-41f7-8bc7-cfacce0d9700";
const imgTakBerjudul57420251220192046 = "https://www.figma.com/api/mcp/asset/2ba41780-62b7-422b-be13-4bbebb723d65";
const imgVector551 = "https://www.figma.com/api/mcp/asset/ba8d453e-e226-4ee1-b4c2-1244424a80ae";
const imgGroup2608332 = "https://www.figma.com/api/mcp/asset/e7a7a556-5948-4669-8ea6-5d10243db19f";
const imgVector478 = "https://www.figma.com/api/mcp/asset/36a584ab-307a-44fe-993c-501599ab0316";
const imgGroup = "https://www.figma.com/api/mcp/asset/cc608cb0-1c26-4b04-9c11-8f97a6fe7a79";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/ec80f226-e555-4f4e-a97d-1be3783b204b";

export function KeyTakeawaysSlide3() {
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
    <div className="flex flex-col items-center gap-[33px] w-full px-4" data-node-id="976:3133">
      {/* Title */}
      <p 
        className={cn(
          "font-['Barmeno,sans-serif'] text-[24px] md:text-[48px] leading-[1.2] md:leading-[0.93] text-[#1f1f1f] text-center tracking-[-1.44px] whitespace-normal md:whitespace-pre-wrap max-w-[987px] px-4",
          "font-medium"
        )}
        data-node-id="976:3134"
      >
        <span className="font-bold">Program unggulan Ormawa 2025 jadi </span>
        <span className="font-bold">bukti kontribusi nyata mahasiswa</span>
        <span className="font-bold">. Dari </span>
        <span className="font-bold">kewirausahaan hingga pengabdian</span>
        <span>, dari </span>
        <span className="underline decoration-solid underline-offset-auto">kampus ke masyarakat</span>
        <span>.</span>
      </p>

      {/* Card */}
      <div 
        className="relative bg-white rounded-[16.759px] w-full max-w-[1030px] aspect-[1030/636] shadow-[0px_0px_22.016px_0px_rgba(0,0,0,0.15)] overflow-clip"
        data-node-id="976:3295"
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
            <div className="absolute left-[-282.18px] top-[-381px] w-[1594.578px] h-[2217px]" data-node-id="976:3296">
              <div className="absolute h-[1946px] left-[75.18px] mix-blend-overlay opacity-[0.23] top-[271px] w-[1464px]" data-node-id="976:3297">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img className="absolute h-full left-[-16.48%] max-w-none top-0 w-[132.95%]" alt="" src={img2} />
                </div>
              </div>

              {/* Main Image Section - Program Unggulan */}
              <div className="absolute left-[340.18px] top-[428px] w-[879px] h-[260px] overflow-hidden rounded-[15.188px]" data-node-id="976:3298">
                {/* Decorative Vector */}
                <div className="absolute left-[287.62px] top-[150.93px] w-[589.481px] h-[204.087px]" data-node-id="976:3299">
                    <div className="absolute inset-[-46.51%_-16.1%]">
                      <img className="block max-w-none size-full" alt="" src={imgVector551} />
                    </div>
                  </div>
                
                {/* Masked Group */}
                <div className="absolute flex inset-[-0.22%_-9.45%_-32.23%_29.59%] items-center justify-center">
                  <div className="flex-none h-[701.998px] rotate-[270deg] scale-y-[-100%] w-[344.362px]">
                    <div className="relative size-full" data-node-id="976:3300">
                      <img className="block max-w-none size-full" alt="" src={imgGroup2608332} />
                    </div>
                  </div>
                </div>

                {/* Photo 1 */}
                <div className="absolute left-[45.56px] top-[87.33px] w-[973.685px] h-[609.565px]" data-node-id="976:3309">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img className="absolute h-[226.11%] left-[-0.04%] max-w-none top-[-126.11%] w-[100.07%]" alt="" src={imgTakBerjudul57420251220192217} />
                  </div>
                </div>

                {/* Photo 2 (Tilted) */}
                <div className="absolute flex h-[236.618px] items-center justify-center left-[440.45px] top-[227.57px] w-[499.302px]">
                  <div className="flex-none rotate-[6.636deg]">
                    <div className="h-[182.196px] relative w-[481.472px]" data-node-id="976:3310">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img className="absolute h-[2260.2%] left-[-221.84%] max-w-none top-[-1419.26%] w-[604.65%]" alt="" src={imgTakBerjudul57420251220192207} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Overlay: Program Unggulan */}
                <div className="absolute left-[43.67px] top-[29px] w-[436.335px] text-white leading-[1.3]" data-node-id="976:3311">
                  <div className="flex flex-col gap-[9px] pb-[25px]" data-node-id="976:3312">
                    <p className="font-['Fraunces',sans-serif] font-bold text-[68.75px] tracking-[-1.375px] leading-[1.3]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }} data-node-id="976:3313">
                      Program
                    </p>
                    <p className="font-['Fraunces',sans-serif] font-bold text-[68.75px] tracking-[-1.375px] leading-[1.3]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }} data-node-id="976:3314">
                      Unggulan
                    </p>
                  </div>
                  <p className="font-['Satoshi_Variable',sans-serif] text-[26.996px] tracking-[-0.27px]" data-node-id="976:3315">
                    Inovasi, Relevansi, & Keberlanjutan
                  </p>
                </div>

                {/* Photo 3 */}
                <div className="absolute left-[408px] top-[-589px] w-[736.613px] h-[1041.951px]" data-node-id="976:3316">
                  <img className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" alt="" src={imgTakBerjudul57420251220192046} />
                </div>
              </div>

              {/* Bottom Stats Section */}
              <div className="absolute left-[370.18px] top-[699px] w-[849px] h-[273.871px]" data-node-id="976:3317">
                <div className="absolute left-0 top-[8.11px]" data-node-id="976:3318">
                  {/* Left Column: Fokus Utama */}
                  <div className="absolute left-0 top-[71px] w-[298.215px] text-[#620229] flex flex-col gap-[2.029px]" data-node-id="976:3319">
                    <p className="font-['Satoshi_Variable',sans-serif] font-bold text-[28.358px] tracking-[-0.2836px] leading-[0.95]" data-node-id="976:3320">
                      Fokus Utama:
                    </p>
                    <p className="font-['Fraunces',sans-serif] font-bold text-[64.565px] tracking-[-1.9369px] leading-[1.3]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }} data-node-id="976:3321">
                      6 Pilar
                    </p>
                    <p className="font-['Satoshi_Variable',sans-serif] text-[19.632px] tracking-[-0.1963px] leading-[normal]" data-node-id="976:3322">
                      Kewirausahaan, Pengabdian, Kompetensi, Kepemimpinan, Kompetisi, Minat Bakat
                    </p>
                  </div>

                  {/* Vertical Divider */}
                  <div className="absolute flex h-[251.871px] items-center justify-center left-[318.5px] top-[22px] w-[1.498px]">
                    <div className="flex-none rotate-[0.341deg]">
                      <div className="h-[251.875px] relative w-0" data-node-id="976:3323">
                        <div className="absolute inset-[0_-0.51px]">
                          <img className="block max-w-none size-full" alt="" src={imgVector478} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Outcome */}
                  <p className="absolute font-['Satoshi_Variable',sans-serif] font-bold leading-[0.95] left-[351.97px] text-[#620229] text-[28.358px] top-[8.11px] tracking-[-0.2836px] w-[259.67px]" data-node-id="976:3324">
                    Outcome:
                  </p>
                  <p className="absolute font-['Fraunces',sans-serif] font-bold leading-[0.93] left-[351.97px] text-[#620229] text-[64.565px] top-[42.6px] tracking-[-1.9369px] w-[497.025px]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }} data-node-id="976:3325">
                    Kontribusi Nyata dan SDGs
                  </p>
                  <p className="absolute font-['Satoshi_Variable',sans-serif] leading-[normal] left-[352.99px] text-[#620229] text-[19.632px] top-[184.61px] tracking-[-0.1963px] w-[314.444px]" data-node-id="976:3326">
                    Menghadirkan solusi inovatif bagi UMKM dan desa, serta memperkuat nilai kebangsaan.
                  </p>
                </div>

                {/* Decorative Icon */}
                <div className="absolute" style={{ inset: '0 92.11% 77.78% 0.72%' }} data-node-id="976:3327">
                  <div 
                    className="absolute"
                    style={{
                      inset: '4.29% 92.71% 82.05% 1.31%',
                      WebkitMaskImage: `url("${imgGroup}")`,
                      maskImage: `url("${imgGroup}")`,
                      WebkitMaskSize: '60.86px 60.86px',
                      maskSize: '60.86px 60.86px',
                      WebkitMaskPosition: '-5.071px -11.743px',
                      maskPosition: '-5.071px -11.743px',
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat'
                    }}
                    data-node-id="976:3330"
                  >
                    <img className="block max-w-none size-full" alt="" src={imgGroup1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
