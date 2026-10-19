"use client";

import { useState } from "react";
import Link from "next/link";

const MESSAGE_MAX = 1000;

const inputClass =
  "w-full h-[48px] rounded-[3px] border border-black/15 bg-[#F5F5F5] px-5 text-[15px] text-[#0B0B0B] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#E74725] focus:bg-white transition-colors disabled:opacity-60";

/**
 * Contact enquiry form — posts to /api/contact which relays via SMTP.
 */
export default function ContactForm() {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [sending, setSending] = useState(false);
  const [messageLength, setMessageLength] = useState(0);

  async function handleSubmit(event) {
    event.preventDefault();
    if (sending) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const payload = {
      name: `${firstName} ${lastName}`.trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };
    if (payload.phone) payload.phone = `+91 ${payload.phone}`;

    if (!firstName || !payload.email || !payload.message) {
      setStatus({
        type: "error",
        message: "Please fill in your name, email, and message.",
      });
      return;
    }

    setSending(true);
    setStatus({ type: "idle", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(result?.error || "Something went wrong. Please try again.");
      }

      form.reset();
      setMessageLength(0);
      setStatus({
        type: "success",
        message: "Thank you — your message has been sent. We'll be in touch soon.",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message: err?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-first-name" className="sr-only">
            First name
          </label>
          <input
            id="contact-first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            maxLength={50}
            disabled={sending}
            placeholder="First name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-last-name" className="sr-only">
            Last name
          </label>
          <input
            id="contact-last-name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            maxLength={50}
            disabled={sending}
            placeholder="Last name"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="contact-email" className="sr-only">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          disabled={sending}
          placeholder="Your email"
          className={inputClass}
        />
      </div>

      <div className="mt-4 flex gap-3">
        <span
          aria-hidden="true"
          className="inline-flex h-[48px] shrink-0 items-center rounded-[3px] border border-black/15 bg-[#F5F5F5] px-4 text-[15px] font-medium text-[#0B0B0B]"
        >
          + 91
        </span>
        <div className="min-w-0 flex-1">
          <label htmlFor="contact-phone" className="sr-only">
            Phone number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            maxLength={15}
            disabled={sending}
            placeholder="Phone number"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="contact-message" className="sr-only">
          Message
        </label>
        <div className="relative">
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            maxLength={MESSAGE_MAX}
            disabled={sending}
            placeholder="How can we help?"
            onChange={(e) => setMessageLength(e.target.value.length)}
            className="w-full min-h-[130px] rounded-[3px] border border-black/15 bg-[#F5F5F5] px-5 py-3.5 pb-8 text-[15px] text-[#0B0B0B] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#E74725] focus:bg-white transition-colors disabled:opacity-60"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-3 bottom-2.5 text-[11.5px] text-[#A3A3A3]"
          >
            {messageLength}/{MESSAGE_MAX}
          </span>
        </div>
      </div>

      {status.message && (
        <p
          role={status.type === "error" ? "alert" : "status"}
          className={`mt-4 rounded-[3px] border px-4 py-3 text-[14px] leading-6 ${
            status.type === "error"
              ? "border-[#E74725]/40 bg-[#E74725]/10 text-[#c93a1c]"
              : "border-black/15 bg-[#F5F5F5] text-[#0B0B0B]"
          }`}
        >
          {status.message}
        </p>
      )}

      <div className="mt-5">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex h-[48px] w-full items-center justify-center rounded-[3px] bg-[#E74725] px-[28px] text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#c93a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B0B0B] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {sending ? "Sending…" : "Submit"}
        </button>
        <p className="mt-3 text-center text-[12.5px] leading-5 text-[#5f5f5f]">
          By contacting us, you agree to our{" "}
          <Link
            href="/terms-conditions"
            className="rounded-sm font-medium text-[#0B0B0B] transition-colors hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            className="rounded-sm font-medium text-[#0B0B0B] transition-colors hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </form>
  );
}
