import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Borehole drilling operation in Liberia"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl">
          <div className="inline-block bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <span className="text-accent text-sm font-semibold tracking-wide uppercase">
              Liberia&apos;s Trusted Drilling Partner
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold text-primary-foreground leading-[1.1] mb-6 animate-fade-in-up">
            Built to{" "}
            <span className="text-gradient">Build</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Hawaii Infrastructure Liberia Inc. delivers world-class borehole drilling, geophysical surveys, and water infrastructure solutions across Liberia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-4 rounded-md text-base font-bold hover:brightness-110 transition"
            >
              View Our Services
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/2310555234567?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-7 py-4 rounded-md text-base font-bold hover:border-accent hover:text-accent transition"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary/80 backdrop-blur-sm border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "200+", label: "Boreholes Drilled" },
            { value: "15+", label: "Years Experience" },
            { value: "10+", label: "Counties Served" },
            { value: "50+", label: "Active Crew" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-extrabold text-accent">{s.value}</div>
              <div className="text-xs md:text-sm text-primary-foreground/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
