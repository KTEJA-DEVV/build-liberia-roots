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

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {/* Quick contact — shown first on mobile */}
          <div className="lg:col-span-2 lg:order-2 space-y-4">
            {/* WhatsApp CTA — prominent on mobile */}
            <a
              href="https://wa.me/2310778234567?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-whatsapp text-primary-foreground px-5 py-4 rounded-lg text-base font-bold hover:bg-whatsapp-hover active:scale-[0.97] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            <a
              href="tel:+2310778234567"
              className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground px-5 py-4 rounded-lg text-base font-bold hover:brightness-110 active:scale-[0.97] transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>

            <div className="bg-card rounded-lg border border-border p-5 space-y-4">
              {[
                { icon: Phone, label: "Phone", value: "0778 234 567 / 0777 111 099", href: "tel:+2310778234567" },
                { icon: Mail, label: "Email", value: "hawaiigroups@gmail.com", href: "mailto:hawaiigroups@gmail.com" },
                { icon: MapPin, label: "Office", value: "Catholic Junction, Congotown, Monrovia" },
                { icon: Clock, label: "Hours", value: "Mon — Sat: 7AM – 6PM" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 shrink-0 rounded-md bg-accent/10 flex items-center justify-center">
                    <c.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} className="block text-foreground font-medium text-sm hover:text-accent transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium text-sm">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 lg:order-1 space-y-4">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
