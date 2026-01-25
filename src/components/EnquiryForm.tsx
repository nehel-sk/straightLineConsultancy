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
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-card rounded-2xl shadow-2xl animate-slide-up overflow-hidden">
        {/* Header */}
        <div className="bg-primary px-6 py-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-primary-foreground">Service Enquiry</h3>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
          >
            <X className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Thank You!</h4>
              <p className="text-muted-foreground mb-6">
                Your enquiry has been submitted. Our team will contact you within 24 hours.
              </p>
              <Button onClick={handleClose} className="bg-primary text-primary-foreground">
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-foreground">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1.5"
                  maxLength={100}
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground">
                  Phone / WhatsApp <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">
                  Email (Optional)
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1.5"
                  maxLength={255}
                />
              </div>

              <div>
                <Label htmlFor="service" className="text-foreground">
                  Select Service <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">
                  Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1.5 min-h-[80px]"
                  maxLength={1000}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Submit Enquiry
                  </span>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
