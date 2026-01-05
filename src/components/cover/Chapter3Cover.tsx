interface Chapter3CoverProps {
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
const imgTakBerjudul57420251220193323 = "https://www.figma.com/api/mcp/asset/e0f4c9a5-9317-4577-b29e-1460ac0319f0";
const imgTakBerjudul57420251220192158 = "https://www.figma.com/api/mcp/asset/aa1670b9-577b-46a4-aa40-1ab61f67091d";
const imgTakBerjudul57420251220192118 = "https://www.figma.com/api/mcp/asset/6d79fc1c-856c-4623-a3cf-4b23978a623a";
const imgTakBerjudul57420251220192121 = "https://www.figma.com/api/mcp/asset/fa16798a-ae29-4524-a921-e851f082d25b";
const imgTakBerjudul57420251220192225 = "https://www.figma.com/api/mcp/asset/1a33804d-f2b9-47e6-a16b-394105b56b65";
const imgImage137 = "https://www.figma.com/api/mcp/asset/a16ea387-d88e-4818-a96b-c0c4fb96de02";
const imgGroup2608332 = "https://www.figma.com/api/mcp/asset/b7a5d7b1-8518-4a92-bc67-1bb3c4b446b2";
const imgGroup2608333 = "https://www.figma.com/api/mcp/asset/0aadecad-9168-41ae-92e8-330e5e51916f";
const imgTakBerjudul57420251220193320 = "https://www.figma.com/api/mcp/asset/57528cee-8bc3-4b61-8102-cca3644d69b4";
const imgUntitled191Traced = "https://www.figma.com/api/mcp/asset/d1b52da4-dba2-4362-b21b-f87d40e70c37";
const imgLine1 = "https://www.figma.com/api/mcp/asset/d11e2dec-4d69-4739-8aee-6d2ef0db96df";

export function Chapter3Cover({ chapterData, onExploreClick, onTakeawaysClick }: Chapter3CoverProps) {
  return (
    <div data-node-id="915:5517" className="relative w-full overflow-hidden" style={{ height: 'clamp(600px, 55.56vw, 800px)', minHeight: '600px' }}>
      {/* Background gradient - purple theme for Chapter 3 */}
      <div className="absolute inset-0 bg-gradient-radial from-[#3E1192] via-[#3B1089] to-[#2A0C63]" />
      
      {/* Decorative background elements wrapper */}
      <div data-node-id="1002:6363" className="absolute left-[-408px] top-[-653px]">
        <div data-node-id="915:5518" className="absolute inset-[-2.05%_0.02%_2.33%_-12.71%]">
          <div className="absolute flex inset-[0_0_39.92%_29.73%] items-center justify-center">
            <div className="flex-none h-[1140.279px] rotate-[270deg] scale-y-[-100%] w-[479.329px]">
              <div data-node-id="915:5519" className="relative size-full">
                <img className="block max-w-none size-full" alt="" src={imgGroup2608332} />
              </div>
            </div>
          </div>
          <div className="absolute flex inset-[39.92%_29.73%_0_0] items-center justify-center">
            <div className="flex-none h-[1140.279px] rotate-[90deg] w-[479.329px]">
              <div data-node-id="915:5528" className="relative size-full">
                <img className="block max-w-none size-full" alt="" src={imgGroup2608333} />
              </div>
            </div>
          </div>
        </div>

        {/* Complex illustration layer */}
        <div data-node-id="915:5916" className="absolute left-[-408px] top-[-653px]">
          <div data-node-id="915:5917" className="absolute left-0 top-0">
            <div data-node-id="915:5918" className="absolute left-[188.21px] top-0" data-name="Mask group" />
            <div 
              data-node-id="915:5920" 
              className="absolute h-[1587.724px] left-[588.29px] top-[370.44px] w-[1122.451px]" 
              data-name="Tak berjudul574_20251220193323"
            >
              <img 
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                alt="" 
                src={imgTakBerjudul57420251220193323} 
              />
            </div>
            <div 
              data-node-id="915:5921" 
              className="absolute h-[1142.825px] left-[1071px] top-[392px] w-[1363.24px]" 
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
            <div className="absolute flex h-[1461.941px] items-center justify-center left-[1089px] top-[613px] w-[1333.273px]">
              <div className="flex-none rotate-[209.99deg] scale-y-[-100%]">
                <div 
                  data-node-id="915:5922" 
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
            <div className="absolute flex h-[1767.172px] items-center justify-center left-[563.1px] top-[307.47px] w-[1249.312px]">
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <div 
                  data-node-id="915:5923" 
                  className="h-[1767.172px] relative w-[1249.312px]" 
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
              data-node-id="915:5924" 
              className="absolute h-[1434.466px] left-0 top-[576px] w-[1014.104px]" 
              data-name="Tak berjudul574_20251220192225"
            >
              <img 
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                alt="" 
                src={imgTakBerjudul57420251220192225} 
              />
            </div>
            <div 
              data-node-id="915:5927" 
              className="absolute h-[1825.971px] left-[619.35px] top-[188.61px] w-[1290.881px]"
              style={{ 
                WebkitMaskImage: `url("${imgTakBerjudul57420251220193320}")`,
                maskImage: `url("${imgTakBerjudul57420251220193320}")`,
                WebkitMaskSize: '1315.901px 633.724px',
                maskSize: '1315.901px 633.724px',
                WebkitMaskPosition: '-51.432px 1076.798px',
                maskPosition: '-51.432px 1076.798px',
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
          <div data-node-id="1085:3399" className="absolute left-[424px] top-[782px]">
            <div data-node-id="1085:3400" className="absolute top-[307px] left-[41px] right-0 bottom-0" data-name="Untitled (19) 1 (Traced)">
              <div className="absolute inset-[-12.8%_-6.6%]">
                <img className="block max-w-none size-full" alt="" src={imgUntitled191Traced} />
              </div>
            </div>
            <div 
              data-node-id="1085:3401" 
              className="absolute left-0 size-[1070px] top-0" 
              data-name="image 137"
            >
              <img 
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                alt="" 
                src={imgImage137} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 px-12 py-16 flex flex-col gap-[34px]">
        {/* Chapter number and title */}
        <div data-node-id="915:5543" className="flex gap-[25px] items-start text-[#ecf6fd] leading-[0.93]">
          <p 
            data-node-id="915:5544" 
            className="font-['Fraunces'] font-normal text-[200px] tracking-[-6px] shrink-0"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            {chapterData.number}
          </p>
          <p 
            data-node-id="915:5545" 
            className="font-['Fraunces'] font-bold text-[64px] tracking-[-1.92px] w-[315px] whitespace-pre-wrap shrink-0"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            {chapterData.title}
          </p>
        </div>

        {/* Buttons */}
        <div data-node-id="915:5546" className="flex gap-[15.315px] items-center">
          <button 
            data-node-id="915:5547" 
            className="bg-white cursor-pointer flex h-[49.975px] items-center justify-center overflow-clip px-[22.569px] py-[11.285px] rounded-[12.897px] shrink-0"
            onClick={onExploreClick}
          >
            <p 
              data-node-id="915:5548" 
              className="bg-clip-text font-['Barmeno'] font-medium leading-[1.35] text-[28.469px] tracking-[-0.5694px] text-transparent bg-gradient-to-r from-[#3E1192] to-[#2A0C63]"
            >
              {chapterData.buttonExplore}
            </p>
          </button>
          <button 
            data-node-id="915:5549" 
            className="border-[#ecf6fd] border-[0.806px] border-solid flex h-[49.975px] items-center justify-center overflow-clip px-[22.569px] py-[11.285px] rounded-[12.897px] shrink-0"
            onClick={onTakeawaysClick}
          >
            <p 
              data-node-id="915:5550" 
              className="font-['Barmeno'] font-medium leading-[1.35] text-[#ecf6fd] text-[28.469px] tracking-[-0.5694px]"
            >
              {chapterData.buttonTakeaways}
            </p>
          </button>
        </div>
      </div>

      {/* Question and sections - positioned in bottom area */}
      <div className="absolute bottom-16 left-12 z-10 flex flex-col gap-[18px] w-[563px]">
        <p 
          data-node-id="915:5552" 
          className="font-['Barmeno'] font-medium leading-[1.28] text-[#ecf6fd] text-[24px] tracking-[0.24px] whitespace-pre-wrap"
        >
          {chapterData.question}
        </p>
        <div data-node-id="915:5553" className="flex flex-col gap-[13.458px]">
          {chapterData.sections.map((section, index) => (
            <div key={index}>
              <a 
                data-node-id={`915:55${54 + index * 2}`}
                className="block cursor-pointer font-['Barmeno'] font-medium leading-[1.28] text-[#ecf6fd] text-[26.916px] tracking-[0.2692px] whitespace-pre-wrap hover:underline"
              >
                {section}
              </a>
              {index < chapterData.sections.length - 1 && (
                <div data-node-id={`915:55${55 + index * 2}`} className="h-0 w-[554.028px] my-[13.458px]">
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
  );
}
