import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [] as { slug: string[] }[];
}

export const dynamicParams = false;

export default function CatchAllPage() {
  notFound();
}
