import { cn } from "@/lib/utils";

const imgBackground = "https://www.figma.com/api/mcp/asset/6e965e55-3ca4-4cb6-8aa5-894b60070057";
const imgVector551 = "https://www.figma.com/api/mcp/asset/c7cae0de-f6ce-4b5e-9385-dd989ae2c3be";
const imgMaskGroup = "https://www.figma.com/api/mcp/asset/13ed4f79-cff7-4729-b1db-761b35d70c7a";
const imgPhoto1 = "https://www.figma.com/api/mcp/asset/df56162a-92f2-4c36-b02d-9f39f13c3a11";
const imgPhoto2 = "https://www.figma.com/api/mcp/asset/84c140ad-29d9-482b-8eda-4b3543266903";
const imgPhoto3 = "https://www.figma.com/api/mcp/asset/6eae8a57-2ded-4e43-856a-dcbe3021ea5d";
const imgVector478 = "https://www.figma.com/api/mcp/asset/7514c738-b2b7-40e6-941b-e6da61cc30ba";
const imgGroupMask = "https://www.figma.com/api/mcp/asset/b727b69a-7944-4976-b65a-b92cc76b88b5";
const imgGroupContent = "https://www.figma.com/api/mcp/asset/d371aa75-0540-4441-983e-b80a95fa2a67";

export function KeyTakeawaysSlide3({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center gap-[33px] w-full", className)} data-node-id="976:3133">
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
        className="relative bg-white rounded-[16.759px] overflow-hidden w-full max-w-[1030px] aspect-[1030/636] shadow-[0px_0px_22.016px_0px_rgba(0,0,0,0.15)]"
        data-node-id="976:3295"
      >
        {/* Scaled Content Container */}
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-[1030px] h-[636px] origin-top-left transform scale-[min(1,calc(100vw/1030))]">
            
            {/* Background */}
            <div className="absolute left-[-282.18px] top-[-381px] w-[1594.578px] h-[2217px]" data-node-id="976:3296">
              <div className="absolute h-[1946px] left-[75.18px] mix-blend-overlay opacity-[0.23] top-[271px] w-[1464px]" data-node-id="976:3297">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img className="absolute h-full left-[-16.48%] max-w-none top-0 w-[132.95%]" alt="" src={imgBackground} />
              </div>

              {/* Main Image Section - Program Unggulan */}
              <div className="absolute left-[340.18px] top-[428px] w-[879px] h-[260px] overflow-hidden rounded-[15.188px]">
                {/* Decorative Vector */}
                <div className="absolute left-[287.62px] top-[150.93px] w-[589.481px] h-[204.087px]" data-node-id="976:3299">
                    <div className="absolute inset-[-46.51%_-16.1%]">
                      <img className="block max-w-none size-full" alt="" src={imgVector551} />
                    </div>
                  </div>
                
                {/* Masked Group */}
                <div className="absolute flex inset-[-0.22%_-9.45%_-32.23%_29.59%] items-center justify-center">
                  <div className="flex-none h-[701.998px] rotate-[270deg] scale-y-[-100%] w-[344.362px]">
                    <div className="relative size-full">
                      <img className="block max-w-none size-full" alt="" src={imgMaskGroup} />
                    </div>
                  </div>
                </div>

                {/* Photo 1 */}
                <div className="absolute left-[45.56px] top-[87.33px] w-[973.685px] h-[609.565px]" data-node-id="976:3309">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img className="absolute h-[226.11%] left-[-0.04%] max-w-none top-[-126.11%] w-[100.07%]" alt="" src={imgPhoto1} />
                  </div>
                </div>

                {/* Photo 2 (Tilted) */}
                <div className="absolute flex h-[236.618px] items-center justify-center left-[440.45px] top-[227.57px] w-[499.302px]">
                  <div className="flex-none rotate-[6.636deg]">
                    <div className="h-[182.196px] relative w-[481.472px]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img className="absolute h-[2260.2%] left-[-221.84%] max-w-none top-[-1419.26%] w-[604.65%]" alt="" src={imgPhoto2} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Overlay: Program Unggulan */}
                <div className="absolute left-[43.67px] top-[29px] w-[436.335px] text-white leading-[1.3]">
                  <div className="flex flex-col gap-[25px] pb-[25px]">
                    <p className="font-['Fraunces',sans-serif] font-bold text-[68.75px] tracking-[-1.375px] leading-[1.3]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                      Program
                    </p>
                    <p className="font-['Fraunces',sans-serif] font-bold text-[68.75px] tracking-[-1.375px] leading-[1.3] -mt-[43px]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                      Unggulan
                    </p>
                  </div>
                  <p className="font-['Satoshi',sans-serif] text-[26.996px] tracking-[-0.27px] mt-[-16px]">
                    Inovasi, Relevansi, & Keberlanjutan
                  </p>
                </div>

                {/* Photo 3 */}
                <div className="absolute left-[408px] top-[-589px] w-[736.613px] h-[1041.951px]">
                  <img className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" alt="" src={imgPhoto3} />
                </div>
              </div>

              {/* Bottom Stats Section */}
              <div className="absolute left-[370.18px] top-[699px] w-[849px] h-[273.871px]">
                <div className="absolute left-0 top-[8.11px]">
                  {/* Left Column: Fokus Utama */}
                  <div className="absolute left-0 top-[71px] w-[298.215px] text-[#620229]">
                    <p className="font-['Satoshi',sans-serif] font-bold text-[28.358px] tracking-[-0.2836px] leading-[0.95]">
                      Fokus Utama:
                    </p>
                    <p className="font-['Fraunces',sans-serif] font-bold text-[64.565px] tracking-[-1.9369px] leading-[1.3] mt-[2px]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                      6 Pilar
                    </p>
                    <p className="font-['Satoshi',sans-serif] text-[19.632px] tracking-[-0.1963px] leading-[normal] mt-[2px]">
                      Kewirausahaan, Pengabdian, Kompetensi, Kepemimpinan, Kompetisi, Minat Bakat
                    </p>
                  </div>

                  {/* Vertical Divider */}
                  <div className="absolute left-[318.5px] top-[22px] h-[251.871px] w-[1.498px]">
                    <div className="flex items-center justify-center h-full rotate-[0.341deg]">
                      <div className="h-[251.875px] w-0">
                        <div className="absolute inset-[0_-0.51px]">
                          <img className="block max-w-none size-full" alt="" src={imgVector478} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Outcome */}
                  <div className="absolute left-[351.97px] top-[8.11px] text-[#620229]">
                    <p className="font-['Satoshi',sans-serif] font-bold text-[28.358px] tracking-[-0.2836px] leading-[0.95] w-[259.67px] whitespace-pre-wrap">
                      Outcome:
                    </p>
                    <p className="font-['Fraunces',sans-serif] font-bold text-[64.565px] tracking-[-1.9369px] leading-[0.93] w-[497.025px] whitespace-pre-wrap mt-[34.49px]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                      Kontribusi Nyata dan SDGs
                    </p>
                    <p className="font-['Satoshi',sans-serif] text-[19.632px] tracking-[-0.1963px] leading-[normal] w-[314.444px] whitespace-pre-wrap mt-[142px]">
                      Menghadirkan solusi inovatif bagi UMKM dan desa, serta memperkuat nilai kebangsaan.
                    </p>
                  </div>
                </div>

                {/* Decorative Icon */}
                <div className="absolute inset-[0_92.11%_77.78%_0.72%]">
                  <div 
                    className="absolute inset-[4.29%_92.71%_82.05%_1.31%]"
                    style={{
                      maskImage: `url("${imgGroupMask}")`,
                      WebkitMaskImage: `url("${imgGroupMask}")`,
                      maskSize: '60.86px 60.86px',
                      WebkitMaskSize: '60.86px 60.86px',
                      maskPosition: '-5.071px -11.743px',
                      WebkitMaskPosition: '-5.071px -11.743px',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat'
                    }}
                  >
                    <img className="block max-w-none size-full" alt="" src={imgGroupContent} />
                  </div>
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
