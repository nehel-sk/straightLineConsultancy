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
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-4 bg-primary/10 px-4 py-1.5 rounded-full">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Registration & Documentation
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            From company formation to compliance, we provide end-to-end registration and documentation services, empowering you to focus entirely on your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6 mt-12">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group border-0 shadow-sm hover:shadow-lg transition-all duration-500 bg-white relative overflow-hidden animate-slide-up rounded-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Subtle gradient hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="p-6 pb-2 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 shadow-sm border border-slate-100">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-2 relative z-10">
                <ul className="space-y-2 mt-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-slate-600 text-sm font-medium pb-2 border-b border-slate-50 last:border-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
