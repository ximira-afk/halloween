import React from 'react';
import { Home, PartyPopper, Smile, Users2, ShieldAlert } from 'lucide-react';

export const WhoItsFor: React.FC = () => {
  const categories = [
    {
      title: 'Family Halloween nights',
      description: 'Spend quality time together on October 31st with easy games everyone can join.',
      icon: Home,
    },
    {
      title: 'Halloween parties',
      description: 'Keep guests smiling and mingling with icebreaker challenge cards and interactive group bingo.',
      icon: PartyPopper,
    },
    {
      title: 'At-home activities with kids',
      description: 'Exciting scavenger hunt clues and friendly themes that keep children engaged indoors or out.',
      icon: Smile,
    },
    {
      title: 'Small gatherings with friends and relatives',
      description: 'Relaxed, low-pressure entertainment that doesn&apos;t require elaborate setups or rules.',
      icon: Users2,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#17151C] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#FF8A24] uppercase mb-3">
            Designed for American Families &amp; Hosts
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF3DE] tracking-tight mb-4 [text-wrap:balance]">
            Perfect for Your Halloween Plans
          </h2>
          <p className="text-base sm:text-lg text-[#FFF3DE]/80 leading-relaxed max-w-xl mx-auto">
            Flexible printable activities tailored for any home celebration or friendly Halloween gathering.
          </p>
        </div>

        {/* 4 Clean Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {categories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#21152F] rounded-2xl p-6 sm:p-7 border border-[#FFF3DE]/10 hover:border-[#6FC6BE]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#6FC6BE]/10 text-[#6FC6BE] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#FFF3DE] mb-2.5">
                    {item.title}
                  </h3>
                  <p 
                    className="text-sm text-[#FFF3DE]/75 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Short Note strictly required by the brief */}
        <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-[#FFF3DE]/70 bg-[#21152F]/70 py-3.5 px-5 rounded-xl border border-[#FFF3DE]/10 max-w-xl mx-auto text-center">
          <ShieldAlert className="w-4 h-4 text-[#FF8A24] shrink-0" />
          <span>Adult supervision is recommended for activities involving children.</span>
        </div>

      </div>
    </section>
  );
};
