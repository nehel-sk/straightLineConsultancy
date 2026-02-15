import { Building2, FileText, ShieldCheck, ClipboardList, Award, FileSignature } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServicesSectionProps {
  onSelectService: (service: string) => void;
}

const services = [
  {
    icon: Building2,
    title: "Company Registration",
    description: "Private Limited, LLP, Partnership Firm, OPC registration with complete documentation.",
    features: ["Name Approval", "MOA & AOA", "Incorporation Certificate"],
  },
  {
    icon: FileText,
    title: "GST Registration",
    description: "Complete GST registration and compliance support for your business.",
    features: ["GST Application", "GSTIN Certificate", "Filing Support"],
  },
  {
    icon: Award,
    title: "MSME / Udyam Registration",
    description: "Get your MSME/Udyam certificate to avail government benefits and subsidies.",
    features: ["Online Application", "Udyam Certificate", "Priority Lending"],
  },
  {
    icon: FileSignature,
    title: "PAN & TAN Application",
    description: "Quick PAN and TAN application for individuals and businesses.",
    features: ["New Application", "Correction/Update", "Quick Processing"],
  },
  {
    icon: ShieldCheck,
    title: "Licenses & Certificates",
    description: "Trade license, FSSAI, Import-Export Code, Shop Act, and more.",
    features: ["Trade License", "FSSAI", "IEC Code"],
  },
  {
    icon: ClipboardList,
    title: "Compliance Support",
    description: "Annual filings, ROC compliance, tax returns, and documentation.",
    features: ["Annual Returns", "Tax Filing", "ROC Compliance"],
  },
];

const ServicesSection = ({ onSelectService }: ServicesSectionProps) => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Registration & Documentation Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From company formation to compliance, we handle all your registration and documentation needs with precision and efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:w-[80%] md:grid-cols-2 lg:grid-cols-3 lg:max-w-4xl mx-auto gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* <Button
                  onClick={() => onSelectService(service.title)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Apply Now
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
