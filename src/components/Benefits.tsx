import React from 'react';
import { Zap, Printer, Users, DollarSign } from 'lucide-react';

interface BenefitsProps {
  price: string;
}

export const Benefits: React.FC<BenefitsProps> = ({ price }) => {
  const benefitList = [
    {
      title: 'Ready to Use',
      description: 'Spend less time inventing games and more time enjoying the evening.',
      icon: Zap,
      accentColor: 'text-[#FF8A24]',
      bgAccent: 'bg-[#FF8A24]/10',
    },
    {
      title: 'Easy to Print',
      description: 'Download your files and print the activities you want to use.',
      icon: Printer,
      accentColor: 'text-[#6FC6BE]',
      bgAccent: 'bg-[#6FC6BE]/10',
    },
    {
      title: 'Made for Group Fun',
      description: 'Bring family members and party guests together through interactive activities.',
      icon: Users,
      accentColor: 'text-[#FF8A24]',
      bgAccent: 'bg-[#FF8A24]/10',
    },
    {
      title: 'Affordable Halloween Entertainment',
      description: `Get three types of activities in one convenient digital kit for ${price}.`,
      icon: DollarSign,
      accentColor: 'text-[#6FC6BE]',
      bgAccent: 'bg-[#6FC6BE]/10',
    },
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-[#17151C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#FF8A24] uppercase mb-3">
            Why Parents Love It
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF3DE] tracking-tight mb-4 [text-wrap:balance]">
            More Fun. Less Planning.
          </h2>
          <p className="text-base sm:text-lg text-[#FFF3DE]/80 leading-relaxed max-w-xl mx-auto">
            Everything designed with one goal: make your Halloween gathering feel memorable, active, and easy to run.
          </p>
        </div>

        {/* 4 Short Benefit Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitList.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-[#21152F] rounded-2xl p-6 sm:p-7 border border-[#FFF3DE]/10 hover:border-[#FF8A24]/30 transition-all shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${benefit.bgAccent} flex items-center justify-center ${benefit.accentColor} mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#FFF3DE] mb-2.5">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#FFF3DE]/80 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
