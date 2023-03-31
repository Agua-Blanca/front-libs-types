import { Taxon } from './Taxon';

export interface UnformatedTaxon extends Taxon {
  translations?: {
    fr_FR: {
      name: string;
    };
  };
}
