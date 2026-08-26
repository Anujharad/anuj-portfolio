import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, Phone, MapPin, Send, Download } from "lucide-react";
import { personal } from "../../data/personal";
import { fadeUp } from "../../lib/animations";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email address";
    if (!form.message.trim()) e.message = "Please enter a message";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: personal.location, href: null },
  ];

  return (
    <section id="Contact" className="fluid-chapter fluid-chapter-contact relative px-6 md:px-12 lg:px-16 py-28 md:py-44">
      <div className="fluid-word right-[-6vw] bottom-[10%]">CONNECT</div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-xs font-mono text-accent-light">07 / CONTACT</span>
          <h2 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tightest leading-[.9] text-white">
            Have a product<br />in mind?
          </h2>
          <p className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent-light tracking-tightest">Let&apos;s build it.</p>
          <p className="mt-8 max-w-xl mx-auto text-base md:text-lg text-white/70 leading-relaxed">
            I&apos;m open to software engineering, full-stack development and relevant technology opportunities.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#Contact" data-cursor="" className="group flex items-center gap-2 bg-accent text-white font-medium text-sm md:text-base px-6 py-3.5 rounded-full hover:bg-accent-dark transition-all hover:scale-[1.02] shadow-[0_8px_30px_rgba(255,48,69,.25)]">
              Get In Touch <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href={personal.resumeUrl} download data-cursor="" className="group flex items-center gap-2 border border-white/25 text-white font-medium text-sm md:text-base px-6 py-3.5 rounded-full hover:bg-white/10 transition-all">
              Download Resume <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="grid sm:grid-cols-3 gap-3 mb-12 max-w-2xl mx-auto">
          {contactInfo.map((info) => (
            <div key={info.label} className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/15 bg-black/20 backdrop-blur-sm">
              <info.icon size={18} className="text-accent-light flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase tracking-wider text-white/45">{info.label}</div>
                {info.href ? (
                  <a href={info.href} data-cursor="" className="text-sm text-white hover:text-accent-light transition-colors truncate block">{info.value}</a>
                ) : (
                  <span className="text-sm text-white truncate block">{info.value}</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.form {...fadeUp} onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5" noValidate>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-[10px] font-mono uppercase tracking-wider text-white/50 mb-2">Name</label>
              <input id="name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-black/30 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:border-accent/50 focus:outline-none transition-colors backdrop-blur-sm" placeholder="Your name" />
              {errors.name && <p className="mt-1 text-xs text-accent-light">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-[10px] font-mono uppercase tracking-wider text-white/50 mb-2">Email</label>
              <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-black/30 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:border-accent/50 focus:outline-none transition-colors backdrop-blur-sm" placeholder="you@example.com" />
              {errors.email && <p className="mt-1 text-xs text-accent-light">{errors.email}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-[10px] font-mono uppercase tracking-wider text-white/50 mb-2">Message</label>
            <textarea id="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-black/30 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:border-accent/50 focus:outline-none transition-colors resize-none backdrop-blur-sm" placeholder="Tell me about your project..." />
            {errors.message && <p className="mt-1 text-xs text-accent-light">{errors.message}</p>}
          </div>
          <button type="submit" data-cursor="" className="group flex items-center gap-2 bg-accent text-white font-medium text-sm px-5 py-3 rounded-full hover:bg-accent-dark transition-all hover:scale-[1.02] w-full sm:w-auto justify-center shadow-[0_8px_30px_rgba(255,48,69,.25)]">
            Send Message <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
