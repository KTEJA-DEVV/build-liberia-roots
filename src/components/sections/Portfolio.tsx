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
  { img: p3, title: "Drilling Rig Deployment" },
  { img: p4, title: "Successful Borehole Strike" },
  { img: p5, title: "Field Operations" },
  { img: p6, title: "Deep Well Drilling" },
  { img: p7, title: "Tractor-Mounted Rig" },
  { img: p2, title: "Team on Site" },
  { img: p1, title: "Equipment & Drill Pipes" },
  { img: p8, title: "Rig at Government Site" },
];

const Portfolio = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

  return (
    <section id="projects" className="section-padding bg-primary">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Our Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary-foreground mt-3 mb-4">
            Featured Projects
          </h2>
          <p className="text-primary-foreground/70 text-base md:text-lg">
            A showcase of our drilling operations, equipment, and the communities we serve.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="w-full max-w-3xl mx-12 md:mx-16 overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {projects.map((p, i) => (
                <div key={i} className="w-full flex-shrink-0 flex items-center justify-center">
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden group">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="text-primary-foreground font-heading font-bold text-base md:text-lg">{p.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-0 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-accent w-7" : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
