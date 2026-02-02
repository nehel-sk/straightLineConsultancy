import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky bg-primary absolute top-0 left-0 w-full z-20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-primary-foreground font-bold text-xl">
          <img className="w-12 h-12"src="Logo.png" />
          {/* <div className="text-primary-foreground font-bold text-xl">
            Straight<span className="text-accent">Line</span>
          </div> */}
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-primary-foreground/90">
          <a role="button" className="hover:text-primary transition"   onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
            Services
          </a>
          <a role="button" className="hover:text-primary transition"   onClick={() => document.getElementById("whyUs")?.scrollIntoView({ behavior: "smooth" })}>
            Why us
          </a>
          <a role="button" className="hover:text-primary transition"   onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}>
            Our Process
          </a>
          <a role="button" className="hover:text-primary transition"   onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Contact
          </a>
        </div>

        {/* CTA */}
        <Button
          size="sm"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-lg"
          onClick={() =>
            document.getElementById("get-started")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
