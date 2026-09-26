import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { WorkShowcase } from "@/components/home/WorkShowcase";
import { FinishesSection } from "@/components/home/FinishesSection";
import { ChuteSystemsSection } from "@/components/home/ChuteSystemsSection";
import { Facility } from "@/components/home/Facility";
import { CompanyContact } from "@/components/home/CompanyContact";
import { Seo } from "@/components/Seo";

const Index = () => {
  const location = useLocation();

  // Handle hash scrolling on page load or route transition
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <Layout>
      <Seo
        title="Najmat Alswab Technical Services | Metal Fabrication & Chute Systems Dubai"
        description="Official one-page company portfolio for Najmat Alswab Technical Services L.L.C. Custom stainless steel fabrication, PVD/electroplating finishes, architectural canopies, balustrades, and high-rise garbage chute systems from a 5,700 sq. ft. workshop in Umm Al Quwain, UAE."
        path="/"
      />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Introduction / Overview */}
      <Introduction />

      {/* 3. Capabilities & Full 48-Image Gallery */}
      <WorkShowcase />

      {/* 4. Finishes & Materials (Recreated from PDF Slides 7, 6, 5) */}
      <FinishesSection />

      {/* 5. Flagship Chute Systems (PDF Slide 8) */}
      <ChuteSystemsSection />

      {/* 6. Umm Al Quwain Facility */}
      <Facility />

      {/* 7. Corporate Profile, Credentials, Banking & Project Inquiry */}
      <CompanyContact />
    </Layout>
  );
};

export default Index;
