interface Chapter5CoverProps {
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
const imgTakBerjudul57420251220192139 = "https://www.figma.com/api/mcp/asset/413e3806-b281-4ef4-b1ed-af523d5feaf6";
const imgTakBerjudul57420251220193323 = "https://www.figma.com/api/mcp/asset/af6dfe33-1c4d-4d6f-aff2-943b27edb9bd";
const imgTakBerjudul57420251220192118 = "https://www.figma.com/api/mcp/asset/c8b8d0e1-c14d-4b5b-826a-ca3b51549f76";
const imgTakBerjudul57420251220192121 = "https://www.figma.com/api/mcp/asset/99ca3e13-3301-49d9-9f02-997982ef3f00";
const imgTakBerjudul57420251220192225 = "https://www.figma.com/api/mcp/asset/26268b4a-4308-4002-abd2-cd466fa985c1";
const imgImage139 = "https://www.figma.com/api/mcp/asset/69c685cf-c529-40ea-b0ce-a863bb0eb673";
const imgGroup2608332 = "https://www.figma.com/api/mcp/asset/f08c9df5-4bec-4ba1-b13e-b9a6c882c4ff";
const imgGroup2608333 = "https://www.figma.com/api/mcp/asset/82f9d3d9-8a42-4fe2-930e-2bd1bb2b36b3";
const imgTakBerjudul57420251220193320 = "https://www.figma.com/api/mcp/asset/0e7bb1db-016f-455b-b32c-55433aca4df4";
const imgImage139Traced = "https://www.figma.com/api/mcp/asset/3ba1f242-ad81-4963-89bb-4ff0beb0febc";
const imgFrame1430103064 = "https://www.figma.com/api/mcp/asset/2f4bf047-29bc-4e84-b934-5cf213764a40";
const imgLine1 = "https://www.figma.com/api/mcp/asset/703812d0-04e7-40db-999a-64da7a4e4d81";

export function Chapter5Cover({ chapterData, onExploreClick, onTakeawaysClick }: Chapter5CoverProps) {
  return (
    <div data-node-id="941:2879" className="relative w-full overflow-hidden" style={{ height: 'clamp(600px, 55.56vw, 800px)', minHeight: '600px' }}>
      {/* Background gradient - Pink/Magenta theme */}
      <div className="absolute inset-0 bg-gradient-radial from-[#C2185B] via-[#AD1457] to-[#880E4F]" />
      
      {/* Decorative background elements */}
      <div data-node-id="941:2880" className="absolute inset-[-2.06%_0.02%_-26.89%_-12.43%]">
        <div className="absolute flex inset-[-2.06%_0.02%_42.14%_20.79%] items-center justify-center">
          <div className="flex-none h-[1140.279px] rotate-[270deg] scale-y-[-100%] w-[479.329px]">
            <div data-node-id="941:2881" className="relative size-full">
              <img className="block max-w-none size-full" alt="" src={imgGroup2608332} />
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[32.13%_27.33%_-26.89%_-12.43%] items-center justify-center">
          <div className="flex-none h-[1140.279px] rotate-[105deg] w-[479.329px]">
            <div data-node-id="941:2890" className="relative size-full">
              <img className="block max-w-none size-full" alt="" src={imgGroup2608333} />
            </div>
          </div>
        </div>
      </div>

      {/* Complex illustration layers */}
      <div data-node-id="941:2899" className="absolute contents left-[-244px] top-[-686px]">
        <div data-node-id="941:2900" className="absolute contents left-[-244px] top-[-686px]">
          {/* Main illustration 1 */}
          <div 
            data-node-id="941:2911" 
            className="absolute left-[875.21px] top-[639.81px]"
            style={{ width: '1037.944px', height: '1468.188px' }}
            data-name="Tak berjudul574_20251220192139"
          >
            <img 
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
              style={{ objectPosition: '50% 50%' }}
              alt="" 
              src={imgTakBerjudul57420251220192139} 
            />
          </div>

          {/* Illustration 2 */}
          <div 
            data-node-id="941:2903" 
            className="absolute left-[773.72px] top-[410.46px]"
            style={{ width: '1243.696px', height: '1759.229px' }}
            data-name="Tak berjudul574_20251220193323"
          >
            <img 
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
              style={{ objectPosition: '50% 50%' }}
              alt="" 
              src={imgTakBerjudul57420251220193323} 
            />
          </div>

          {/* Rotated illustration 3 */}
          <div 
            className="absolute flex items-center justify-center left-0 top-[638.27px]"
            style={{ width: '1477.291px', height: '1619.858px' }}
          >
            <div className="flex-none rotate-[330.01deg]">
              <div 
                data-node-id="941:2904" 
                className="relative"
                style={{ width: '939.059px', height: '1328.314px' }}
                data-name="Tak berjudul574_20251220192118"
              >
                <img 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
                  style={{ objectPosition: '50% 50%' }}
                  alt="" 
                  src={imgTakBerjudul57420251220192118} 
                />
              </div>
            </div>
          </div>

          {/* Flipped illustration 4 */}
          <div 
            className="absolute flex items-center justify-center left-[734.72px] top-[340.68px]"
            style={{ width: '1384.261px', height: '1958.06px' }}
          >
            <div className="flex-none rotate-180 scale-y-[-100%]">
              <div 
                data-node-id="941:2905" 
                className="relative"
                style={{ width: '1384.261px', height: '1958.06px' }}
                data-name="Tak berjudul574_20251220192121"
              >
                <img 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
                  style={{ objectPosition: '50% 50%' }}
                  alt="" 
                  src={imgTakBerjudul57420251220192121} 
                />
              </div>
            </div>
          </div>

          {/* Illustration 5 */}
          <div 
            data-node-id="941:2906" 
            className="absolute left-[607.48px] top-[853.76px]"
            style={{ width: '751.352px', height: '1062.799px' }}
            data-name="Tak berjudul574_20251220192225"
          >
            <img 
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
              style={{ objectPosition: '50% 50%' }}
              alt="" 
              src={imgTakBerjudul57420251220192225} 
            />
          </div>

          {/* Masked illustration group */}
          <div data-node-id="941:2907" className="absolute contents left-[751.14px] top-[1402.09px]" data-name="Mask group">
            <div 
              data-node-id="941:2909" 
              className="absolute left-[25.96px] top-[-1193.11px] mask-alpha mask-no-clip"
              style={{ 
                width: '1430.32px',
                height: '2023.211px',
                WebkitMaskImage: `url("${imgTakBerjudul57420251220193320}")`,
                maskImage: `url("${imgTakBerjudul57420251220193320}")`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: '-25.962px 1193.114px',
                maskPosition: '-25.962px 1193.114px',
                WebkitMaskSize: '1458.043px 702.178px',
                maskSize: '1458.043px 702.178px',
                WebkitMaskComposite: 'source-in',
                maskComposite: 'intersect'
              }}
              data-name="Tak berjudul574_20251220193323"
            >
              <img 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
                style={{ objectPosition: '50% 50%' }}
                alt="" 
                src={imgTakBerjudul57420251220193323} 
              />
            </div>
          </div>
        </div>

        {/* Character illustrations with certificates */}
        <div data-node-id="941:3107" className="absolute contents left-[110px] top-[114px]">
          {/* First image layer */}
          <div 
            data-node-id="1085:3413" 
            className="absolute left-0 top-0"
            style={{ width: '911px', height: '911px' }}
            data-name="image 139"
          >
            <img 
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
              style={{ objectPosition: '50% 50%' }}
              alt="" 
              src={imgImage139} 
            />
          </div>

          {/* Traced overlay */}
          <div 
            className="absolute flex items-center justify-center left-[53.6px]"
            style={{ inset: '319px 0 0 53.6px' }}
          >
            <div className="flex-none h-[456.245px] rotate-180 scale-y-[-100%] w-[822.404px]">
              <div 
                data-node-id="1085:3425" 
                className="relative size-full" 
                data-name="image 139 (Traced)"
              >
                <div className="absolute" style={{ inset: '-9.71% -5.39%' }}>
                  <img className="block max-w-none size-full" alt="" src={imgImage139Traced} />
                </div>
              </div>
            </div>
          </div>

          {/* Second image layer */}
          <div 
            data-node-id="1085:3416" 
            className="absolute left-0 top-0"
            style={{ width: '911px', height: '911px' }}
            data-name="image 140"
          >
            <img 
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
              style={{ objectPosition: '50% 50%' }}
              alt="" 
              src={imgImage139} 
            />
          </div>
        </div>
      </div>

      {/* Content container - top left */}
      <div className="absolute left-[144px] top-[100px] z-10">
        {/* Number and Title */}
        <div data-node-id="941:2932" className="flex flex-col gap-[34px] items-start">
          <div 
            data-node-id="941:2933" 
            className="flex gap-[25px] items-start leading-[0.93] text-[#ecf6fd]"
          >
            <p 
              data-node-id="941:2935" 
              className="text-[200px] tracking-[-6px]"
              style={{ 
                fontFamily: 'Fraunces, sans-serif',
                fontWeight: 400,
                fontVariationSettings: '"SOFT" 0, "WONK" 1'
              }}
            >
              {chapterData.number}
            </p>
            <p 
              data-node-id="941:2934" 
              className="text-[64px] tracking-[-1.92px] whitespace-pre-wrap"
              style={{ 
                fontFamily: 'Fraunces, sans-serif',
                fontWeight: 700,
                fontVariationSettings: '"SOFT" 0, "WONK" 1',
                width: '280px'
              }}
            >
              {chapterData.title}
            </p>
          </div>

          {/* Buttons */}
          <div data-node-id="941:2936" className="flex gap-[15.315px] items-center">
            <button
              onClick={onExploreClick}
              data-node-id="941:2937"
              className="bg-white h-[49.975px] flex items-center justify-center overflow-hidden px-[22.569px] py-[11.285px] rounded-[12.897px] cursor-pointer"
            >
              <p 
                data-node-id="941:2938" 
                className="text-[28.469px] leading-[1.35] tracking-[-0.5694px] bg-gradient-to-b from-[#C2185B] to-[#880E4F] bg-clip-text"
                style={{ 
                  fontFamily: 'Barmeno, sans-serif',
                  fontWeight: 500,
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {chapterData.buttonExplore}
              </p>
            </button>
            <button
              onClick={onTakeawaysClick}
              data-node-id="941:2939"
              className="border border-[#ecf6fd] h-[49.975px] flex items-center justify-center overflow-hidden px-[22.569px] py-[11.285px] rounded-[12.897px] cursor-pointer"
              style={{ borderWidth: '0.806px' }}
            >
              <p 
                data-node-id="941:2940" 
                className="text-[#ecf6fd] text-[28.469px] leading-[1.35] tracking-[-0.5694px]"
                style={{ 
                  fontFamily: 'Barmeno, sans-serif',
                  fontWeight: 500
                }}
              >
                {chapterData.buttonTakeaways}
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Question and Sections - bottom left */}
      <div 
        className="absolute left-[144px] bottom-[100px] z-10"
        style={{ width: '563px' }}
      >
        <div data-node-id="941:2914" className="flex flex-col gap-[12px] items-start">
          {/* Question */}
          <p 
            data-node-id="941:2915" 
            className="text-[#ecf6fd] text-[24px] leading-[1.28] tracking-[0.24px] whitespace-pre-wrap w-full"
            style={{ 
              fontFamily: 'Barmeno, sans-serif',
              fontWeight: 500
            }}
          >
            {chapterData.question}
          </p>

          {/* Scrollable Sections List */}
          <div 
            data-node-id="941:2916" 
            className="inline-grid grid-cols-[max-content] grid-rows-[max-content] justify-items-start leading-[0]" 
            data-name="Mask group"
          >
            <div 
              data-node-id="941:2918" 
              className="col-[1] row-[1] mt-[14px] mask-alpha mask-no-clip"
              style={{ 
                width: '587px',
                WebkitMaskImage: `url("${imgFrame1430103064}")`,
                maskImage: `url("${imgFrame1430103064}")`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: '0px -14px',
                maskPosition: '0px -14px',
                WebkitMaskSize: '567px 197px',
                maskSize: '567px 197px',
                WebkitMaskComposite: 'source-in',
                maskComposite: 'intersect'
              }}
            >
              <div 
                data-node-id="941:2919" 
                className="flex flex-col items-start overflow-x-clip overflow-y-auto w-full"
                style={{ height: '197px' }}
              >
                <div 
                  data-node-id="941:3065" 
                  className="flex flex-col gap-[13.458px] items-start"
                  style={{ width: '567px', height: '430px' }}
                >
                  {chapterData.sections.map((section, index) => (
                    <div key={index} className="w-full">
                      <a 
                        data-node-id={`941:${3066 + index * 2}`}
                        className="block cursor-pointer text-[#ecf6fd] text-[26.916px] tracking-[0.2692px] w-full"
                        style={{ 
                          fontFamily: 'Barmeno, sans-serif',
                          fontWeight: 500,
                          lineHeight: '1.28'
                        }}
                      >
                        {section}
                      </a>
                      {index < chapterData.sections.length - 1 && (
                        <div 
                          data-node-id={`941:${3067 + index * 2}`}
                          className="h-0 relative w-full"
                        >
                          <div className="absolute" style={{ inset: '-1.12px 0 0 0' }}>
                            <img className="block max-w-none size-full" alt="" src={imgLine1} />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
