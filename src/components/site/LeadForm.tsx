"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

import { siteConfig } from "@/lib/data";

const inputClassName =
  "min-h-12 w-full rounded-sm border border-white/10 bg-ink-950/65 px-4 py-3 text-sm text-cream-50 outline-none transition placeholder:text-steel-500 focus:border-gold-300/70";

export function LeadForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [project, setProject] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Hello Jirow Technologies, I would like to discuss embedded energy infrastructure solutions.",
      name ? `Name: ${name}` : "",
      company ? `Company/Estate: ${company}` : "",
      project ? `Project need: ${project}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `${siteConfig.whatsappBase}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
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
          htmlFor="lead-company"
        >
          Estate or organization
        </label>
        <input
          className={inputClassName}
          id="lead-company"
          name="company"
          onChange={(event) => setCompany(event.target.value)}
          placeholder="Estate, developer, facility or company"
          type="text"
          value={company}
        />
      </div>
      <div>
        <label
          className="text-sm font-semibold text-steel-200"
          htmlFor="lead-project"
        >
          Infrastructure need
        </label>
        <textarea
          className="min-h-28 w-full resize-none rounded-sm border border-white/10 bg-ink-950/65 px-4 py-3 text-sm leading-7 text-cream-50 outline-none transition placeholder:text-steel-500 focus:border-gold-300/70"
          id="lead-project"
          name="project"
          onChange={(event) => setProject(event.target.value)}
          placeholder="Tell us about uptime, metering, hybrid power, monitoring or project planning needs."
          value={project}
        />
      </div>
      <button
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-gold-300 bg-gold-300 px-5 py-3 text-sm font-semibold text-[#101828] transition hover:bg-gold-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
        type="submit"
      >
        <Send className="h-4 w-4" />
        Send via WhatsApp
      </button>
    </form>
  );
}
