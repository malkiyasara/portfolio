import React, { useRef, useState } from "react";
import { Mail, Send } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { sendEmail } from "../../services/email";
import { toastSuccess, toastError } from "../../utils/toast";
import type { Variants } from "framer-motion";
import Lottie from "lottie-react";
import paperPlaneAnimationData from "../../assets/Paper Plane.json?raw";

const paperPlaneAnimation = JSON.parse(paperPlaneAnimationData);

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 0 },
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

type FormData = {
  name: string;
  email: string;
  message: string;
};

type Errors = {
  name: string;
  email: string;
  message: string;
};

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const validate = () => {
    const newErrors: Errors = {
      name: "",
      email: "",
      message: "",
    };

    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Minimum 3 characters required";
      valid = false;
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Minimum 10 characters required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toastError("Please fix the errors in the form");
      return;
    }

    try {
      setLoading(true);

      await sendEmail(formData.name, formData.email, formData.message);

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 2200);

      toastSuccess("Message sent successfully");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setErrors({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toastError("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  const LottieComponent = (Lottie as any).default || Lottie;

  return (
    <motion.section
      id="contact"
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="relative z-10 w-full max-w-6xl mx-auto px-10 md:px-16 pt-8 pb-24 border-t border-white/5 scroll-mt-15"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="absolute top-1/4 right-1/4 -z-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* TITLE */}
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
        {/* LEFT CARD */}
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

        {/* RIGHT FORM */}
        <div className="lg:col-span-7">
          <motion.div variants={itemVariants} className="relative">
            <form
              onSubmit={handleSubmit}
              className="interactive-glow-card p-[1px] rounded-2xl bg-white/[0.06] relative overflow-hidden shadow-md"
            >
              <div className="relative z-10 bg-[#0d1224] rounded-[15px] p-8 space-y-5">
                {/* NAME */}
                <div>
                  <label className="block text-xs font-mono text-blue-300/70 uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-white/5 text-white border rounded-xl px-4 py-3 text-sm transition-all focus:outline-none ${
                      errors.name
                        ? "border-red-500"
                        : "border-white/10 focus:border-blue-500"
                    }`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-2">{errors.name}</p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-xs font-mono text-blue-300/70 uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-white/5 text-white border rounded-xl px-4 py-3 text-sm transition-all focus:outline-none ${
                      errors.email
                        ? "border-red-500"
                        : "border-white/10 focus:border-blue-500"
                    }`}
                    placeholder="Your Email"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-2">{errors.email}</p>
                  )}
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-xs font-mono text-blue-300/70 uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-white/5 text-white border rounded-xl px-4 py-3 text-sm transition-all focus:outline-none resize-none ${
                      errors.message
                        ? "border-red-500"
                        : "border-white/10 focus:border-blue-500"
                    }`}
                    placeholder="Write your message..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-2">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading || success}
                  className={`relative w-full rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                    success
                      ? "bg-transparent h-[48px] shadow-none"
                      : "bg-gradient-to-r from-blue-300 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  }`}
                >
                  {success ? null : loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          opacity="0.25"
                        />
                        <path
                          d="M4 12a8 8 0 018-8"
                          stroke="currentColor"
                          strokeWidth="4"
                          opacity="0.75"
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

            {success && (
              <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center pointer-events-none z-[100]">
                <LottieComponent
                  animationData={paperPlaneAnimation}
                  loop={false}
                  autoplay={true}
                  style={{ width: 250, height: 250 }}
                  className="translate-y-6"
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
