"use client";

import { useEffect } from "react";
import DigitalBrain from "../components/common/DigitalBrain";

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
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold glow-text">TT</div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:glow-text transition-all">
              About
            </a>
            <a href="#skills" className="hover:glow-text transition-all">
              Skills
            </a>
            <a href="#projects" className="hover:glow-text transition-all">
              Projects
            </a>
            <a href="#contact" className="hover:glow-text transition-all">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative container mx-auto px-6 pt-32 pb-20">
        {/* Synapse Line 1 */}
        <div
          className="synapse"
          style={{ top: "200px", height: "150px" }}
        ></div>

        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-[60vh] flex items-center text-center fade-in"
        >
          <div className="w-full">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
              Tanmay Tripathi
            </h1>
            <p className="text-2xl md:text-3xl mt-4 glow-text">
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
          style={{ top: "calc(60vh + 150px)", height: "200px" }}
        ></div>

        {/* About Section */}
        <section id="about" className="py-20 fade-in">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-center mb-8 glow-text">
              About Me
            </h2>
            <p className="text-center max-w-3xl mx-auto text-gray-300 leading-relaxed">
              I'm an Electrical and Electronics Engineering student at VIT
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
          style={{ top: "calc(60vh + 600px)", height: "250px" }}
        ></div>

        {/* Skills Section */}
        <section id="skills" className="py-20 fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 glow-text">
            My Skillset
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 glow-text">Languages</h3>
              <p className="text-gray-300">
                C++, Java, Python, SQL, TypeScript
              </p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 glow-text">
                Frameworks & Libraries
              </h3>
              <p className="text-gray-300">Next.js, React, Tailwind CSS</p>
            </div>
          </div>
        </section>

        {/* Synapse Line 4 */}
        <div
          className="synapse"
          style={{ top: "calc(60vh + 1100px)", height: "200px" }}
        ></div>

        {/* Projects Section */}
        <section id="projects" className="py-20 fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 glow-text">
            Featured Projects
          </h2>
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-2 glow-text">
              Build Your Own Interpreter
            </h3>
            <p className="text-gray-300">
              Currently designing an interpreter using parsing techniques and
              lexical analysis to create a functional programming language
              interpreter.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center fade-in">
          <h2 className="text-4xl font-bold text-center mb-8 glow-text">
            Get In Touch
          </h2>
          <p className="max-w-xl mx-auto text-gray-300 mb-8">
            I'm always open to discussing new opportunities or interesting
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
