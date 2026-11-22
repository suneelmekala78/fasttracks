import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceholderPage } from "@/components/placeholder-page";
import { allPlaceholderParams, resolvePath } from "@/lib/pages";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return allPlaceholderParams();
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = resolvePath(slug);
  if (!page) return { title: "Not found" };
  return { title: page.title, description: page.description };
}

export default async function PlaceholderRoute({ params }: Props) {
  const { slug } = await params;
  const page = resolvePath(slug);
  if (!page) notFound();
  return <PlaceholderPage {...page} />;
}
