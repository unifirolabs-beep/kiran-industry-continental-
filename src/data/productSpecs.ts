// src/data/productSpecs.ts

export interface TechnicalSpec {
  property: string;
  specification: string;
}

export interface ApplicationStep {
  title: string;
  desc: string;
}

export interface DetailedProductInfo {
  tagline: string;
  fullDescription: string;
  technicalSpecs: TechnicalSpec[];
  areasOfApplication: string[];
  methodOfApplication: ApplicationStep[];
  coverageDetailed: string;
  precautions: string[];
}

export const detailedProductSpecs: Record<string, DetailedProductInfo> = {
  'type-1': {
    tagline: 'Tile Adhesive For Floor & Wall – Ceramic Tiles',
    fullDescription: "KI'S Continental Type-1 is a polymer-modified, cement-based grey tile adhesive specially engineered for the installation of ceramic tiles, clay tiles, terracotta tiles, and small natural stones on interior floors and vertical walls. It provides excellent bonding strength, strong initial grab, and long-lasting durability.",
    technicalSpecs: [
      { property: 'Tensile Adhesion Strength (Dry Status)', specification: '≥ 0.5 N/mm²' },
      { property: 'Shear Adhesion Strength (Dry Status)', specification: '≥ 1.0 N/mm²' },
      { property: 'Pot Life @ 27°C', specification: 'Approx. 1.5 – 2 Hours' },
      { property: 'Open Time', specification: '20 Minutes' },
      { property: 'Adjustability Time', specification: '15 Minutes' },
      { property: 'Standard Compliance', specification: 'Complies with IS 15477:2019 – Type 1' }
    ],
    areasOfApplication: [
      'Interior Floor Tiling',
      'Interior Wall Cladding',
      'Residential Buildings',
      'Ceramic & Terracotta Installation'
    ],
    methodOfApplication: [
      {
        title: 'Surface Preparation',
        desc: 'Ensure the substrate is structurally sound, level, clean, and free from dust, oil, grease, or loose particles. Dampen the surface before application if required.'
      },
      {
        title: 'Mixing',
        desc: "Add 4.4 to 4.8 litres of clean water for every 20 kg bag. Slowly add KI'S Continental Type-1 powder. Mix thoroughly using a mechanical stirrer for 3–5 minutes until a lump-free paste is achieved. Allow the mix to stand for 2 minutes and remix before use."
      },
      {
        title: 'Application',
        desc: 'Apply adhesive using a 6 mm × 6 mm notched trowel. Comb the surface evenly. Place tiles within 15–20 minutes of adhesive application. Press tiles firmly with a slight twisting motion. Tap gently using a rubber mallet for proper adhesion.'
      }
    ],
    coverageDetailed: 'Approx. 50–55 sq.ft per 20 kg bag at a uniform bed thickness of 3 mm. Actual coverage may vary depending on substrate condition, surface flatness, and trowel notch size.',
    precautions: [
      'Use clean water for mixing.',
      'Do not add excess water after mixing.',
      'Do not use on frozen or extremely hot surfaces.',
      'Allow proper curing before grouting.',
      'Refer to the Technical Data Sheet for detailed instructions.'
    ]
  },
  'type-2': {
    tagline: 'Vitrified & Porcelain Tile Adhesive',
    fullDescription: "KI'S Continental Type-2 is a premium, polymer-fortified, cement-based tile adhesive designed for vitrified tiles, porcelain tiles, large-format ceramic tiles, and natural stones. Specially formulated with anti-slip technology, it is ideal for interior wall cladding and heavy-use wet areas like bathrooms and kitchens.",
    technicalSpecs: [
      { property: 'Tensile Adhesion Strength', specification: '≥ 1.0 N/mm²' },
      { property: 'Shear Adhesion Strength', specification: '≥ 1.25 N/mm²' },
      { property: 'Pot Life @ 27°C', specification: 'Approx. 2 Hours' },
      { property: 'Open Time', specification: '25 Minutes' },
      { property: 'Adjustability Time', specification: '20 Minutes' },
      { property: 'Standard Compliance', specification: 'Complies with IS 15477:2019 – Type 2' }
    ],
    areasOfApplication: [
      'Vitrified & Porcelain Tiles',
      'Bathrooms & Wet Areas',
      'Kitchen Wall Cladding',
      'Light Commercial Spaces'
    ],
    methodOfApplication: [
      {
        title: 'Surface Preparation',
        desc: 'Ensure substrate is fully cured and free of contaminants. Highly absorbent surfaces should be pre-wetted to prevent premature moisture loss.'
      },
      {
        title: 'Mixing',
        desc: 'Mix a 20 kg bag with approximately 4.5 to 5.0 litres of clean water. Blend using an electric drill stirrer until completely uniform. Let the paste rest for 3 minutes to activate polymers, then stir once more.'
      },
      {
        title: 'Application',
        desc: 'Spread mixed mortar with a notched trowel. Tap tiles down using a rubber mallet. Back-buttering is recommended for tiles larger than 300x300 mm to ensure 100% adhesive coverage.'
      }
    ],
    coverageDetailed: 'Approx. 40–45 sq.ft per 20 kg bag at 3–4 mm bed thickness. Substrate roughness and troweling techniques may affect actual coverage.',
    precautions: [
      'Do not mix old batch with new paste.',
      'Protect tiles from rainfall or direct sunlight for at least 24 hours post-installation.',
      'Always test substrate porosity before application.'
    ]
  },
  'type-3': {
    tagline: 'High Performance Weather & Swimming Pool Adhesive',
    fullDescription: "KI'S Continental Type-3 is a high-performance, weather-resistant, polymer-modified cementitious tile adhesive with extended open time (Class E) and vertical slip resistance (Class T). Specially engineered for swimming pools, water bodies, high-rise exterior cladding, and sub-zero or heavy thermal cycling environments.",
    technicalSpecs: [
      { property: 'Tensile Adhesion Strength', specification: '≥ 1.2 N/mm²' },
      { property: 'Tensile Adhesion after Water Immersion', specification: '≥ 1.0 N/mm²' },
      { property: 'Slip Resistance', specification: '≤ 0.5 mm (Class T)' },
      { property: 'Pot Life', specification: 'Approx. 2 Hours' },
      { property: 'Open Time', specification: '30 Minutes (Class E)' },
      { property: 'Standard Compliance', specification: 'Complies with EN 12004 C2 TE' }
    ],
    areasOfApplication: [
      'Swimming Pools & Spas',
      'Exterior High-Rise Facades',
      'Large Format Exterior Tiling',
      'Water Fountains & Reservoirs'
    ],
    methodOfApplication: [
      {
        title: 'Surface Preparation',
        desc: 'Concrete substrates must be sound and aged for at least 28 days. For swimming pools, verify that waterproofing layers are dry and sound.'
      },
      {
        title: 'Mixing',
        desc: 'Combine 20 kg of powder with 4.8 to 5.2 litres of clean water. Mix thoroughly until smooth. Allow the paste to mature for 5 minutes, then remix briefly.'
      },
      {
        title: 'Application',
        desc: 'Apply adhesive on both the substrate and the back of the tiles (double-spreading method). Lay tiles and tap firmly to eliminate voids. Clean excess joints before the adhesive cures.'
      }
    ],
    coverageDetailed: 'Approx. 35–40 sq.ft per 20 kg bag at 4 mm thickness. Double-spreading will reduce coverage slightly.',
    precautions: [
      'Do not apply on hot substrates or in direct midday sunlight.',
      'Allow swimming pools to cure for at least 14 days before filling with water.',
      'Wear protective gloves and eyewear during mixing.'
    ]
  },
  'type-4': {
    tagline: 'Highly Flexible Deformable Adhesive (S1 Class)',
    fullDescription: "KI'S Continental Type-4 is a highly deformable, polymer-modified, cement-based adhesive with Class S1 flexibility. Specially formulated to absorb structural movements, vibration, and thermal expansion, it is ideal for external stone cladding, terraces, balconies, wooden/metal substrates, drywall partitions, and high-traffic commercial floors.",
    technicalSpecs: [
      { property: 'Tensile Adhesion Strength', specification: '≥ 1.5 N/mm²' },
      { property: 'Deformability (Flexibility)', specification: '≥ 2.5 mm (Class S1)' },
      { property: 'Pot Life', specification: 'Approx. 2 Hours' },
      { property: 'Open Time', specification: '30 Minutes' },
      { property: 'Adjustability Time', specification: '25 Minutes' },
      { property: 'Standard Compliance', specification: 'Complies with EN 12004 C2 S1' }
    ],
    areasOfApplication: [
      'Balconies & Open Terraces',
      'External Granite/Stone Cladding',
      'Metros & Railway Stations',
      'Underfloor Heating Systems'
    ],
    methodOfApplication: [
      {
        title: 'Surface Preparation',
        desc: 'Clean the surface. Sand wood or drywall surfaces lightly to ensure mechanical keying. Check surface levelness (should be within 3mm over 2 meters).'
      },
      {
        title: 'Mixing',
        desc: 'Add 5.0 to 5.4 litres of clean water. Blend at low RPM to avoid air entrainment. Let stand for 5 minutes, then stir for 1 minute.'
      },
      {
        title: 'Application',
        desc: 'Spread adhesive with a notched trowel. Apply tiles using adequate pressure to ensure full contact. For heavy stones, mechanical clamps are recommended on walls.'
      }
    ],
    coverageDetailed: 'Approx. 30–35 sq.ft per 20 kg bag at a bed thickness of 4–5 mm.',
    precautions: [
      'Do not apply on damp wood or non-structural drywalls.',
      'Ensure proper movement joints are designed in large floor layouts.',
      'Store bags in a well-ventilated dry space.'
    ]
  },
  'type-5': {
    tagline: 'Ultra-Performance Polyurethane (PU) Adhesive',
    fullDescription: "KI'S Continental Type-5 is a two-component, solvent-free, highly flexible polyurethane adhesive. Characterized by exceptional bonding strength and zero vertical slip, it is designed for demanding substrates such as iron, steel, wood, glass, fiber-cement boards, and large-format porcelain slabs. 100% waterproof and chemical resistant.",
    technicalSpecs: [
      { property: 'Tensile Adhesion Strength (Polymer Resin)', specification: '≥ 2.5 N/mm²' },
      { property: 'Shear Adhesion Strength', specification: '≥ 2.0 N/mm²' },
      { property: 'Pot Life @ 27°C', specification: 'Approx. 40–50 Minutes' },
      { property: 'Open Time', specification: '40 Minutes' },
      { property: 'Walkability / Grouting', specification: 'After 12 Hours' },
      { property: 'Standard Compliance', specification: 'Complies with EN 12004 R2T' }
    ],
    areasOfApplication: [
      'Metal & Steel Substrates',
      'Wooden Panels & Boards',
      'Glass & Mirror Installation',
      'Large Format Slabs on Drywalls'
    ],
    methodOfApplication: [
      {
        title: 'Surface Preparation',
        desc: 'Metal surfaces must be free of rust, scale, and oil. Wood surfaces must be structurally rigid and dry. Glass panels must be wiped clean.'
      },
      {
        title: 'Mixing',
        desc: 'Pour the entire Component B catalyst into Component A resin paste. Mix thoroughly using an electric paddle mixer at low speed for 2 minutes until color is completely uniform.'
      },
      {
        title: 'Application',
        desc: 'Apply using a suitable notched trowel. Press materials firmly. Because of the rapid pot life, only mix amounts that can be applied within 35 minutes.'
      }
    ],
    coverageDetailed: 'Approx. 25–30 sq.ft per 20 kg set depending on notch size and substrate smoothness.',
    precautions: [
      'Always mix the components in their exact weight ratio.',
      'Do not add water under any circumstances.',
      'Clean tools immediately with mineral spirits before adhesive hardens.'
    ]
  },
  'ready-plaster': {
    tagline: 'High-Workability Crack-Resistant Wall Plaster',
    fullDescription: "KI'S Continental Ready Plaster is a factory-blended dry mix plaster composed of high-quality OPC cement, graded sand, and proprietary performance additives. Engineered for internal and external brick and concrete blocks, it replaces conventional site sand-cement mixing to deliver a smooth, high-durability finish with minimal shrinkage cracks.",
    technicalSpecs: [
      { property: 'Compressive Strength (28 Days)', specification: '≥ 5.5 N/mm²' },
      { property: 'Tensile Adhesion Strength', specification: '≥ 0.5 N/mm²' },
      { property: 'Bulk Density', specification: '1.4 – 1.6 g/cc' },
      { property: 'Pot Life @ 27°C', specification: 'Approx. 1 Hour' },
      { property: 'Water Demand', specification: 'Approx. 16–18%' },
      { property: 'Standard Compliance', specification: 'Complies with IS 2250' }
    ],
    areasOfApplication: [
      'Brick & Block Wall Plastering',
      'Ceiling Plastering',
      'Internal Finish Undercoat',
      'External Weather-Shield Base'
    ],
    methodOfApplication: [
      {
        title: 'Surface Preparation',
        desc: 'Clean wall surface of dust and loose mortar joints. Pre-wet the blocks/brick surface to reduce water absorption from the plaster.'
      },
      {
        title: 'Mixing',
        desc: 'Mix a 40 kg bag with approximately 6.5 to 7.2 litres of clean water. Blend for 5 minutes using a machine mixer or manual tools until homogeneous. Use within 60 minutes.'
      },
      {
        title: 'Application',
        desc: 'Apply plaster onto wall at a thickness of 8–12 mm per coat. Level with an aluminum straight edge and float with a trowel for a smooth finish. Cure with water for 5–7 days.'
      }
    ],
    coverageDetailed: 'Approx. 16–18 sq.ft per 40 kg bag at 10 mm uniform thickness.',
    precautions: [
      'Do not apply thicker than 15 mm in a single coat.',
      'Curing with water is essential to achieve optimum compressive strength.',
      'Keep dry plaster bags off the floor in dry storage.'
    ]
  },
  'block-joint': {
    tagline: 'Thin-Bed Jointing Mortar for AAC Blocks',
    fullDescription: "KI'S Continental Block Joint Mortar is a factory-formulated thin-bed joinery mortar designed for bonding AAC blocks, concrete blocks, CLC blocks, and fly-ash bricks. Made with cement, specialized sands, and water-retaining polymers, it replaces traditional 15mm sand-cement joints with high-strength 3mm joints.",
    technicalSpecs: [
      { property: 'Tensile Splitting Strength (28 Days)', specification: '≥ 0.35 N/mm²' },
      { property: 'Compressive Strength', specification: '≥ 6.0 N/mm²' },
      { property: 'Bed Thickness', specification: '3 – 5 mm' },
      { property: 'Pot Life', specification: '1.5 – 2 Hours' },
      { property: 'Standard Compliance', specification: 'Complies with IS 2250 / ASTM C1660' }
    ],
    areasOfApplication: [
      'AAC Block Masonry',
      'CLC Block Wall Construction',
      'Lightweight Fly-Ash Masonry',
      'Thermal Insulated Wall Joints'
    ],
    methodOfApplication: [
      {
        title: 'Surface Preparation',
        desc: 'AAC blocks must be clean and free of dust. Wipe block edges with a damp sponge prior to laying to ensure proper adhesion.'
      },
      {
        title: 'Mixing',
        desc: 'Mix a 20 kg bag with 4.5 to 5.0 litres of clean water. Stir vigorously until a uniform paste is formed. Let sit for 3 minutes to activate polymers.'
      },
      {
        title: 'Application',
        desc: 'Apply mortar on the horizontal and vertical joints of blocks using a trowel. Lay block and tap into position with a rubber mallet. Check alignment.'
      }
    ],
    coverageDetailed: 'Approx. 90–100 sq.ft per 20 kg bag for 3 mm joint thickness (blocks sized 600x200x150 mm).',
    precautions: [
      'Do not lay dry blocks without wiping with a damp sponge.',
      'Do not add fresh powder to dynamic thick paste.',
      'Allow blockwork to cure for 24 hours before plastering.'
    ]
  },
  'super-grout': {
    tagline: 'Premium Stain-Resistant Anti-Fungal Tile Grout',
    fullDescription: "KI'S Continental Super Grout is a high-grade, polymer-modified, cement-based tile joint filler. Engineered with advanced anti-fungal, anti-bacterial, and water-repellent properties, it fills joints 1.5–5 mm wide to provide a color-fast, crack-free, and stain-resistant finish on marble, granite, ceramic, and vitrified installations.",
    technicalSpecs: [
      { property: 'Compressive Strength (28 Days)', specification: '≥ 15.0 N/mm²' },
      { property: 'Flexural Strength', specification: '≥ 2.5 N/mm²' },
      { property: 'Shrinkage Value', specification: '≤ 1.5 mm/m' },
      { property: 'Pot Life', specification: 'Approx. 45–60 Minutes' },
      { property: 'Joint Width Range', specification: '1.5 mm – 5 mm' },
      { property: 'Standard Compliance', specification: 'Complies with EN 13888 CG2WA' }
    ],
    areasOfApplication: [
      'Tile Joints 1.5–5 mm Wide',
      'Bathrooms & Kitchen Floors',
      'Interior & Exterior Wall Joints',
      'Swimming Pool Tile Grouting'
    ],
    methodOfApplication: [
      {
        title: 'Joint Preparation',
        desc: 'Clean joints of loose adhesive, dust, and standing water. Grouting should be done at least 24 hours after tile installation is completed.'
      },
      {
        title: 'Mixing',
        desc: 'Mix 1 kg of Super Grout with approximately 280 to 300 ml of clean water (or grout admix liquid). Mix until a thick, smooth paste is achieved. Let stand for 2 minutes.'
      },
      {
        title: 'Application',
        desc: 'Apply grout into tile joints using a rubber grout float. Press firmly diagonally. Clean excess grout with a damp sponge after 15–20 minutes before it hardens.'
      }
    ],
    coverageDetailed: 'Varies extensively based on tile dimensions and joint width. Refer to the grout coverage calculator table.',
    precautions: [
      'Do not use acidic cleaners on grouted joints.',
      'Clean tiles within the recommended window to prevent grout haze.',
      'Ensure grouted joints are cured for 24 hours before exposing to water.'
    ]
  }
};
