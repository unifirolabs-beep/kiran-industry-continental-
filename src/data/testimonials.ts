// src/data/testimonials.ts

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  review: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Civil Engineer',
    company: 'Apex Constructions',
    location: 'Bangalore, Karnataka',
    rating: 5,
    review:
      'Continental Tile Adhesive Type 3 has been our go-to product for exterior cladding projects. The weather resistance and open time are exceptional. Our team has been using it for over a year with zero failures.',
    avatar: 'RK',
  },
  {
    id: 2,
    name: 'Mohammed Irfan',
    role: 'Contractor',
    company: 'Irfan Builders',
    location: 'Raichur, Karnataka',
    rating: 5,
    review:
      'Kiran Industries has been a reliable partner for all our construction material needs. The Ready Plaster is consistent in quality and saves significant time on site. Highly recommend their products.',
    avatar: 'MI',
  },
  {
    id: 3,
    name: 'Suresh Reddy',
    role: 'Developer',
    company: 'SR Developers',
    location: 'Hyderabad, Telangana',
    rating: 5,
    review:
      'We switched to Continental Tile Adhesive Type 2 for our luxury apartment project and the results are outstanding. Vitrified tile application is perfect with zero lippage and strong bond.',
    avatar: 'SR',
  },
  {
    id: 4,
    name: 'Priya Sharma',
    role: 'Architect',
    company: 'Design Studio',
    location: 'Chennai, Tamil Nadu',
    rating: 4,
    review:
      'The Block Joint Mortar is a game changer for AAC block construction. Very thin bed, high bond strength, and the finish is clean. Delivery is always on time. Great product from a great company.',
    avatar: 'PS',
  },
  {
    id: 5,
    name: 'Venkatesh Rao',
    role: 'Tile Dealer',
    company: 'Rao Tiles & Ceramics',
    location: 'Kalaburagi, Karnataka',
    rating: 5,
    review:
      'As a dealer, I have tried many brands. Continental products sell themselves. Customer retention is very high because the quality is consistent. Kiran Industries team provides excellent marketing support.',
    avatar: 'VR',
  },
  {
    id: 6,
    name: 'Anand Patil',
    role: 'Project Manager',
    company: 'Patil Infrastructure',
    location: 'Belgaum, Karnataka',
    rating: 5,
    review:
      'Their ISO certifications are not just on paper. Every bag of product maintains the same quality standard. We used Continental adhesives for a large government hospital project and zero complaints from our team.',
    avatar: 'AP',
  },
];
