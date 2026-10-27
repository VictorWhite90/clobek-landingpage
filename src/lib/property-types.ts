export type PropertyType = {
  slug: string;
  name: string;
  bedrooms: number;
  hasBq: boolean;
  parking: number;
  size: number;
  price: number;
  image: string;
  gallery: {
    src: string;
    alt: string;
    caption: string;
  }[];
  features?: { title: string; detail: string }[];
};

export const propertyTypes: PropertyType[] = [
  {
    slug: "3-bedroom-terrace",
    name: "3-Bedroom Terrace",
    bedrooms: 3,
    hasBq: false,
    parking: 2,
    size: 141,
    price: 22,
    image: "/images/3-bedroom-terrace.jpeg",
    gallery: [
      {
        src: "/images/3-bedroom-terrace.jpeg",
        alt: "Architectural rendering of the 3-bedroom terrace properties",
        caption: "Front perspective",
      },
      {
        src: "/images/clobek-terrace-c.jpg",
        alt: "Daytime architectural rendering of the 3-bedroom terrace properties",
        caption: "Daytime exterior",
      },
      {
        src: "/images/clobek-estate-street.jpg",
        alt: "Street-level architectural rendering of the 3-bedroom terrace properties",
        caption: "Street perspective",
      },
    ],
  },
  {
    slug: "3-bedroom-terrace-bq",
    name: "3-Bedroom Terrace + B.Q",
    bedrooms: 3,
    hasBq: true,
    parking: 2,
    size: 163,
    price: 27,
    image: "/images/3-bedroom-terrace-bq-2.jpeg",
    gallery: [
      {
        src: "/images/3-bedroom-terrace-bq-2.jpeg",
        alt: "Evening architectural rendering of the 3-bedroom terrace properties with B.Q.",
        caption: "Evening exterior",
      },
      {
        src: "/images/3-bedroom-terrace-bq-day-1.jpg",
        alt: "Daytime architectural rendering of the 3-bedroom terrace properties with B.Q.",
        caption: "Daytime exterior",
      },
      {
        src: "/images/3-bedroom-terrace-bq-day-2.jpg",
        alt: "Daytime front view of the 3-bedroom terrace properties with B.Q.",
        caption: "Front view",
      },
    ],
  },
  {
    slug: "4-bedroom-terrace-bq",
    name: "4-Bedroom Super Terrace + B.Q",
    bedrooms: 4,
    hasBq: true,
    parking: 3,
    size: 167,
    price: 31.5,
    image: "/images/4-bedroom-terrace-bq.jpeg",
    features: [
      { title: "Four bedrooms", detail: "Bedrooms arranged across the upper floors" },
      { title: "Private bathrooms", detail: "En-suite bathrooms shown on the bedroom plans" },
      { title: "Two lounge spaces", detail: "Main lounge and an upper-floor family lounge" },
      { title: "Kitchen and dining", detail: "Separate kitchen and dedicated dining area" },
      { title: "Boys' Quarters", detail: "Separate B.Q. shown on the ground-floor plan" },
      { title: "Three-car parking", detail: "Parking provision shown in the prototype" },
    ],
    gallery: [
      {
        src: "/images/clobek-block-spare.jpg",
        alt: "Daytime front view of the 4-bedroom terrace properties",
        caption: "Daytime front view",
      },
      {
        src: "/images/clobek-rowhouse-b.jpg",
        alt: "Daytime street perspective of the 4-bedroom terrace properties",
        caption: "Daytime street view",
      },
      {
        src: "/images/4-bedroom-terrace-bq.jpeg",
        alt: "Night-time architectural render of the 4-bedroom terrace properties",
        caption: "Night view",
      },
    ],
  },
  {
    slug: "4-bedroom-row-house-bq",
    name: "4-Bedroom Row House Duplex + B.Q",
    bedrooms: 4,
    hasBq: true,
    parking: 3,
    size: 300,
    price: 37,
    image: "/images/clobek-rowhouse-a.jpg",
    gallery: [
      {
        src: "/images/clobek-rowhouse-a.jpg",
        alt: "Evening architectural rendering of the 4-bedroom row house duplex homes",
        caption: "Evening exterior",
      },
      {
        src: "/images/clobek-street-spare.jpg",
        alt: "Daytime street perspective of the 4-bedroom row house duplex homes",
        caption: "Daytime street view",
      },
    ],
  },
  {
    slug: "5-bedroom-row-house-bq",
    name: "5-Bedroom Row House Duplex + B.Q",
    bedrooms: 5,
    hasBq: true,
    parking: 3,
    size: 375,
    price: 43,
    image: "/images/clobek-duplex.jpg",
    gallery: [
      {
        src: "/images/clobek-duplex.jpg",
        alt: "Architectural rendering of the 5-bedroom row house duplex homes",
        caption: "Front perspective",
      },
    ],
  },
  {
    slug: "5-bedroom-detached-duplex-bq",
    name: "5-Bedroom Detached Duplex + B.Q",
    bedrooms: 5,
    hasBq: true,
    parking: 3,
    size: 465,
    price: 47,
    image: "/images/5-bedroom-detached-duplex-bq.jpeg",
    gallery: [
      {
        src: "/images/5-bedroom-detached-duplex-bq.jpeg",
        alt: "Architectural rendering of the 5-bedroom detached duplex with B.Q.",
        caption: "Front perspective",
      },
    ],
  },
];

export function getPropertyType(slug: string) {
  return propertyTypes.find((property) => property.slug === slug);
}

export function getPropertyPath(slug: string) {
  return `/properties/${slug}`;
}
