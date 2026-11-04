import ContactPage from "@/app/_pages/contact/ContactPage";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/app/lib/seo";

export const metadata = {
  title: "Contact — Road Safety Products Supplier Delhi, India",
  description:
    "Contact K Roadtech Safety Solutions, New Delhi for road studs, delineators, tactile paving, speed breakers, signage, parking & cable protection — prices, quotes and support across India.",
  keywords: [
    "contact K Roadtech",
    "road safety products quote Delhi",
    "road studs price Delhi",
    "speed breaker supplier contact",
    "K Roadtech phone",
    "K Roadtech address Nilothi Delhi",
  ],
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact K Roadtech Safety Solutions",
    description:
      "Get prices & quotes for road safety products — Delhi manufacturer, supplier across India.",
    type: "website",
    url: `${SITE_URL}/contact`,
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Contact K Roadtech" }],
  },
};

export default function Contact() {
  return <ContactPage />;
}
