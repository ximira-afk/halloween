import React from 'react';
import { Clock, CheckCircle2, HeartHandshake } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#21152F] relative border-t border-b border-[#FFF3DE]/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#FF8A24] uppercase mb-3">
            Simple Solutions for Busy Parents & Hosts
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF3DE] tracking-tight mb-6 [text-wrap:balance]">
            Need a Little Halloween Inspiration?
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#FFF3DE]/85 leading-relaxed">
            <p>
              Between decorations, treats, costumes, and party prep, planning Halloween fun can quickly become another thing on your to-do list.
            </p>
            <p className="font-medium text-[#FFF3DE]">
              The Halloween Night Rescue Kit gives you ready-to-use activities to help bring everyone together, without having to plan every game from scratch.
            </p>
          </div>
        </div>

        {/* Empathy & Relief Comparison Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Common Preparation Hurdle */}
          <div className="bg-[#17151C]/70 rounded-2xl p-6 sm:p-8 border border-[#FFF3DE]/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#FFF3DE]">
                  The Usual Halloween Hustle
                </h3>
              </div>
              <p className="text-sm text-[#FFF3DE]/70 leading-relaxed mb-6">
                You want the night to feel festive and exciting for everyone, but the clock is ticking:
              </p>
              <ul className="space-y-3 text-sm text-[#FFF3DE]/80">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Scouring social media and Pinterest for games hours before guests arrive</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Buying multiple separate activity packs or expensive props that only get used once</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Worrying whether kids and guests will wander off or stay engaged</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[#FFF3DE]/10 text-xs text-[#FFF3DE]/50">
              Limited time shouldn&apos;t keep your family from having a magical evening.
            </div>
          </div>

          {/* Card 2: The Halloween Night Rescue Solution */}
          <div className="bg-[#17151C] rounded-2xl p-6 sm:p-8 border-2 border-[#FF8A24]/40 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#FF8A24]/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF8A24]/20 flex items-center justify-center text-[#FF8A24] shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#FFF3DE]">
                  The Easy Rescue Solution
                </h3>
              </div>
              <p className="text-sm text-[#FFF3DE]/80 leading-relaxed mb-6">
                Open your digital kit, choose your activities, and print in just minutes:
              </p>
              <ul className="space-y-3 text-sm text-[#FFF3DE]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6FC6BE] shrink-0 mt-0.5" />
                  <span><strong>Instant 3-in-1 variety:</strong> Bingo, Scavenger Hunt, and Party Challenges ready immediately</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6FC6BE] shrink-0 mt-0.5" />
                  <span><strong>Zero complex rules:</strong> Pick up and play with kids, teens, and adults right at the table</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6FC6BE] shrink-0 mt-0.5" />
                  <span><strong>Less prep stress:</strong> Spend your evening smiling and enjoying the party instead of managing it</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[#FF8A24]/20 flex items-center justify-between text-xs font-semibold text-[#FF8A24]">
              <span>Ready in minutes with standard printer paper</span>
              <span className="text-[#6FC6BE] font-mono">$6.99</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
