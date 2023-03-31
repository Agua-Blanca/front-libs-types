import { OrderItemVariant } from "./OrderItemVariant";
import { Taxon } from "./Taxon";

export interface OrderItem {
  id: number;
  productName: string;
  productVolumeSize?: string;
  quantity: number;
  subtotal: number;
  taxons: Taxon[];
  total: number;
  unitPrice: number;
  variant: OrderItemVariant;
}