import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyTypePage from "@/components/PropertyTypePage";
import {
  getPropertyType,
  propertyTypes,
} from "@/lib/property-types";

const additionalPropertyTypes = propertyTypes.filter(
  (property) => property.slug !== "4-bedroom-terrace-bq",
);

export const dynamicParams = false;

export function generateStaticParams() {
  return additionalPropertyTypes.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyType(slug);

  if (!property || property.slug === "4-bedroom-terrace-bq") {
    return {};
  }

  return {
    title: `${property.name} | Clobek Heritage Place`,
    description: `Explore the ${property.name} at Clobek Heritage Place. Approx. ${property.size} sqm, with Land + DPC from ₦${property.price}M.`,
  };
}

export default async function PropertyTypeRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyType(slug);

  if (!property || property.slug === "4-bedroom-terrace-bq") {
    notFound();
  }

  return <PropertyTypePage property={property} />;
}
