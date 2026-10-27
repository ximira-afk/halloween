import React from 'react';
import { ShoppingCart, Download, Play, Info } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Purchase the Kit',
      description: 'Complete your purchase through our secure checkout.',
      icon: ShoppingCart,
    },
    {
      number: '02',
      title: 'Access Your Digital Files',
      description: 'Follow the delivery instructions provided after purchase to access your printable PDFs.',
      icon: Download,
    },
    {
      number: '03',
      title: 'Print and Play',
      description: 'Choose your activities, print the pages you need, and get ready for a fun Halloween gathering.',
      icon: Play,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#21152F] relative border-t border-b border-[#FFF3DE]/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#FF8A24] uppercase mb-3">
            Quick &amp; Simple Process
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF3DE] tracking-tight mb-4 [text-wrap:balance]">
            Your Halloween Fun Starts in Three Simple Steps
          </h2>
          <p className="text-base sm:text-lg text-[#FFF3DE]/80 leading-relaxed max-w-xl mx-auto">
            From checkout to game time in three straightforward steps.
          </p>
        </div>

        {/* 3 Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#17151C] rounded-2xl p-7 border border-[#FFF3DE]/10 relative flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#6FC6BE] tracking-widest bg-[#21152F] px-2.5 py-1 rounded-md border border-[#6FC6BE]/20">
                      STEP {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FF8A24]/10 text-[#FF8A24] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#FFF3DE] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#FFF3DE]/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Digital Disclaimer Box */}
        <div className="mt-10 p-4 sm:p-5 bg-[#17151C]/80 rounded-xl border border-[#FF8A24]/30 max-w-2xl mx-auto flex items-start gap-3.5 text-xs sm:text-sm text-[#FFF3DE]/90">
          <Info className="w-5 h-5 text-[#FF8A24] shrink-0 mt-0.5" />
          <p>
            <strong>Digital Printable Product:</strong> Please note that all materials are delivered as digital PDF files for you to print at home or at your local print shop. No physical boxed item or printed sheets will be shipped through the mail.
          </p>
        </div>

      </div>
    </section>
  );
};
