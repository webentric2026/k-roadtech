import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_pages/shared/components/Navbar";
import Footer from "@/app/_pages/shared/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "K Roadtech — Road Safety Solutions",
  description:
    "K Roadtech manufactures road safety products, signage, tactile paving and parking management solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <Navbar />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
