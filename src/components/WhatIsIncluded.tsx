import React from 'react';
import { Eye, Check } from 'lucide-react';

interface WhatIsIncludedProps {
  onInspectActivity: (activityId: 'bingo' | 'scavenger' | 'challenges') => void;
}

export const WhatIsIncluded: React.FC<WhatIsIncludedProps> = ({ onInspectActivity }) => {
  return (
    <section id="included" className="py-16 md:py-24 bg-[#17151C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#FF8A24] uppercase mb-3">
            Digital Printable Collection
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF3DE] tracking-tight mb-4 [text-wrap:balance]">
            Three Ways to Make Halloween More Fun
          </h2>
          <p className="text-base sm:text-lg text-[#FFF3DE]/80 leading-relaxed max-w-2xl mx-auto">
            Everything you need for an entertaining Halloween gathering at home, carefully designed for simple printing and immediate play.
          </p>
        </div>

        {/* 3 Visually Distinct Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: HALLOWEEN BINGO */}
          <div className="bg-[#21152F] rounded-2xl overflow-hidden border border-[#FFF3DE]/10 hover:border-[#FF8A24]/40 transition-all shadow-xl flex flex-col group">
            {/* Authentic Visual */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#17151C]">
              <img
                src="/src/assets/images/bingo_card_mockup_1793120041751.jpg"
                alt="Halloween Bingo printable game cards with festive icons and wooden table setting"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <button
                onClick={() => onInspectActivity('bingo')}
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#17151C]/90 text-[#FFF3DE] text-xs font-semibold backdrop-blur hover:bg-[#FF8A24] hover:text-[#17151C] transition-colors shadow-md cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview Sheet</span>
              </button>
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
              <div>
                <div className="text-xs font-semibold text-[#6FC6BE] uppercase tracking-wider mb-2">
                  Activity 01
                </div>
                <h3 className="font-display text-2xl font-bold text-[#FFF3DE] mb-3">
                  Halloween Bingo
                </h3>
                <p className="text-sm sm:text-base text-[#FFF3DE]/80 leading-relaxed mb-6">
                  Bring everyone to the table for a Halloween-themed bingo game that&apos;s easy to prepare and fun to play together.
                </p>
              </div>

              <div className="pt-4 border-t border-[#FFF3DE]/10 space-y-2 text-xs text-[#FFF3DE]/70">
                <div className="flex items-center gap-2 text-[#FFF3DE]">
                  <Check className="w-4 h-4 text-[#FF8A24] shrink-0" />
                  <span>Printable Halloween-themed bingo cards</span>
                </div>
                <div className="flex items-center gap-2 text-[#FFF3DE]">
                  <Check className="w-4 h-4 text-[#FF8A24] shrink-0" />
                  <span>Designed for family-friendly Halloween fun</span>
                </div>
                <div className="flex items-center gap-2 text-[#FFF3DE]">
                  <Check className="w-4 h-4 text-[#FF8A24] shrink-0" />
                  <span>Easy to prepare and play at home or gatherings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: SCAVENGER HUNT */}
          <div className="bg-[#21152F] rounded-2xl overflow-hidden border border-[#FFF3DE]/10 hover:border-[#FF8A24]/40 transition-all shadow-xl flex flex-col group">
            {/* Authentic Visual */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#17151C]">
              <img
                src="/halloween-scavenger-hunt-banner.jpeg"
                alt="Halloween Scavenger Hunt printable checklist with 3 styles, point versions, and bonus cards"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <button
                onClick={() => onInspectActivity('scavenger')}
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#17151C]/90 text-[#FFF3DE] text-xs font-semibold backdrop-blur hover:bg-[#FF8A24] hover:text-[#17151C] transition-colors shadow-md cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview Sheet</span>
              </button>
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
              <div>
                <div className="text-xs font-semibold text-[#6FC6BE] uppercase tracking-wider mb-2">
                  Activity 02
                </div>
                <h3 className="font-display text-2xl font-bold text-[#FFF3DE] mb-3">
                  Scavenger Hunt
                </h3>
                <p className="text-sm sm:text-base text-[#FFF3DE]/80 leading-relaxed mb-6">
                  Get everyone searching, exploring, and joining in with a Halloween-themed hunt featuring printable clues.
                </p>
              </div>

              <div className="pt-4 border-t border-[#FFF3DE]/10 space-y-2 text-xs text-[#FFF3DE]/70">
                <div className="flex items-center gap-2 text-[#FFF3DE]">
                  <Check className="w-4 h-4 text-[#FF8A24] shrink-0" />
                  <span>Halloween-themed clues &amp; activities</span>
                </div>
                <div className="flex items-center gap-2 text-[#FFF3DE]">
                  <Check className="w-4 h-4 text-[#FF8A24] shrink-0" />
                  <span>Encourages participation, exploration &amp; interaction</span>
                </div>
                <div className="flex items-center gap-2 text-[#FFF3DE]">
                  <Check className="w-4 h-4 text-[#FF8A24] shrink-0" />
                  <span>Suitable for gatherings with adult supervision</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: PARTY CHALLENGE CARDS */}
          <div className="bg-[#21152F] rounded-2xl overflow-hidden border border-[#FFF3DE]/10 hover:border-[#FF8A24]/40 transition-all shadow-xl flex flex-col group">
            {/* Authentic Visual */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#17151C]">
              <img
                src="/src/assets/images/challenge_cards_mockup_1793120042884.jpg"
                alt="Halloween Party Challenge Cards and charades cards printed with cute Halloween graphics"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <button
                onClick={() => onInspectActivity('challenges')}
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#17151C]/90 text-[#FFF3DE] text-xs font-semibold backdrop-blur hover:bg-[#FF8A24] hover:text-[#17151C] transition-colors shadow-md cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview Sheet</span>
              </button>
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
              <div>
                <div className="text-xs font-semibold text-[#6FC6BE] uppercase tracking-wider mb-2">
                  Activity 03
                </div>
                <h3 className="font-display text-2xl font-bold text-[#FFF3DE] mb-3">
                  Party Challenge Cards
                </h3>
                <p className="text-sm sm:text-base text-[#FFF3DE]/80 leading-relaxed mb-6">
                  Break the ice and get the laughs going with quick Halloween-themed challenges and charades that don&apos;t require special equipment.
                </p>
              </div>

              <div className="pt-4 border-t border-[#FFF3DE]/10 space-y-2 text-xs text-[#FFF3DE]/70">
                <div className="flex items-center gap-2 text-[#FFF3DE]">
                  <Check className="w-4 h-4 text-[#FF8A24] shrink-0" />
                  <span>Quick Halloween challenges &amp; charades</span>
                </div>
                <div className="flex items-center gap-2 text-[#FFF3DE]">
                  <Check className="w-4 h-4 text-[#FF8A24] shrink-0" />
                  <span>No special equipment or props required</span>
                </div>
                <div className="flex items-center gap-2 text-[#FFF3DE]">
                  <Check className="w-4 h-4 text-[#FF8A24] shrink-0" />
                  <span>Ideal for spontaneous, lively entertainment</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
