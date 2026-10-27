import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyTypePage from "@/components/PropertyTypePage";
import { discountedNaira, formatNairaShort } from "@/lib/pricing";
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

  return {
    title: `${property.name} | Clobek Heritage Place`,
    description: `Explore the ${property.name} at Clobek Heritage Place. Approx. ${property.size} sqm, Land + DPC now ${formatNairaShort(discountedNaira(property.price))} (5% off), with 25% deposit and 18-month payment plan.`,
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
