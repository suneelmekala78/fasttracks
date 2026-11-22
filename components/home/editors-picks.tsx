import Image from "next/image";
import Link from "next/link";
import { editorStories } from "@/lib/content";

export function EditorsPicks() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-12 md:px-6 md:py-16">
        <h2 className="font-display text-4xl font-bold uppercase leading-none tracking-tight md:text-5xl">
          From the Studio
        </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {editorStories.map((story) => (
          <Link key={story.slug} href={`/news/${story.slug}`} className="group block">
            <span className="relative block aspect-[16/10] overflow-hidden rounded-2xl bg-[#ddd]">
              <Image
                src={story.image}
                alt={story.imageAlt}
                fill
                sizes="(min-width: 1280px) 22vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
                style={{ objectPosition: story.focus }}
              />
            </span>
            <span className="mt-3 block text-[11px] font-bold uppercase tracking-[0.16em] text-[#e10600]">
              {story.kicker}
            </span>
            <span className="mt-1 block text-lg font-bold leading-snug group-hover:underline">
              {story.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
