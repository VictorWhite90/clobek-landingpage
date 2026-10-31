export type PropertyType = {
  slug: string;
  name: string;
  bedrooms: number;
  hasBq: boolean;
  parking: number;
  size: number;
  price: number;
  // Pre-offer price shown struck through; defaults to price.
  originalPrice?: number;
  image: string;
  // Real land/site photo for the hero; each property shows a different one.
  heroImage: { src: string; alt: string; caption: string };
  gallery: {
    src: string;
    alt: string;
    caption: string;
  }[];
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
    originalPrice: 23.2,
    image: "/images/3-bedroom-terrace.jpeg",
    heroImage: {
      src: "/images/clobeck1/heritage-aerial-wide.jpg",
      alt: "Aerial view of the flat, fenced plots at Clobek Heritage Place, inside Clobek Crown Estate, Lugbe",
      caption: "Aerial view · Clobek Heritage Place, Lugbe",
    },
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
    originalPrice: 28.5,
    image: "/images/3-bedroom-terrace-bq-2.jpeg",
    heroImage: {
      src: "/images/clobeck1/heritage-site-3-hd.jpg",
      alt: "DPC blockwork and starter bars on plots at Clobek Heritage Place, with homes behind",
      caption: "Real site · DPC in progress",
    },
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
    originalPrice: 33.2,
    image: "/images/4-bedroom-terrace-bq.jpeg",
    heroImage: {
      src: "/images/clobeck1/heritage-plots-overhead.jpg",
      alt: "Overhead drone view of the marked-out plots at Clobek Heritage Place",
      caption: "From above · The plots",
    },
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
    originalPrice: 39.1,
    image: "/images/clobek-rowhouse-a.jpg",
    heroImage: {
      src: "/images/clobeck1/heritage-site-2-hd.jpg",
      alt: "Workers building DPC foundations at Clobek Heritage Place",
      caption: "Real site · Work in progress",
    },
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
    originalPrice: 45.4,
    image: "/images/clobek-duplex.jpg",
    heroImage: {
      src: "/images/clobeck1/heritage-dpc-overhead.jpg",
      alt: "Overhead drone view of a DPC foundation being built on a plot at Clobek Heritage Place",
      caption: "From above · DPC on the plots",
    },
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
    originalPrice: 49.6,
    image: "/images/5-bedroom-detached-duplex-bq.jpeg",
    heroImage: {
      src: "/images/clobeck1/heritage-site-1-wide.jpg",
      alt: "Blockwork and starter bars at Clobek Heritage Place, inside a built-up neighbourhood",
      caption: "Real site · Blockwork & starter bars",
    },
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

export function originalPrice(property: Pick<PropertyType, "price" | "originalPrice">) {
  return property.originalPrice ?? property.price;
}
