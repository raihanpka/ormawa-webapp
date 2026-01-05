import { cn } from "@/lib/utils";

const imgSubtract = "http://localhost:3845/assets/db14e31c3239ba8145346ecca464e369be03e587.svg";
const imgSubtract1 = "http://localhost:3845/assets/a73ee63a09bfd8895a76102a71199ad7cebc8eea.svg";
const imgSubtract2 = "http://localhost:3845/assets/8e0fd665dc0e2ec356f399ed49f01da8a0cc8e27.svg";
const imgUnion = "http://localhost:3845/assets/05c66c2522bdc41bc4d367e679a02270f7e9ed5d.svg";
const imgUnion1 = "http://localhost:3845/assets/0b75e8c3da3e5c6c47e33c8a7ba7ba8400a94937.svg";
const imgSubtract3 = "http://localhost:3845/assets/eac2546ebbef9368767916912dc5136c7715aa87.svg";
const imgSubtract4 = "http://localhost:3845/assets/a90ee91f89afb488f6a5c8786c4de51c85b18f6c.svg";

type LogoProps = {
  className?: string;
  variant?: "original" | "white";
};

export default function Logo({ className, variant = "original" }: LogoProps) {
  return (
    <div className={cn("relative", className)} data-variant={variant}>
      <div className="absolute inset-[0_56.39%_0_0]">
        <img alt="" className="block max-w-none size-full" src={imgSubtract} />
      </div>
      <div className="absolute inset-[0_56.39%_0.03%_0]">
        <img alt="" className="block max-w-none size-full" src={imgSubtract1} />
      </div>
      <div className="absolute inset-[0_56.39%_0.03%_0]">
        <img alt="" className="block max-w-none size-full" src={imgSubtract2} />
      </div>
      <div className="absolute bottom-0 left-[27.63%] right-0 top-1/4">
        <img alt="" className="block max-w-none size-full" src={imgUnion} />
      </div>
      <div className="absolute bottom-1/4 left-[27.63%] right-[49.54%] top-1/4">
        <img alt="" className="block max-w-none size-full" src={imgUnion1} />
      </div>
      <div className="absolute inset-[40%_24.66%_34%_54.57%]">
        <img alt="" className="block max-w-none size-full" src={imgSubtract3} />
      </div>
      <div className="absolute inset-[40%_24.66%_34%_55.02%]">
        <img alt="" className="block max-w-none size-full" src={imgSubtract4} />
      </div>
    </div>
  );
}
