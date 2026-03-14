import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set to true when scrolled down more than 20px
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-primary/95 backdrop-blur-md border-b border-white/10 shadow-sm" : "bg-transparent"}`}>
      <div className={`container mx-auto px-4 flex items-center justify-between transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}>
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollTo("home")}>
          <div className={`font-bold text-2xl transition-colors duration-300 ${isScrolled ? "text-primary-foreground" : "text-white"}`}>
            Straight<span className="text-accent">Line</span>
          </div>
        </div>

        {/* Nav Links */}
        {/* Desktop view */}
        <div className="hidden md:flex items-center gap-8 text-primary-foreground/90 font-medium">
          <a
            role="button"
            className="hover:text-accent transition-colors"
            onClick={() => scrollTo("services")}
          >
            Services
          </a>
          <a
            role="button"
            className="hover:text-accent transition-colors"
            onClick={() => scrollTo("whyUs")}
          >
            Why us
          </a>
          <a
            role="button"
            className="hover:text-accent transition-colors"
            onClick={() => scrollTo("process")}
          >
            Our Process
          </a>
          <a
            role="button"
            className="hover:text-accent transition-colors"
            onClick={() => scrollTo("contact")}
          >
            Contact
          </a>
        </div>

        {/* Mobile View Menu Button */}

        <Button
          size="sm"
          className="hidden sm:inline-flex bg-slate-100 text-primary hover:bg-slate-200 rounded-lg font-bold"
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
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-md border-b border-white/5 text-primary-foreground flex flex-col gap-4 animate-fade-in">
            <div className="px-4 py-6 flex flex-col gap-4">
              <a
                role="button"
                className="text-lg hover:text-accent font-medium transition flex justify-end"
                onClick={() => scrollTo("services")}
              >
                Services
              </a>
              <a
                role="button"
                className="text-lg hover:text-accent font-medium transition flex justify-end"
                onClick={() => scrollTo("whyUs")}
              >
                Why us
              </a>
              <a
                role="button"
                className="text-lg hover:text-accent font-medium transition flex justify-end"
                onClick={() => scrollTo("process")}
              >
                Our Process
              </a>
              <a
                role="button"
                className="text-lg hover:text-accent font-medium transition flex justify-end"
                onClick={() => scrollTo("contact")}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
