import  { useState, useEffect } from 'react';
import  { Moon, Sun, Github, Globe, User, Code, Award, Mail, Book, Terminal, Settings, BookUser} from 'lucide-react'; 

export default function App() {
   const [darkMode, setDarkMode] = useState(true); 

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <nav className={`fixed top-0 w-full z-50 ${darkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-md border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className={`font-bold text-xl ${darkMode ? 'text-white' : 'bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent'}`}>
            Tanmay
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className={`hover:${darkMode ? 'text-gray-300' : 'text-cyan-600'} transition-colors`}>About</a>
            <a href="#experience" className={`hover:${darkMode ? 'text-gray-300' : 'text-cyan-600'} transition-colors`}>Experience</a>
            <a href="#projects" className={`hover:${darkMode ? 'text-gray-300' : 'text-cyan-600'} transition-colors`}>Projects</a>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section className="min-h-screen flex items-center px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-lg mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Hey, I am</p>
              <h1 className={`text-6xl md:text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent'}`}>
                Tanmay Tripathi,
              </h1>
              <p className={`text-xl mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                EEE BTech undergrad, catching feelings for Software Development and Generative AI (future crush - Agentic AI)
              </p>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-6 py-3 ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white hover:from-cyan-700 hover:to-cyan-600'} rounded-lg transition-colors`}>
                  <Github size={20} />
                  GitHub
                </a>
                <a href="https://tan-mused.vercel.app/#" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-6 py-3 border ${darkMode ? 'border-gray-700 hover:bg-gray-900' : 'border-cyan-600 hover:bg-cyan-50'} rounded-lg transition-colors`}>
                  <Globe size={20} />
                  Things I write
                </a>
                <a href="https://drive.google.com/file/d/17QsZEd8N-5VCP8ci7QAYslM-OugO4sV8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-6 py-3 border ${darkMode ? 'border-gray-700 hover:bg-gray-900' : 'border-cyan-600 hover:bg-cyan-50'} rounded-lg transition-colors`}>
                  <BookUser size={20} />
                  Resume
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1698945298361-365595d400eb?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkYXJrJTIwbWluaW1hbGlzdCUyMGNvZGluZyUyMHNldHVwfGVufDB8fHx8MTc1NzU5OTg1N3ww&ixlib=rb-4.1.0&fit=fillmax&h=600&w=1200" 
                alt="Professional developer workspace" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section id="about" className={`py-20 px-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent'}`}>
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Education</h3>
                <div className={`${darkMode ? 'bg-black' : 'bg-white'} p-6 rounded-xl shadow-lg`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>BTech in Electrical and Electronics Engineering</h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-cyan-600'}`}>VIT Vellore • 2022-2026</p>
                </div>
              </div>
              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Skills</h3>
                <div className={`${darkMode ? 'bg-black' : 'bg-white'} p-6 rounded-xl shadow-lg`}>
                  <div className="space-y-3">
                    <div>
                      <h5 className={`font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Languages</h5>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>C/C++, Java, Python, SQL, TypeScript, JavaScript</p>
                    </div>
                    <div>
                      <h5 className={`font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Tools & Platforms</h5>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Git, GitHub, Vercel, Linux, MATLAB</p>
                    </div>
                    <div>
                      <h5 className={`font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Frameworks</h5>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Next.js, React, Tailwind CSS, Java Collections</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent'}`}>
              Experience
            </h2>
            <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} p-8 rounded-xl shadow-lg`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 ${darkMode ? 'bg-black' : 'bg-cyan-100'} rounded-lg`}>
                  <Code className={darkMode ? 'text-white' : 'text-cyan-600'} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>C++ Intern</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-cyan-600'} mb-4`}>Kineton • June 2025 - August 2025</p>
                  <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>• Engineered a robust, multi-threaded data validation engine in Python, ensuring data integrity</li>
                    <li>• Identified and refactored bottlenecks in the company's simulation pipeline, optimizing low-level memory management and algorithm complexity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className={`py-20 px-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent'}`}>
              Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Int-rest - the intriguing index of your eerie books",
                  description: "A place for kids fed with all the boards school books. Select a book, select a chapter, get answers to all your questions, get podcasts and gamify learning.",
                  icon: Book
                },
                {
                  title: "Unix-like Shell",
                  description: "Developed a custom Unix-like shell from scratch using C++, implementing core functionalities and a REPL to handle user input with built-in commands.",
                  icon: Terminal
                },
                {
                  title: "Marketing Campaign Impact Simulator",
                  description: "Developed using Python (Google Colab), employing regression modeling and optimization to predict ROI from ad spend.",
                  icon: Award
                },
                {
                  title: "IoT-Based DAC System",
                  description: "Academic project to automate the process of taking manual readings using microcontroller and python open source models.",
                  icon: Settings
                }
              ].map((project, index) => (
                <div key={index} className={`${darkMode ? 'bg-black' : 'bg-white'} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 ${darkMode ? 'bg-gray-800' : 'bg-cyan-100'} rounded-lg`}>
                      <project.icon className={darkMode ? 'text-white' : 'text-cyan-600'} size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {project.title}
                      </h3>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className={`py-12 px-6 border-t ${darkMode ? 'border-gray-800 bg-black' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Tanmay Tripathi. Built with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
}
 