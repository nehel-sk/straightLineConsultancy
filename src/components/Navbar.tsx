import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const scrollTo = (id)=>{
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="sticky bg-primary absolute top-0 left-0 w-full z-20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-primary-foreground font-bold text-xl">
          <img className="w-12 h-12" src="Logo.png" />
          {/* <div className="text-primary-foreground font-bold text-xl">
            Straight<span className="text-accent">Line</span>
          </div> */}
        </div>

        {/* Nav Links */}
        {/* Desktop view */}
        <div className="hidden md:flex items-center gap-8 text-primary-foreground/90">
          <a
            role="button"
            className="hover:text-primary transition"
            onClick={() => scrollTo("services")}
          >
            Services
          </a>
          <a
            role="button"
            className="hover:text-primary transition"
            onClick={() => scrollTo("whyUs")}
          >
            Why us
          </a>
          <a
            role="button"
            className="hover:text-primary transition"
            onClick={() => scrollTo("process")}
          >
            Our Process
          </a>
          <a
            role="button"
            className="hover:text-primary transition"
            onClick={() => scrollTo("contact")}
          >
            Contact
          </a>
        </div>

        {/* Mobile View Menu Button */}
        
        <Button
          size="sm"
          className="hidden sm:inline-flex bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-lg"
          onClick={() =>
            document.getElementById("get-started")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Enquire Now
        </Button>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isOpen &&
          <div className="md:hidden bg-primary text-primary-foreground px-4 py-6 flex flex-col gap-4">
          <a
            role="button"
            className="hover:text-primary transition"
            onClick={() => scrollTo("services")}
          >
            Services
          </a>
          <a
            role="button"
            className="hover:text-primary transition"
            onClick={() => scrollTo("whyUs")}
          >
            Why us
          </a>
          <a
            role="button"
            className="hover:text-primary transition"
            onClick={() => scrollTo("process")}
          >
            Our Process
          </a>
          <a
            role="button"
            className="hover:text-primary transition"
            onClick={() => scrollTo("contact")}
          >
            Contact
          </a>
        </div> 
        }

      </div>
    </nav>
  );
};

export default Navbar;
