import { TaxonProfit } from './TaxonProfit';
import { UnformatedTaxon } from './UnformatedTaxon';

export type Taxon = {
  id: number;
  code: string;
  name: string;
  urlCode?: string;
  images: string;
  children?: UnformatedTaxon[];
  enabledChildrenTaxons?: UnformatedTaxon[];
  totalProducts?: number;
  level?: number;
  taxonProfit?: TaxonProfit[];
  taxon?: Taxon;
};
