interface Chapter2CoverProps {
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
const imgTakBerjudul57420251220193323 = "https://www.figma.com/api/mcp/asset/edf616ea-738d-4e13-b4e3-adfa863ec3c0";
const imgTakBerjudul57420251220192118 = "https://www.figma.com/api/mcp/asset/b4c7c2e2-8831-4ae6-bc5f-b295e4762fbc";
const imgTakBerjudul57420251220192121 = "https://www.figma.com/api/mcp/asset/9f4c24b1-6d2d-41c5-9e02-b5c8611937a8";
const imgTakBerjudul57420251220192225 = "https://www.figma.com/api/mcp/asset/f268bc89-75aa-4d0f-b604-41c120c21a48";
const imgTakBerjudul57420251220192139 = "https://www.figma.com/api/mcp/asset/e67f8573-9160-4b5f-9d3c-96e5e01e88c0";
const imgImage135 = "https://www.figma.com/api/mcp/asset/32a0a053-ed25-4472-a4ac-25b01be14240";
const imgGroup2608332 = "https://www.figma.com/api/mcp/asset/ccd948cd-db5e-4487-910f-8621c82134fa";
const imgGroup2608333 = "https://www.figma.com/api/mcp/asset/84dc245d-b86f-479b-8d81-a51d14ceed06";
const imgTakBerjudul57420251220193320 = "https://www.figma.com/api/mcp/asset/cbbafa6e-ecd4-4782-99a7-9bd4c0cfdd56";
const imgImage134Traced = "https://www.figma.com/api/mcp/asset/ec1d9c5e-8b2e-4b12-976b-ee2a135d884c";
const imgFrame1430103064 = "https://www.figma.com/api/mcp/asset/37cff80d-d8b2-47dc-b33d-5303e3bbad5f";
const imgLine1 = "https://www.figma.com/api/mcp/asset/35945d4e-78ba-438b-9ffd-32e323e21acc";

export function Chapter2Cover({ chapterData, onExploreClick, onTakeawaysClick }: Chapter2CoverProps) {
  return (
    <div data-node-id="915:4470" className="relative w-full overflow-hidden" style={{ height: 'clamp(600px, 55.56vw, 800px)', minHeight: '600px' }}>
      {/* Background gradient - green theme for Chapter 2 */}
      <div className="absolute inset-0 bg-gradient-radial from-[#00A991] via-[#008D7A] to-[#006B5C]" />
      
      {/* Decorative background elements */}
      <div data-node-id="915:4471" className="absolute inset-[-2.05%_0.02%_2.33%_-12.71%]">
        <div className="absolute flex inset-[-2.05%_0.02%_42.14%_20.79%] items-center justify-center">
          <div className="flex-none h-[1140.279px] rotate-[270deg] scale-y-[-100%] w-[479.329px]">
            <div data-node-id="915:4472" className="relative size-full">
              <img className="block max-w-none size-full" alt="" src={imgGroup2608332} />
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[37.75%_33.52%_2.33%_-12.71%] items-center justify-center">
          <div className="flex-none h-[1140.279px] rotate-[90deg] w-[479.329px]">
            <div data-node-id="915:4481" className="relative size-full">
              <img className="block max-w-none size-full" alt="" src={imgGroup2608333} />
            </div>
          </div>
        </div>
      </div>

      {/* Complex illustration layer */}
      <div data-node-id="915:4544" className="absolute left-[9px] top-[-330px]">
        <div data-node-id="915:4545" className="absolute left-[9px] top-[-330px]">
          <div data-node-id="915:4546" className="absolute left-[268.38px] top-0" data-name="Mask group" />
          <div 
            data-node-id="915:4548" 
            className="absolute h-[1428.898px] left-[628.44px] top-[333.39px] w-[1010.167px]" 
            data-name="Tak berjudul574_20251220193323"
          >
            <img 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
              alt="" 
              src={imgTakBerjudul57420251220193323} 
            />
          </div>
          <div className="absolute flex h-[1315.697px] items-center justify-center left-0 top-[518.42px] w-[1199.9px]">
            <div className="flex-none rotate-[330.01deg]">
              <div 
                data-node-id="915:4549" 
                className="h-[1078.896px] relative w-[762.732px]" 
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
          <div className="absolute flex h-[1590.395px] items-center justify-center left-[596.77px] top-[276.71px] w-[1124.338px]">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <div 
                data-node-id="915:4550" 
                className="h-[1590.395px] relative w-[1124.338px]" 
                data-name="Tak berjudul574_20251220192121"
              >
                <img 
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                  alt="" 
                  src={imgTakBerjudul57420251220192121} 
                />
              </div>
            </div>
          </div>
          <div 
            data-node-id="915:4551" 
            className="absolute h-[863.237px] left-[493.41px] top-[693.45px] w-[610.27px]" 
            data-name="Tak berjudul574_20251220192225"
          >
            <img 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
              alt="" 
              src={imgTakBerjudul57420251220192225} 
            />
          </div>
          <div data-node-id="915:4552" className="absolute left-[610.1px] top-[1138.82px]" data-name="Mask group">
            <div 
              data-node-id="915:4554" 
              className="absolute h-[1643.312px] left-[21.09px] top-[-969.08px] w-[1161.749px]"
              style={{ 
                WebkitMaskImage: `url("${imgTakBerjudul57420251220193320}")`,
                maskImage: `url("${imgTakBerjudul57420251220193320}")`,
                WebkitMaskSize: '1184.267px 570.33px',
                maskSize: '1184.267px 570.33px',
                WebkitMaskPosition: '-21.087px 969.083px',
                maskPosition: '-21.087px 969.083px',
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
        <div data-node-id="1057:5362" className="absolute left-[70px] top-[-173px]">
          <div 
            data-node-id="1057:5363" 
            className="absolute h-[1618.615px] left-[606.96px] top-0 w-[1145.266px]" 
            data-name="Tak berjudul574_20251220192139"
          >
            <img 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
              alt="" 
              src={imgTakBerjudul57420251220192139} 
            />
          </div>
          <div data-node-id="1057:5364" className="absolute top-[618px] left-[23px] right-0 bottom-0" data-name="image 134 (Traced)">
            <div className="absolute inset-[-11.3%_-5.83%]">
              <img className="block max-w-none size-full" alt="" src={imgImage134Traced} />
            </div>
          </div>
          <div 
            data-node-id="1057:5365" 
            className="absolute h-[756px] left-0 top-[489px] w-[1133px]" 
            data-name="image 135"
          >
            <img 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
              alt="" 
              src={imgImage135} 
            />
          </div>
        </div>
      </div>

      {/* Content container - title and buttons on the right */}
      <div className="absolute z-10 flex flex-col gap-[34px]" style={{ top: 'clamp(2rem, 5vw, 4rem)', right: 'clamp(1.5rem, 5vw, 3rem)' }}>
        {/* Chapter title and number (reversed order for Bab 2) */}
        <div data-node-id="915:4496" className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-[25px] items-end sm:items-start text-[#ecf6fd] leading-[0.93]">
          <p 
            data-node-id="915:4498" 
            className="font-['Fraunces'] font-bold tracking-tight whitespace-pre-wrap shrink-0 text-right"
            style={{ 
              fontSize: 'clamp(32px, 4.44vw, 64px)',
              maxWidth: '100%',
              fontVariationSettings: '"SOFT" 0, "WONK" 1' 
            }}
          >
            {chapterData.title}
          </p>
          <p 
            data-node-id="915:4497" 
            className="font-['Fraunces'] font-normal tracking-tight shrink-0"
            style={{ 
              fontSize: 'clamp(80px, 13.89vw, 200px)',
              fontVariationSettings: '"SOFT" 0, "WONK" 1' 
            }}
          >
            {chapterData.number}
          </p>
        </div>

        {/* Buttons */}
        <div data-node-id="915:4499" className="flex flex-col sm:flex-row gap-[15.315px] items-stretch sm:items-center">
          <button 
            data-node-id="915:4500" 
            className="bg-white cursor-pointer flex items-center justify-center overflow-clip rounded-[12.897px] shrink-0"
            style={{ 
              paddingLeft: 'clamp(15px, 1.57vw, 22.569px)',
              paddingRight: 'clamp(15px, 1.57vw, 22.569px)',
              paddingTop: 'clamp(8px, 0.78vw, 11.285px)',
              paddingBottom: 'clamp(8px, 0.78vw, 11.285px)',
              height: 'clamp(40px, 3.47vw, 49.975px)'
            }}
            onClick={onExploreClick}
          >
            <p 
              data-node-id="915:4501" 
              className="bg-clip-text font-['Barmeno'] font-medium leading-[1.35] tracking-tight text-transparent bg-gradient-to-r from-[#00A991] to-[#006B5C] whitespace-nowrap"
              style={{ fontSize: 'clamp(18px, 1.98vw, 28.469px)' }}
            >
              {chapterData.buttonExplore}
            </p>
          </button>
          <button 
            data-node-id="915:4502" 
            className="border-[#ecf6fd] border-[0.806px] border-solid flex items-center justify-center overflow-clip rounded-[12.897px] shrink-0"
            style={{ 
              paddingLeft: 'clamp(15px, 1.57vw, 22.569px)',
              paddingRight: 'clamp(15px, 1.57vw, 22.569px)',
              paddingTop: 'clamp(8px, 0.78vw, 11.285px)',
              paddingBottom: 'clamp(8px, 0.78vw, 11.285px)',
              height: 'clamp(40px, 3.47vw, 49.975px)'
            }}
            onClick={onTakeawaysClick}
          >
            <p 
              data-node-id="915:4503" 
              className="font-['Barmeno'] font-medium leading-[1.35] text-[#ecf6fd] tracking-tight whitespace-nowrap"
              style={{ fontSize: 'clamp(18px, 1.98vw, 28.469px)' }}
            >
              {chapterData.buttonTakeaways}
            </p>
          </button>
        </div>
      </div>

      {/* Question and sections - positioned in top left */}
      <div className="absolute z-10" style={{ top: 'clamp(2rem, 5vw, 4rem)', left: 'clamp(1.5rem, 5vw, 3rem)', maxWidth: 'clamp(300px, 80%, 563px)' }}>
        <button 
          data-node-id="915:4505" 
          className="cursor-pointer flex flex-col gap-[12px] items-start p-0 w-full text-left"
        >
          <p 
            data-node-id="915:4506" 
            className="font-['Barmeno'] font-medium leading-[1.28] text-[#ecf6fd] tracking-[0.24px] whitespace-pre-wrap"
            style={{ fontSize: 'clamp(16px, 1.67vw, 24px)' }}
          >
            {chapterData.question}
          </p>
          <div 
            data-node-id="915:4780" 
            className="inline-grid grid-cols-[max-content] grid-rows-[max-content] justify-items-start leading-[0]" 
            data-name="Mask group"
          >
            <div 
              data-node-id="915:4782" 
              className="col-[1] row-[1] flex flex-col items-start ml-0 mt-[14px] w-[587px]"
              style={{ 
                WebkitMaskImage: `url("${imgFrame1430103064}")`,
                maskImage: `url("${imgFrame1430103064}")`,
                WebkitMaskSize: '567px 197px',
                maskSize: '567px 197px',
                WebkitMaskPosition: '0px -14px',
                maskPosition: '0px -14px',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskComposite: 'source-in',
                maskComposite: 'intersect',
                maskMode: 'alpha'
              }}
            >
              <div 
                data-node-id="915:4783" 
                className="flex flex-col h-[197px] items-start overflow-x-clip overflow-y-auto w-full"
              >
                <div 
                  data-node-id="915:4784" 
                  className="flex flex-col gap-[13.458px] h-[430px] items-start w-[567px]"
                >
                  {chapterData.sections.map((section, index) => (
                    <div key={index} className="w-full">
                      <div 
                        data-node-id={`915:47${85 + index * 2}`}
                        className="cursor-pointer font-['Barmeno'] font-medium leading-[1.28] text-[#ecf6fd] text-[26.916px] tracking-[0.2692px] whitespace-pre-wrap hover:underline"
                      >
                        {section}
                      </div>
                      {index < chapterData.sections.length - 1 && (
                        <div data-node-id={`915:47${86 + index * 2}`} className="h-0 w-full my-[13.458px]">
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
          </div>
        </button>
      </div>
    </div>
  );
}
