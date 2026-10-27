import React from 'react';
import { Sparkles, Printer, Smartphone, Layers, CheckCircle, ArrowRight, Eye } from 'lucide-react';

interface ScavengerHuntBannerProps {
  onCheckout: () => void;
  onInspect: () => void;
  price: string;
}

export const ScavengerHuntBanner: React.FC<ScavengerHuntBannerProps> = ({
  onCheckout,
  onInspect,
  price,
}) => {
  return (
    <section className="py-12 md:py-18 bg-[#17151C] relative overflow-hidden border-t border-b border-[#21152F]">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FF8A24]/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container Card */}
        <div className="bg-[#21152F] rounded-3xl border-2 border-[#FF8A24]/40 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: The Real Product Banner Image */}
            <div className="lg:col-span-6 relative group">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#FF8A24]/30 bg-[#17151C] shadow-2xl">
                <img
                  src="/halloween-scavenger-hunt-banner.jpeg"
                  alt="Halloween Scavenger Hunt printable kit featuring 3 styles, point-scoring versions, and bonus printable cards"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Quick Zoom Overlay Button */}
                <button
                  onClick={onInspect}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#17151C]/90 text-[#FFF3DE] text-xs font-semibold backdrop-blur hover:bg-[#FF8A24] hover:text-[#17151C] transition-colors shadow-lg cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Full Resolution</span>
                </button>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -left-3 bg-[#FF8A24] text-[#17151C] text-xs font-black px-3.5 py-1 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Included in Kit</span>
              </div>
            </div>

            {/* Right: Key Verified Features from the Banner */}
            <div className="lg:col-span-6 flex flex-col justify-between text-left space-y-6">
              
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#6FC6BE] uppercase mb-2">
                  <span>Official Activity Spotlight</span>
                  <span aria-hidden="true">·</span>
                  <span>Activity 02</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFF3DE] tracking-tight leading-tight mb-3">
                  Halloween Scavenger Hunt
                </h3>

                <p className="text-base text-[#FFF3DE]/80 leading-relaxed mb-6">
                  Get everyone searching, exploring, and laughing with printable clue sheets and checklists designed for seamless family fun.
                </p>

                {/* Verified Specs from the Banner */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="bg-[#17151C] p-3.5 rounded-xl border border-[#FFF3DE]/10 flex items-start gap-3">
                    <Layers className="w-4 h-4 text-[#FF8A24] shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-[#FFF3DE] block mb-0.5">3 Styles Included</strong>
                      <span className="text-[#FFF3DE]/70">Vibrant orange, classic white, and ink-friendly designs.</span>
                    </div>
                  </div>

                  <div className="bg-[#17151C] p-3.5 rounded-xl border border-[#FFF3DE]/10 flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#6FC6BE] shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-[#FFF3DE] block mb-0.5">2 Play Versions</strong>
                      <span className="text-[#FFF3DE]/70">Choose friendly 5-point scoring or casual checklist play.</span>
                    </div>
                  </div>

                  <div className="bg-[#17151C] p-3.5 rounded-xl border border-[#FFF3DE]/10 flex items-start gap-3">
                    <Printer className="w-4 h-4 text-[#FF8A24] shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-[#FFF3DE] block mb-0.5">Bonus Printable Cards</strong>
                      <span className="text-[#FFF3DE]/70">Cut-out cards to hide around rooms or the backyard.</span>
                    </div>
                  </div>

                  <div className="bg-[#17151C] p-3.5 rounded-xl border border-[#FFF3DE]/10 flex items-start gap-3">
                    <Smartphone className="w-4 h-4 text-[#6FC6BE] shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-[#FFF3DE] block mb-0.5">Print or Play Digitally</strong>
                      <span className="text-[#FFF3DE]/70">Print on standard paper or mark off on a tablet screen.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={onCheckout}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-extrabold text-[#17151C] bg-[#FF8A24] hover:bg-[#E87513] active:scale-[0.98] rounded-xl shadow-lg transition-all cursor-pointer group"
                >
                  <span>GET FULL KIT · {price}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={onInspect}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#FFF3DE] bg-[#17151C] hover:bg-[#17151C]/80 rounded-xl border border-[#FFF3DE]/10 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#FF8A24]" />
                  <span>View Printable Pages</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
