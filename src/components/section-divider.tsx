import { CornerDownRight } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionDividerProps = React.HTMLAttributes<HTMLDivElement> & {
  text: string;
  isViewMore?: boolean;
};

export default function SectionDivider({
  isViewMore = true,
  text,
  className,
  ...props
}: SectionDividerProps) {
  return (
    <div
      className={cn(
        `w-full text-white flex justify-between items-center border-b-[1px] border-neutral-400 border-opacity-20 pb-[30px] mb-[80px]`,
        className
      )}
      {...props}
    >
      <div className="flex justify-center items-center gap-2">
        <CornerDownRight size={34} />
        <div className="text-[20px] sm:text-[30px] md:text-[36px]">{text}</div>
      </div>
      {isViewMore && (
        <div>
          <a
            href="/portfolio"
            className="hover:bg-white border-neutral-400 border-opacity-25 border-[1px]  hover:text-black transition-all ease-linear text-sm flex justify-center items-center rounded-3xl p-3 sm:px-[25px] sm:py-[12px] cursor-pointer"
          >
            <span>View More</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      )}
    </div>
  );
}
