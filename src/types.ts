export interface SellerConfig {
  checkoutUrl: string;
  supportEmail: string;
  storeName: string;
  metaPixelId?: string;
}

export interface ActivityDetail {
  id: 'bingo' | 'scavenger' | 'challenges';
  title: string;
  tagline: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  specs: string[];
  samplePreviewTitle: string;
  sampleItems: string[];
}
