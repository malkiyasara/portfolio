import React, { useRef, useState } from "react";
import { Mail, Send } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { sendEmail } from "../../services/email";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
    },
  },
};

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(
      ".interactive-glow-card",
    );
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      (card as HTMLElement).style.setProperty(
        "--mouse-x",
        `${e.clientX - rect.left}px`,
      );
      (card as HTMLElement).style.setProperty(
        "--mouse-y",
        `${e.clientY - rect.top}px`,
      );
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await sendEmail(formData.name, formData.email, formData.message);

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pt-8 pb-24 border-t border-white/5 scroll-mt-15"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="absolute top-1/4 right-1/4 -z-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        variants={itemVariants}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Get In{" "}
          <span className="bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <motion.div className="lg:col-span-5 h-full" variants={itemVariants}>
          <Tilt
            glareEnable
            glareMaxOpacity={0.05}
            glareColor="#60a5fa"
            tiltMaxAngleX={4}
            tiltMaxAngleY={4}
            perspective={1000}
            scale={1.01}
            className="h-full"
          >
            <div
              className="
                interactive-glow-card
                group/card
                relative
                p-[1px]
                rounded-3xl
                bg-white/[0.08]
                overflow-hidden
                shadow-2xl
                before:absolute
                before:inset-0
                before:pointer-events-none
                before:opacity-0
                before:transition-opacity
                before:duration-300
                before:bg-[radial-gradient(170px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(59,130,246,0.8),transparent_70%)]
                hover:before:opacity-100
              "
            >
              <div className="relative z-10 w-full h-full bg-[#0d1224] rounded-[23px] p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-6 rounded-md bg-blue-400/5 border border-blue-400/10 text-blue-300 text-xs font-mono tracking-wider uppercase">
                    Connect
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Let's Collaborate
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    Have a project in mind or want to discuss full-stack
                    architecture? My inbox is always open.
                  </p>

                  <a
                    href="mailto:malkiyasaraofficial@gmail.com"
                    className="flex items-center gap-4 bg-white/5 p-2 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 group/link"
                  >
                    <div className="p-2.5 bg-blue-600/20 text-blue-400 rounded-lg group-hover/link:bg-blue-600 group-hover/link:text-white transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-gray-300 text-sm group-hover/link:text-white">
                      malkiyasaraofficial@gmail.com
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/malki-yasara"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center mt-2 gap-4 bg-white/5 p-2 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 group/link"
                  >
                    <div className="p-2.5 bg-blue-600/20 text-blue-400 rounded-lg group-hover/link:bg-blue-600 group-hover/link:text-white transition-all">
                      <FaLinkedin className="w-5 h-5" />
                    </div>
                    <span className="text-gray-300 text-sm group-hover/link:text-white">
                      Malki Yasara
                    </span>
                  </a>
                  <a
                    href="https://www.github.com/malkiyasara"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center mt-2 gap-4 bg-white/5 p-2 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 group/link"
                  >
                    <div className="p-2.5 bg-blue-600/20 text-blue-400 rounded-lg group-hover/link:bg-blue-600 group-hover/link:text-white transition-all">
                      <FaGithub className="w-5 h-5" />
                    </div>
                    <span className="text-gray-300 text-sm group-hover/link:text-white">
                      Malki Yasara
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>

        <div className="lg:col-span-7">
          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className="interactive-glow-card p-[1px] rounded-2xl bg-white/[0.06] relative overflow-hidden shadow-md"
            >
              <div className="relative z-10 bg-[#0d1224] rounded-[15px] p-8 space-y-5">
                <div>
                  <label className="block text-xs font-mono text-blue-300/70 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-blue-300/70 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-blue-300/70 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    required
                    className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-300 to-blue-500 bg hover:from-blue-500 hover:to-blue-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
