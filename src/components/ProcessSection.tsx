import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose Service",
    description: "Select the registration or documentation service you need.",
  },
  {
    number: "02",
    title: "Submit Details",
    description: "Fill the enquiry form with your basic information and requirements.",
  },
  {
    number: "03",
    title: "Document Verification",
    description: "Our team reviews and verifies your documents for compliance.",
  },
  {
    number: "04",
    title: "Completion",
    description: "Receive your registration certificate or documentation.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get your registration done in just a few simple steps with our streamlined process.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                )}

                <div className="relative z-10 text-center">
                  {/* Step Number */}
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completion Badge */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-medium">100% Compliance Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
