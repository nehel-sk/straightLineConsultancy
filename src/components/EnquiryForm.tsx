import { useState } from "react";
import { X, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface EnquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

const services = [
  "Company Registration",
  "GST Registration",
  "MSME / Udyam Registration",
  "PAN & TAN Application",
  "Licenses & Certificates",
  "Compliance Support",
  "Other",
];

const EnquiryForm = ({ isOpen, onClose, selectedService }: EnquiryFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: selectedService || "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.service) {
      toast({
        title: "Please fill required fields",
        description: "Name, Phone, and Service are required.",
        variant: "destructive",
      });
      return;
    }

    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Enquiry Submitted!",
      description: "Our team will contact you shortly.",
    });
  };

  const handleClose = () => {
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity" onClick={handleClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl animate-fade-in p-8 border border-white/20">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div>
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-1 tracking-tight">Request Received</h4>
              <p className="text-slate-500 mb-6 leading-relaxed text-sm">
                Thank you for reaching out. A specialist from our team will contact you shortly.
              </p>
              <Button onClick={handleClose} className="bg-slate-900 hover:bg-slate-800 text-white w-full rounded-xl py-5 font-medium text-sm transition-all">
                Close window
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1">How can we help?</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Fill out the form below and we'll get back to you with a free consultation.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <Input
                    id="name"
                    placeholder="Your complete name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-slate-50 border-transparent hover:border-slate-200 focus:bg-white focus:border-primary focus:ring-0 h-10 text-sm rounded-xl px-4 transition-all"
                    maxLength={100}
                  />
                </div>

                <div>
                  <Input
                    id="phone"
                    placeholder="Mobile number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                    className="bg-slate-50 border-transparent hover:border-slate-200 focus:bg-white focus:border-primary focus:ring-0 h-10 text-sm rounded-xl px-4 transition-all"
                  />
                </div>

                <div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email address (Optional)"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-slate-50 border-transparent hover:border-slate-200 focus:bg-white focus:border-primary focus:ring-0 h-10 text-sm rounded-xl px-4 transition-all"
                    maxLength={255}
                  />
                </div>

                <div>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="bg-slate-50 border-transparent hover:border-slate-200 focus:bg-white focus:border-primary focus:ring-0 h-10 text-sm rounded-xl px-4 transition-all">
                      <SelectValue placeholder="What service do you need? *" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-slate-100 shadow-xl p-1">
                      {services.map((service) => (
                         <SelectItem key={service} value={service} className="rounded-md cursor-pointer text-sm py-1.5">
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Textarea
                    id="message"
                    placeholder="Any specific details? (Optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[60px] text-sm bg-slate-50 border-transparent hover:border-slate-200 focus:bg-white focus:border-primary focus:ring-0 rounded-xl resize-none px-4 py-2 transition-all"
                    maxLength={1000}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl py-5 text-sm font-medium mt-2 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-slate-400 border-t-white rounded-full animate-spin" />
                      Sending details...
                    </span>
                  ) : (
                    "Request Consultation"
                  )}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
