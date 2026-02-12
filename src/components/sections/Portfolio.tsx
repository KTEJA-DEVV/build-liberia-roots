import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import p1 from "@/assets/portfolio-1.jpeg";
import p2 from "@/assets/portfolio-2.jpeg";
import p3 from "@/assets/portfolio-3.jpeg";
import p4 from "@/assets/portfolio-4.jpeg";
import p5 from "@/assets/portfolio-5.jpeg";
import p6 from "@/assets/portfolio-6.jpeg";
import p7 from "@/assets/portfolio-7.jpeg";
import p8 from "@/assets/portfolio-8.jpeg";

const projects = [
  { img: p3, title: "HAWAII Drilling Rig Deployment", desc: "Drilling rig mobilized for community water supply project in Monrovia." },
  { img: p4, title: "Successful Borehole Strike", desc: "Celebration after a high-yield borehole was completed for a rural community." },
  { img: p5, title: "Field Operations", desc: "Our crew on-site during an active drilling operation in a remote county." },
  { img: p6, title: "Deep Well Drilling", desc: "High-capacity drilling rig reaching deep aquifer layers for institutional water supply." },
  { img: p7, title: "Tractor-Mounted Rig", desc: "Mobile tractor-mounted drilling unit deployed for rapid field operations." },
  { img: p2, title: "Team on Site", desc: "Hawaii Infrastructure team with partners during a borehole drilling campaign." },
  { img: p1, title: "Equipment & Drill Pipes", desc: "Our warehouse stocked with premium drilling pipes and accessories." },
  { img: p8, title: "Rig at Government Site", desc: "Drilling rig set up near government infrastructure development zone." },
];

const Portfolio = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === projects.length - 1 ? 0 : i + 1));

  return (
    <section id="projects" className="section-padding bg-primary">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Our Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary-foreground mt-3 mb-4">
            Featured Projects
          </h2>
          <p className="text-primary-foreground/70 text-base md:text-lg">
            A showcase of our drilling operations, equipment, and the communities we serve.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg aspect-[16/10]">
            <img
              src={projects[idx].img}
              alt={projects[idx].title}
              className="w-full h-full object-cover transition-opacity duration-500"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-primary-foreground">{projects[idx].title}</h3>
              <p className="text-primary-foreground/70 text-sm md:text-base mt-1">{projects[idx].desc}</p>
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/70 backdrop-blur flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/70 backdrop-blur flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === idx ? "bg-accent w-7" : "bg-primary-foreground/30"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
