import { Shield, Award, Users, Target } from "lucide-react";

const values = [
  { icon: Shield, title: "Safety First", desc: "Rigorous safety protocols on every site." },
  { icon: Award, title: "Quality Assured", desc: "International standards, certified materials." },
  { icon: Users, title: "Community Impact", desc: "Empowering communities through clean water." },
  { icon: Target, title: "Reliability", desc: "On-time delivery, transparent management." },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-earth-light" aria-labelledby="about-heading">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Text */}
          <div>
            <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest">About Us</span>
            <h2 id="about-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-hawaii font-bold text-foreground mt-2 mb-5">
              Building Liberia's Future, One Well at a Time
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-3">
              Hawaii Infrastructure Liberia Inc. is a leading borehole drilling and water infrastructure company with over 15 years of experience. Our skilled team and modern equipment deliver reliable solutions for communities, NGOs, and government agencies.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              From geophysical surveys to pump installation, we manage every phase — ensuring safe, clean water access for thousands of Liberians.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border">
                  <div className="w-9 h-9 shrink-0 rounded-md bg-accent/10 flex items-center justify-center">
                    <v.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-hawaii font-bold text-foreground text-sm">{v.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-card rounded-lg border border-border p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-hawaii font-bold text-foreground mb-6">Our Journey</h3>
            <div className="space-y-6">
              {[
                { year: "2009", text: "Founded with a single drilling rig and a vision." },
                { year: "2014", text: "Expanded to 5 rigs; partnered with international NGOs." },
                { year: "2018", text: "100+ boreholes drilled across 8 counties." },
                { year: "2022", text: "Introduced tractor-mounted rigs for rapid deployment." },
                { year: "2025", text: "200+ boreholes; Liberia's leading drilling company." },
              ].map((m) => (
                <div key={m.year} className="flex gap-3 sm:gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent shrink-0" />
                    <div className="w-0.5 flex-1 bg-border" />
                  </div>
                  <div className="pb-1">
                    <span className="text-accent font-hawaii font-bold text-sm">{m.year}</span>
                    <p className="text-muted-foreground text-sm mt-0.5">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
