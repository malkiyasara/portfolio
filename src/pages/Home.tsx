import React, { useState } from "react";
import { Starfield } from "../components/Starfield/Starfield";
import { MagicStars } from "../components/Starfield/MagicStars";
import { Navbar } from "../components/Navbar/Navbar";
import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import { Skills } from "../components/Skills/Skills";
import { Projects } from "../components/Projects/Projects";
import { Contact } from "../components/Contact/Contact";
import { Preloader } from "../components/Preloader/Preloader";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDecrypted, setIsDecrypted] = useState<boolean>(false);

  return (
    <div
      className={`relative min-h-screen w-full overflow-x-hidden overflow-y-auto selection:bg-purple-500 selection:text-white scroll-smooth transition-colors duration-500 ${
        isDecrypted ? "bg-transparent" : "bg-[#03030c]"
      }`}
    >
      {!isLoading && <MagicStars />}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <Starfield isDecrypted={isDecrypted} />
      <div
        className={
          isLoading
            ? "opacity-0 pointer-events-none"
            : "opacity-100 transition-opacity duration-700 ease-out"
        }
      >
        <Navbar />
        <main className="relative z-10">
          <section id="home" className="pt-20 lg:pt-24">
            <Hero isDecrypted={isDecrypted} setIsDecrypted={setIsDecrypted} />
          </section>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer className="relative z-10 text-center py-8 text-xs font-mono text-gray-600 border-t border-white/5">
          &copy; {new Date().getFullYear()} Malki Yasara. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Home;
