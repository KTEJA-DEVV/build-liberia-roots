import { useState, type FormEvent } from "react";
import { Send, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(7, "Phone number is required").max(20),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type FormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const projectTypes = [
  "Borehole Drilling",
  "Geophysical Survey",
  "Water Tank Construction",
  "Pump Installation",
  "Maintenance & Repair",
  "Other",
];

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.!2d-10.7529564!3d6.2763796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTYnMzUuMCJOIDEwwrA0NScxMC42Ilc!5e0!3m2!1sen!2s!4v1700000000000";

const GOOGLE_MAPS_LINK =
  "https://www.google.com/maps/place/6%C2%B016'35.0%22N+10%C2%B045'10.6%22W/@6.2763796,-10.7529564,17z";

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormData]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", projectType: "", message: "" });
    }, 1500);
  };

  const inputClass =
    "w-full bg-background border border-border rounded-lg px-4 py-3.5 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition";

  return (
    <section id="contact" className="section-padding bg-background" aria-labelledby="contact-heading">
      <div className="container mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-hawaii font-bold text-foreground mt-2 mb-3">
            Start Your Project
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Ready to bring clean water to your community? Contact us for a free consultation.
          </p>
        </div>

        {/* Main grid: Form + Sidebar (contact info & map) */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" className={inputClass} />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *" className={inputClass} />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Phone *" className={inputClass} />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <select name="projectType" value={form.projectType} onChange={handleChange} className={inputClass}>
                  <option value="">Project Type *</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.projectType && <p className="text-destructive text-xs mt-1">{errors.projectType}</p>}
              </div>
            </div>
            <div>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project *" rows={4} className={inputClass} />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg text-base font-bold hover:brightness-110 active:scale-[0.97] transition-all disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4" />
            </button>
            {status === "sent" && (
              <p className="text-accent font-medium text-sm mt-2">Thank you! We'll respond within 24 hours.</p>
            )}
          </form>

          {/* Right side: Contact info + Map */}
          <div className="space-y-4">
            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://wa.me/2310778234567?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-whatsapp text-primary-foreground px-4 py-3.5 rounded-lg text-sm font-bold hover:bg-whatsapp-hover active:scale-[0.97] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="tel:+2310778234567"
                className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-3.5 rounded-lg text-sm font-bold hover:brightness-110 active:scale-[0.97] transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Contact details */}
            <div className="bg-card rounded-lg border border-border p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: Phone, label: "Phone", value: "0778 234 567 / 0777 111 099", href: "tel:+2310778234567" },
                { icon: Mail, label: "Email", value: "hawaiigroups@gmail.com", href: "mailto:hawaiigroups@gmail.com" },
                { icon: MapPin, label: "Office", value: "Catholic Junction, Congotown, Monrovia" },
                { icon: Clock, label: "Hours", value: "Mon — Sat: 7AM – 6PM" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 shrink-0 rounded-md bg-accent/10 flex items-center justify-center">
                    <c.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wide">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} className="block text-foreground font-medium text-xs sm:text-sm hover:text-accent transition-colors truncate">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium text-xs sm:text-sm">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map */}
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden border border-border hover:border-accent/40 transition-colors"
            >
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                className="w-full h-48 sm:h-56 lg:h-64 pointer-events-none"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hawaii Infrastructure office location - Catholic Junction, Congotown, Monrovia, Liberia"
              />
              <div className="bg-card px-4 py-2.5 flex items-center gap-2 text-sm font-medium text-accent">
                <MapPin className="w-4 h-4" />
                View on Google Maps
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
