import p1 from "@/assets/portfolio-1.jpeg";
import p2 from "@/assets/portfolio-2.jpeg";
import p3 from "@/assets/portfolio-3.jpeg";
import p4 from "@/assets/portfolio-4.jpeg";
import p5 from "@/assets/portfolio-5.jpeg";
import p6 from "@/assets/portfolio-6.jpeg";
import p7 from "@/assets/portfolio-7.jpeg";
import p8 from "@/assets/portfolio-8.jpeg";

const projects = [
  { img: p4, title: "Successful Borehole Strike" },
  { img: p5, title: "Field Operations" },
  { img: p6, title: "Deep Well Drilling" },
  { img: p7, title: "Tractor-Mounted Rig" },
  { img: p2, title: "Team on Site" },
  { img: p1, title: "Equipment & Drill Pipes" },
  { img: p8, title: "Rig at Government Site" },
];

const allProjects = [...projects, ...projects];

const Portfolio = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-primary overflow-hidden" aria-labelledby="projects-heading">
      <div className="container mx-auto px-4 mb-8 sm:mb-10">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest">Our Work</span>
          <h2 id="projects-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-hawaii font-bold text-primary-foreground mt-2 mb-3">
            Featured Projects
          </h2>
          <p className="text-primary-foreground/70 text-sm sm:text-base">
            A showcase of our drilling operations and the communities we serve.
          </p>
        </div>
      </div>

      <div className="relative group px-4">
        <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] w-max">
          {allProjects.map((p, i) => (
            <div
              key={i}
              className="relative w-[200px] sm:w-[260px] md:w-[300px] flex-shrink-0 overflow-hidden rounded-xl bg-card shadow-md transition-transform duration-300 hover:scale-105"
            >
              <div className="h-[140px] sm:h-[160px] md:h-[180px] w-full bg-muted/40 p-3 flex items-center justify-center overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full max-w-full max-h-full object-contain rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent px-3 py-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-primary-foreground font-hawaii font-bold text-sm">{p.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
