const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="text-2xl font-heading font-extrabold tracking-tight">
              HAWAII<span className="text-accent">.</span>
            </span>
            <p className="text-primary-foreground/60 text-sm mt-3 leading-relaxed">
              Hawaii Infrastructure Liberia Inc. — Built to Build. Delivering clean water and infrastructure solutions across Liberia since 2009.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wide mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/60 text-sm">
              <li>Geophysical Surveys</li>
              <li>Borehole Drilling</li>
              <li>Water Tank Construction</li>
              <li>Pump Installation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wide mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Services", "Projects", "About", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-primary-foreground/60 hover:text-accent transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wide mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/60 text-sm">
              <li>+231 0555 234 567</li>
              <li>info@hawaiiliberia.com</li>
              <li>Monrovia, Liberia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-primary-foreground/40 text-xs">
          © {new Date().getFullYear()} Hawaii Infrastructure Liberia Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
