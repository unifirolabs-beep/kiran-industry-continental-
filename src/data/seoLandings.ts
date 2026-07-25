// src/data/seoLandings.ts

export interface SeoLandingConfig {
  slug: string;
  keyword: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  aboutText: string;
  features: string[];
  specs: { property: string; value: string }[];
  faqs: { question: string; answer: string }[];
  ctaText: string;
  ctaLink: string;
  schemaType: 'Product' | 'LocalBusiness' | 'FAQPage' | 'WebPage';
}

export const seoLandingConfigs: Record<string, SeoLandingConfig> = {
  'tile-adhesive-manufacturer-india': {
    slug: 'tile-adhesive-manufacturer-india',
    keyword: 'Tile Adhesive Manufacturer',
    title: "India's Premier Tile Adhesive Manufacturer",
    subtitle: "High-performance cementitious and polyurethane adhesives engineered by Kiran Industries at our state-of-the-art automated plant.",
    metaTitle: "Tile Adhesive Manufacturer in India | KI'S Continental by Kiran Industries",
    metaDescription: "Kiran Industries is a premier polymer-modified tile adhesive manufacturer in India. ISO-certified, 20 TPH automated plant in Karnataka delivering across South India.",
    metaKeywords: "Tile Adhesive Manufacturer, Premium Tile Adhesive India, Construction Chemicals, Building Materials, Kiran Industries",
    aboutText: "KI'S Continental by Kiran Industries is a leading brand in the construction chemicals sector, specializing in dry mix mortars and advanced adhesive solutions. Our fully automated facility ensures that every batch matches strict international standards, providing builders, contractors, and homeowners with absolute consistency and durability.",
    features: [
      "Fully Automated 20 TPH Manufacturing Facility",
      "Triple ISO Certified (9001, 14001, 45001)",
      "Strict Quality Control & In-House Testing Laboratory",
      "Pan South India Supply Network & 2000+ Ton Warehouse Storage",
      "Custom Formulations for Infrastructure and Commercial Projects"
    ],
    specs: [
      { property: "Production Capacity", value: "20 Tons Per Hour (TPH)" },
      { property: "Standards Compliance", value: "IS 15477:2019 & EN 12004" },
      { property: "Warehouse Storage", value: "2000+ Tons" },
      { property: "Distribution Network", value: "Karnataka, Telangana, Andhra Pradesh, Tamil Nadu, Goa" }
    ],
    faqs: [
      { question: "Where is KI'S Continental manufactured?", answer: "All KI'S Continental products are manufactured at our state-of-the-art plant in Manvi, Raichur district, Karnataka, India." },
      { question: "Do you supply products directly to project sites?", answer: "Yes, Kiran Industries supplies materials directly to major builders, developers, and infrastructure contractors across South India." }
    ],
    ctaText: "Request Wholesale Pricing",
    ctaLink: "/request-quote",
    schemaType: "LocalBusiness"
  },
  'ceramic-tile-adhesive': {
    slug: 'ceramic-tile-adhesive',
    keyword: 'Ceramic Tile Adhesive',
    title: "Premium Ceramic Tile Adhesive Solutions",
    subtitle: "Continental Type-1 cement-based polymer-modified adhesive for interior floor and wall ceramic installations.",
    metaTitle: "Ceramic Tile Adhesive | Continental Type 1 (C1 Grade) by Kiran Industries",
    metaDescription: "Get premium polymer-modified ceramic tile adhesive for interior floor and wall installations. High initial grip, non-slump formula, and easy workability.",
    metaKeywords: "Ceramic Tile Adhesive, Floor Tile Adhesive, Wall Tile Adhesive, Type 1 Adhesive, Kiran Industries",
    aboutText: "Continental Tile Adhesive Type-1 is a factory-blended dry mix cement-based polymer-modified adhesive designed specifically for installing ceramic, terracotta, and small natural stone tiles on interior concrete, cement plaster, and blockwork substrates.",
    features: [
      "High Initial Grip & Grab",
      "Non-Slump, Zero Sag Formula for Walls",
      "Long Workability & Extended Pot Life",
      "Saves Water (No Pre-Soaking Required for Tiles)",
      "Highly Economical & Easy to Mix"
    ],
    specs: [
      { property: "Grade / Classification", value: "IS 15477 Type 1 (C1 Grade)" },
      { property: "Tensile Adhesion Strength", value: "≥ 0.5 N/mm²" },
      { property: "Pot Life @ 27°C", value: "Approx. 1.5 - 2 Hours" },
      { property: "Coverage", value: "50-55 sq.ft per 20 kg bag (at 3 mm bed)" }
    ],
    faqs: [
      { question: "Is pre-soaking of tiles necessary with Continental Type 1?", answer: "No, pre-soaking tiles is not required when using our polymer-modified adhesives. Simply wipe the back of the tiles to remove dust." },
      { question: "Can I use Type 1 adhesive for vitrified tiles?", answer: "No, for non-porous vitrified tiles, we highly recommend using Continental Type 2 adhesive, which has higher polymer content and bonding strength." }
    ],
    ctaText: "View Product Specifications",
    ctaLink: "/products/type-1",
    schemaType: "Product"
  },
  'wall-tile-adhesive': {
    slug: 'wall-tile-adhesive',
    keyword: 'Wall Tile Adhesive',
    title: "Enhanced Wall Tile Adhesive & Cladding Solutions",
    subtitle: "Continental Type-2 and Type-3 high-performance non-slip adhesives designed for interior and exterior wall tiling.",
    metaTitle: "Wall Tile Adhesive & External Cladding Adhesive | KI'S Continental",
    metaDescription: "Shop high-bond wall tile adhesives for kitchen backsplash, bathroom walls, and exterior high-rise cladding. Anti-slip technology and vertical slip resistance.",
    metaKeywords: "Wall Tile Adhesive, Cladding Adhesive, Anti-slip tile adhesive, Exterior Wall Tile Adhesive, Kiran Industries",
    aboutText: "Tiling vertical walls requires adhesives with superior slip resistance and strong grab. KI'S Continental wall tile adhesives (Type-2 for interior wet areas and Type-3 for exterior walls/pools) are formulated with polymer additives that prevent tiles from sliding during installation.",
    features: [
      "Advanced Anti-Slip Technology (Class T Compliance)",
      "High Tensile Bond Strength for Vertical Loads",
      "Perfect for Kitchen Backsplashes & Bathrooms",
      "UV & Weatherproof (Type-3 for Exterior Facades)",
      "Excellent Open Time for Large Format Cladding"
    ],
    specs: [
      { property: "Slip Resistance", value: "≤ 0.5 mm (Class T)" },
      { property: "Tensile Adhesion (Type-2)", value: "≥ 1.0 N/mm²" },
      { property: "Tensile Adhesion (Type-3)", value: "≥ 1.2 N/mm²" },
      { property: "Water Resistance", value: "Exceptional (Suitable for Swimming Pools)" }
    ],
    faqs: [
      { question: "Why do I need a special adhesive for wall tiling?", answer: "Wall adhesives require anti-slip polymers to support the tile's weight immediately after pressing, preventing slippage before the cement cures." },
      { question: "Can I install marble slabs on walls using Type-2?", answer: "For heavy natural stones or marble slabs on exterior walls, we recommend using Continental Type-3 or Type-4 (flexible) adhesives." }
    ],
    ctaText: "Explore Adhesives range",
    ctaLink: "/products",
    schemaType: "Product"
  },
  'floor-tile-adhesive': {
    slug: 'floor-tile-adhesive',
    keyword: 'Floor Tile Adhesive',
    title: "High-Durability Floor Tile Adhesive",
    subtitle: "Engineered cementitious adhesive mixes for residential, commercial, and industrial flooring projects.",
    metaTitle: "Floor Tile Adhesive | Premium Floor Screed & Tile Bonds | KI'S Continental",
    metaDescription: "Explore premium floor tile adhesives for ceramic, vitrified, marble, and granite flooring. High load-bearing capacity and shrinkage-resistant formulations.",
    metaKeywords: "Floor Tile Adhesive, Vitrified Floor Adhesive, Floor Cladding, Construction Chemicals, Kiran Industries",
    aboutText: "Floor tiling demands high load-bearing strength and complete coverage to eliminate hollow spaces. Continental floor tile adhesives are formulated to flow and set evenly, creating a solid monolithic bond between the substrate and the floor tile.",
    features: [
      "High Compressive & Shear Load Resistance",
      "Eliminates Hollow Sound (100% Surface Contact)",
      "Shrinkage Resistant (Prevents Tile De-bonding & Cracking)",
      "Perfect for High-Traffic Commercial Zones",
      "Cures Quickly for Fast Walkability"
    ],
    specs: [
      { property: "Substrates", value: "Cement Screed, Concrete Bed, IPS Flooring" },
      { property: "Grouting Window", value: "After 24 Hours" },
      { property: "Bed Thickness", value: "3 mm to 6 mm" },
      { property: "Walkability", value: "Ready for light traffic in 24 Hours" }
    ],
    faqs: [
      { question: "Why do floor tiles sound hollow after a few years?", answer: "Hollow sounds occur when traditional cement mortar shrinks, creating air voids. Continental adhesives prevent shrinkage, ensuring 100% surface contact." },
      { question: "Can I lay tiles over underfloor heating systems?", answer: "Yes, but you must use our highly flexible S1-rated Continental Type-4 adhesive to accommodate thermal cycles." }
    ],
    ctaText: "Contact for Project Consultation",
    ctaLink: "/contact",
    schemaType: "Product"
  },
  'block-joining-mortar': {
    slug: 'block-joining-mortar',
    keyword: 'Block Joining Mortar',
    title: "Thin-Bed Block Joining Mortar",
    subtitle: "High-strength jointing mortar designed for AAC, CLC, and lightweight concrete blocks.",
    metaTitle: "Block Joining Mortar & AAC Block Adhesive | KI'S Continental",
    metaDescription: "Continental Block Joint Mortar replaces traditional 15mm sand-cement joints with high-strength 3mm joints, saving material cost and building dead weight.",
    metaKeywords: "Block Joining Mortar, AAC Block Adhesive, Thin Bed Mortar, Dry Mix Mortar, Kiran Industries",
    aboutText: "Continental Block Joint Mortar is a factory-blended dry mix joinery mortar composed of OPC cement, graded sand, and water-retaining polymers. It is designed to construct blockwork masonry walls with joints as thin as 3 mm, providing superior splitting tensile strength.",
    features: [
      "Thin Joint System (3mm to 5mm thickness)",
      "Reduces Mortar Consumption by up to 75%",
      "Prevents Thermal Bridging Across Joints",
      "High Splitting Tensile Adhesion Strength",
      "No Shrinkage Cracks Along Block Edges"
    ],
    specs: [
      { property: "Standard Compliance", value: "IS 2250 / ASTM C1660" },
      { property: "Compressive Strength (28 Days)", value: "≥ 6.0 N/mm²" },
      { property: "Tensile Splitting Strength", value: "≥ 0.35 N/mm²" },
      { property: "Coverage", value: "90-100 sq.ft per 20 kg bag (at 3 mm, block size 600x200x150 mm)" }
    ],
    faqs: [
      { question: "How does block joint mortar save costs?", answer: "By reducing joint thickness from 15mm to 3mm, you consume 75% less material, save on sand storage, and significantly speed up wall construction." },
      { question: "Is curing required for AAC block masonry?", answer: "While standard brickwork needs heavy watering, Continental block joint mortar has high water-retention polymers, minimizing wet curing needs." }
    ],
    ctaText: "View Block Joint details",
    ctaLink: "/products/block-joint",
    schemaType: "Product"
  },
  'wall-putty': {
    slug: 'wall-putty',
    keyword: 'Wall Putty Manufacturer',
    title: "Premium Polymer-Modified Wall Putty",
    subtitle: "High-opacity, water-resistant base coat putty for smooth interior and exterior masonry walls.",
    metaTitle: "Wall Putty Manufacturer | Acrylic & White Cement Putty | KI'S Continental",
    metaDescription: "Kiran Industries is a premier wall putty manufacturer in India. Get water-resistant, crack-free white cement wall putty for a marble-like paint finish.",
    metaKeywords: "Wall Putty Manufacturer, Acrylic Wall Putty, White Cement Putty, Construction Chemicals, Kiran Industries",
    aboutText: "Continental Wall Putty is a factory-blended white cement and polymer-based formulation engineered to fill pores and level surface irregularities on plastered walls. It provides a highly breathable, water-resistant, and high-opacity background for luxury paints.",
    features: [
      "Exceptional Adhesion Strength on Plastered Walls",
      "Resists Dampness & Paint Peeling (Flaking)",
      "Marble-Like Smooth White Finish",
      "Saves Paint Consumption by up to 30%",
      "Highly Breathable (Allows Vapour Transmission)"
    ],
    specs: [
      { property: "Base Material", value: "Premium White Cement & Graded Fillers" },
      { property: "Compressive Strength", value: "High durability and hardness" },
      { property: "Application Thickness", value: "1.5 mm to 2 mm in double coats" },
      { property: "Color", value: "High-Reflectance White" }
    ],
    faqs: [
      { question: "Why should I use White Cement Wall Putty?", answer: "White cement putty has superior adhesion and tensile strength compared to plaster of Paris (POP), preventing cracks and paint flaking." },
      { question: "Can I apply Continental putty on exterior walls?", answer: "Yes, our polymer-modified wall putty is highly water-resistant and suitable for both interior and exterior plastered walls." }
    ],
    ctaText: "Request Dealer Sample",
    ctaLink: "/dealers",
    schemaType: "LocalBusiness"
  },
  'ready-mix-plaster': {
    slug: 'ready-mix-plaster',
    keyword: 'Ready Mix Plaster',
    title: "Factory-Grade Ready Mix Plaster",
    subtitle: "Consistent cement-sand-polymer wall plaster dry mix for plastering brick and blockwork walls.",
    metaTitle: "Ready Mix Plaster & Dry Mix Mortar | KI'S Continental",
    metaDescription: "Continental Ready Plaster is a factory-blended dry mix wall plaster replacing site-mixed sand-cement. Rebound-free, crack-resistant, and highly workable.",
    metaKeywords: "Ready Mix Plaster, Dry Mix Mortar, Cement Plaster, Building Materials, Kiran Industries",
    aboutText: "Traditional site-mixed sand-cement plaster suffers from organic impurities, inconsistent grading, and poor bond strength. Continental Ready Plaster is manufactured in our automated factory with graded sand, cement, and workability polymers to deliver a uniform, crack-free finish.",
    features: [
      "Factory-Controlled Gradation & Ratio Consistency",
      "Drastically Reduces Shrinkage & Hairline Cracks",
      "Excellent Workability & Reduced Rebound Loss",
      "High Tensile Adhesion & Compressive Strength",
      "Pan South India Wholesale Logistics Available"
    ],
    specs: [
      { property: "Standard Compliance", value: "IS 2250 / IS 1661" },
      { property: "Compressive Strength (28 Days)", value: "≥ 5.5 N/mm²" },
      { property: "Water Demand", value: "16% - 18%" },
      { property: "Coverage", value: "16-18 sq.ft per 40 kg bag (at 10 mm uniform thickness)" }
    ],
    faqs: [
      { question: "How does ready plaster prevent hairline cracks?", answer: "Hairline cracks occur due to poor sand grading and high water evaporation. Continental plaster contains graded sand and water-retaining polymers that cure evenly, preventing cracks." },
      { question: "How long should Continental Ready Plaster cure?", answer: "We recommend light water curing for 5 to 7 days to let the cement achieve its full design compressive strength." }
    ],
    ctaText: "View Plaster Details",
    ctaLink: "/products/ready-plaster",
    schemaType: "Product"
  },
  'waterproofing-products': {
    slug: 'waterproofing-products',
    keyword: 'Waterproofing Products',
    title: "Advanced Waterproofing Solutions",
    subtitle: "Elastomeric and cementitious waterproofing systems for basements, terraces, bathrooms, and pools.",
    metaTitle: "Waterproofing Products & Construction Chemicals | KI'S Continental",
    metaDescription: "Protect your building structures with premium cementitious and acrylic-based waterproofing coatings. Positive & negative water pressure resistance.",
    metaKeywords: "Waterproofing Products, Waterproofing Solutions, Construction Chemicals, Damp Shield, Kiran Industries",
    aboutText: "Water ingress ruins structure concrete and finishes. KI'S Continental offers professional-grade waterproofing products, including single-component acrylic elastomeric coatings and two-component polymer-modified cementitious membranes, creating an impenetrable moisture barrier.",
    features: [
      "High Hydrostatic Pressure Resistance (Positive & Negative)",
      "Excellent Crack-Bridging & Flexibility",
      "Seamless Monolithic Coating (No Joints)",
      "Non-Toxic (Perfect for Drinking Water Tanks)",
      "Excellent Adhesion to Concrete Substrates"
    ],
    specs: [
      { property: "Application Areas", value: "Bathrooms, Balconies, Swimming Pools, Terraces, Basements" },
      { property: "Elongation / Flexibility", value: "Resists structural expansions" },
      { property: "Application Method", value: "Brush or roller in double coats" },
      { property: "Curing Time", value: "Full cure in 7 Days" }
    ],
    faqs: [
      { question: "When should I apply waterproofing in my bathroom?", answer: "Waterproofing should be applied over the raw concrete screed/floor and up to 3 feet on the walls before installing tiles with Type-2 adhesive." },
      { question: "Do you supply waterproofing for swimming pools?", answer: "Yes, our cementitious two-component waterproofing coating is engineered for swimming pools and water bodies under permanent water immersion." }
    ],
    ctaText: "Consult Technical Team",
    ctaLink: "/contact",
    schemaType: "Product"
  },
  'tile-adhesive-manufacturer-karnataka': {
    slug: 'tile-adhesive-manufacturer-karnataka',
    keyword: 'Tile Adhesive Manufacturer Karnataka',
    title: "Leading Tile Adhesive Manufacturer in Karnataka",
    subtitle: "High-bond cementitious and polyurethane adhesives manufactured by Kiran Industries in Manvi, Karnataka.",
    metaTitle: "Tile Adhesive Manufacturer Karnataka | Kiran Industries",
    metaDescription: "Kiran Industries is Karnataka's leading tile adhesive manufacturer. Automated factory in Manvi delivering high-bond tile adhesives and dry mix mortars statewide.",
    metaKeywords: "Tile Adhesive Manufacturer Karnataka, Best Tile Adhesive Karnataka, Construction Chemicals Karnataka, Kiran Industries",
    aboutText: "With our state-of-the-art 20 TPH automated manufacturing facility based in Manvi, Karnataka, Kiran Industries is the premier source for dry mix construction materials in the state. We serve major distributors and infrastructure projects pan-Karnataka, ensuring consistent quality and structural strength.",
    features: [
      "Manufactured in Manvi, Karnataka for local quality control",
      "Fast 24-48 Hour Shipping to Bengaluru, Hubli, Mangaluru",
      "Triple ISO Quality Certification",
      "Technical Field Testing Support Across Karnataka",
      "Direct Bulk Pricing for Builders & Developers"
    ],
    specs: [
      { property: "Plant Location", value: "Manvi, Raichur District, Karnataka" },
      { property: "Daily Production Capacity", value: "480+ Tons" },
      { property: "Local Support Centers", value: "Bangalore, Raichur, Hubli" },
      { property: "State Compliance", value: "Karnataka State Construction Standards" }
    ],
    faqs: [
      { question: "Where is the factory situated in Karnataka?", answer: "Our plant is located at Sy. #659/2, Mustor Road, Manvi, Raichur District, Karnataka." },
      { question: "Do you supply to remote districts in Karnataka?", answer: "Yes, we distribute across all 31 districts of Karnataka through our robust dealer network." }
    ],
    ctaText: "Find Karnataka Dealers",
    ctaLink: "/dealers",
    schemaType: "LocalBusiness"
  },
  'tile-adhesive-manufacturer-bangalore': {
    slug: 'tile-adhesive-manufacturer-bangalore',
    keyword: 'Tile Adhesive Manufacturer Bangalore',
    title: "Tile Adhesive Manufacturer Serving Bangalore",
    subtitle: "Supplying premium flexible cladding and vitrified tile adhesives to Bengaluru's high-rise construction projects.",
    metaTitle: "Tile Adhesive Manufacturer Bangalore | KI'S Continental",
    metaDescription: "Looking for a tile adhesive manufacturer in Bangalore? We supply high-rise cladding and water-resistant bathroom tile adhesives directly to Bengaluru sites.",
    metaKeywords: "Tile Adhesive Manufacturer Bangalore, Best Tile Adhesive Bangalore, Cladding Adhesive Bangalore, Kiran Industries",
    aboutText: "Bangalore's dynamic high-rise infrastructure requires structural adhesives that can absorb vibration and structural settlement. We supply Bengaluru developers with S1-deformable adhesives and heavy-duty cladding systems directly from our automated production line.",
    features: [
      "Direct Logistics to Bengaluru Sites & Hubs",
      "Advanced C2S1 Deformable Adhesives for High-Rises",
      "Trusted by Bangalore's Leading Architects & Builders",
      "On-Site Pull-Out Testing Support in Bengaluru",
      "Ex-Stock Availability for Immediate Delivery"
    ],
    specs: [
      { property: "Bangalore Lead Time", value: "Within 24-36 Hours" },
      { property: "Key Products Supplied", value: "Continental Type 3 (C2TE) & Type 4 (C2S1)" },
      { property: "Site Support", value: "Technical Site Demos & Pull-Out Testing" },
      { property: "Ordering Capacity", value: "LTL and FTL direct truckloads" }
    ],
    faqs: [
      { question: "Can we get on-site testing in Bangalore?", answer: "Yes, our technical team conducts pull-out bond testing on-site in Bangalore for high-rise external cladding approvals." },
      { question: "Is there a local distributor in Bengaluru?", answer: "Yes, we have multiple distributor points across Bengaluru for retail and commercial orders." }
    ],
    ctaText: "Inquire for Bangalore Projects",
    ctaLink: "/contact",
    schemaType: "LocalBusiness"
  },
  'tile-adhesive-manufacturer-hyderabad': {
    slug: 'tile-adhesive-manufacturer-hyderabad',
    keyword: 'Tile Adhesive Manufacturer Hyderabad',
    title: "Tile Adhesive Manufacturer Serving Hyderabad",
    subtitle: "Delivering high-strength tile adhesives, ready plaster, and block mortars to Hyderabad & Secunderabad.",
    metaTitle: "Tile Adhesive Manufacturer Hyderabad | KI'S Continental",
    metaDescription: "Premium tile adhesive manufacturer serving Hyderabad and Telangana. High-bond solutions for vitrified tiles, granite flooring, and marble cladding.",
    metaKeywords: "Tile Adhesive Manufacturer Hyderabad, Best Tile Adhesive Hyderabad, Construction Materials Telangana, Kiran Industries",
    aboutText: "To support Hyderabad's booming residential and commercial construction, KI'S Continental supplies high-performance construction chemicals. Our close proximity to the Telangana border enables efficient, cost-effective shipping for bulk orders.",
    features: [
      "Efficient Logistics to Hyderabad, Gachibowli, and Hitec City",
      "Premium Thin-Bed AAC Block Mortars for Fast Masonry",
      "Water-Resistant Adhesives for Luxury Bathrooms & Spas",
      "Direct B2B Pricing for Telangana Contractors",
      "Free Technical Data Sheets & Specification Support"
    ],
    specs: [
      { property: "Hyderabad Lead Time", value: "Within 24 Hours" },
      { property: "Standard Quality Check", value: "Triple ISO Certified Production" },
      { property: "Bulk Packing Options", value: "20 kg bags / 40 kg bags" },
      { property: "Telangana Sales Support", value: "Dedicated Regional Sales Manager" }
    ],
    faqs: [
      { question: "How fast can you deliver a truckload to Hyderabad?", answer: "We deliver full truckloads (FTL) to Hyderabad project sites within 24 hours of order confirmation." },
      { question: "Do you supply block joining mortar to Hyderabad builders?", answer: "Yes, our high-strength thin-bed Block Joint Mortar is highly popular among AAC block builders in Hyderabad." }
    ],
    ctaText: "Request B2B Quote",
    ctaLink: "/request-quote",
    schemaType: "LocalBusiness"
  },
  'tile-adhesive-manufacturer-chennai': {
    slug: 'tile-adhesive-manufacturer-chennai',
    keyword: 'Tile Adhesive Manufacturer Chennai',
    title: "Tile Adhesive Manufacturer Serving Chennai",
    subtitle: "High-bond waterproofing products and tile adhesives engineered for Chennai's coastal climate.",
    metaTitle: "Tile Adhesive Manufacturer Chennai | KI'S Continental",
    metaDescription: "Kiran Industries is a premier tile adhesive manufacturer serving Chennai. High-bond water-resistant adhesives and grouts for humid coastal climates.",
    metaKeywords: "Tile Adhesive Manufacturer Chennai, Waterproofing Products Chennai, Grout Manufacturer Chennai, Kiran Industries",
    aboutText: "Chennai's humid coastal climate demands building materials that prevent salt corrosion and structural dampness. KI'S Continental products are formulated with premium waterproofing and anti-fungal polymers, ideal for local conditions.",
    features: [
      "Rust & Corrosion Resistant Material Formulations",
      "Advanced Anti-Fungal Grouts for Humid Bathrooms",
      "Elastomeric Waterproofing Coatings for Balconies",
      "Bulk Pricing and Logistics to Chennai Sites",
      "Technical Spec Documentation Provided"
    ],
    specs: [
      { property: "Chennai Lead Time", value: "Within 36-48 Hours" },
      { property: "Climate Adaptability", value: "High humidity and thermal cycle resistance" },
      { property: "Adhesive Grading", value: "Class C2 TE and S1 Flex" },
      { property: "Supply Options", value: "FTL Direct Factory Shipments" }
    ],
    faqs: [
      { question: "Are your adhesives suitable for Chennai coastal projects?", answer: "Yes, our polymer-fortified Type 2 and Type 3 adhesives are highly resistant to salt mist and moisture ingress." },
      { question: "Do you have dealers in Tamil Nadu?", answer: "Yes, we are expanding our authorized dealer network throughout Chennai and Tamil Nadu." }
    ],
    ctaText: "Become Chennai Dealer",
    ctaLink: "/dealers",
    schemaType: "LocalBusiness"
  },
  'tile-adhesive-manufacturer-raichur': {
    slug: 'tile-adhesive-manufacturer-raichur',
    keyword: 'Tile Adhesive Manufacturer Raichur',
    title: "Authorized Tile Adhesive Manufacturer in Raichur",
    subtitle: "Serving Raichur District with premium dry mix mortars, white cement putty, and tile adhesives.",
    metaTitle: "Tile Adhesive Manufacturer Raichur | Kiran Industries",
    metaDescription: "Kiran Industries is Raichur's leading local manufacturer. State-of-the-art 20 TPH automated plant in Manvi delivering high-bond tile adhesives and plasters.",
    metaKeywords: "Tile Adhesive Manufacturer Raichur, Best Tile Adhesive Raichur, Ready Mix Plaster Raichur, Kiran Industries",
    aboutText: "As our home district, Raichur is the heart of Kiran Industries' operations. Our fully automated facility in Manvi supplies dealers, builders, and homeowners across Raichur with factory-direct, highly competitive pricing on all dry mix products.",
    features: [
      "Factory-Direct Pricing with Zero Intermediate Cost",
      "Same-Day Shipping Across Raichur District",
      "Support Local Industry & Karnataka Job Creation",
      "On-Demand Site Demonstrations & Technical Audits",
      "Fully Stocked 2000+ Ton Factory Warehouse"
    ],
    specs: [
      { property: "Factory Location", value: "Manvi, Raichur District, Karnataka" },
      { property: "Local Delivery Time", value: "Same-Day / Next-Day" },
      { property: "Product Range Available", value: "Tile Adhesives, Plasters, Mortars, Putty, Grouts" },
      { property: "Factory Visits", value: "Available for authorized dealers & architects" }
    ],
    faqs: [
      { question: "Can we pick up orders directly from the Manvi factory?", answer: "Yes, authorized dealers and partners can coordinate self-pickup directly from our factory warehouse in Manvi." },
      { question: "Do you offer retail sales in Raichur?", answer: "Yes, through our extensive network of authorized hardware and building material dealers in Raichur." }
    ],
    ctaText: "Locate Raichur Dealers",
    ctaLink: "/dealers",
    schemaType: "LocalBusiness"
  }
};
