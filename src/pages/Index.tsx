import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const handleGetStarted = () => {
    setSelectedService("");
    setIsFormOpen(true);
  };

  const handleSelectService = (service: string) => {
    setSelectedService(service);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onGetStarted={handleGetStarted} />
      <ServicesSection onSelectService={handleSelectService} />
      <WhyChooseUsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
      
      <EnquiryForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
};

export default Index;
