export type ShipmentItem = {
  title: string;
  trackingNumber: number;
  origin: string;
  destination: string;
  tag: 'RECEIVED' | 'ERROR' | 'DELIVERED' | 'CANCELLED' | 'ON HOLD';
};
