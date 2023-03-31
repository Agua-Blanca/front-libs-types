import { OrderItemProduct } from './OrderItemProduct';

export interface OrderItemVariant {
  id: number;
  code: string;
  urlCode: string;
  badge: string[];
  channelPricings: {
    default: {
      originalPrice?: number;
      price: number;
    };
  };
  inStock: boolean;
  price: number;
  product: OrderItemProduct;
}
