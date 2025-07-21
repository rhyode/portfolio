"use client";

import { useEffect } from "react";
import DigitalBrain from "../components/common/DigitalBrain";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="overflow-y-scroll">
      <DigitalBrain />

      {/* Sticky Header */}
      <header className="fixed top-0 w-full z-50 glass-card">
        {/* <nav className="container mx-auto px-6 py-4 flex justify-between items-center"> */}
        <div className="text-xl flex left font-bold">Tanmay Tripathi</div>
        {/*<div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:accent-text transition-all">
              //About
               </a>
            <a href="#skills" className="hover:accent-text transition-all">
              Skills
            </a>
            <a href="#internships" className="hover:accent-text transition-all">
              Internships
            </a>
            <a href="#contact" className="hover:accent-text transition-all">
              Contact
            </a>
          </div>*/}
        {/* ThemeToggle component is now uncommented */}
        {/*<ThemeToggle />*/}
        {/*</nav>*/}
      </header>

      {/* Main Content */}
      <main className="relative container mx-auto px-6 pt-48 pb-20">
        {/* Synapse Line 1 */}
        <div
          className="synapse"
          style={{ top: "150px", height: "100px" }}
        ></div>

        {/* Hero Section */}
        <section id="hero" className="min-h-[30vh] fade-in flex items-center">
          <div className="w-full text-left">
            <p className="text-2xl md:text-3xl glow-text">
              Self-driven Developer & AI Enthusiast
            </p>
            <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-400">
              A passionate Electrical and Electronics Engineering student at VIT
              Vellore, specializing in C++, embedded systems, and building
              intelligent solutions that bridge hardware and software.
            </p>
          </div>
        </section>

        {/* Synapse Line 2 */}
        <div
          className="synapse"
          style={{ top: "calc(60vh + 150px)", height: "100px" }}
        ></div>

        {/* About Section */}
        <section id="about" className="py-20 fade-in">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-center mb-8 glow-text">
              About Me
            </h2>
            <p className="text-center max-w-3xl mx-auto text-gray-300 leading-relaxed">
              I&apos;m an Electrical and Electronics Engineering student at VIT
              Vellore with a deep passion for software development and embedded
              systems. With hands-on experience in C++, cloud computing, and
              system-level programming, I enjoy building robust solutions that
              solve real-world problems.
            </p>
          </div>
        </section>

        {/* Synapse Line 3 */}
        <div
          className="synapse"
          style={{ top: "calc(60vh + 600px)", height: "120px" }}
        ></div>

        {/* Skills Section */}
        <section id="skills" className="py-20 fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 glow-text">
            Core Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 glow-text">Languages</h3>
              <p className="text-gray-300">C++, Java, Python, SQL</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 glow-text">Frameworks</h3>
              <p className="text-gray-300">Next.js, React, Tailwind</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 glow-text">Platforms</h3>
              <p className="text-gray-300">Git, GitHub, Vercel, Linux</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 glow-text">Skills</h3>
              <p className="text-gray-300">DSA, Embedded C</p>
            </div>
          </div>
        </section>

        {/* Synapse Line 4 */}
        <div
          className="synapse"
          style={{ top: "calc(60vh + 1100px)", height: "100px" }}
        ></div>

        {/* Internships Section */}
        <section id="internships" className="py-20 fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 glow-text">
            Internships
          </h2>
          <div className="glass-card rounded-2xl p-8 md:p-12 text-left">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="flex center text-2xl font-bold glow-text">
                C++ Intern
              </h3>
              <p className="text-sm text-gray-400">May 2025 - present</p>
            </div>
            <a
              href="https://kineton.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold hover:text-teal-400 transition-colors"
            >
              Kineton
            </a>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
              <li>
                Developed C++ software modules for Kineton’s AI and
                semiconductor systems, focusing on the ’Baseplate’ as well as
                ’Fabric’ interface engine.
              </li>
              <li>
                Collaborated with 3 developers to design modules in C++ for
                intelligent hardware.
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center fade-in">
          <h2 className="text-4xl font-bold text-center mb-8 glow-text">
            Get In Touch
          </h2>
          <p className="max-w-xl mx-auto text-gray-300 mb-8">
            I&apos;m always open to discussing new opportunities or interesting
            projects. Feel free to reach out!
          </p>
          <a
            href="mailto:tanmaytrip59@gmail.com"
            className="inline-block bg-teal-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-600 transition-colors"
          >
            Contact Me
          </a>
        </section>
      </main>
    </div>
  );
}
