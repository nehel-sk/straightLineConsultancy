const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo / Brand */}
          <div className="text-primary-foreground font-bold text-xl">
            Straight<span className="text-accent">Line</span>
          </div>

          {/* Copyright */}
          <p className="text-muted text-sm text-center">
            © {new Date().getFullYear()} StraightLine. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#services" className="text-muted hover:text-primary-foreground text-sm transition-colors">
              Services
            </a>
            <a href="#contact" className="text-muted hover:text-primary-foreground text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
