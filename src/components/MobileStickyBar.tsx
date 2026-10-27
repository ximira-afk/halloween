import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface MobileStickyBarProps {
  onCheckout: () => void;
  price: string;
  isVisible: boolean;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onCheckout,
  price,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <aside
      aria-label="Quick Checkout Action"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#17151C]/95 backdrop-blur-md border-t border-[#FF8A24]/30 px-4 py-2.5 shadow-2xl transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-black text-lg text-[#FFF3DE]">{price}</span>
            <span className="text-[10px] uppercase font-bold text-[#FF8A24]">USD</span>
          </div>
          <span className="text-[11px] text-[#FFF3DE]/70 leading-none">3 Printable Activities</span>
        </div>

        <button
          onClick={onCheckout}
          className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-extrabold text-[#17151C] bg-[#FF8A24] active:bg-[#E87513] rounded-lg shadow-md whitespace-nowrap cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span>GET THE KIT</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </button>
      </div>
    </aside>
  );
};
