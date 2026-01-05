interface Chapter1CoverProps {
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
const imgBab2 = "https://www.figma.com/api/mcp/asset/065ac64d-418a-440c-aa7a-10050c5f7629";
const imgGroup2608332 = "https://www.figma.com/api/mcp/asset/19c360e6-09c0-4b76-957a-473e7c77cbad";
const imgGroup2608333 = "https://www.figma.com/api/mcp/asset/a38b981c-f873-4590-9f2d-0d7c0914f538";
const imgVector535 = "https://www.figma.com/api/mcp/asset/7f3607da-40db-401d-a991-3d639d543a5b";
const imgBab1 = "https://www.figma.com/api/mcp/asset/0a1f4cf8-aaee-476e-8f23-2a6b8b684eea";
const imgVector537 = "https://www.figma.com/api/mcp/asset/4fd94429-e4e6-4247-b697-41c5c5667d63";
const imgLine1 = "https://www.figma.com/api/mcp/asset/66ce9818-b54e-432b-beb6-6e1493f1a51f";

export function Chapter1Cover({ chapterData, onExploreClick, onTakeawaysClick }: Chapter1CoverProps) {
  return (
    <div data-node-id="915:4422" className="relative w-full overflow-hidden" style={{ height: 'clamp(600px, 55.56vw, 800px)', minHeight: '600px' }}>
      {/* Background gradient - matches Figma radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-[#2350A6] via-[#123880] to-[#0D2456]" />
      
      {/* Decorative background elements */}
      <div data-node-id="911:4057" className="absolute inset-[-2.05%_0.02%_2.33%_-12.71%]">
        <div className="absolute flex inset-[-2.05%_0.02%_42.14%_20.79%] items-center justify-center">
          <div className="flex-none h-[1140.279px] rotate-[270deg] scale-y-[-100%] w-[479.329px]">
            <div data-node-id="911:3992" className="relative size-full">
              <img className="block max-w-none size-full" alt="" src={imgGroup2608332} />
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[37.75%_33.52%_2.33%_-12.71%] items-center justify-center">
          <div className="flex-none h-[1140.279px] rotate-[90deg] w-[479.329px]">
            <div data-node-id="911:4058" className="relative size-full">
              <img className="block max-w-none size-full" alt="" src={imgGroup2608333} />
            </div>
          </div>
        </div>
      </div>

      {/* Masked illustration layer */}
      <div data-node-id="911:4009" className="absolute contents left-0 top-[427px]" data-name="Mask group">
        <div data-node-id="911:4010" className="absolute h-[748.77px] left-0 top-[427px] w-[1529px]">
          <div className="absolute inset-[-39.44%_-19.31%]">
            <img className="block max-w-none size-full" alt="" src={imgVector535} />
          </div>
        </div>
        <div 
          data-node-id="911:4012" 
          className="absolute left-[-62.41px] size-[1608.179px] top-[52.1px]"
          style={{ 
            WebkitMaskImage: `url("${imgBab1}")`,
            maskImage: `url("${imgBab1}")`,
            WebkitMaskSize: '1529px 748.77px',
            maskSize: '1529px 748.77px',
            WebkitMaskPosition: '62.41px 374.896px',
            maskPosition: '62.41px 374.896px',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskComposite: 'source-in',
            maskComposite: 'intersect',
            maskMode: 'alpha'
          }}
          data-name="bab1"
        >
          <img 
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
            alt="" 
            src={imgBab2} 
          />
        </div>
        <div 
          data-node-id="911:4013" 
          className="absolute h-[14.682px] left-[771.84px] top-[622.06px] w-[18.877px]"
          style={{ 
            WebkitMaskImage: `url("${imgBab1}")`,
            maskImage: `url("${imgBab1}")`,
            WebkitMaskSize: '1529px 748.77px',
            maskSize: '1529px 748.77px',
            WebkitMaskPosition: '-771.841px -195.057px',
            maskPosition: '-771.841px -195.057px',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskComposite: 'source-in',
            maskComposite: 'intersect',
            maskMode: 'alpha'
          }}
        >
          <img className="block max-w-none size-full" alt="" src={imgVector537} />
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col gap-[34px]" style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 3rem)' }}>
        {/* Chapter number and title */}
        <div data-node-id="911:4027" className="flex flex-col sm:flex-row gap-4 sm:gap-[25px] items-start text-[#ecf6fd]">
          <p 
            data-node-id="911:4015" 
            className="font-['Fraunces'] font-normal leading-[0.93] tracking-tight shrink-0"
            style={{ 
              fontSize: 'clamp(80px, 13.89vw, 200px)',
              fontVariationSettings: '"SOFT" 0, "WONK" 1' 
            }}
          >
            {chapterData.number}
          </p>
          <div 
            data-node-id="911:4006" 
            className="font-['Fraunces'] font-bold leading-[0.93] tracking-tight whitespace-pre-wrap shrink-0"
            style={{ 
              fontSize: 'clamp(32px, 4.44vw, 64px)',
              maxWidth: '100%',
              fontVariationSettings: '"SOFT" 0, "WONK" 1' 
            }}
          >
            {chapterData.title.split('\n').map((line, i) => (
              <p key={i} className={i < chapterData.title.split('\n').length - 1 ? 'mb-0' : ''}>
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div data-node-id="911:4051" className="flex flex-col sm:flex-row gap-[15.315px] items-start sm:items-center">
          <button 
            data-node-id="911:4052" 
            className="bg-white cursor-pointer flex items-center justify-center overflow-clip rounded-[12.897px] shrink-0 w-full sm:w-auto"
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
              data-node-id="911:4053" 
              className="bg-clip-text font-['Barmeno'] font-medium leading-[1.35] tracking-tight text-transparent bg-gradient-to-r from-[#2350A6] to-[#123880] whitespace-nowrap"
              style={{ fontSize: 'clamp(18px, 1.98vw, 28.469px)' }}
            >
              {chapterData.buttonExplore}
            </p>
          </button>
          <button 
            data-node-id="911:4054" 
            className="border-[#ecf6fd] border-[0.806px] border-solid flex items-center justify-center overflow-clip rounded-[12.897px] shrink-0 w-full sm:w-auto"
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
              data-node-id="911:4055" 
              className="font-['Barmeno'] font-medium leading-[1.35] text-[#ecf6fd] tracking-tight whitespace-nowrap"
              style={{ fontSize: 'clamp(18px, 1.98vw, 28.469px)' }}
            >
              {chapterData.buttonTakeaways}
            </p>
          </button>
        </div>
      </div>

      {/* Question and sections - positioned in bottom area */}
      <div className="absolute z-10 flex flex-col gap-[18px]" style={{ bottom: 'clamp(2rem, 5vw, 4rem)', left: 'clamp(1.5rem, 5vw, 3rem)', maxWidth: 'clamp(300px, 80%, 563px)', right: 'clamp(1.5rem, 5vw, 3rem)' }}>
        <p 
          data-node-id="911:4049" 
          className="font-['Barmeno'] font-medium leading-[1.28] text-[#ecf6fd] tracking-[0.24px] whitespace-pre-wrap"
          style={{ fontSize: 'clamp(16px, 1.67vw, 24px)' }}
        >
          {chapterData.question}
        </p>
        <div data-node-id="911:4037" className="flex flex-col gap-[13.458px]">
          {chapterData.sections.map((section, index) => (
            <div key={index}>
              <a 
                data-node-id={`911:40${38 + index * 2}`}
                className="block cursor-pointer font-['Barmeno'] font-medium leading-[1.28] text-[#ecf6fd] tracking-[0.2692px] whitespace-pre-wrap hover:underline"
                style={{ fontSize: 'clamp(16px, 1.87vw, 26.916px)' }}
              >
                {section}
              </a>
              {index < chapterData.sections.length - 1 && (
                <div data-node-id={`911:40${39 + index * 2}`} className="h-0 w-full max-w-[554.028px] my-[13.458px]">
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
