import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Hawaii Infrastructure Logo" className="h-10 md:h-12 w-auto" />
          <div className="flex flex-col leading-none">
            <span className="text-xl md:text-2xl font-hawaii font-bold tracking-widest text-primary-foreground uppercase">
              HAWAII
            </span>
            <span className="text-[8px] md:text-[9px] font-body tracking-[0.2em] text-primary-foreground/70 uppercase">
              Infrastructure Liberia Inc
            </span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+2310778234567"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:brightness-110 transition"
          >
            <Phone className="w-4 h-4" />
            Call Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-primary-foreground/80 hover:text-accent py-2 text-base font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+2310778234567"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-md text-sm font-semibold mt-2"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
