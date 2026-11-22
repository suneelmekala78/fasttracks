import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappHref } from "@/lib/site";

export function BookingBand() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-6">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[92px] flex-col items-center justify-center gap-3 bg-black px-6 py-5 text-center shadow-[0_12px_40px_rgba(0,0,0,0.35)] sm:flex-row sm:justify-between sm:text-left"
      >
        <span>
          <span className="block font-display text-lg font-bold italic text-[#e10600]">Walk in today</span>
          <span className="mt-1 block font-sans text-xl font-black uppercase italic text-white sm:text-3xl">
            Drive transformed tomorrow
          </span>
        </span>
        <span className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-2 text-sm font-black uppercase tracking-wide text-white">
          <WhatsAppIcon className="h-4 w-4" />
          Book on WhatsApp
        </span>
      </a>
    </div>
  );
}
