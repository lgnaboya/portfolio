import { motion } from "framer-motion";
import { ClipboardPaste, Figma, Github, Handshake, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "loudettgleacnaboya@gmail.com",
    href: "mailto:loudettgleacnaboya@gmail.com",
  },
  { icon: Linkedin, label: "LinkedIn", value: "/in/loudette-glea-naboya", href: "#" },
  { icon: Github, label: "GitHub", value: "@lgnaboya", href: "#" },
  { icon: Figma, label: "Figma", value: "@loudettenaboya", href: "#" },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="relative h-full w-full flex items-center justify-center px-6 md:px-20">
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[15%] w-72 h-72 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[15%] right-[12%] w-80 h-80 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative w-full max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 text-primary"
        >
          <Handshake className="w-4 h-4" />
          <p className="text-xs uppercase tracking-[0.3em]">Let's build something</p>
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight"
        >
          Have an <span className="text-gradient">idea?</span>
          <br />
        </motion.h2>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => {
            navigator.clipboard.writeText("loudettgleacnaboya@gmail.com");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="relative inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium glow-primary hover:scale-[1.03] active:scale-[0.98] transition"
        >
          {copied ? "Start a conversation" : "Start a conversation"}

          <ClipboardPaste className="w-4 h-4" />

          {/* subtle feedback label */}
          {copied && (
            <span className="absolute -bottom-6 text-xs text-primary right-0">✓ Email Copied</span>
          )}
        </motion.button>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {links.map((l, i) => {
            const Icon = l.icon;
            return (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.07 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl glass p-4 flex items-center gap-3 text-left hover:bg-white/10 transition"
              >
                <div className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {l.label}
                  </p>
                  <p className="text-sm truncate">{l.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
