import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Printer, FileText } from 'lucide-react';

interface FinalOfferProps {
  onCheckout: () => void;
  price: string;
}

export const FinalOffer: React.FC<FinalOfferProps> = ({ onCheckout, price }) => {
  return (
    <section className="py-16 md:py-24 bg-[#21152F] relative border-t border-[#FFF3DE]/5 overflow-hidden">
      {/* Background festive warm ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF8A24]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Offer Container Card */}
        <div className="bg-[#17151C] rounded-3xl p-8 sm:p-12 border-2 border-[#FF8A24]/30 shadow-2xl text-center relative">
          
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#FF8A24] uppercase mb-3">
            Instant Digital Download
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFF3DE] tracking-tight mb-4 [text-wrap:balance]">
            Ready to Rescue Halloween Night?
          </h2>

          <p className="text-base sm:text-lg text-[#FFF3DE]/85 leading-relaxed max-w-xl mx-auto mb-8">
            Get the Halloween Night Rescue Kit and have three types of printable activities ready for your next spooky celebration.
          </p>

          {/* Included Activity Recap */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-2xl mx-auto text-left">
            <div className="bg-[#21152F] p-3.5 rounded-xl border border-[#FFF3DE]/5 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF8A24] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#FFF3DE]">Halloween Bingo</span>
            </div>
            <div className="bg-[#21152F] p-3.5 rounded-xl border border-[#FFF3DE]/5 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF8A24] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#FFF3DE]">Scavenger Hunt</span>
            </div>
            <div className="bg-[#21152F] p-3.5 rounded-xl border border-[#FFF3DE]/5 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF8A24] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#FFF3DE]">Party Challenge Cards</span>
            </div>
          </div>

          {/* Price Callout (Consistent $6.99 USD without fake discount) */}
          <div className="mb-8">
            <div className="text-xs text-[#FFF3DE]/60 uppercase tracking-widest font-semibold mb-1">
              One-Time Payment
            </div>
            <div className="font-display text-5xl sm:text-6xl font-black text-[#FFF3DE] tracking-tight">
              {price} <span className="text-xl sm:text-2xl font-bold text-[#FF8A24]">USD</span>
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="max-w-md mx-auto mb-5">
            <button
              onClick={onCheckout}
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-extrabold text-[#17151C] bg-[#FF8A24] hover:bg-[#E87513] active:scale-[0.98] rounded-xl shadow-xl shadow-[#FF8A24]/20 transition-all cursor-pointer group"
            >
              <span>GET MY HALLOWEEN KIT</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Supporting Microcopy strictly per brief */}
          <p className="text-xs sm:text-sm text-[#FFF3DE]/70 font-medium mb-6">
            Digital printable product • No physical shipment
          </p>

          {/* Delivery & Security Assurance Badges */}
          <div className="pt-6 border-t border-[#FFF3DE]/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#FFF3DE]/60">
            <span className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#6FC6BE]" />
              <span>US Letter &amp; A4 Formats</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Printer className="w-4 h-4 text-[#FF8A24]" />
              <span>Color &amp; Ink-Saving Versions</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#6FC6BE]" />
              <span>Secure Kiwify Checkout</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
