interface Chapter4CoverProps {
  chapterData: {
    number: string;
    title: string;
    question: string;
    sections: string[];
    buttonExplore: string;
    buttonTakeaways: string;
  };
  onExploreClick?: () => void;
  onTakeawaysClick?: () => void;
}

// Figma asset URLs (7-day expiry)
const imgTakBerjudul57420251220193323 = "https://www.figma.com/api/mcp/asset/8d2fc58a-2df0-44d6-ac72-1fe590a72ef6";
const imgTakBerjudul57420251220192158 = "https://www.figma.com/api/mcp/asset/f77117e7-26e7-4be5-8871-f91a448b0575";
const imgTakBerjudul57420251220192118 = "https://www.figma.com/api/mcp/asset/b07db5a9-d285-44fc-8af8-f678c1c7628b";
const imgTakBerjudul57420251220192121 = "https://www.figma.com/api/mcp/asset/97ad9164-df38-45b9-95b8-3afd3c2d6afd";
const imgTakBerjudul57420251220192225 = "https://www.figma.com/api/mcp/asset/e816eaaf-643a-4397-acd0-4acebfcbb7df";
const imgImage139 = "https://www.figma.com/api/mcp/asset/8bdd9a15-c005-4aca-9479-5ad55badf3c3";
const imgGroup2608332 = "https://www.figma.com/api/mcp/asset/2b6ea33a-0016-4dfd-a576-2bed675cc791";
const imgGroup2608333 = "https://www.figma.com/api/mcp/asset/e0dd18a4-0139-4474-a38b-960fc4181763";
const imgTakBerjudul57420251220193320 = "https://www.figma.com/api/mcp/asset/5ed38d1d-f0d8-4eae-b9ae-2ca55f1e8b2f";
const imgImage138Traced = "https://www.figma.com/api/mcp/asset/b5c59f58-ac3d-472d-80ed-6f089e7e0e8e";
const imgLine1 = "https://www.figma.com/api/mcp/asset/3226168a-cfeb-47a3-b81f-a1404f812977";

export function Chapter4Cover({ chapterData, onExploreClick, onTakeawaysClick }: Chapter4CoverProps) {
  return (
    <div data-node-id="941:2745" className="relative w-full overflow-hidden" style={{ height: 'clamp(600px, 55.56vw, 800px)', minHeight: '600px' }}>
      {/* Background gradient - orange/brown theme for Chapter 4 */}
      <div className="absolute inset-0 bg-gradient-radial from-[#CA822F] via-[#B8712A] to-[#8A5620]" />
      
      {/* Decorative background elements */}
      <div data-node-id="941:2746" className="absolute inset-[-2.05%_0.02%_2.33%_-12.71%]">
        <div className="absolute flex inset-[-2.05%_0.02%_42.14%_20.79%] items-center justify-center">
          <div className="flex-none h-[1140.279px] rotate-[270deg] scale-y-[-100%] w-[479.329px]">
            <div data-node-id="941:2747" className="relative size-full">
              <img className="block max-w-none size-full" alt="" src={imgGroup2608332} />
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[37.75%_33.52%_2.33%_-12.71%] items-center justify-center">
          <div className="flex-none h-[1140.279px] rotate-[90deg] w-[479.329px]">
            <div data-node-id="941:2756" className="relative size-full">
              <img className="block max-w-none size-full" alt="" src={imgGroup2608333} />
            </div>
          </div>
        </div>
      </div>

      {/* Complex illustration layer */}
      <div data-node-id="941:2832" className="absolute left-[-976px] top-[-626px]">
        <div data-node-id="941:2833" className="absolute left-[-976px] top-[-626px]">
          <div data-node-id="941:2834" className="absolute left-[188.21px] top-0" data-name="Mask group" />
          <div className="absolute flex h-[1587.724px] items-center justify-center left-[588.29px] top-[370.44px] w-[1122.451px]">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <div 
                data-node-id="941:2836" 
                className="h-[1587.724px] relative w-[1122.451px]" 
                data-name="Tak berjudul574_20251220193323"
              >
                <img 
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                  alt="" 
                  src={imgTakBerjudul57420251220193323} 
                />
              </div>
            </div>
          </div>
          <div 
            data-node-id="941:2837" 
            className="absolute h-[1142.825px] left-[1137.76px] top-[392px] w-[1363.24px]" 
            data-name="Tak berjudul574_20251220192158"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img 
                className="absolute h-[168.73%] left-0 max-w-none top-0 w-full" 
                alt="" 
                src={imgTakBerjudul57420251220192158} 
              />
            </div>
          </div>
          <div className="absolute flex h-[1461.941px] items-center justify-center left-[1113.73px] top-[651.53px] w-[1333.273px]">
            <div className="flex-none rotate-[330.01deg]">
              <div 
                data-node-id="941:2838" 
                className="h-[1198.819px] relative w-[847.512px]" 
                data-name="Tak berjudul574_20251220192118"
              >
                <img 
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                  alt="" 
                  src={imgTakBerjudul57420251220192118} 
                />
              </div>
            </div>
          </div>
          <div 
            data-node-id="941:2839" 
            className="absolute h-[1767.172px] left-[587.83px] top-[346px] w-[1249.312px]" 
            data-name="Tak berjudul574_20251220192121"
          >
            <img 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
              alt="" 
              src={imgTakBerjudul57420251220192121} 
            />
          </div>
          <div className="absolute flex h-[1434.466px] items-center justify-center left-0 top-[576px] w-[1014.104px]">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <div 
                data-node-id="941:2840" 
                className="h-[1434.466px] relative w-[1014.104px]" 
                data-name="Tak berjudul574_20251220192225"
              >
                <img 
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                  alt="" 
                  src={imgTakBerjudul57420251220192225} 
                />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[1825.971px] items-center justify-center left-[707.12px] top-[255px] w-[1290.881px]">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <div 
                data-node-id="941:2842" 
                className="h-[1825.971px] relative w-[1290.881px]"
                style={{ 
                  WebkitMaskImage: `url("${imgTakBerjudul57420251220193320}")`,
                  maskImage: `url("${imgTakBerjudul57420251220193320}")`,
                  WebkitMaskSize: '1338.402px 633.41px',
                  maskSize: '1338.402px 633.41px',
                  WebkitMaskPosition: '112.041px 1023.639px',
                  maskPosition: '112.041px 1023.639px',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskComposite: 'source-in',
                  maskComposite: 'intersect',
                  maskMode: 'alpha'
                }}
                data-name="Tak berjudul574_20251220193323"
              >
                <img 
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                  alt="" 
                  src={imgTakBerjudul57420251220193323} 
                />
              </div>
            </div>
          </div>
        </div>
        <div data-node-id="1085:3879" className="absolute left-[576px] top-[114px]">
          <div className="absolute flex top-[280px] left-[29.63px] right-0 bottom-0 items-center justify-center">
            <div className="flex-none h-[543.314px] rotate-[180deg] scale-y-[-100%] w-[638.367px]">
              <div data-node-id="1085:3433" className="relative size-full" data-name="image 138 (Traced)">
                <div className="absolute inset-[-31.34%_-26.68%]">
                  <img className="block max-w-none size-full" alt="" src={imgImage138Traced} />
                </div>
              </div>
            </div>
          </div>
          <div 
            data-node-id="1085:3427" 
            className="absolute h-[1070px] left-0 top-0 w-[722px]" 
            data-name="image 139"
          >
            <img 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
              alt="" 
              src={imgImage139} 
            />
          </div>
        </div>
      </div>

      {/* Question and sections - positioned in top left */}
      <div className="absolute top-16 left-12 z-10 w-[563px]">
        <div data-node-id="941:2779" className="flex flex-col gap-[18px] items-start">
          <p 
            data-node-id="941:2780" 
            className="font-['Barmeno'] font-medium leading-[1.28] text-[#ecf6fd] text-[24px] tracking-[0.24px] whitespace-pre-wrap"
          >
            {chapterData.question}
          </p>
          <div data-node-id="941:2781" className="flex flex-col gap-[13.458px] w-full">
            {chapterData.sections.map((section, index) => (
              <div key={index} className="w-full">
                <a 
                  data-node-id={`941:27${82 + index * 2}`}
                  className="block cursor-pointer font-['Barmeno'] font-medium leading-[1.28] text-[#ecf6fd] text-[26.916px] tracking-[0.2692px] whitespace-pre-wrap hover:underline"
                >
                  {section}
                </a>
                {index < chapterData.sections.length - 1 && (
                  <div data-node-id={`941:27${83 + index * 2}`} className="h-0 w-[554.028px] my-[13.458px]">
                    <div className="relative -top-[1.12px]">
                      <img className="block max-w-none w-full" alt="" src={imgLine1} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content container - title and buttons positioned in bottom right */}
      <div className="absolute bottom-16 right-12 z-10 flex flex-col gap-[34px]">
        {/* Chapter number and title */}
        <div data-node-id="941:2771" className="flex gap-[25px] items-start text-[#ecf6fd] leading-[0.93]">
          <p 
            data-node-id="941:2772" 
            className="font-['Fraunces'] font-normal text-[200px] tracking-[-6px] shrink-0"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            {chapterData.number}
          </p>
          <p 
            data-node-id="941:2773" 
            className="font-['Fraunces'] font-bold text-[64px] tracking-[-1.92px] w-[280px] whitespace-pre-wrap shrink-0"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            {chapterData.title}
          </p>
        </div>

        {/* Buttons */}
        <div data-node-id="941:2774" className="flex gap-[15.315px] items-center">
          <button 
            data-node-id="941:2775" 
            className="bg-white cursor-pointer flex h-[49.975px] items-center justify-center overflow-clip px-[22.569px] py-[11.285px] rounded-[12.897px] shrink-0"
            onClick={onExploreClick}
          >
            <p 
              data-node-id="941:2776" 
              className="bg-clip-text font-['Barmeno'] font-medium leading-[1.35] text-[28.469px] tracking-[-0.5694px] text-transparent bg-gradient-to-r from-[#CA822F] to-[#8A5620]"
            >
              {chapterData.buttonExplore}
            </p>
          </button>
          <button 
            data-node-id="941:2777" 
            className="border-[#ecf6fd] border-[0.806px] border-solid flex h-[49.975px] items-center justify-center overflow-clip px-[22.569px] py-[11.285px] rounded-[12.897px] shrink-0"
            onClick={onTakeawaysClick}
          >
            <p 
              data-node-id="941:2778" 
              className="font-['Barmeno'] font-medium leading-[1.35] text-[#ecf6fd] text-[28.469px] tracking-[-0.5694px]"
            >
              {chapterData.buttonTakeaways}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
