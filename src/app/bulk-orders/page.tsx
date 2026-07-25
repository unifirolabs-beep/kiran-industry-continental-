import React from 'react';
import type { Metadata } from 'next';
import RequestQuotePage from '../request-quote/page';

export const metadata: Metadata = {
  title: "Bulk Orders & Commercial Project Pricing | KI'S Continental",
  description: "Request commercial wholesale project quotes for Continental tile adhesives, plasters, and block joining mortars directly from Kiran Industries.",
  keywords: "Bulk Tile Adhesive Purchase, Bulk Orders, Project Pricing, Construction Materials India",
};

export default function Page() {
  return <RequestQuotePage />;
}
