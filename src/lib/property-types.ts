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
  // Clip for "Site Progress"; falls back to the shared aerial footage.
  siteVideo?: SiteVideo;
  // Photo for "More than a plot"; falls back to the shared DPC shot.
  foundationImage?: SitePhoto;
  // Site progress photos for this property; falls back to the shared set.
  sitePhotos?: SitePhoto[];
  gallery: {
    src: string;
    alt: string;
    caption: string;
  }[];
};

type SitePhoto = { src: string; alt: string; caption: string };

export type SiteVideo = {
  src: string;
  poster: string;
  label: string;
  caption: string;
  width: number;
  height: number;
};

// Phone clips walking the plots, one per bedroom count.
const fourBedVideo: SiteVideo = {
  src: "/videos/clobek-heritage-4-bed-site.mp4",
  poster: "/videos/clobek-heritage-4-bed-site-poster.jpg",
  label: "Walk-through of DPC blockwork and column bars at Clobek Heritage Place",
  caption: "Real site footage · Walk-through",
  width: 368,
  height: 432,
};

const fiveBedVideo: SiteVideo = {
  src: "/videos/clobek-heritage-5-bed-site.mp4",
  poster: "/videos/clobek-heritage-5-bed-site-poster.jpg",
  label: "Walk-through of finished DPC walls at Clobek Heritage Place",
  caption: "Real site footage · Walk-through",
  width: 432,
  height: 368,
};

// New site progress photos. Every page shows all five, each once: the hero,
// "More than a plot" and three in "Site Progress".
const site = {
  blockwork: {
    src: "/images/site-progress/4-bed-blockwork.jpeg",
    alt: "Workers laying DPC blockwork at Clobek Heritage Place",
    caption: "Real site · Blockwork under way",
  },
  trenches: {
    src: "/images/site-progress/4-bed-foundation-trenches.jpeg",
    alt: "Foundation trenches and column reinforcement at Clobek Heritage Place, with the built-up estate behind",
    caption: "Real site · Foundation & columns",
  },
  workers: {
    src: "/images/site-progress/4-bed-workers.jpeg",
    alt: "Workers building DPC walls at Clobek Heritage Place",
    caption: "Real site · Work in progress",
  },
  walls: {
    src: "/images/site-progress/5-bed-dpc-walls.jpeg",
    alt: "Finished DPC block walls at Clobek Heritage Place",
    caption: "Real site · DPC walls up",
  },
  starterBars: {
    src: "/images/site-progress/5-bed-starter-bars.jpeg",
    alt: "DPC blockwork and starter bars at Clobek Heritage Place, with the built-up estate behind",
    caption: "Real site · DPC & starter bars",
  },
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
    heroImage: site.trenches,
    siteVideo: fourBedVideo,
    foundationImage: site.starterBars,
    sitePhotos: [site.blockwork, site.workers, site.walls],
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
    heroImage: site.workers,
    siteVideo: fourBedVideo,
    foundationImage: site.walls,
    sitePhotos: [site.blockwork, site.trenches, site.starterBars],
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
    heroImage: site.walls,
    siteVideo: fiveBedVideo,
    foundationImage: site.workers,
    sitePhotos: [site.starterBars, site.blockwork, site.trenches],
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
    heroImage: site.starterBars,
    siteVideo: fiveBedVideo,
    foundationImage: site.trenches,
    sitePhotos: [site.walls, site.workers, site.blockwork],
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
