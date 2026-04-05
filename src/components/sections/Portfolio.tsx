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

      {/* Marquee */}
      <div className="relative h-[200px] sm:h-[240px] md:h-[300px]">
        <div className="flex gap-3 sm:gap-4 animate-marquee absolute top-0 left-0 h-full">
          {allProjects.map((p, i) => (
            <div
              key={i}
              className="relative h-full aspect-[4/3] flex-shrink-0 rounded-lg overflow-hidden group"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
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
