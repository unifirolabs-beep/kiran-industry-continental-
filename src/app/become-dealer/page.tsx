import React from 'react';
import type { Metadata } from 'next';
import DealersPage from '../dealers/page';

export const metadata: Metadata = {
  title: "Become an Authorized Tile Adhesive Dealer | KI'S Continental",
  description: "Join South India's fastest-growing construction material brand as an authorized dealer. Register today for territory rights and marketing support.",
  keywords: "Become Tile Adhesive Dealer, Dealer Enquiry, Dealership Registration, Kiran Industries",
};

export default function Page() {
  return <DealersPage />;
}
