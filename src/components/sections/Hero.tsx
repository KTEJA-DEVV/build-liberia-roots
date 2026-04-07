import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Borehole drilling operation in Liberia"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/85 sm:bg-gradient-to-br sm:from-primary/70 sm:via-primary/50 sm:to-accent/15" />
      </div>

      <div className="relative w-full container mx-auto px-4 pt-20 pb-28 sm:pt-24 sm:pb-32 md:pt-32 md:pb-40">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-5 sm:mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-primary-foreground/90 text-xs sm:text-sm font-semibold tracking-wide">
            Liberia's Trusted Drilling Partner
          </span>
        </div>

        {/* Tagline */}
        <p className="text-accent font-hawaii text-xl sm:text-2xl font-bold tracking-wider mb-2 animate-fade-in-up">
          Built to Build
        </p>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-hawaii font-bold text-primary-foreground leading-[1.1] mb-4 sm:mb-5 animate-fade-in-up max-w-3xl">
          Clean Water.{" "}
          <br className="hidden sm:block" />
          <span className="text-gradient">Strong Foundations.</span>
        </h1>

        {/* Subtext */}
        <p
          className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-lg mb-8 sm:mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          World-class borehole drilling, geophysical surveys & water infrastructure — empowering communities across Liberia.
        </p>

        {/* CTA — stacked on mobile */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <a
            href="#services"
            className="hero-cta inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-4 rounded-lg text-base font-bold shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:brightness-110 active:scale-[0.97] transition-all"
          >
            Explore Services
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/2310778234567?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta inline-flex items-center justify-center gap-2 bg-whatsapp text-primary-foreground px-7 py-4 rounded-lg text-base font-bold hover:bg-whatsapp-hover active:scale-[0.97] transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
          <a
            href="tel:+2310778234567"
            className="hero-cta inline-flex items-center justify-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/25 text-primary-foreground px-7 py-4 rounded-lg text-base font-bold hover:bg-primary-foreground/20 active:scale-[0.97] transition-all sm:hidden"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-md border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 sm:py-5 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: "1000+", label: "Boreholes Drilled" },
            { value: "15+", label: "Years Experience" },
            { value: "10+", label: "Counties Served" },
            { value: "50+", label: "Active Crew" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-hawaii font-bold text-accent">{s.value}</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-primary-foreground/60 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
