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
    // Simulate send
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", projectType: "", message: "" });
    }, 1500);
  };

  const inputClass =
    "w-full bg-background border border-border rounded-md px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition";

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mt-3 mb-4">
            Start Your Project
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Ready to bring clean water to your community? Contact us for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" className={inputClass} />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address *" className={inputClass} />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Phone Number *" className={inputClass} />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <select name="projectType" value={form.projectType} onChange={handleChange} className={inputClass}>
                  <option value="">Select Project Type *</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.projectType && <p className="text-destructive text-xs mt-1">{errors.projectType}</p>}
              </div>
            </div>
            <div>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project *" rows={5} className={inputClass} />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-md text-sm font-bold hover:brightness-110 transition disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4" />
            </button>
            {status === "sent" && (
              <p className="text-accent font-medium text-sm mt-2">Thank you! We'll respond within 24 hours.</p>
            )}
          </form>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Phone, label: "Phone", value: "+231 0555 234 567", href: "tel:+2310555234567" },
              { icon: Mail, label: "Email", value: "info@hawaiiliberia.com", href: "mailto:info@hawaiiliberia.com" },
              { icon: MapPin, label: "Location", value: "Monrovia, Liberia", href: undefined },
              { icon: Clock, label: "Hours", value: "Mon — Sat: 7AM – 6PM", href: undefined },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-md bg-accent/10 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">{c.label}</span>
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

            <a
              href="https://wa.me/2310555234567?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 text-card px-5 py-3.5 rounded-md text-sm font-bold hover:bg-green-700 transition mt-4"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
