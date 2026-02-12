import { Shield, Award, Users, Target } from "lucide-react";

const values = [
  { icon: Shield, title: "Safety First", desc: "Rigorous safety protocols on every project site." },
  { icon: Award, title: "Quality Assured", desc: "International standards and certified materials." },
  { icon: Users, title: "Community Impact", desc: "Empowering Liberian communities through clean water." },
  { icon: Target, title: "Reliability", desc: "On-time delivery and transparent project management." },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-earth-light">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mt-3 mb-6">
              Building Liberia&apos;s Future, One Well at a Time
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              Hawaii Infrastructure Liberia Inc. is a leading borehole drilling and water infrastructure company operating across Liberia. With over 15 years of experience, our skilled team and modern equipment deliver reliable, high-quality solutions for communities, NGOs, government agencies, and private clients.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              From geophysical surveys to pump installation and maintenance, we manage every phase of the water supply chain — ensuring access to safe, clean water for thousands of Liberians.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-md bg-accent/10 flex items-center justify-center">
                    <v.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground text-sm">{v.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-card rounded-lg border border-border p-8">
            <h3 className="text-xl font-heading font-bold text-foreground mb-8">Our Journey</h3>
            <div className="space-y-8">
              {[
                { year: "2009", text: "Company founded with a single drilling rig and a vision to serve Liberia." },
                { year: "2014", text: "Expanded fleet to 5 rigs; partnered with international NGOs for rural water projects." },
                { year: "2018", text: "Reached 100+ boreholes drilled milestone across 8 counties." },
                { year: "2022", text: "Introduced tractor-mounted rigs for rapid rural deployment." },
                { year: "2025", text: "200+ boreholes completed; recognized as Liberia's leading drilling company." },
              ].map((m) => (
                <div key={m.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent shrink-0" />
                    <div className="w-0.5 flex-1 bg-border" />
                  </div>
                  <div className="pb-2">
                    <span className="text-accent font-heading font-bold text-sm">{m.year}</span>
                    <p className="text-muted-foreground text-sm mt-1">{m.text}</p>
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
