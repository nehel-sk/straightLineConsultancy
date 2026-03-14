import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const phoneNumber = "+91123456789";
  const whatsappNumber = "91123456789";
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
    <section id="contact" className="py-16 bg-primary relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-slate-900/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Column: Text & Contact Details */}
          <div>
            <span className="inline-block text-white/90 font-bold text-xs uppercase tracking-[0.2em] mb-4 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-[1.1]">
              Let's build your <br />
              <span className="text-white/60">business together.</span>
            </h2>
            <p className="text-white/80 max-w-lg mb-8 text-base leading-relaxed font-medium">
              Ready to streamline your compliance? Our experts are here to handle the paperwork while you focus on scaling.
            </p>

            <div className="space-y-4 max-w-sm">
              <button
                onClick={handleCall}
                className="w-full flex items-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group text-left"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-0.5">Call Us Directly</h3>
                  <p className="text-white/60 text-xs font-medium">{phoneNumber}</p>
                </div>
              </button>

              <button
                onClick={handleEmail}
                className="w-full flex items-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group text-left"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-0.5">Email Support</h3>
                  <p className="text-white/60 text-xs font-medium">{email}</p>
                </div>
              </button>
              
              <div className="flex items-center p-4 rounded-2xl bg-transparent border border-transparent text-left">
                <div className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center mr-4">
                  <MapPin className="w-4 h-4 text-white/40" />
                </div>
                <div>
                  <p className="text-white/60 text-xs font-medium leading-relaxed">
                    123 Business Center, Commercial Street,<br />City - 123456
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Glowing CTA Card */}
          <div className="relative lg:pl-6 max-w-md mx-auto w-full">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-xl shadow-black/10">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Need instant answers?</h3>
                <p className="text-white/80 mb-8 text-base leading-relaxed">
                  Skip the queue. Drop us a message on WhatsApp and consult with our specialists instantly.
                </p>
                <Button
                  size="lg"
                  onClick={handleWhatsApp}
                  className="w-full bg-white hover:bg-slate-100 text-primary font-bold text-base py-6 rounded-xl shadow-xl transition-all duration-300 group/btn"
                >
                  Start WhatsApp Chat
                  <ArrowRight className="ml-3 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            
            {/* Decorative blurs for right card */}
            <div className="absolute -z-10 top-1/2 right-0 w-72 h-72 bg-white/20 rounded-full blur-[100px] transform -translate-y-1/2" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
