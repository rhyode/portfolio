"use client";

import { useState, useEffect } from "react";
import {
  EnvelopeIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import {
  LinkedInIcon,
  GitHubIcon,
  ExternalLinkIcon,
} from "../components/icons";
import MobileNav from "../components/MobileNav";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-dark-bg/80 backdrop-blur-sm z-50 border-b border-dark-surface">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gradient">TT</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#skills" className="nav-link">
                Skills
              </a>
              <a href="#experience" className="nav-link">
                Experience
              </a>
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center section-padding">
        <div
          className={`container-custom text-left ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="max-w-4xl">
            <h1 className="heading-primary">Tanmay Tripathi</h1>
            <p className="text-xl md:text-2xl text-dark-text/80 mb-8">
              Self-driven EEE Student & C++ Developer
            </p>
            <p className="text-lg text-dark-text/60 max-w-2xl mb-12">
              Passionate about embedded systems, cloud computing, and building
              innovative solutions. Currently pursuing B.Tech in Electrical and
              Electronics Engineering at VIT Vellore.
            </p>
            <div className="flex space-x-6 mb-12">
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
              <a
                href="/docs/Resume_Tanmay_Tripathi.pdf"
                target="_blank"
                className="btn-secondary"
              >
                <DocumentArrowDownIcon className="w-5 h-5 inline mr-2" />
                Resume
              </a>
            </div>
            <div className="flex space-x-6">
              <a
                href="mailto:tanmaytrip59@gmail.com"
                className="text-dark-text hover:text-accent transition-colors"
              >
                <EnvelopeIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/tanmay-tripathi-09b45a278/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-text hover:text-accent transition-colors"
              >
                <LinkedInIcon className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/rhyode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-text hover:text-accent transition-colors"
              >
                <GitHubIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-dark-surface/30">
        <div className="container-custom">
          <h2 className="heading-secondary">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-dark-text/80 text-lg leading-relaxed">
                I&apos;m a self-driven Electrical and Electronics Engineering
                student at VIT Vellore with a passion for software development
                and embedded systems. With hands-on experience in C++, cloud
                computing, and system-level programming, I enjoy building
                solutions that bridge hardware and software.
              </p>
              <p className="text-dark-text/80 text-lg leading-relaxed">
                Currently working as a C++ Intern at Kineton, where I develop
                software modules for AI and semiconductor systems. I have a
                strong foundation in data structures and algorithms, and
                I&apos;m continuously expanding my knowledge in emerging
                technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-dark-accent/20 text-accent rounded-full text-sm">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-dark-accent/20 text-accent rounded-full text-sm">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-dark-accent/20 text-accent rounded-full text-sm">
                  Continuous Learner
                </span>
              </div>
            </div>
            <div className="flex">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-accent to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-dark-surface flex items-center justify-center">
                  <div className="text-6xl font-bold text-gradient">TT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container-custom">
          <h2 className="heading-secondary">Skills</h2>
          <div className="space-y-8">
            {/* Languages */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl font-semibold text-dark-text mb-4">
                  Languages
                </h3>
              </div>
              <div className="text-dark-text/80">
                C/C++, Java, Python, SQL, TypeScript, JavaScript
              </div>
            </div>

            {/* Tools and Platforms */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl font-semibold text-dark-text mb-4">
                  Tools and Platforms
                </h3>
              </div>
              <div className="text-dark-text/80">
                Git, GitHub, Vercel, Linux, MATLAB, SpringBoot
              </div>
            </div>

            {/* Frameworks and Libraries */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl font-semibold text-dark-text mb-4">
                  Frameworks and Libraries
                </h3>
              </div>
              <div className="text-dark-text/80">
                Next.js, React, Tailwind CSS, SpringBoot
              </div>
            </div>

            {/* Developer Skills */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl font-semibold text-dark-text mb-4">
                  Developer Skills
                </h3>
              </div>
              <div className="text-dark-text/80">
                DSA, Shell Scripting, Embedded C, Database
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-dark-surface/30">
        <div className="container-custom">
          <h2 className="heading-secondary">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-accent">
                    C++ Intern
                  </h3>
                  <p className="text-dark-text/80">Kineton</p>
                </div>
                <span className="text-dark-text/60 text-sm">
                  May 2025 - Present
                </span>
              </div>
              <ul className="space-y-2 text-dark-text/80">
                <li className="flex items-start space-x-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Developed C++ software modules for Kineton&apos;s AI and
                    semiconductor systems, focusing on the &apos;Baseplate&apos;
                    as well as &apos;Fabric&apos; interface engine
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Collaborated with 3 developers to design modules in C++ for
                    intelligent hardware
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container-custom">
          <h2 className="heading-secondary">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-accent mb-4">
                Build Your Own Shell
              </h3>
              <p className="text-dark-text/60 text-sm mb-4">
                February 2025 - March 2025
              </p>
              <p className="text-dark-text/80 mb-4">
                Developed a custom Unix-like shell from scratch using C++ with
                core functionalities: command parsing, process handling, I/O
                redirection. Designed a REPL to handle user input with built-in
                commands (cd, exit, pwd).
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                  C++
                </span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                  Unix
                </span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                  Shell Scripting
                </span>
              </div>
              <div className="flex space-x-4">
                <span className="text-dark-text/40 text-sm">
                  Repository not available
                </span>
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-accent mb-4">
                Build Your Own Interpreter
              </h3>
              <p className="text-dark-text/60 text-sm mb-4">
                April 2025 - Present
              </p>
              <p className="text-dark-text/80 mb-4">
                Currently working on designing an interpreter using parsing
                techniques and lexical analysis. Implementing variable
                assignments, control structures, and function calls to create a
                functional programming language interpreter.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                  C++
                </span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                  Parsing
                </span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                  Lexical Analysis
                </span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/rhyode/build_interpreter_self"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  <GitHubIcon className="w-5 h-5 inline mr-2" />
                  Code
                </a>
                <span className="text-dark-text/40 text-sm">In Progress</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Activities */}
      <section className="section-padding bg-dark-surface/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-accent mb-6">
                Education
              </h2>
              <div className="card">
                <h3 className="text-xl font-semibold text-dark-text mb-2">
                  B.Tech in Electrical and Electronics Engineering
                </h3>
                <p className="text-accent mb-2">VIT Vellore</p>
                <p className="text-dark-text/60 mb-4">2022 - 2026</p>
                <p className="text-dark-text/80">
                  Relevant Coursework: Competitive Coding, Microprocessor,
                  Embedded C, AWS for Cloud Computing, Machine Learning,
                  Artificial Intelligence, DSA
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-accent mb-6">
                Activities
              </h2>
              <div className="space-y-4">
                <div className="card">
                  <h3 className="text-lg font-semibold text-dark-text mb-2">
                    Hack the Dash
                  </h3>
                  <p className="text-dark-text/80">
                    Learned and implemented Power BI for a data analysis
                    hackathon, and stood as a runner up
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-lg font-semibold text-dark-text mb-2">
                    Senior Core VIT Music Club
                  </h3>
                  <p className="text-dark-text/80">
                    An enthusiastic singer and managed a college band for 2
                    years
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-lg font-semibold text-dark-text mb-2">
                    Physical Fitness
                  </h3>
                  <p className="text-dark-text/80">
                    Regular training and maintaining active lifestyle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <h2 className="heading-secondary">Get In Touch</h2>
          <div className="max-w-2xl">
            <p className="text-dark-text/80 text-lg mb-8">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.
            </p>
            <div className="flex space-x-8">
              <a
                href="mailto:tanmaytrip59@gmail.com"
                className="flex items-center space-x-2 text-accent hover:text-accent-hover transition-colors"
              >
                <EnvelopeIcon className="w-6 h-6" />
                <span>tanmaytrip59@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/tanmay-tripathi-09b45a278/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-accent hover:text-accent-hover transition-colors"
              >
                <LinkedInIcon className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-surface py-8">
        <div className="container-custom text-center">
          <p className="text-dark-text/60">
            © 2025 Tanmay Tripathi. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
