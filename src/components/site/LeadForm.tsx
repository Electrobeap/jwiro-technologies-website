"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

import { siteConfig } from "@/lib/data";
import { whatsappHref, whatsappIntents } from "@/lib/whatsapp";

const inputClassName =
  "min-h-12 w-full rounded-sm border border-white/10 bg-ink-950/65 px-4 py-3 text-sm text-cream-50 outline-none transition placeholder:text-steel-500 focus:border-gold-300/70";

const defaultInterests = [
  "NigeriaPowerData access",
  "Data & API licensing",
  "Jirow Energy Analytics (in development)",
  "Research & reporting",
  "Partnership or investment",
  "Something else"
];

type LeadFormProps = {
  /** Options for the interest selector. Defaults to the platform enquiry list. */
  interests?: readonly string[];
  /** First line of the pre-filled WhatsApp message. */
  intro?: string;
  /** Placeholder for the free-text field. */
  detailsPlaceholder?: string;
  submitLabel?: string;
};

export function LeadForm({
  interests = defaultInterests,
  intro = whatsappIntents.energy.message,
  detailsPlaceholder = "Tell us what visibility you need — jurisdiction, entities, sites or reporting obligations.",
  submitLabel = "Send enquiry"
}: LeadFormProps = {}) {
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [interest, setInterest] = useState(interests[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = [
      intro,
      name ? `Name: ${name}` : "",
      organisation ? `Organisation: ${organisation}` : "",
      interest ? `Interest: ${interest}` : "",
      message ? `Details: ${message}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    window.location.assign(
      whatsappHref(body)
    );
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div>
        <label className="text-sm font-semibold text-steel-200" htmlFor="lead-name">
          Name
        </label>
        <input
          className={inputClassName}
          id="lead-name"
          name="name"
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          type="text"
          value={name}
        />
      </div>
      <div>
        <label
          className="text-sm font-semibold text-steel-200"
          htmlFor="lead-organisation"
        >
          Organisation
        </label>
        <input
          className={inputClassName}
          id="lead-organisation"
          name="organisation"
          onChange={(event) => setOrganisation(event.target.value)}
          placeholder="Regulator, utility, investor, enterprise or institution"
          type="text"
          value={organisation}
        />
      </div>
      <div>
        <label
          className="text-sm font-semibold text-steel-200"
          htmlFor="lead-interest"
        >
          What are you interested in?
        </label>
        <select
          className={inputClassName}
          id="lead-interest"
          name="interest"
          onChange={(event) => setInterest(event.target.value)}
          value={interest}
        >
          {interests.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          className="text-sm font-semibold text-steel-200"
          htmlFor="lead-message"
        >
          Details
        </label>
        <textarea
          className="min-h-28 w-full resize-none rounded-sm border border-white/10 bg-ink-950/65 px-4 py-3 text-sm leading-7 text-cream-50 outline-none transition placeholder:text-steel-500 focus:border-gold-300/70"
          id="lead-message"
          name="message"
          onChange={(event) => setMessage(event.target.value)}
          placeholder={detailsPlaceholder}
          value={message}
        />
      </div>
      <button
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-gold-300 bg-gold-300 px-5 py-3 text-sm font-semibold text-[#101828] transition hover:bg-gold-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
        type="submit"
      >
        <Send className="h-4 w-4" />
        {submitLabel}
      </button>
      <p className="text-xs leading-6 text-steel-500">
        Submitting opens WhatsApp with your enquiry pre-filled. You can also
        email {siteConfig.email} directly.
      </p>
    </form>
  );
}
