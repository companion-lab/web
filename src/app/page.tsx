import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { AsciiLogoFull } from "@/components/AsciiLogo";
import ProductTabs from "@/components/ProductTabs";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Privacy from "@/components/Privacy";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section aria-hidden="true" className="w-full border-t border-b border-border bg-surface">
          <AsciiLogoFull />
        </section>
        <ProductTabs />
        <Features />
        <HowItWorks />
        <Privacy />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
