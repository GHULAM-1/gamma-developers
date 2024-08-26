import { CornerDownRight } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionDividerProps = React.HTMLAttributes<HTMLDivElement> & {
  text: string;
};

export default function SectionDivider({
  text,
  className,
  ...props
}: SectionDividerProps) {
  return (
    <div
      className={cn(
        `w-full text-white flex justify-between items-center border-b border-[#FFFFFF5A] pb-[30px] mb-[80px]`,
        className
      )}
      {...props}
    >
      <div className="flex justify-center items-center gap-2">
        <CornerDownRight size={38} />
        <div className="text-[36px]">{text}</div>
      </div>
      <div>
        <a
          href="/portfolio"
          className="hover:bg-white border border-[#FFFFFF5A] hover:text-black transition-all ease-linear text-sm flex justify-center items-center rounded-3xl px-[25px] py-[12px] cursor-pointer"
        >
          <span>View More</span>
          <ArrowUpRight size={18} />
        </a>
      </div>
    </div>
  );
}
