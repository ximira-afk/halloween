import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ProblemSection } from './components/ProblemSection.tsx';
import { WhatIsIncluded } from './components/WhatIsIncluded.tsx';
import { ScavengerHuntBanner } from './components/ScavengerHuntBanner.tsx';
import { ProductShowcase } from './components/ProductShowcase.tsx';
import { Benefits } from './components/Benefits.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { WhoItsFor } from './components/WhoItsFor.tsx';
import { FinalOffer } from './components/FinalOffer.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileStickyBar } from './components/MobileStickyBar.tsx';
import { SheetPreviewModal } from './components/SheetPreviewModal.tsx';
import { LegalModal } from './components/LegalModal.tsx';
import { SellerConfigModal } from './components/SellerConfigModal.tsx';
import { SellerConfig } from './types.ts';

const DEFAULT_SELLER_CONFIG: SellerConfig = {
  checkoutUrl: 'https://pay.kiwify.com/95ZFA9o?region=intl',
  supportEmail: 'support@halloweennightrescue.com',
  storeName: 'Halloween Night Rescue Kit',
  metaPixelId: '',
};

export default function App() {
  const price = '$6.99';

  // Persistent seller configuration with automatic migration to confirmed Kiwify checkout URL
  const [sellerConfig, setSellerConfig] = useState<SellerConfig>(() => {
    try {
      const stored = localStorage.getItem('halloween_seller_config');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (
          !parsed.checkoutUrl ||
          parsed.checkoutUrl.includes('sample-halloween-rescue-kit') ||
          parsed.checkoutUrl === 'https://pay.kiwify.com/95ZFA9o'
        ) {
          parsed.checkoutUrl = 'https://pay.kiwify.com/95ZFA9o?region=intl';
          localStorage.setItem('halloween_seller_config', JSON.stringify(parsed));
        }
        return parsed;
      }
    } catch {
      // ignore
    }
    return DEFAULT_SELLER_CONFIG;
  });

  const [isSellerModalOpen, setIsSellerModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'refund' | null>(null);
  const [inspectActivityId, setInspectActivityId] = useState<'bingo' | 'scavenger' | 'challenges' | null>(null);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  // Monitor scroll for mobile sticky checkout strip
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScrolledPastHero(true);
      } else {
        setIsScrolledPastHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Save seller config update
  const handleSaveConfig = (newConfig: SellerConfig) => {
    setSellerConfig(newConfig);
    try {
      localStorage.setItem('halloween_seller_config', JSON.stringify(newConfig));
    } catch {
      // ignore
    }
  };

  // Checkout redirect handler
  const handleCheckout = () => {
    // Meta Pixel event hook if active
    if (sellerConfig.metaPixelId && typeof window !== 'undefined') {
      try {
        // Safe dispatch if fbq exists
        const win = window as unknown as { fbq?: (event: string, action: string, data: object) => void };
        if (win.fbq) {
          win.fbq('track', 'InitiateCheckout', {
            content_name: 'Halloween Night Rescue Kit',
            value: 6.99,
            currency: 'USD',
          });
        }
      } catch {
        // fail-safe
      }
    }

    // Direct user to the seller-provided Kiwify checkout URL
    const targetUrl = sellerConfig.checkoutUrl || DEFAULT_SELLER_CONFIG.checkoutUrl;
    window.location.href = targetUrl;
  };

  return (
    <div className="min-h-screen bg-[#17151C] text-[#FFF3DE] flex flex-col font-sans selection:bg-[#FF8A24] selection:text-[#17151C]">
      {/* Primary Navigation Top Bar */}
      <Header onCheckout={handleCheckout} price={price} />

      {/* Main Landing Page Flow */}
      <main className="flex-1">
        {/* SECTION A: HERO */}
        <Hero onCheckout={handleCheckout} price={price} />

        {/* SECTION B: THE PROBLEM */}
        <ProblemSection />

        {/* SECTION C: WHAT'S INCLUDED */}
        <WhatIsIncluded onInspectActivity={(id) => setInspectActivityId(id)} />

        {/* FEATURED BANNER SPOTLIGHT: HALLOWEEN SCAVENGER HUNT */}
        <ScavengerHuntBanner
          onCheckout={handleCheckout}
          onInspect={() => setInspectActivityId('scavenger')}
          price={price}
        />

        {/* SECTION D: SHOW THE PRODUCT (Print Previews) */}
        <ProductShowcase
          onInspectActivity={(id) => setInspectActivityId(id)}
          onCheckout={handleCheckout}
          price={price}
        />

        {/* SECTION E: BENEFITS */}
        <Benefits price={price} />

        {/* SECTION F: HOW IT WORKS */}
        <HowItWorks />

        {/* SECTION G: WHO IT'S FOR */}
        <WhoItsFor />

        {/* SECTION H: PRICE AND FINAL OFFER */}
        <FinalOffer onCheckout={handleCheckout} price={price} />

        {/* SECTION I: FAQ */}
        <FaqSection />
      </main>

      {/* SECTION J: FOOTER */}
      <Footer
        sellerConfig={sellerConfig}
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenSellerSettings={() => setIsSellerModalOpen(true)}
      />

      {/* Mobile Sticky CTA Bar (Strictly <15% viewport height) */}
      <MobileStickyBar
        onCheckout={handleCheckout}
        price={price}
        isVisible={isScrolledPastHero}
      />

      {/* Detail Activity Sheet Preview Modal */}
      <SheetPreviewModal
        activityId={inspectActivityId}
        onClose={() => setInspectActivityId(null)}
        onCheckout={handleCheckout}
        price={price}
      />

      {/* Legal Information Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
        sellerConfig={sellerConfig}
      />

      {/* Seller Kiwify Settings Modal */}
      <SellerConfigModal
        isOpen={isSellerModalOpen}
        onClose={() => setIsSellerModalOpen(false)}
        config={sellerConfig}
        onSave={handleSaveConfig}
      />
    </div>
  );
}
