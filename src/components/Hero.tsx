import React from 'react';
import { ArrowRight, Printer, Sparkles, FileText } from 'lucide-react';

interface HeroProps {
  onCheckout: () => void;
  price: string;
}

export const Hero: React.FC<HeroProps> = ({ onCheckout, price }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 bg-[#17151C]">
      {/* Subtle festive atmospheric glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#21152F] rounded-full blur-[120px] pointer-events-none opacity-80"
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-10 w-72 h-72 bg-[#FF8A24]/10 rounded-full blur-[90px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Direct Response Actions */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Clean unboxed category kicker without pill box */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#FF8A24] uppercase mb-4">
              <span>Digital Printable Activity Kit</span>
              <span aria-hidden="true">·</span>
              <span>US Letter & A4 Editions</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FFF3DE] tracking-tight leading-[1.1] mb-5 [text-wrap:balance]">
              Make Halloween Night <span className="text-[#FF8A24]">Unforgettable!</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#FFF3DE]/85 font-normal leading-relaxed mb-6 max-w-2xl">
              Three fun-filled printable activities to bring your Halloween party to life, without spending hours planning.
            </p>

            {/* 3 concise benefit labels (clean unboxed typographic style per design constitution) */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:text-base font-semibold text-[#FFF3DE] mb-8 pb-4 border-b border-[#21152F]">
              <span className="flex items-center gap-1.5 text-[#FF8A24]">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Halloween Bingo</span>
              </span>
              <span className="text-[#FFF3DE]/30" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-[#FF8A24]">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Scavenger Hunt</span>
              </span>
              <span className="text-[#FFF3DE]/30" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-[#FF8A24]">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Party Challenge Cards</span>
              </span>
            </div>

            {/* Price & Primary CTA Decision Box */}
            <div className="bg-[#21152F]/90 rounded-2xl p-5 sm:p-6 border border-[#FF8A24]/20 shadow-xl max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#FFF3DE]/60 font-medium">Complete 3-in-1 Kit</div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#FFF3DE]">{price}</span>
                    <span className="text-xs font-semibold text-[#6FC6BE] uppercase tracking-wide">One-Time Download</span>
                  </div>
                </div>

                <button
                  onClick={onCheckout}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-extrabold text-[#17151C] bg-[#FF8A24] hover:bg-[#E87513] active:scale-[0.98] rounded-xl shadow-lg shadow-[#FF8A24]/25 transition-all whitespace-nowrap cursor-pointer group"
                >
                  <span>GET THE HALLOWEEN KIT</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Secondary microcopy strictly per brief */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-[#FFF3DE]/70 pt-2 border-t border-[#FFF3DE]/10">
                <span className="flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-[#6FC6BE]" />
                  <span>Instant digital access</span>
                </span>
                <span className="text-[#FFF3DE]/30" aria-hidden="true">•</span>
                <span className="flex items-center gap-1">
                  <Printer className="w-3.5 h-3.5 text-[#FF8A24]" />
                  <span>Print at home</span>
                </span>
                <span className="text-[#FFF3DE]/30" aria-hidden="true">•</span>
                <span>No physical item shipped</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Product Mockup Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative backplate border */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#FF8A24]/30 bg-[#21152F] shadow-2xl">
                <img
                  src="/src/assets/images/kit_bundle_hero_1793120041313.jpg"
                  alt="Halloween Night Rescue Kit printable PDF bundle with printed bingo cards, scavenger hunt, and party challenge cards"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                />

                {/* Bottom Overlay Label on image */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#17151C] via-[#17151C]/80 to-transparent p-4 sm:p-5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-[#FFF3DE]">Printable PDF Activity Kit</span>
                    <span className="text-[#6FC6BE] font-medium">Color & Ink-Saving Versions</span>
                  </div>
                </div>
              </div>

              {/* Floating Quick Feature Callout */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-[#21152F] border border-[#FF8A24]/40 rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FF8A24]/20 flex items-center justify-center text-[#FF8A24]">
                  <Printer className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#FFF3DE]">US Letter & A4</p>
                  <p className="text-[11px] text-[#FFF3DE]/60">Ready for instant printing</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
