/**
 * About page content — matches the About Us spec.
 */

import { IMAGES } from "@/assets/images";
import { CONTACT_META } from "@/app/_pages/shared/data/navigation";

const callHref = `tel:${CONTACT_META.phone.replace(/[^+\d]/g, "")}`;

export const ABOUT = {
  eyebrow: "ABOUT K ROADTECH",
  title: "About Us",
  description:
    "K Roadtech Safety Solutions is committed to delivering reliable road safety, traffic management, and infrastructure safety solutions that help create safer roads and smarter transportation systems. With industry experience, a comprehensive product range, and a customer-focused approach, we support projects across India with solutions designed for performance, durability, and reliability.",
  image: {
    src: IMAGES.aboutImage,
    alt: "Road safety equipment and signage on a highway project",
  },
  mission: {
    title: "Our Mission",
    desc:
      "To provide dependable road safety equipment, traffic management solutions, and infrastructure safety products that help our customers develop safer, more efficient, and better-managed transportation environments. We aim to deliver consistent quality, practical solutions, and responsive customer service while building lasting relationships with our clients and partners.",
    icon: "shield",
  },
  vision: {
    title: "Our Vision",
    desc:
      "To contribute to a future where road infrastructure across India is safer, smarter, and better equipped to meet the evolving needs of transportation. We aspire to be a trusted road safety solutions partner, recognized for product reliability, customer commitment, and our contribution to safer mobility.",
    icon: "arrow-forward",
  },
  values: [
    {
      id: "safety-first",
      title: "Safety First",
      desc:
        "Safety is at the core of our work. We focus on providing solutions that support safer roads, improved traffic management, and more secure transportation environments.",
      icon: "shield",
    },
    {
      id: "quality-reliability",
      title: "Quality & Reliability",
      desc:
        "We value dependable products and consistent quality, helping our customers choose solutions suited to the practical demands of their projects.",
      icon: "check",
    },
    {
      id: "customer-commitment",
      title: "Customer Commitment",
      desc:
        "We prioritize our customers' requirements and aim to build lasting partnerships through responsive communication, practical guidance, and dependable service.",
      icon: "handshake",
    },
    {
      id: "integrity",
      title: "Integrity & Transparency",
      desc:
        "We believe in honest communication, responsible business practices, and building relationships based on trust and accountability.",
      icon: "balance",
    },
    {
      id: "continuous-improvement",
      title: "Continuous Improvement",
      desc:
        "We remain committed to learning, adapting, and improving our approach to serve changing infrastructure requirements and customer expectations.",
      icon: "arrow-up",
    },
  ],
  stats: [
    { value: "100+", label: "Product Range", desc: "A comprehensive selection of road safety and infrastructure products." },
    { value: "Pan India", label: "Service Coverage", desc: "Serving customers and projects across India." },
    { value: "15+ Years", label: "of Service", desc: "Industry experience focused on dependable road safety solutions." },
  ],
  cta: {
    heading: "Let's Build Safer Roads Together.",
    desc:
      "Looking for reliable road safety equipment or traffic management solutions for your next project? Connect with our team to discuss your requirements and explore the right products for your needs.",
    buttons: [
        { label: "Request a Quote", href: "/contact", primary: true },
        { label: "Product Catalogue", href: "/products", primary: false },
        { label: "Speak to Team", href: callHref, primary: false },
    ],
  },
};
