"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { PRODUCT_CATEGORIES } from "@/app/_pages/products/data/products";
import { CloseIcon } from "./icons";

const QuoteContext = createContext({ openQuote: () => {} });

/** Open the quote popup from any client component. */
export function useQuote() {
  return useContext(QuoteContext);
}

const inputClass =
  "w-full h-[46px] rounded-[3px] border border-black/15 bg-[#F5F5F5] px-4 text-[14.5px] text-[#0B0B0B] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#E74725] focus:bg-white transition-colors disabled:opacity-60";

function QuoteForm({ onDone }) {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (sending) return;

    const data = new FormData(event.currentTarget);
    const category = String(data.get("category") || "").trim();
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      subject: category && category !== "general"
        ? `Quote Request — ${category}`
        : "Quote Request",
      message: String(data.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({
        type: "error",
        message: "Please fill in your name, email, and requirements.",
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
      try {
        sessionStorage.setItem("kroadtech-quote-sent", "1");
      } catch {}
      onDone(true);
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
    <form onSubmit={handleSubmit} noValidate aria-label="Request a quote">
      <div className="grid gap-3.5 sm:grid-cols-2">
        <div>
          <label htmlFor="quote-name" className="sr-only">Name</label>
          <input
            id="quote-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            disabled={sending}
            placeholder="Your name *"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="quote-phone" className="sr-only">Phone</label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={30}
            disabled={sending}
            placeholder="Phone number"
            className={inputClass}
          />
        </div>
      </div>
      <div className="mt-3.5">
        <label htmlFor="quote-email" className="sr-only">Email</label>
        <input
          id="quote-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          disabled={sending}
          placeholder="Email address *"
          className={inputClass}
        />
      </div>
      <div className="mt-3.5">
        <label htmlFor="quote-category" className="sr-only">Product category</label>
        <select
          id="quote-category"
          name="category"
          disabled={sending}
          defaultValue="general"
          className={`${inputClass} appearance-none pr-10`}
        >
          <option value="general">General enquiry</option>
          {PRODUCT_CATEGORIES.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-3.5">
        <label htmlFor="quote-message" className="sr-only">Requirements</label>
        <textarea
          id="quote-message"
          name="message"
          required
          rows={4}
          maxLength={2000}
          disabled={sending}
          placeholder="Tell us your requirements *"
          className="w-full min-h-[110px] rounded-[3px] border border-black/15 bg-[#F5F5F5] px-4 py-3 text-[14.5px] text-[#0B0B0B] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#E74725] focus:bg-white transition-colors disabled:opacity-60"
        />
      </div>

      {status.message && (
        <p
          role="alert"
          className="mt-3.5 rounded-[3px] border border-[#E74725]/40 bg-[#E74725]/10 px-4 py-2.5 text-[13.5px] leading-6 text-[#c93a1c]"
        >
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="mt-4 inline-flex h-[48px] w-full items-center justify-center rounded-[3px] bg-[#E74725] px-[28px] text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#c93a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B0B0B] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {sending ? "Sending…" : "Request Quote"}
      </button>
      <p className="mt-3 text-center text-[12px] leading-5 text-[#A3A3A3]">
        Prefer talking? Call us — we respond within one working day.
      </p>
    </form>
  );
}

function QuoteModal({ open, sent, onClose, onSent }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    closeBtnRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Request a quote"
      className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center"
    >
      <button
        type="button"
        aria-label="Close quote popup"
        onClick={onClose}
        className="absolute inset-0 cursor-pointer bg-black/60"
      />
      <div className="nav-panel-in relative max-h-[90vh] w-full max-w-[520px] overflow-y-auto rounded-[4px] bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-8">
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm text-[#737373] transition-colors hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
        {sent ? (
          <div className="py-6 text-center">
            <p className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E74725]/10 text-[26px] font-bold text-[#E74725]">
              ✓
            </p>
            <h2 className="mt-5 text-[clamp(1.4rem,2.4vw,1.9rem)] leading-tight font-bold tracking-[-0.02em]">
              Quote requested<span className="text-[#E74725]">.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-[36ch] text-[14.5px] leading-7 text-[#5f5f5f]">
              Thank you — our team will get back to you with pricing and
              availability shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex h-[46px] cursor-pointer items-center justify-center rounded-[3px] bg-[#0B0B0B] px-[28px] text-[14.5px] font-semibold text-white transition-colors hover:bg-[#E74725] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E74725]"
            >
              Continue Browsing
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-[clamp(1.4rem,2.4vw,1.9rem)] leading-tight font-bold tracking-[-0.02em]">
              Request a quote<span className="text-[#E74725]">.</span>
            </h2>
            <p className="mt-2 text-[14px] text-[#5f5f5f]">
              Share a few details — we&apos;ll respond with pricing.
            </p>
            <div className="mt-5">
              <QuoteForm onDone={onSent} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/**
 * Opens the quote popup once per session after the visitor scrolls
 * meaningfully. Skipped on the contact page (the full form is there)
 * and after a quote was already sent.
 */
function QuoteAutoPopup({ onTrigger }) {
  const pathname = usePathname();
  const triggeredRef = useRef(false);

  useEffect(() => {
    if (pathname === "/contact") return;
    let seen = false;
    let sent = false;
    let force = false;
    try {
      seen = sessionStorage.getItem("kroadtech-quote-popup-seen") === "1";
      sent = sessionStorage.getItem("kroadtech-quote-sent") === "1";
      force = new URLSearchParams(window.location.search).has("quote");
    } catch {}
    // Debug override: visiting any page with ?quote=1 opens the popup
    // immediately, regardless of session flags.
    if (force) {
      triggeredRef.current = true;
      onTrigger();
      return;
    }
    if (seen || sent) return;

    function fire() {
      triggeredRef.current = true;
      try {
        sessionStorage.setItem("kroadtech-quote-popup-seen", "1");
      } catch {}
      onTrigger();
      window.removeEventListener("scroll", onScroll);
    }

    function onScroll() {
      if (triggeredRef.current) return;
      const doc = document.documentElement;
      // Skip short pages where a popup would just annoy.
      if (doc.scrollHeight - window.innerHeight < 400) return;
      // Trigger once the visitor has scrolled ~400px.
      if (window.scrollY > 400) fire();
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, onTrigger]);

  return null;
}

export function QuoteProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const openQuote = useCallback(() => {
    setSent(false);
    setOpen(true);
  }, []);
  const closeQuote = useCallback(() => setOpen(false), []);
  const markSent = useCallback(() => setSent(true), []);

  return (
    <QuoteContext.Provider value={{ openQuote }}>
      {children}
      <QuoteAutoPopup onTrigger={openQuote} />
      <QuoteModal open={open} sent={sent} onClose={closeQuote} onSent={markSent} />
    </QuoteContext.Provider>
  );
}

/** Drop-in quote button — same look as the CTA links, opens the popup. */
export function QuoteButton({ className = "", children, ...props }) {
  const { openQuote } = useQuote();
  return (
    <button type="button" onClick={openQuote} className={className} {...props}>
      {children}
    </button>
  );
}
