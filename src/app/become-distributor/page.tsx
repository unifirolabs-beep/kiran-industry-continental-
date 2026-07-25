import React from 'react';
import type { Metadata } from 'next';
import DealersPage from '../dealers/page';

export const metadata: Metadata = {
  title: "Become a Tile Adhesive & Mortars Distributor | KI'S Continental",
  description: "Expand your distribution business by partnering with Kiran Industries. Exclusive regional territories and factory-direct supply chains.",
  keywords: "Become Distributor Building Materials, Distributor Enquiry, Construction Chemicals Dealership",
};

export default function Page() {
  return <DealersPage />;
}
