import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyTypePage from "@/components/PropertyTypePage";
import { SHARE_TITLE, propertyHeadline, shareDescription } from "@/lib/pricing";
import {
  getPropertyType,
  propertyTypes,
} from "@/lib/property-types";


export const dynamicParams = false;

export function generateStaticParams() {
  return propertyTypes.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyType(slug);

  if (!property) {
    return {};
  }

  const headline = propertyHeadline(property.name);
  const share = shareDescription(property.price);

  return {
    title: `${property.name} | Clobek Heritage Place`,
    description: `${headline}. ${share}`,
    openGraph: {
      title: SHARE_TITLE,
      description: share,
      url: `/properties/${property.slug}`,
      siteName: "Clobek Heritage Place",
      locale: "en_NG",
      type: "website",
      images: [{ url: property.image, alt: `${property.name}, artist's impression` }],
    },
    twitter: {
      card: "summary_large_image",
      title: SHARE_TITLE,
      description: share,
      images: [property.image],
    },
  };
}

export default async function PropertyTypeRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyType(slug);

  if (!property) {
    notFound();
  }

  return <PropertyTypePage property={property} />;
}
