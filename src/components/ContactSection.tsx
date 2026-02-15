import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const phoneNumber = "+918281527731";
  const whatsappNumber = "918281527731";
  const email = "info@regeasepro.com";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in your registration services.`, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <span className="inline-block text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider mb-3">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-12">
            Contact us today for a free consultation. We're here to help you with all your registration needs.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <button
              onClick={handleCall}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 hover:bg-primary-foreground/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-primary-foreground font-semibold mb-1">Call Us</h3>
              <p className="text-primary-foreground/80 text-sm">+91 123456789</p>
            </button>

            <button
              onClick={handleWhatsApp}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 hover:bg-primary-foreground/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-primary-foreground font-semibold mb-1">WhatsApp</h3>
              <p className="text-primary-foreground/80 text-sm">Chat with us</p>
            </button>

            <button
              onClick={handleEmail}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 hover:bg-primary-foreground/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-primary-foreground font-semibold mb-1">Email Us</h3>
              <p className="text-primary-foreground/80 text-sm">straightline@info.com</p>
            </button>
          </div>

          {/* Address */}
          <div className="flex items-center justify-center gap-2 text-primary-foreground/70 text-sm">
            <MapPin className="w-4 h-4" />
            <span>123 Business Center, Commercial Street, City - 123456</span>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-10">
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="bg-success hover:bg-success/90 text-success-foreground text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
