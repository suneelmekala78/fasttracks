"use client";

import { FormEvent, useState } from "react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { bookingServices, whatsappNumber } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = [
      "Hi Fasttracks, I would like to book a service.",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Car: ${String(data.get("car") || "").trim() || "Not specified"}`,
      `Service: ${data.get("service")}`,
      `Note: ${String(data.get("note") || "").trim() || "None"}`,
    ].join("\n");
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-border surface-card p-6 md:p-8">
      <h2 className="font-display text-3xl font-bold uppercase leading-none tracking-tight">
        Send a booking note
      </h2>
      <p className="mt-3 text-sm leading-6 text-muted">
        This opens WhatsApp with your details filled in. The studio replies from the Jubilee Hills floor.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
        <Field label="Car" name="car" placeholder="Fortuner, Vellfire, Defender…" className="sm:col-span-2" />
        <label className="block sm:col-span-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">Service</span>
          <select
            name="service"
            required
            defaultValue="Luxury Recliners"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-[#e10600]"
          >
            {bookingServices.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">Note</span>
          <textarea
            name="note"
            rows={4}
            placeholder="Timing, colour, or anything the floor should know."
            className="mt-2 w-full resize-y rounded-xl border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:border-[#e10600]"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-[#06210f] hover:bg-[#1ebe5b] sm:w-auto"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Send on WhatsApp
      </button>
      {sent ? (
        <p className="mt-4 text-sm text-muted" role="status">
          WhatsApp should be open with your note. If it did not, use the phone number beside this form.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  className = "",
  ...props
}: {
  label: string;
  name: string;
  type?: string;
  className?: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">{label}</span>
      <input
        name={name}
        type={type}
        className="mt-2 w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:border-[#e10600]"
        {...props}
      />
    </label>
  );
}
