import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="Hawaii Logo" className="h-10 w-auto" />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-hawaii font-bold tracking-widest uppercase">
                  HAWAII
                </span>
                <span className="text-[8px] font-body tracking-[0.2em] text-primary-foreground/70 uppercase">
                  Infrastructure Liberia Inc
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm mt-3 leading-relaxed">
              Built to Build. Delivering clean water and infrastructure solutions across Liberia since 2009.
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
              <li>0778 234 567</li>
              <li>hawaiigroups@gmail.com</li>
              <li>Catholic Junction, Congotown</li>
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
