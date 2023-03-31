import { OrderItem } from "./OrderItem";

export interface Order {
  id: number;
  itemsTotal: number;
  invoices: unknown[];
  channel: string;
  payments: unknown[];
  shipments: unknown[];
  currencyCode: 'EUR';
  localeCode: 'fr_FR';
  checkoutState: 'cart';
  paymentState: 'cart';
  shippingState: 'cart';
  state: 'cart';
  tokenValue: string;
  items: OrderItem[];
  total: number;
  taxTotal: number;
  shippingTotal: number;
  orderPromotionTotal: number;
  promotionCoupon?: {
    code: string;
    couponType: 'onboarding' | string;
    freeProductPromotionCodes?: string[];
    promotion?: {
      '@id': string;
      code: string;
      name: string;
      configuration?: {
        images: {
          path: string;
        }[];
      };
    };
  };
}