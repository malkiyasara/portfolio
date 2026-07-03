import React, { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [loadingText, setLoadingText] = useState<string>(
    "Initializing Portfolio...",
  );
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const nextProgress = prev + Math.floor(Math.random() * 4) + 1;
        return nextProgress > 100 ? 100 : nextProgress;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 30) {
      setLoadingText("Initializing Portfolio...");
    } else if (progress < 60) {
      setLoadingText("Loading 3D Assets...");
    } else if (progress < 85) {
      setLoadingText("Decrypting Modules...");
    } else if (progress < 100) {
      setLoadingText("Finishing Touches...");
    } else {
      setLoadingText("Ready");
      const timeout = setTimeout(() => {
        setIsFadingOut(true);
        const completeTimeout = setTimeout(() => {
          onComplete();
        }, 600);
        return () => clearTimeout(completeTimeout);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-[#0d1117] z-50 flex flex-col items-center justify-center transition-all duration-600 ease-in-out select-none ${
        isFadingOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center max-w-md w-full px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-wider bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.2)]">
          MALKI
        </h1>
        <p className="text-gray-500 uppercase tracking-[0.25em] text-xs md:text-sm font-medium mt-3 mb-12">
          Web Developer
        </p>
        <span className="text-purple-400 font-semibold text-xs tracking-wider mb-2.5 transition-all duration-150">
          {progress}%
        </span>
        <div className="w-full h-[3px] bg-gray-800/60 rounded-full overflow-hidden relative mb-4">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-400 rounded-full transition-all duration-150 ease-out shadow-[0_0_10px_rgba(168,85,247,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-gray-400 text-xs tracking-wide min-h-[16px] transition-all duration-300">
          {loadingText}
        </p>
      </div>
    </div>
  );
};
