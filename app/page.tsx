import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ForWho from "@/components/ForWho";
import ServicesGrid from "@/components/ServicesGrid";
import Benefits from "@/components/Benefits";
import StakeholdersTabs from "@/components/StakeholdersTabs";
import HowItWorks from "@/components/HowItWorks";
import Cases from "@/components/Cases";
import DashboardPreview from "@/components/DashboardPreview";
import Integrations from "@/components/Integrations";
import Security from "@/components/Security";
import Documents from "@/components/Documents";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="solutions" className="section">
          <div className="container-12 space-y-8">
            <ForWho />
            <ServicesGrid />
            <Benefits />
          </div>
        </section>
        <section id="platform" className="section">
          <div className="container-12 space-y-8">
            <HowItWorks />
            <DashboardPreview />
            <StakeholdersTabs />
          </div>
        </section>
        <section id="cases" className="section">
          <div className="container-12">
            <Cases />
          </div>
        </section>
        <section id="integrations" className="section">
          <div className="container-12">
            <Integrations />
          </div>
        </section>
        <section id="security" className="section">
          <div className="container-12">
            <Security />
          </div>
        </section>
        <section id="docs" className="section">
          <div className="container-12">
            <Documents />
          </div>
        </section>
        <section className="section">
          <div className="container-12">
            <TrustBar />
          </div>
        </section>
        <section id="contact" className="section">
          <div className="container-12">
            <ContactForm />
          </div>
        </section>
        <section id="faq" className="section">
          <div className="container-12">
            <FAQ />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
