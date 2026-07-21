import React from 'react';
import type { Metadata } from 'next';
import DealersPage from '../dealers/page';

export const metadata: Metadata = {
  title: "Dealer & Distributor Enquiry | KI'S Continental",
  description: "Submit your dealership registration form to represent KI'S Continental dry mix mortars and tile adhesives in your region.",
  keywords: "Dealer Enquiry, Dealer Registration, Kiran Industries Continental",
};

export default function Page() {
  return <DealersPage />;
}
