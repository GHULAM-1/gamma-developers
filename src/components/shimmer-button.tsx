import ShimmerButton from "@/components/magicui/shimmer-button";
import { ArrowUpRight } from 'lucide-react';

export function ShimmerButtonDemo() {
  return (
    <div className="z-10 flex items-center justify-center">
      <ShimmerButton shimmerColor="#D0FF71" className="shadow-2xl flex gap-3">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
         Contact Us
        </span>
        <span>
            <ArrowUpRight/>
        </span>
      </ShimmerButton>
    </div>
  );
}
