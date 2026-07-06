import React, { useState, useEffect } from "react";
import { ArrowDown, Lock, Unlock, Bot, Code2 } from "lucide-react";
import encryptionBgVideo from "../../assets/encryption-bg.webm";

interface HeroProps {
  isDecrypted: boolean;
  setIsDecrypted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Hero: React.FC<HeroProps> = ({ isDecrypted, setIsDecrypted }) => {
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [isLocking, setIsLocking] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const roles = [
    "Full-Stack Developer",
    "Software Engineer",
    "UI/UX Innovator",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 475);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleUnlock = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (isSpinning) return;

    setIsSpinning(true);
    setTimeout(() => {
      setIsDecrypted(true);
      setIsSpinning(false);
    }, 250);
  };

  const handleLock = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (isLocking) return;

    setIsLocking(true);
    setTimeout(() => {
      setIsDecrypted(false);
      setIsLocking(false);
    }, 250);
  };

  return (
    <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-16 min-h-[75vh] flex items-center pt-2.5 pb-12 overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full overflow-visible">
        <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-500/5 border border-blue-400/10 text-blue-300 text-xs font-semibold tracking-wide mb-6 backdrop-blur-sm selection:bg-transparent">
            <Code2 className="w-3.5 h-3.5 animate-[spin_4s_linear_infinite]" />{" "}
            Open To Innovation
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white tracking-tight mb-5 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(96,165,250,0.4)]">
              Malki
            </span>{" "}
            Yasara
          </h1>

          <div className="h-8 mb-4 overflow-hidden relative w-full flex justify-center lg:justify-start">
            <div
              className="flex flex-col transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentRoleIndex * 32}px)` }}
            >
              {roles.map((role, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center min-h-[2rem] text-xl md:text-2xl font-bold font-mono bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent break-words"
                >
                  &gt; {role}
                </span>
              ))}
            </div>
          </div>

          <h2 className="text-lg md:text-xl font-semibold text-blue-100 tracking-wide mb-3">
            Undergraduate Software Engineer
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-0 max-w-lg">
            Bridging the gap between complex ideas and elegant digital solutions
            with clean code, modern stacks, and user-first design.
          </p>
        </div>

        <div className="lg:col-span-7 hidden lg:flex items-center justify-center w-full z-30 relative overflow-visible">
          <div className="w-full max-w-[640px] h-[360px] sm:h-[400px] lg:h-[480px] relative overflow-visible flex items-center justify-center mx-auto lg:mx-0 lg:translate-x-6 transition-all duration-500 p-0 bg-transparent border-transparent shadow-none">
            {!isDecrypted ? (
              <div className="absolute inset-0 z-40 flex flex-col items-center justify-center rounded-2xl overflow-hidden bg-transparent">
                <video
                  src={encryptionBgVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none mix-blend-screen opacity-90 bg-transparent"
                />

                <button
                  onPointerDown={handleUnlock}
                  disabled={isSpinning}
                  className={`group relative z-50 p-3 bg-blue-500/20 text-blue-400 hover:text-blue-300 rounded-full border border-blue-400/50 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] cursor-pointer select-none transition-all duration-200 ${
                    isSpinning
                      ? "animate-[spin_0.25s_linear_infinite] scale-50 opacity-0"
                      : "animate-[autoVibrateOnly_0.3s_linear_infinite]"
                  }`}
                >
                  {isSpinning ? (
                    <Bot className="w-6 h-6" />
                  ) : (
                    <>
                      <Lock className="w-6 h-6 block group-hover:hidden" />
                      <Unlock className="w-6 h-6 hidden group-hover:block" />
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="w-full h-full relative overflow-visible rounded-2xl bg-transparent touch-none translate-x-12 xs:translate-x-16 lg:translate-x-0 scale-85 sm:scale-100 transition-all duration-500 [animation:fadeIn_0.5s_ease-out_forwards]">
                <iframe
                  src={
                    isMobile
                      ? "https://my.spline.design/genkubgreetingrobot-LzHNF685w65GQSXmOdo5b84o/"
                      : "https://my.spline.design/genkubgreetingrobot-lxcUEftjNn9o0FlSDkffs3d5/"
                  }
                  frameBorder="0"
                  className="w-full h-[calc(100%+60px)] select-none pointer-events-auto bg-transparent absolute top-0 left-0 z-10"
                  style={{ clipPath: "inset(0 0 60px 0)" }}
                  title="Spline 3D Greeting Robot"
                />
                <button
                  onPointerDown={handleLock}
                  disabled={isLocking}
                  className={`group absolute bottom-4 right-14 sm:bottom-8 sm:right-12 z-20 p-1.5 bg-blue-500/10 hover:bg-blue-500/30 text-blue-400 hover:text-blue-300 rounded-full border border-blue-500/30 hover:border-blue-400 backdrop-blur-sm shadow-[0_0_12px_rgba(59,130,246,0.15)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] cursor-pointer select-none transition-all duration-200 ${
                    isLocking
                      ? "animate-[spin_0.25s_linear_infinite] scale-50 opacity-0"
                      : "hover:scale-110 active:scale-95"
                  }`}
                  title="Lock View"
                >
                  {isLocking ? (
                    <Bot className="w-4 h-4" />
                  ) : (
                    <>
                      <Unlock className="w-4 h-4 block group-hover:hidden" />
                      <Lock className="w-4 h-4 hidden group-hover:block" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="absolute bottom-10 lg:bottom-15 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors duration-300 group cursor-pointer hidden sm:flex z-50"
      >
        <span className="text-xs font-medium uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
          Next
        </span>
        <div className="relative flex items-center justify-center p-2 rounded-full border border-gray-700/50 group-hover:border-blue-500/50 bg-black/20 backdrop-blur-sm animate-bounce">
          <ArrowDown className="w-5 h-5" />
        </div>
      </button>

      <style>{`
        @keyframes autoVibrateOnly {
          0%, 100% { transform: translate(0, 0); }
          20% { transform: translate(-1.2px, 0.6px); }
          40% { transform: translate(-1.2px, -0.6px); }
          60% { transform: translate(1.2px, 0.6px); }
          80% { transform: translate(1.2px, -0.6px); }
        }
      `}</style>
    </div>
  );
};
