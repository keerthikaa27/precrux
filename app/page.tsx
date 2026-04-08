import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import AboutPreview from "@/components/AboutPreview";
import ServicesSection from "@/components/ServicesSection";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";
import WhyChoose from "@/components/WhyChoose";

export default function HomePage() {
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Precrux",
      url: "https://precrux.com",
      logo: "https://precrux.com/P.svg",
      description:
        "Growth execution consultancy helping founders scale predictable revenue.",
    }),
  }}
/>
      {/* Hero + Logos share the same dark bg so they blend seamlessly */}
      <div style={{ background: "#0f1117" }}>
        <HeroSection />
        <LogoMarquee />
      </div>

      <AboutPreview />
      <ServicesSection />
      <WhyChoose/>
      <PortfolioShowcase />
      <TestimonialsSection />
      <BlogPreview />
      <CTASection />
    </>
  );
}