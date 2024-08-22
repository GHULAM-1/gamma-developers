import { CornerDownRight } from "lucide-react";
import { ArrowUpRight } from 'lucide-react';

export type SectionDividerType = {
  text: string;
};

export default function SectionDivider({ text }: SectionDividerType) {
  return (
    <div className="flex justify-between items-center mb-14 border-b-[1px] text-white">
      <div className="flex items-center mb-2">
        <div className="">
          <CornerDownRight size={40}/>
        </div>
        <div className="ml-2 text-3xl">{text}</div>
      </div>
      <div className="flex items-center gap-1 hover:bg-lime-400 hover:text-black transition hover:ease-in-out border-[1px] rounded-full px-3 py-1">
        <button>View All

        </button>
        <div>
        <ArrowUpRight size={20}/>

        </div>
      </div>
    </div>
  );
}
