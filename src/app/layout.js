import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_pages/shared/components/Navbar";
import Footer from "@/app/_pages/shared/components/Footer";
import { QuoteProvider } from "@/app/_pages/shared/components/QuotePopup";
import AosInit from "@/app/_pages/shared/components/AosInit";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
      className={`${jakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <AosInit />
        <QuoteProvider>
          <Navbar />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </QuoteProvider>
      </body>
    </html>
  );
}
