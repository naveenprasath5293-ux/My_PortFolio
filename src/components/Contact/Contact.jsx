import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../BrandIcons";
import SectionHeading from "../SectionHeading";
import { useContactForm } from "../../hooks/useContactForm";
import { CONTACT_INFO } from "../../data/contact";

const INFO_ITEMS = [
  { icon: Mail, label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { icon: Phone, label: "Phone", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}` },
  { icon: MapPin, label: "Location", value: CONTACT_INFO.location, href: null },
  { icon: GithubIcon, label: "GitHub", value: "View profile", href: CONTACT_INFO.github },
  { icon: LinkedinIcon, label: "LinkedIn", value: "View profile", href: CONTACT_INFO.linkedin },
];

const FIELDS = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "subject", label: "Subject", type: "text" },
];

export default function Contact() {
  const { form, errors, status, updateField, submit } = useContactForm();

  return (
    <section
      id="contact"
      className="border-t border-border-soft/60 bg-void px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="contact" title="Let's talk" />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr]">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-3"
          >
            {INFO_ITEMS.map((item) => {
              const content = (
                <div className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-cyan/40">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-cyan-soft">
                    <item.icon size={17} strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] text-muted">{item.label}</p>
                    <p className="truncate text-sm text-text">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            onSubmit={submit}
            noValidate
            className="glass space-y-5 rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {FIELDS.map((field) => (
                <div key={field.name} className={field.name === "subject" ? "sm:col-span-2" : ""}>
                  <label
                    htmlFor={field.name}
                    className="mb-1.5 block font-mono text-xs text-muted"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={(e) => updateField(field.name, e.target.value)}
                    aria-invalid={Boolean(errors[field.name])}
                    aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                    className="w-full rounded-md border border-border-soft bg-panel px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-cyan/50"
                  />
                  {errors[field.name] && (
                    <p id={`${field.name}-error`} className="mt-1.5 text-xs text-red-400">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-muted">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full resize-none rounded-md border border-border-soft bg-panel px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-cyan/50"
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-md bg-cyan px-6 py-3 font-mono text-sm font-medium text-void transition-opacity disabled:opacity-60"
            >
              {status === "sending" ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-cyan-soft" role="status">
                <CheckCircle2 size={16} />
                Message sent — thanks for reaching out. I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400" role="alert">
                <AlertCircle size={16} />
                Something went wrong sending your message. Try emailing me directly instead.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
