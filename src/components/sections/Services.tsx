import { Droplets, Search, Layers, Container, Wrench, Ruler } from "lucide-react";
import serviceGeophysical from "@/assets/service-geophysical.jpg";
import serviceDrilling from "@/assets/service-drilling.jpg";
import serviceSedimentary from "@/assets/service-sedimentary.jpg";
import serviceTank from "@/assets/service-tank.jpg";
import servicePump from "@/assets/service-pump.jpg";
import serviceInfrastructure from "@/assets/service-infrastructure.jpg";

const services = [
  {
    icon: Search,
    title: "Geophysical Surveys",
    desc: "Advanced subsurface investigation to identify optimal drilling locations.",
    image: serviceGeophysical,
    alt: "Drilling equipment and pipes stored in Hawaii Infrastructure warehouse for geophysical survey operations",
  },
  {
    icon: Droplets,
    title: "Borehole Drilling",
    desc: "Motorized and tractor-mounted drilling for all terrains up to 400m.",
    image: serviceDrilling,
    alt: "Hawaii Infrastructure drilling rig in action on a borehole site with dust rising from the ground",
  },
  {
    icon: Layers,
    title: "Sedimentary Drilling",
    desc: "Specialized drilling for geological exploration and resource mapping.",
    image: serviceSedimentary,
    alt: "Completed hand pump borehole installation with concrete apron in a Liberian community",
  },
  {
    icon: Container,
    title: "Water Tank Construction",
    desc: "Elevated and ground-level storage tanks for reliable water supply.",
    image: serviceTank,
    alt: "Elevated water storage tank structure built by Hawaii Infrastructure team in rural Liberia",
  },
  {
    icon: Wrench,
    title: "Pump Installation",
    desc: "Submersible and hand pump installation with ongoing maintenance.",
    image: servicePump,
    alt: "Hawaii Infrastructure technicians installing submersible pump equipment on site",
  },
  {
    icon: Ruler,
    title: "Infrastructure Development",
    desc: "Pipeline installation, water treatment, and distribution networks.",
    image: serviceInfrastructure,
    alt: "Construction crew building foundation for water infrastructure project in Liberia",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background" aria-labelledby="services-heading">
      <div className="container mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest">What We Do</span>
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-hawaii font-bold text-foreground mt-2 mb-3">
            Our Services
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            End-to-end water infrastructure solutions with the highest standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group bg-card rounded-lg border border-border overflow-hidden hover:border-accent/40 hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-36 sm:h-40 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-md bg-accent/90 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-accent-foreground" />
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-hawaii font-bold text-foreground mb-1.5">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
