// src/data/products.ts

export interface Product {
  id: string;
  name: string;
  shortName: string;
  type: string;
  grade: string;
  tagColor: string;
  description: string;
  applications: string[];
  features: string[];
  coverage: string;
  packSize: string;
  shelfLife: string;
  imageFront: string;
  imageBack: string;
  category: 'tile-adhesive' | 'plaster' | 'block-joint' | 'grout';
  standards?: string;
  color?: string;
}

export const products: Product[] = [
  {
    id: 'type-1',
    name: 'Continental Tile Adhesive Type 1',
    shortName: 'Tile Adhesive Type 1',
    type: 'Tile Adhesive',
    grade: 'C1 Grade',
    tagColor: 'blue',
    description:
      'A high-performance dry-mix cement-based tile adhesive for interior floor and wall applications. Ideal for ceramic and porcelain tiles in residential and light commercial projects.',
    applications: ['Ceramic Tiles', 'Porcelain Tiles', 'Interior Floors', 'Interior Walls'],
    features: ['C1 Grade Performance', 'High Initial Grip', 'Non-Slump Formula', 'Easy Mixing'],
    coverage: '4–5 sq.m per 20 kg bag (6 mm bed)',
    packSize: '20 kg',
    shelfLife: '12 months',
    imageFront: '/images/products/type 1 front.jpg.jpeg',
    imageBack: '/images/products/type1 back.png',
    category: 'tile-adhesive',
    standards: 'IS 15477 C1 Grade',
    color: 'Off-White',
  },
  {
    id: 'type-2',
    name: 'Continental Tile Adhesive Type 2',
    shortName: 'Tile Adhesive Type 2',
    type: 'Tile Adhesive',
    grade: 'C2 Grade',
    tagColor: 'geekblue',
    description:
      'An enhanced-adhesion cement-based tile adhesive with anti-slip technology. Designed for vitrified and porcelain tiles in kitchens, bathrooms, and heavy-use areas.',
    applications: ['Vitrified Tiles', 'Porcelain Tiles', 'Kitchen Areas', 'Bathroom & Wet Areas'],
    features: ['C2 Grade Performance', 'Anti-Slip Technology', 'Enhanced Bond Strength', 'Water Resistant'],
    coverage: '3.5–4.5 sq.m per 20 kg bag',
    packSize: '20 kg',
    shelfLife: '12 months',
    imageFront: '/images/products/type 2front.jpg.jpeg',
    imageBack: '/images/products/type 2 back.png',
    category: 'tile-adhesive',
    standards: 'IS 15477 C2 Grade',
    color: 'Grey',
  },
  {
    id: 'type-3',
    name: 'Continental Tile Adhesive Type 3',
    shortName: 'Tile Adhesive Type 3',
    type: 'Tile Adhesive',
    grade: 'C2 TE',
    tagColor: 'cyan',
    description:
      'A weather-resistant, heavy-duty tile adhesive with extended open time for exterior walls, swimming pools, and large-format tile installations.',
    applications: ['Exterior Walls', 'Swimming Pools', 'Large Format Tiles', 'Outdoor Flooring'],
    features: ['Weather Resistant', 'UV Resistant', 'Extended Open Time', 'Heavy Duty Performance'],
    coverage: '3–4 sq.m per 20 kg bag',
    packSize: '20 kg',
    shelfLife: '12 months',
    imageFront: '/images/products/type 3 front.jpg.jpeg',
    imageBack: '/images/products/type3 back.png',
    category: 'tile-adhesive',
    standards: 'EN 12004 C2 TE',
    color: 'Grey',
  },
  {
    id: 'type-4',
    name: 'Continental Tile Adhesive Type 4',
    shortName: 'Tile Adhesive Type 4',
    type: 'Tile Adhesive',
    grade: 'C2 S1',
    tagColor: 'orange',
    description:
      'A flexible, deformable tile adhesive with S1 classification. Perfect for stone cladding, balconies, terraces, and surfaces subject to thermal movement.',
    applications: ['Stone Cladding', 'Balconies', 'Terraces', 'High-Traffic Floors'],
    features: ['S1 Deformability', 'High Flexibility', 'Vibration Resistant', 'Thermal Cycle Resistance'],
    coverage: '3–4 sq.m per 20 kg bag',
    packSize: '20 kg',
    shelfLife: '12 months',
    imageFront: '/images/products/type4 front.jpg.jpeg',
    imageBack: '/images/products/type4 back.png',
    category: 'tile-adhesive',
    standards: 'EN 12004 C2 S1',
    color: 'Grey',
  },
  {
    id: 'type-5',
    name: 'Continental Tile Adhesive Type 5',
    shortName: 'Tile Adhesive Type 5',
    type: 'Tile Adhesive',
    grade: 'PU Tech',
    tagColor: 'purple',
    description:
      'An ultra-high-performance PU-technology adhesive for bonding glass, metal panels, mirrors, and wooden boards. Exceptional chemical and moisture resistance.',
    applications: ['Glass Panels', 'Metal Surfaces', 'Mirrors', 'Wooden Boards'],
    features: ['PU Technology', 'Ultra High Bond', 'Chemical Resistant', 'Moisture Resistant'],
    coverage: '2–3 sq.m per 20 kg bag',
    packSize: '20 kg',
    shelfLife: '12 months',
    imageFront: '/images/products/Types 5 front.jpeg',
    imageBack: '/images/products/type5 back.png',
    category: 'tile-adhesive',
    standards: 'EN 12004 C2 S2',
    color: 'Off-White',
  },
  {
    id: 'ready-plaster',
    name: 'Continental Ready Plaster',
    shortName: 'Ready Plaster',
    type: 'Ready Plaster',
    grade: 'Factory Grade',
    tagColor: 'green',
    description:
      'A factory-manufactured gypsum and cement-based ready-to-use plaster offering superior finish, crack resistance, and workability for interior and exterior surfaces.',
    applications: ['Interior Walls', 'Exterior Walls', 'Ceilings', 'Columns & Beams'],
    features: ['Crack Resistant', 'Superior Workability', 'Factory Controlled Quality', 'Consistent Finish'],
    coverage: '1.0–1.5 sq.m per kg at 10mm thickness',
    packSize: '40 kg',
    shelfLife: '6 months',
    imageFront: '/images/products/ready plaster front.jpg.jpeg',
    imageBack: '/images/products/Ready plaster back.png',
    category: 'plaster',
    standards: 'IS 2250',
    color: 'Off-White',
  },
  {
    id: 'block-joint',
    name: 'Continental Block Joint Mortar',
    shortName: 'Block Joint Mortar',
    type: 'Block Joint Mortar',
    grade: 'Thin Bed',
    tagColor: 'gold',
    description:
      'A premium thin-bed block joint mortar engineered for AAC, CLC, and lightweight blocks. Provides exceptional bond strength with minimal material consumption.',
    applications: ['AAC Blocks', 'CLC Blocks', 'Lightweight Blocks', 'Hollow Blocks'],
    features: ['Thin Bed System (3–5mm)', 'High Bond Strength', 'Easy Application', 'Shrinkage Resistant'],
    coverage: '25–30 sq.m per 20 kg bag (3 mm joint)',
    packSize: '20 kg',
    shelfLife: '12 months',
    imageFront: '/images/products/block joint front.jpg.jpeg',
    imageBack: '/images/products/block joint back.jpeg',
    category: 'block-joint',
    standards: 'IS 2250',
    color: 'Grey',
  },
  {
    id: 'super-grout',
    name: 'Continental Super Grouts',
    shortName: 'Super Grouts',
    type: 'Super Grout',
    grade: 'CG2 Grade',
    tagColor: 'red',
    description:
      'A premium anti-fungal, anti-bacterial ready-to-use grout for ceramic, vitrified, marble, and granite tiles. Provides a durable, stain-resistant, and color-consistent finish.',
    applications: ['Ceramic Tiles', 'Vitrified Tiles', 'Marble & Granite', 'Swimming Pools'],
    features: ['Anti-Fungal Formula', 'Anti-Bacterial', 'Stain Resistant', 'Color Consistent'],
    coverage: 'Varies by joint width and tile size',
    packSize: '1 kg / 5 kg',
    shelfLife: '24 months',
    imageFront: '/images/products/super groute front.jpg.jpeg',
    imageBack: '/images/products/super grouts.jpeg',
    category: 'grout',
    standards: 'EN 13888 CG2',
    color: 'Multiple Colors',
  },
];

export const productCategories = [
  { key: 'all', label: 'All Products' },
  { key: 'tile-adhesive', label: 'Tile Adhesives' },
  { key: 'plaster', label: 'Ready Plaster' },
  { key: 'block-joint', label: 'Block Joint Mortar' },
  { key: 'grout', label: 'Super Grouts' },
];
