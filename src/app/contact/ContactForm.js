"use client";

import { useState } from "react";

const serviceOptions = [
  "Business Technology Solutions",
  "Digital Transformation",
  "Software Development",
  "E-commerce Solutions",
  "Technology Training",
  "Other Enquiries",
];

const inputClass = "mt-2 w-full border border-navy/15 bg-white px-3.5 py-3 text-sm text-navy outline-none transition placeholder:text-ink/35 focus:border-teal-700 focus:ring-2 focus:ring-turquoise/25";

export default function ContactForm() {
  const [message, setMessage] = useState(null);
  const [emailDraft, setEmailDraft] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
    const recipient = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

    if (!recipient) {
      setEmailDraft("");
      setMessage("Your details have not been sent. The contact form needs a configured submission service or contact email before it can deliver enquiries.");
      return;
    }

    const subject = `Website enquiry: ${values.service}`;
    const body = [
      `Name: ${values.name}`,
      `Company: ${values.company || "Not provided"}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || "Not provided"}`,
      `Industry: ${values.industry || "Not provided"}`,
      `Service: ${values.service}`,
      "",
      "Project description:",
      values.description,
    ].join("\n");
    setEmailDraft(`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setMessage("Your email draft is ready. It has not been sent—open the draft and send it from your email application.");
  }

  return (
    <form className="border border-navy/10 bg-white p-5 sm:p-8" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-navy">Name *
          <input autoComplete="name" className={inputClass} name="name" placeholder="Your name" required />
        </label>
        <label className="text-sm font-semibold text-navy">Company name
          <input autoComplete="organization" className={inputClass} name="company" placeholder="Your organisation" />
        </label>
        <label className="text-sm font-semibold text-navy">Email address *
          <input autoComplete="email" className={inputClass} name="email" placeholder="you@company.com" required type="email" />
        </label>
        <label className="text-sm font-semibold text-navy">Phone number
          <input autoComplete="tel" className={inputClass} name="phone" placeholder="Optional" type="tel" />
        </label>
        <label className="text-sm font-semibold text-navy">Industry
          <select className={inputClass} defaultValue="" name="industry">
            <option value="">Select an industry</option>
            <option>Distribution and wholesale</option>
            <option>Retail and multi-location</option>
            <option>E-commerce and online retail</option>
            <option>Other business or organisation</option>
          </select>
        </label>
        <label className="text-sm font-semibold text-navy">Service required *
          <select className={inputClass} defaultValue="" name="service" required>
            <option disabled value="">Select a service</option>
            {serviceOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label className="text-sm font-semibold text-navy sm:col-span-2">Project description *
          <textarea className={`${inputClass} min-h-36 resize-y`} minLength={10} name="description" placeholder="Tell us about your goals, current challenges, or the support you are looking for." required />
        </label>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#163e5e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700" type="submit">Prepare enquiry</button>
        <p className="text-xs text-ink/55">Required fields are marked *. Submitting does not send your information until a delivery method is configured.</p>
      </div>
      {message && (
        <div aria-live="polite" className="mt-5 border-l-2 border-turquoise bg-mist p-4 text-sm leading-6 text-ink/80" role="status">
          {message}
          {emailDraft && <div><a className="mt-2 inline-flex font-semibold text-teal-900 underline underline-offset-2" href={emailDraft}>Open email draft</a></div>}
        </div>
      )}
    </form>
  );
}
