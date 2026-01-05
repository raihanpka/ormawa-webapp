// Hero Section Component - Landing Page

import pattern from "../../assets/hero-section/pattern.jfif";
import mainIllustration from "../../assets/hero-section/main-illustration.png";
import cloud from "../../assets/hero-section/cloud.png";
import imgVector33 from "../../assets/hero-section/vector.svg";
import shadowMainIllustration from "../../assets/hero-section/shadow-main-illustration.svg";
import shadowMainIllustration2 from "../../assets/hero-section/shadow-main-illustration-2.svg";

export function HeroSection() {
  return (
    <div 
      className="relative w-full overflow-hidden rounded-bl-[50px] rounded-br-[50px] bg-[radial-gradient(50%_50%_at_50%_50%,#2350A6_0%,#123880_50%,#0D2456_100%)]" 
      style={{ height: '1338px' }}
      data-node-id="828:4204"
    >
      {/* Background Pattern */}
      <div 
        className="absolute left-1/2 top-[calc(50%+235px)] -translate-x-1/2 -translate-y-1/2 mix-blend-overlay opacity-[0.26] w-[1464px] h-[1946px]"
        data-node-id="828:4200"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            alt="" 
            className="absolute h-full left-[-16.48%] max-w-none top-0 w-[132.95%] object-cover" 
            src={pattern} 
          />
        </div>
      </div>

      {/* Illustrations Group */}
      <div className="absolute inset-[44.39%_-1.81%_-85.54%_-15.63%] pointer-events-none z-10" data-node-id="828:4199">
        <div className="absolute inset-0" data-node-id="828:4178">
          {/* Vector Background */}
          <div className="absolute inset-[45.89%_-1.37%_-85.54%_-15.62%]">
             <div className="absolute inset-[-8.36%_-9.28%]">
                <img src={imgVector33} alt="" className="w-full h-full" />
             </div>
          </div>

          {/* Building Mask */}
          <div className="absolute inset-[44.39%_-1.81%_-63.98%_-8.59%]">
            <div 
              className="absolute top-[43.09px] left-[-4.45%] right-[-0.48%] aspect-[595/821]"
              style={{
                maskImage: `url('${shadowMainIllustration}')`,
                WebkitMaskImage: `url('${shadowMainIllustration}')`,
                maskSize: '1589.766px 1600.101px',
                WebkitMaskSize: '1589.766px 1600.101px',
                maskPosition: '-59.68px 550.906px',
                WebkitMaskPosition: '-59.68px 550.906px',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat'
              }}
            >
               <div className="absolute inset-0 overflow-hidden">
                  <img src={mainIllustration} alt="" className="absolute top-0 left-0 w-full h-[102.51%] max-w-none object-cover" />
               </div>
            </div>
          </div>

          {/* Students Mask */}
          <div className="absolute inset-[58.07%_-1.81%_-63.98%_-8.59%]">
             <div 
                className="absolute top-[-16.58px] left-[-4.45%] right-[-0.48%] aspect-[2480/3508]"
                style={{
                  maskImage: `url('${shadowMainIllustration2}')`,
                  WebkitMaskImage: `url('${shadowMainIllustration2}')`,
                  maskSize: '1589.766px 1417.075px',
                  WebkitMaskSize: '1589.766px 1417.075px',
                  maskPosition: '-59.68px 793.611px',
                  WebkitMaskPosition: '-59.68px 793.611px',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat'
                }}
             >
                <img src={mainIllustration} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
             </div>
          </div>
        </div>
      </div>

      {/* Clouds */}
      <div className="absolute top-[345px] left-[67.08%] right-[-7.52%] aspect-[268/158] pointer-events-none">
         <div className="absolute inset-0 overflow-hidden">
            <img src={cloud} alt="" className="absolute top-[-118.65%] left-0 w-[240.3%] h-[576.55%] max-w-none" />
         </div>
      </div>
      <div className="absolute top-[330px] left-[-5.49%] right-[65.83%] aspect-[272/169] pointer-events-none">
         <div className="absolute inset-0 overflow-hidden">
            <img src={cloud} alt="" className="absolute top-[-87.26%] left-[-136.76%] w-[236.76%] h-[539.02%] max-w-none" />
         </div>
      </div>

      {/* Content */}
      <div className="absolute top-[182px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[16px] w-full z-20">
        <div className="flex flex-col items-center gap-[7.67px] w-full">
           <div className="flex flex-col items-center pb-[16.44px] w-full">
              <p 
                className="text-center text-[52.27px] leading-[1.15] tracking-[-1.57px] bg-gradient-to-b from-[#ffffff] from-[59%] to-[#92c1ff] bg-clip-text text-transparent"
                style={{ fontFamily: 'Fraunces, sans-serif', fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
              >
                Jejak Keberlanjutan
              </p>
              <div className="flex flex-col items-center justify-center leading-[1.15] -mb-[16.44px] pb-[21.92px]">
                 <p 
                    className="text-center text-[127.5px] tracking-[-3.82px] bg-gradient-to-b from-[#ffffff] from-[59%] to-[#92c1ff] bg-clip-text text-transparent font-bold"
                    style={{ fontFamily: 'Fraunces, sans-serif', fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                 >
                    Organisasi
                 </p>
                 <p 
                    className="text-center text-[84.41px] tracking-[-2.53px] bg-gradient-to-b from-[#ffffff] from-[59%] to-[#92c1ff] bg-clip-text text-transparent"
                    style={{ fontFamily: 'Fraunces, sans-serif', fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                 >
                    Kemahasiswaan
                 </p>
              </div>
           </div>
           <p 
              className="text-white text-center text-[35.32px] leading-[1.35] tracking-[5.65px] font-medium"
              style={{ fontFamily: 'Barmeno, sans-serif', textShadow: '0px 7.06px 7.06px rgba(0,0,0,0.25)' }}
           >
              LAPORAN ORMAWA IPB 2025
           </p>
        </div>

        <div className="flex items-center gap-[15.32px]">
           <div className="bg-white rounded-[12.9px] px-[22.57px] py-[11.29px] h-[49.98px] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
              <p 
                 className="text-[28.47px] leading-[1.35] tracking-[-0.57px] font-medium bg-gradient-to-b from-[#2350A6] to-[#0D2456] bg-clip-text text-transparent"
                 style={{ fontFamily: 'Barmeno, sans-serif' }}
              >
                 Jelajahi LPJ 2025
              </p>
           </div>
           <button className="border-[0.81px] border-[#ecf6fd] rounded-[12.9px] px-[22.57px] py-[11.29px] h-[49.98px] flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
              <p 
                 className="text-[#ecf6fd] text-[28.47px] leading-[1.35] tracking-[-0.57px] font-medium"
                 style={{ fontFamily: 'Barmeno, sans-serif' }}
              >
                 Key Takeaways
              </p>
           </button>
        </div>
      </div>
    </div>
  );
}
