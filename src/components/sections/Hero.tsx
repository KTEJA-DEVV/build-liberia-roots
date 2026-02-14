import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, MessageCircle, Droplets, HardHat, MapPin, Wrench } from "lucide-react";

const quickServices = [
  { icon: Droplets, label: "Borehole Drilling" },
  { icon: HardHat, label: "Geophysical Surveys" },
  { icon: MapPin, label: "Infrastructure" },
  { icon: Wrench, label: "Pump Installation" },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Borehole drilling operation in Liberia"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Calming gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-accent/40" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="relative container mx-auto px-4 pt-28 pb-36 md:pt-36 md:pb-44">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left content — 3 cols */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-5 py-2 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-primary-foreground/90 text-sm font-semibold tracking-wide">
                Liberia&apos;s Trusted Drilling Partner
              </span>
            </div>

            <div className="mb-2 animate-fade-in-up">
              <p className="text-accent font-heading text-lg md:text-xl font-bold tracking-wide mb-3">Built to Build</p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-primary-foreground leading-[1.08] mb-6 animate-fade-in-up">
              Clean Water.{" "}
              <br className="hidden sm:block" />
              <span className="text-gradient">Strong Foundations.</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/75 max-w-lg mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              We deliver world-class borehole drilling, geophysical surveys, and water infrastructure solutions — empowering communities across Liberia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2.5 bg-accent text-accent-foreground px-8 py-4 rounded-lg text-base font-bold shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:brightness-110 transition-all duration-300"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/2310778234567?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/25 text-primary-foreground px-8 py-4 rounded-lg text-base font-bold hover:bg-primary-foreground/20 hover:border-accent transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right — Quick service access cards — 2 cols */}
          <div className="lg:col-span-2 hidden lg:grid grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            {quickServices.map((s) => (
              <a
                key={s.label}
                href="#services"
                className="group flex flex-col items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-xl p-6 text-center hover:bg-primary-foreground/20 hover:border-accent/60 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm font-semibold text-primary-foreground/90">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary-foreground/10 backdrop-blur-md border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "200+", label: "Boreholes Drilled" },
            { value: "15+", label: "Years Experience" },
            { value: "10+", label: "Counties Served" },
            { value: "50+", label: "Active Crew" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-extrabold text-accent">{s.value}</div>
              <div className="text-xs md:text-sm text-primary-foreground/60 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
