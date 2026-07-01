// src/data/company.ts

export const company = {
  name: 'Kiran Industries',
  brand: 'Continental',
  tagline: "South India's Premier Construction Material Manufacturer",
  shortDesc:
    'Premium manufacturer of dry mix mortars, tile adhesives, ready plaster, block joint mortar, and construction chemicals. Serving builders, contractors, and dealers across South India.',
  description:
    'Kiran Industries is a premium manufacturer of dry mix mortars, tile adhesives, ready plaster, block joint mortar, and construction chemicals. The company operates a fully automated manufacturing facility with a production capacity of 20 TPH and serves builders, contractors, dealers, and distributors across South India with triple ISO certification.',
  founded: '2024',
  location: {
    address: 'Sy. #659/2, Mustor Road, Manavi – 583123',
    city: 'Manvi',
    district: 'Raichur District',
    state: 'Karnataka',
    country: 'India',
    pincode: '583123',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.932079030106!2d77.0428241!3d15.964923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb7d100333db833%3A0x8e1c9e193ed1b63!2sKiran+industries!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin',
  },
  contact: {
    phone1: '+91 99168 05972',
    phone2: '+91 96205 27147',
    phone3: '+91 96114 59870',
    email: 'Infoandsalesconnect@kiscontinental.com',
    email1: 'Infoandsalesconnect@kiscontinental.com',
    email2: 'Customercare@kiscontinental.com',
    email3: 'kiranindustries2024@gmail.com',
    whatsapp: '+919916805972',
  },
  social: {
    instagram: '#',
    facebook: '#',
    linkedin: '#',
    youtube: '#',
  },
};

export const stats = [
  { value: '20', suffix: ' TPH', label: 'Production Capacity', description: 'Automated production output' },
  { value: '2000', suffix: '+', label: 'Ton Warehouse', description: 'Storage capacity' },
  { value: '3', suffix: '', label: 'ISO Certifications', description: 'Quality, Environment & Safety' },
  { value: '8', suffix: '', label: 'Product Lines', description: 'Complete construction solutions' },
  { value: '5', suffix: '+', label: 'States Served', description: 'Pan South India distribution' },
  { value: '100', suffix: '+', label: 'Dealer Partners', description: 'Growing network' },
];

export const vision =
  'To become South India\'s most trusted construction material manufacturer through innovation, quality, and customer satisfaction.';

export const mission =
  'To deliver high-performance construction solutions that improve durability, efficiency, and sustainability in modern construction projects.';

export const manufacturing = {
  location: 'Sy. No. 659/2, Mustor Road, Manvi – 583123, Raichur District, Karnataka',
  infrastructure: [
    { icon: 'factory', label: '20 TPH Automated Production Plant', desc: 'State-of-the-art automated dry-mix production line' },
    { icon: 'mixer', label: 'Advanced Plough Mixer Technology', desc: 'Precision mixing for consistent product quality' },
    { icon: 'warehouse', label: '2000+ Ton Warehouse Capacity', desc: 'Climate-controlled storage for finished goods' },
    { icon: 'silo', label: '100 Ton Cement Silo', desc: 'Bulk raw material storage system' },
    { icon: 'silo2', label: '50 Ton Fly Ash Silo', desc: 'Fly ash material handling system' },
    { icon: 'lab', label: 'Quality Control Laboratory', desc: 'In-house testing and quality assurance' },
    { icon: 'package', label: 'Automated Packaging System', desc: 'Precision weighing and packaging line' },
  ],
};

export const certifications = [
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015',
    title: 'Quality Management System',
    description:
      'Certifies our commitment to consistent quality in manufacturing, processes, and customer service delivery.',
    scope: 'Manufacturing of Dry Mix Mortars, Tile Adhesives, and Construction Chemicals',
    color: '#0B65B5',
  },
  {
    id: 'iso-14001',
    name: 'ISO 14001:2015',
    title: 'Environmental Management System',
    description:
      'Demonstrates our dedication to environmental responsibility, sustainability, and minimizing ecological impact.',
    scope: 'Environmental Management of Manufacturing Operations',
    color: '#52c41a',
  },
  {
    id: 'iso-45001',
    name: 'ISO 45001:2018',
    title: 'Occupational Health & Safety',
    description:
      'Ensures the highest standards of workplace safety and occupational health for all employees.',
    scope: 'Occupational Health and Safety Management in Manufacturing',
    color: '#1677ff',
  },
];

export const whyChooseUs = [
  {
    icon: 'StarFilled',
    title: 'Premium Quality',
    description:
      'Manufactured using advanced automated machinery and strict quality control processes ensuring every bag meets international standards.',
  },
  {
    icon: 'SafetyCertificateFilled',
    title: 'Triple ISO Certified',
    description:
      'ISO 9001, ISO 14001, and ISO 45001 certified manufacturing facility — guaranteeing quality, environmental responsibility, and safety.',
  },
  {
    icon: 'ThunderboltFilled',
    title: 'High Production Capacity',
    description:
      '20 TPH production ensures uninterrupted supply even during peak construction seasons across South India.',
  },
  {
    icon: 'GlobalOutlined',
    title: 'Pan South India Distribution',
    description:
      'Reliable logistics network serving Karnataka, Telangana, Andhra Pradesh, Tamil Nadu, and Kerala.',
  },
  {
    icon: 'ShopOutlined',
    title: 'Private Label Manufacturing',
    description:
      'Custom branding and OEM manufacturing solutions available for brands looking to expand their product portfolio.',
  },
  {
    icon: 'TeamOutlined',
    title: 'Technical Support',
    description:
      'Expert guidance for product selection, application methods, and site-specific construction challenges.',
  },
];

export const industries = [
  { label: 'Residential Construction', icon: 'HomeOutlined' },
  { label: 'Commercial Buildings', icon: 'BankOutlined' },
  { label: 'Industrial Projects', icon: 'ToolOutlined' },
  { label: 'Infrastructure Projects', icon: 'ApartmentOutlined' },
  { label: 'Government Projects', icon: 'FlagOutlined' },
  { label: 'Real Estate Developers', icon: 'BuildOutlined' },
  { label: 'Contractors & Builders', icon: 'TeamOutlined' },
  { label: 'Tile Dealers & Distributors', icon: 'ShopOutlined' },
];

export const solutions = [
  {
    id: 'residential',
    title: 'Residential',
    subtitle: 'Home & Apartment Projects',
    icon: 'HomeOutlined',
    description:
      'Complete adhesive and plaster solutions for kitchens, bathrooms, living areas, and exterior facades in residential construction.',
    products: ['Tile Adhesive Type 1', 'Tile Adhesive Type 2', 'Ready Plaster', 'Super Grouts'],
    color: '#0B65B5',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    subtitle: 'Offices, Malls & Hotels',
    icon: 'BankOutlined',
    description:
      'High-performance adhesives for large-format tiles, natural stone, and high-traffic commercial flooring applications.',
    products: ['Tile Adhesive Type 2', 'Tile Adhesive Type 3', 'Super Grouts', 'Block Joint Mortar'],
    color: '#1677ff',
  },
  {
    id: 'industrial',
    title: 'Industrial',
    subtitle: 'Factories & Warehouses',
    icon: 'ToolOutlined',
    description:
      'Heavy-duty, chemically resistant solutions for industrial floors and wall cladding in demanding environments.',
    products: ['Tile Adhesive Type 4', 'Tile Adhesive Type 5', 'Block Joint Mortar'],
    color: '#52c41a',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    subtitle: 'Bridges, Dams & Public Works',
    icon: 'ApartmentOutlined',
    description:
      'Ultra-durable, flexible adhesives for infrastructure projects requiring weather resistance and structural integrity.',
    products: ['Tile Adhesive Type 4', 'Tile Adhesive Type 5', 'Ready Plaster'],
    color: '#722ed1',
  },
];

export interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  qualification: string;
  description: string;
  focus: string;
  responsibilities: string[];
  requirements: string[];
}

export const openPositions: JobPosition[] = [
  {
    id: 1,
    title: 'Manager – Sales & Business Development',
    department: 'Sales & Marketing',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: '5+ years',
    qualification: 'MBA / Graduate (Civil / Marketing)',
    description: 'Drive sales strategy, build builder relations, and expand business for Continental premium dry-mix products in Bangalore region.',
    focus: 'for Dry Mix / Construction Products Sales',
    responsibilities: [
      'Lead and mentor the regional sales team to achieve targets.',
      'Develop and execute sales strategies for premium tile adhesives and dry-mix products.',
      'Establish and maintain relationships with large builders, contractors, architects, and corporate buyers.',
      'Oversee market penetration and identify potential new dealer channels.'
    ],
    requirements: [
      'Proven experience in construction materials, paint, cement, or tile adhesive industries.',
      'Strong network with local developers, architects, and key construction stakeholders in Bengaluru.',
      'Excellent leadership, communication, and negotiation capabilities.',
      'MBA or Degree in Civil Engineering / Marketing preferred.'
    ]
  },
  {
    id: 2,
    title: 'Technical Service Engineer',
    department: 'Quality & Technical Services',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: '2–4 years',
    qualification: 'Diploma / B.Tech in Civil Engineering',
    description: 'Provide on-site technical support, product demonstrations, and training to masons, contractors, and builders.',
    focus: 'for Technical Services & Site Demonstrations',
    responsibilities: [
      'Conduct on-site tile adhesive application trials and product demonstrations.',
      'Resolve product application issues and address customer complaints at sites.',
      'Conduct training workshops for masons, applicators, and contractors.',
      'Coordinate with the QC team to share field performance feedback.'
    ],
    requirements: [
      'In-depth knowledge of tile installation techniques, cementitious products, and construction chemical standards.',
      'Strong problem-solving attitude and customer-facing communication skills.',
      'Willingness to travel locally within Bengaluru and nearby districts.',
      'Fluent in Kannada and English.'
    ]
  },
  {
    id: 3,
    title: 'Plant Operator / Executive',
    department: 'Manufacturing',
    location: 'Raichur',
    type: 'Full-time',
    experience: '2–4 years',
    qualification: 'ITI / Diploma in Mechanical or Electrical',
    description: 'Operate the fully automated dry-mix mortar plant at Manvi and ensure smooth, efficient production runs.',
    focus: 'for Dry Mix Mortar Plant Operations',
    responsibilities: [
      'Operate advanced dry-mix blending, weighing, and packing systems.',
      'Perform regular preventive maintenance checks on plant machinery.',
      'Ensure strict compliance with health, safety, and quality protocols on the shop floor.',
      'Maintain production logs and coordinate material consumption data.'
    ],
    requirements: [
      'Experience in operating automated batching plants, cement plants, or dry-mix mortars.',
      'Understanding of mechanical parts, conveyors, mixers, and PLC automated panels.',
      'Ability to work in shifts and under pressure.',
      'Basic electrical/mechanical troubleshooting skills.'
    ]
  },
  {
    id: 4,
    title: 'Quality Control Chemist / Engineer',
    department: 'Quality Assurance',
    location: 'Raichur',
    type: 'Full-time',
    experience: '2–5 years',
    qualification: 'B.Sc (Chemistry) / Diploma in Chemical Engineering',
    description: 'Conduct raw material analysis, in-process checking, and final testing of finished goods at our Manvi laboratory.',
    focus: 'for Laboratory & Raw Material Testing',
    responsibilities: [
      'Perform daily quality tests on incoming raw materials (cement, aggregates, polymers).',
      'Test finished tile adhesives for tensile adhesion strength, open time, and adjustability as per IS 15477:2019.',
      'Maintain quality records, calibration schedules, and ISO documentation.',
      'Participate in continuous improvement and cost-optimization of formulations.'
    ],
    requirements: [
      'Prior laboratory testing experience in a tile adhesive, cement, or concrete industry.',
      'Sound knowledge of Indian Standards (IS) codes related to construction materials.',
      'Attention to detail and precision in reporting chemical and physical parameters.',
      'Strong understanding of laboratory safety guidelines.'
    ]
  },
  {
    id: 5,
    title: 'Logistics & Dispatch Coordinator',
    department: 'Supply Chain',
    location: 'Raichur',
    type: 'Full-time',
    experience: '2–4 years',
    qualification: 'Any Graduate / BBA Logistics',
    description: 'Coordinate dispatch, transport vehicle planning, and inventory management for timely distribution across South India.',
    focus: 'for Supply Chain & Dispatch Coordination',
    responsibilities: [
      'Plan daily vehicle movements for outbound dispatches from the Manvi factory.',
      'Coordinate with transport contractors to ensure vehicle availability and competitive freight rates.',
      'Manage finished goods warehouse inventory levels and stock allocations.',
      'Prepare dispatch invoices, e-way bills, and transit documentation.'
    ],
    requirements: [
      'Experience in dispatch and logistics in a manufacturing company (cement, steel, or tiles preferred).',
      'Proficiency in using ERP software (Tally / SAP) and MS Excel.',
      'Good communication and negotiation skills with transporters.',
      'Knowledge of commercial taxes and dispatch documents.'
    ]
  },
  {
    id: 6,
    title: 'Senior Sales Executive',
    department: 'Sales',
    location: 'Hubli',
    type: 'Full-time',
    experience: '3–5 years',
    qualification: 'Any Graduate',
    description: 'Drive secondary and primary sales through dealers, sub-dealers, and builders in Hubli and nearby areas.',
    focus: 'for Dry Mix / Construction Products Sales',
    responsibilities: [
      'Expand the dealer network and achieve high volumes in tiles adhesive sales.',
      'Conduct regular dealer visits and execute dealer support schemes.',
      'Coordinate with the technical service team for local mason meets.',
      'Monitor competitor pricing, activities, and market trends.'
    ],
    requirements: [
      'Experience in marketing building products like tiles, adhesives, cement, or paints.',
      'Strong local dealer connect in Hubli and North-Western Karnataka.',
      'Excellent target-driven performance record.',
      'Ownership of two-wheeler and willingness to travel.'
    ]
  },
  {
    id: 7,
    title: 'Sales Executive',
    department: 'Sales',
    location: 'Dharwad',
    type: 'Full-time',
    experience: '1–3 years',
    qualification: 'Any Graduate',
    description: 'Develop retail network, service existing dealer outlets, and introduce Continental products to local contractors.',
    focus: 'for Dry Mix / Construction Products Sales',
    responsibilities: [
      'Visit retail counters daily to secure tile adhesive orders.',
      'Track and secure payments from dealers timely.',
      'Distribute promotional materials and ensure product visibility at outlets.',
      'Follow up on queries from builders and individual home builders.'
    ],
    requirements: [
      'Self-motivated with a passion for field sales.',
      'Prior sales experience in hardware, sanitaryware, paint, or tiles retail network.',
      'Good communication skills in Kannada and Hindi/English.',
      'Excellent relationship management skills.'
    ]
  },
  {
    id: 8,
    title: 'Sales Executive',
    department: 'Sales',
    location: 'Belagavi',
    type: 'Full-time',
    experience: '1–3 years',
    qualification: 'Any Graduate',
    description: 'Promote Continental dry-mix products, tile adhesives, and grouts to dealers, hardware shops, and builders in Belagavi region.',
    focus: 'for Dry Mix / Construction Products Sales',
    responsibilities: [
      'Build retail channels and onboard new dealer partners in Belagavi district.',
      'Regularly track dealer requirements and ensure prompt product delivery.',
      'Establish contacts with local tiling contractors and civil builders.',
      'Conduct local marketing activities and installer meets.'
    ],
    requirements: [
      'Prior field sales experience in tiles, construction chemicals, or building materials.',
      'Strong geographical knowledge of Belagavi city and surrounding talukas.',
      'Fluency in Kannada, Marathi, and English/Hindi.',
      'High enthusiasm and commitment to target achievements.'
    ]
  },
  {
    id: 9,
    title: 'Sales Executive',
    department: 'Sales',
    location: 'Bijapur',
    type: 'Full-time',
    experience: '1–3 years',
    qualification: 'Any Graduate',
    description: 'Drive sales of tile adhesives, ready plaster, and block joint mortars through hardware dealer networks in Bijapur.',
    focus: 'for Dry Mix / Construction Products Sales',
    responsibilities: [
      'Establish new retail accounts and expand company presence in Bijapur district.',
      'Ensure high service levels for existing dealers and resolve customer issues.',
      'Promote product benefits directly to local masonry experts and contractors.',
      'Gather competitor intelligence and report market demand.'
    ],
    requirements: [
      '1+ years of sales experience in retail hardware/cement channels.',
      'Proven record of target achievement.',
      'Fluent in Kannada and Hindi.',
      'Active local resident of Bijapur with regional market knowledge.'
    ]
  },
  {
    id: 10,
    title: 'Sales Executive',
    department: 'Sales',
    location: 'Koppala',
    type: 'Full-time',
    experience: '1–3 years',
    qualification: 'Any Graduate',
    description: 'Establish and expand dealer network and retail counters for dry-mix products across Koppala region.',
    focus: 'for Dry Mix / Construction Products Sales',
    responsibilities: [
      'Map potential hardware and tile dealers in Koppala town and surrounding areas.',
      'Pitch product specifications and secure initial orders.',
      'Maintain continuous liaison with construction sites to push product usage.',
      'Collect dealer feedback and coordinate with sales team for targets.'
    ],
    requirements: [
      'Good interpersonal skills and local market understanding in Koppala.',
      'Sales experience in building construction materials or retail paint channels.',
      'Kannada fluency is mandatory.',
      'Strong field motivation and customer-centric approach.'
    ]
  },
  {
    id: 11,
    title: 'Senior Sales Executive',
    department: 'Sales',
    location: 'Kalaburagi',
    type: 'Full-time',
    experience: '3–5 years',
    qualification: 'Graduate / BBA',
    description: 'Grow market share and handle dealer-distributor networks for premium tile adhesives and plaster in Kalaburagi region.',
    focus: 'for Dry Mix / Construction Products Sales',
    responsibilities: [
      'Manage key distributor accounts and drive secondary sales volumes.',
      'Onboard new high-volume retail counters in Kalaburagi and nearby districts.',
      'Conduct mason/applicator training meets with the technical team.',
      'Oversee sales team members operating in the region.'
    ],
    requirements: [
      '3+ years experience in building material sales (cement, paint, adhesive).',
      'Strong relationships with hardware dealers and builders in Kalaburagi/Gulbarga.',
      'Proven capacity to lead sales growth and handle channel credit cycle.',
      'Fluent in Kannada, Hindi, and English.'
    ]
  },
  {
    id: 12,
    title: 'Sales Executive',
    department: 'Sales',
    location: 'Bidar',
    type: 'Full-time',
    experience: '1–3 years',
    qualification: 'Any Graduate',
    description: 'Drive sales penetration for tile adhesives and mortars in Bidar district through paint/hardware shops.',
    focus: 'for Dry Mix / Construction Products Sales',
    responsibilities: [
      'Onboard new retail dealers and manage product supplies.',
      'Organize small-scale interactive sessions with masons and tilers.',
      'Track orders and ensure payments are collected in alignment with company policies.',
      'Provide regular field feedback and progress reports to the ASM.'
    ],
    requirements: [
      '1+ years experience in paint, cement, adhesive, or general hardware sales.',
      'Geographical knowledge of Bidar and surrounding rural markets.',
      'Fluent in Kannada and Hindi/Urdu.',
      'Strong commitment, high integrity, and goal-oriented focus.'
    ]
  }
];
