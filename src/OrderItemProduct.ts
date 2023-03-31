import { Taxon } from './Taxon';

export interface OrderItemProduct {
  id: number;
  code: string;
  urlCode: string;
  defaultVariant: string;
  forceDisplayPromotion: false;
  images: {
    path: string;
  }[];
  mainTaxon: Taxon;
  productTaxons: Taxon[];
  secondLevelTaxons: Taxon[];
  trackedLetter: boolean;
}
