import { Droplets, Search, Layers, Container, Wrench, Ruler } from "lucide-react";
import p3 from "@/assets/portfolio-3.jpeg";
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
    desc: "Comprehensive subsurface investigation using advanced geophysical equipment to identify optimal drilling locations and assess groundwater potential.",
    image: serviceGeophysical,
  },
  {
    icon: Droplets,
    title: "Borehole Drilling",
    desc: "Professional motorized and tractor-mounted borehole drilling for communities, institutions, and commercial clients across all terrains.",
    image: serviceDrilling,
  },
  {
    icon: Layers,
    title: "Sedimentary Drilling",
    desc: "Specialized sedimentary drilling services for geological exploration, environmental assessments, and resource mapping projects.",
    image: serviceSedimentary,
  },
  {
    icon: Container,
    title: "Water Tank Construction",
    desc: "Design and construction of elevated and ground-level water storage tanks to ensure reliable supply for rural and urban areas.",
    image: serviceTank,
  },
  {
    icon: Wrench,
    title: "Pump Installation & Maintenance",
    desc: "Expert installation of submersible and hand pumps, with ongoing maintenance and repair programs to maximize uptime.",
    image: servicePump,
  },
  {
    icon: Ruler,
    title: "Infrastructure Development",
    desc: "General civil works including pipeline installation, water treatment systems, and community water distribution networks.",
    image: serviceInfrastructure,
  },
];

const Services = () => {
  return (
    <section id="services" className="relative section-padding overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={p3} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
      </div>

      <div className="relative container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            From survey to completion, we provide end-to-end water infrastructure solutions with the highest standards of quality and safety.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {services.map((s) => (
             <div
               key={s.title}
               className="group bg-card/90 backdrop-blur-sm rounded-lg border border-border overflow-hidden hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
             >
               <div className="relative h-40 overflow-hidden">
                 <img
                   src={s.image}
                   alt={s.title}
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   loading="lazy"
                 />
               </div>
               <div className="p-7">
                 <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                   <s.icon className="w-6 h-6 text-accent" />
                 </div>
                 <h3 className="text-lg font-heading font-bold text-foreground mb-2">{s.title}</h3>
                 <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
               </div>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
};

export default Services;
