import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container mx-auto px-4 py-10 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="" className="h-9 sm:h-10 w-auto" width={40} height={40} />
              <div className="flex flex-col leading-none">
                <span className="text-lg sm:text-xl font-hawaii font-bold tracking-widest uppercase">
                  HAWAII
                </span>
                <span className="text-[7px] sm:text-[8px] font-body tracking-[0.18em] text-primary-foreground/70 uppercase">
                  Infrastructure Liberia Inc
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-xs sm:text-sm mt-2 leading-relaxed">
              Built to Build. Clean water and infrastructure solutions across Liberia since 2009.
            </p>
          </div>

          <div>
            <h4 className="font-hawaii font-bold text-sm uppercase tracking-wide mb-3">Services</h4>
            <ul className="space-y-1.5 text-primary-foreground/60 text-xs sm:text-sm">
              <li>Geophysical Surveys</li>
              <li>Borehole Drilling</li>
              <li>Water Tank Construction</li>
              <li>Pump Installation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-hawaii font-bold text-sm uppercase tracking-wide mb-3">Quick Links</h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
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
            <h4 className="font-hawaii font-bold text-sm uppercase tracking-wide mb-3">Contact</h4>
            <ul className="space-y-1.5 text-primary-foreground/60 text-xs sm:text-sm">
              <li>0778 234 567</li>
              <li>hawaiigroups@gmail.com</li>
              <li>Catholic Junction, Congotown</li>
              <li>Monrovia, Liberia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-5 text-center text-primary-foreground/40 text-xs">
          © {new Date().getFullYear()} Hawaii Infrastructure Liberia Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
