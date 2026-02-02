import { Shield, Zap, Eye, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Government Compliant",
    description: "All registrations done as per latest government guidelines and regulations.",
  },
  {
    icon: Zap,
    title: "Quick Processing",
    description: "Fast turnaround time with dedicated support for urgent requirements.",
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    description: "No hidden charges. Clear pricing and regular status updates.",
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Experienced professionals with deep knowledge of registration processes.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="whyUs" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Thousands of Businesses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, efficiency, and transparency to deliver seamless registration services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
