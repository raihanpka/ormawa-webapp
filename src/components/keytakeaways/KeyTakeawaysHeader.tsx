import { cn } from "@/lib/utils";

export function KeyTakeawaysHeader({ className }: { className?: string }) {
  return (
    <div 
      className={cn(
        "relative text-center text-4xl md:text-[72px] leading-[1.1] md:leading-[0.93] tracking-[-1px] md:tracking-[-2.16px] bg-gradient-to-b from-[#2350A6] to-[#0D2456] bg-clip-text z-10",
        className
      )}
      style={{
        fontFamily: 'Fraunces, sans-serif',
        fontWeight: 700,
        fontStyle: 'italic',
        fontVariationSettings: '"SOFT" 0, "WONK" 1',
        WebkitTextFillColor: 'transparent'
      }}
      data-node-id="976:3086"
    >
      <p className="mb-0">The year 2025,</p>
      <p>Ormawa in Rewind</p>
    </div>
  );
}
