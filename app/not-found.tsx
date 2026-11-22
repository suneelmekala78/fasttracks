import { PlaceholderPage } from "@/components/placeholder-page";

export default function NotFound() {
  return (
    <PlaceholderPage
      kicker="404"
      title="Page not found"
      description="That address is not part of Fasttracks."
      badge={null}
    />
  );
}
