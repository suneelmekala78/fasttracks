import { withBasePath } from "@/lib/paths";

export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("//")) {
    return src;
  }
  return withBasePath(src);
}
