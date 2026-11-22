import { BookingBand } from "@/components/home/booking-band";
import { EditorsPicks } from "@/components/home/editors-picks";
import { Founder } from "@/components/home/founder";
import { Hero } from "@/components/home/hero";
import { OurServices } from "@/components/home/our-services";
import { Partners } from "@/components/home/partners";
import { SignatureServices } from "@/components/home/signature-services";
import { StudioYears } from "@/components/home/studio-years";
import { VideoRail } from "@/components/home/video-rail";
import { highlights, mustWatch } from "@/lib/content";

export default function HomePage() {
  return (
    <main id="content">
      <Hero />
      <StudioYears />
      <Founder />
      <OurServices />
      <div className="home-stage text-foreground">
        <VideoRail title="Must Watch" href="/videos" clips={mustWatch} />
        <BookingBand />
      </div>
      <div className="paper-stage">
        <EditorsPicks />
        <div className="h-[7px] bg-[#e10600]" />
        <SignatureServices />
      </div>
      <div className="bg-background text-foreground">
        <VideoRail title="2026 Highlights" href="/videos" clips={highlights} />
        <Partners />
      </div>
    </main>
  );
}
