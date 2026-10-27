import React, { useState } from 'react';
import { Layers, Printer, FileDown, CheckCircle, Eye, Sparkles } from 'lucide-react';

interface ProductShowcaseProps {
  onInspectActivity: (activityId: 'bingo' | 'scavenger' | 'challenges') => void;
  onCheckout: () => void;
  price: string;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onInspectActivity,
  onCheckout,
  price,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'bingo' | 'scavenger' | 'challenges'>('all');

  const previews = [
    {
      id: 'bingo' as const,
      name: 'Halloween Bingo Cards',
      category: 'Family Game',
      image: '/src/assets/images/bingo_card_mockup_1793120041751.jpg',
      alt: 'Crisp Halloween Bingo printable card sheet preview with 5x5 grid',
      features: ['5x5 grid with friendly Halloween icons', 'Easy calling sheet included', 'Color & ink-saving versions'],
    },
    {
      id: 'scavenger' as const,
      name: 'Scavenger Hunt Clues & Checklist',
      category: 'Active Exploration',
      image: '/halloween-scavenger-hunt-banner.jpeg',
      alt: 'Official Halloween Scavenger Hunt banner showing 3 styles, point versions, and bonus printable cards',
      features: ['3 styles: Orange, white & ink-saving', '2 versions: With points or casual checklist', 'Bonus printable cards included'],
    },
    {
      id: 'challenges' as const,
      name: 'Party Challenge Cards',
      category: 'Group Fun & Charades',
      image: '/src/assets/images/challenge_cards_mockup_1793120042884.jpg',
      alt: 'Printed Party Challenge and charades cards with rounded corner outlines',
      features: ['Quick charades & hilarious actions', 'Zero special props required', 'Spontaneous fun for kids and adults'],
    },
  ];

  return (
    <section id="previews" className="py-16 md:py-24 bg-[#21152F] relative border-t border-b border-[#FFF3DE]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#FF8A24] uppercase mb-3">
            Real Printable PDF Previews
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF3DE] tracking-tight mb-4 [text-wrap:balance]">
            Print It. Set It Up. Let the Fun Begin.
          </h2>
          <p className="text-base sm:text-lg text-[#FFF3DE]/80 leading-relaxed max-w-2xl mx-auto">
            Take a look at the actual printable sheets. Clear typography, friendly Halloween illustrations, and ink-friendly designs made for everyday printers.
          </p>

          {/* Interactive filter tabs (per design constitution functional button rules) */}
          <div className="mt-8 inline-flex items-center p-1 bg-[#17151C] rounded-xl border border-[#FFF3DE]/10 shadow-inner">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-[#FF8A24] text-[#17151C] shadow-sm'
                  : 'text-[#FFF3DE]/70 hover:text-[#FFF3DE]'
              }`}
            >
              All Activities
            </button>
            <button
              onClick={() => setActiveTab('bingo')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'bingo'
                  ? 'bg-[#FF8A24] text-[#17151C] shadow-sm'
                  : 'text-[#FFF3DE]/70 hover:text-[#FFF3DE]'
              }`}
            >
              Bingo
            </button>
            <button
              onClick={() => setActiveTab('scavenger')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'scavenger'
                  ? 'bg-[#FF8A24] text-[#17151C] shadow-sm'
                  : 'text-[#FFF3DE]/70 hover:text-[#FFF3DE]'
              }`}
            >
              Scavenger Hunt
            </button>
            <button
              onClick={() => setActiveTab('challenges')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'challenges'
                  ? 'bg-[#FF8A24] text-[#17151C] shadow-sm'
                  : 'text-[#FFF3DE]/70 hover:text-[#FFF3DE]'
              }`}
            >
              Party Challenges
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {previews
            .filter((item) => activeTab === 'all' || activeTab === item.id)
            .map((item) => (
              <div
                key={item.id}
                className="bg-[#17151C] rounded-2xl overflow-hidden border border-[#FFF3DE]/10 shadow-xl flex flex-col group hover:border-[#FF8A24]/40 transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#21152F]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17151C] via-transparent to-transparent opacity-80" />
                  
                  <button
                    onClick={() => onInspectActivity(item.id)}
                    className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#21152F]/90 text-[#FFF3DE] text-xs font-semibold backdrop-blur hover:bg-[#FF8A24] hover:text-[#17151C] transition-colors shadow-md cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Zoom Sheet</span>
                  </button>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold text-[#6FC6BE] uppercase tracking-wider mb-1">
                      {item.category}
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#FFF3DE] mb-3">
                      {item.name}
                    </h3>
                    <ul className="space-y-2 mb-4">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-[#FFF3DE]/80">
                          <CheckCircle className="w-3.5 h-3.5 text-[#FF8A24] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onInspectActivity(item.id)}
                    className="w-full py-2 px-3 text-xs font-semibold text-[#FFF3DE] bg-[#21152F] hover:bg-[#FF8A24] hover:text-[#17151C] rounded-lg transition-colors border border-[#FFF3DE]/10 cursor-pointer"
                  >
                    Inspect Sample Details
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Download Package Overview Strip (Neat summary per brief) */}
        <div className="bg-[#17151C] rounded-2xl p-6 sm:p-8 border border-[#FF8A24]/30 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#FF8A24] uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Complete Downloadable Package Overview</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#FFF3DE]">
                Print-Ready Formats Included with Every Order
              </h3>
              <p className="text-sm text-[#FFF3DE]/80 leading-relaxed">
                Whether you live in the United States or abroad, using a laser or inkjet printer, your download includes matching format files:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-[#FFF3DE]/80 bg-[#21152F] p-3 rounded-xl border border-[#FFF3DE]/5">
                  <Printer className="w-4 h-4 text-[#FF8A24] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FFF3DE] block mb-0.5">US Letter (8.5&quot; x 11&quot;) &amp; A4 Formats</strong>
                    Fits standard printer trays without awkward edge cropping.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#FFF3DE]/80 bg-[#21152F] p-3 rounded-xl border border-[#FFF3DE]/5">
                  <FileDown className="w-4 h-4 text-[#6FC6BE] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FFF3DE] block mb-0.5">Vibrant Color &amp; Ink-Saving Editions</strong>
                    Save expensive ink cartridges while keeping the graphics crisp.
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-[#21152F] rounded-xl border border-[#FFF3DE]/10 text-center">
              <span className="text-xs uppercase tracking-wider text-[#FFF3DE]/60 mb-1">Instant PDF Download</span>
              <span className="font-display text-3xl font-extrabold text-[#FFF3DE] mb-2">{price}</span>
              <p className="text-[11px] text-[#FFF3DE]/70 mb-4">No shipping wait • Ready to print immediately</p>
              <button
                onClick={onCheckout}
                className="w-full py-3 px-4 text-sm font-bold text-[#17151C] bg-[#FF8A24] hover:bg-[#E87513] rounded-lg shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Kit · {price}</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
