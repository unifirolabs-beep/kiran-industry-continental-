# JSON-LD Schema Markup Master Templates: KI'S Continental

Structured schemas tell Google and search engines exactly what entities your website describes. Implement the following JSON-LD scripts on your respective pages.

---

## 1. WebSite Schema (Homepage)
*Embed on the primary homepage (`/`).*

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "KI'S Continental",
  "url": "https://www.kiscontinental.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.kiscontinental.com/products?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

## 2. Organization & LocalBusiness Schemas (Global Head)
*Already integrated in `src/app/layout.tsx` to apply globally.*

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.kiscontinental.com/#organization",
      "name": "Kiran Industries",
      "alternateName": "KI'S Continental",
      "url": "https://www.kiscontinental.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.kiscontinental.com/logo.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 99168 05972",
        "contactType": "sales",
        "email": "Infoandsalesconnect@kiscontinental.com",
        "areaServed": "IN",
        "availableLanguage": ["en", "kn", "te", "hi"]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.kiscontinental.com/#localbusiness",
      "name": "KI'S Continental",
      "parentOrganization": {
        "@id": "https://www.kiscontinental.com/#organization"
      },
      "url": "https://www.kiscontinental.com/",
      "image": "https://www.kiscontinental.com/images/factory-facade.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sy. #659/2, Mustor Road",
        "addressLocality": "Manvi",
        "addressRegion": "Karnataka",
        "postalCode": "583123",
        "addressCountry": "IN"
      },
      "telephone": "+91 99168 05972",
      "email": "Infoandsalesconnect@kiscontinental.com",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 15.964923,
        "longitude": 77.042824
      },
      "knowsAbout": [
        "Tile Adhesive Manufacturing",
        "Dry Mix Mortar",
        "Construction Chemicals",
        "Waterproofing Solutions",
        "Wall Putty",
        "Ready Mix Plaster",
        "Block Joining Mortar",
        "Building Materials"
      ]
    }
  ]
}
```

---

## 3. Product Schema (Example: Type-2 Adhesive)
*To be rendered on `src/app/products/type-2/page.tsx` or similar dynamic products page.*

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Continental Tile Adhesive Type 2",
  "image": "https://www.kiscontinental.com/images/products/type-2-front.jpg",
  "description": "An enhanced-adhesion polymer-fortified cement-based tile adhesive with anti-slip technology, designed for vitrified and porcelain tiles in wet areas.",
  "sku": "KIS-CONT-T2",
  "mpn": "IS-15477-TYPE2",
  "brand": {
    "@type": "Brand",
    "name": "KI'S Continental"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Kiran Industries"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "INR",
    "offerCount": "1",
    "lowPrice": "0",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "description": "Contact for bulk commercial and dealer pricing"
    }
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Grade",
      "value": "C2 Grade"
    },
    {
      "@type": "PropertyValue",
      "name": "Standard Compliance",
      "value": "IS 15477:2019 Type 2"
    },
    {
      "@type": "PropertyValue",
      "name": "Pack Size",
      "value": "20 kg"
    }
  ]
}
```

---

## 4. FAQ Schema (FAQPage)
*To be injected on the Solutions page, FAQs page, or where accordions are placed.*

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which adhesive is best for vitrified tiles in bathrooms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Continental Tile Adhesive Type 2 (C2 Grade) is ideal for vitrified tiles in wet areas like bathrooms. Its anti-slip technology and enhanced bond strength make it perfect for both floor and wall applications in moisture-prone environments."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use Continental adhesive for exterior cladding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Continental Tile Adhesive Type 3 is specifically formulated for exterior applications with weather and UV resistance. For highly flexible substrates like balconies, Type 4 (S1 deformable) is recommended."
      }
    }
  ]
}
```

---

## 5. Breadcrumb Schema (BreadcrumbList)
*Rendered on inner pages (e.g. `/products/type-2`).*

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.kiscontinental.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": "https://www.kiscontinental.com/products"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Continental Tile Adhesive Type 2",
      "item": "https://www.kiscontinental.com/products/type-2"
    }
  ]
}
```
