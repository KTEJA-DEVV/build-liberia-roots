import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header role="banner">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-primary/95 backdrop-blur-md shadow-lg"
            : "bg-primary/80 backdrop-blur-sm"
        }`}
        aria-label="Main navigation"
      >
        <div className="container mx-auto flex items-center justify-between h-14 sm:h-16 md:h-18 px-4">
          <a href="#home" className="flex items-center gap-2" aria-label="Hawaii Infrastructure - Home">
            <img src={logo} alt="" className="h-9 sm:h-10 md:h-12 w-auto" width={48} height={48} />
            <div className="flex flex-col leading-none">
              <span className="text-lg sm:text-xl md:text-2xl font-hawaii font-bold tracking-widest text-primary-foreground uppercase">
                HAWAII
              </span>
              <span className="text-[7px] sm:text-[8px] md:text-[9px] font-body tracking-[0.18em] text-primary-foreground/70 uppercase">
                Infrastructure Liberia Inc
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+2310778234567"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md text-sm font-bold hover:brightness-110 transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile action buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://wa.me/2310778234567?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-md bg-whatsapp text-primary-foreground active:scale-95 transition-transform"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="tel:+2310778234567"
              className="w-9 h-9 flex items-center justify-center rounded-md bg-accent text-accent-foreground active:scale-95 transition-transform"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="w-9 h-9 flex items-center justify-center text-primary-foreground active:scale-95 transition-transform"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-primary border-t border-primary-foreground/10 px-4 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-primary-foreground/80 hover:text-accent active:text-accent py-3 text-base font-medium transition-colors border-b border-primary-foreground/5 last:border-0"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
