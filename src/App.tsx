import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin,
  Mail, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  User, 
  FileText, 
  GraduationCap, 
  MessageSquareQuote
} from 'lucide-react';
import { usePortfolio } from './context/PortfolioContext';

function App() {
  const { portfolio } = usePortfolio();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'experience', 'education', 'projects', 'reviews', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  if (!portfolio) {
    return <div>Loading...</div>;
  }

  const { name, title, description, aboutMe, skills, education, projects, experiences, reviews, socialMediaLinks } = portfolio;
  const { greetings, philosophies, isOpenToWork } = aboutMe ?? {};
  const { github, linkedin, email} = socialMediaLinks;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              {name}
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'experience', 'education', 'projects', 'reviews', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-cyan-400 ${
                    activeSection === item ? 'text-cyan-400' : 'text-slate-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
              {['home', 'about', 'experience', 'education', 'projects', 'reviews', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left capitalize transition-colors duration-200 hover:text-cyan-400 ${
                    activeSection === item ? 'text-cyan-400' : 'text-slate-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main>
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="container mx-auto text-center">
            {isOpenToWork && (
              <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                <span className="text-cyan-400 text-sm font-medium">Available for new opportunities</span>
              </div>
            )}

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fadeIn">
              {title}
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto animate-fadeIn">
              {description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fadeIn">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-slate-600 rounded-lg font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 animate-fadeIn">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${email}`}
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-12">
              <User className="text-cyan-400" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  {greetings}
                </p>
                

                <div className="space-y-6">
                  {philosophies.map((philosophy, index) => (
                    <div key={index} className="border-l-4 border-cyan-400 pl-6">
                      <h3 className="text-xl font-bold text-cyan-400 mb-2">{philosophy.title}</h3>
                      <p className="text-slate-300 leading-relaxed">
                        {philosophy.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-cyan-500/30 transition-colors duration-300">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-4">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700 hover:border-cyan-500/50 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 px-6 bg-slate-900/30">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="text-cyan-400" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex gap-4 items-start">
                      <img
                         src={`/experience/${exp.logo}`}
                        alt={`${exp.company} logo`}
                        className="w-16 h-16 object-contain rounded-lg bg-white p-2"
                      />
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-400 mb-2">{exp.title}</h3>
                        <p className="text-xl text-slate-300 mb-1">{exp.company}</p>
                        <p className="text-slate-400">{exp.period}</p>
                      </div>
                    </div>
                    <span className="text-slate-400 font-medium">{exp.period}</span>
                  </div>

                  <p className="text-slate-300 mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-slate-400">
                        <span className="text-cyan-400 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="text-cyan-400" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex gap-4 items-start">
                      <img
                         src={`/education/${edu.logo}`}
                        alt={`${edu.school} logo`}
                        className="w-16 h-16 object-contain rounded-lg bg-white p-2"
                      />
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-400 mb-2">{edu.degree}</h3>
                        <p className="text-xl text-slate-300 mb-1">{edu.school}</p>
                        <p className="text-slate-400">{edu.location}</p>
                      </div>
                    </div>
                    <span className="text-slate-400 font-medium mt-2 md:mt-0">{edu.period}</span>
                  </div>

                  <p className="text-slate-300 mb-4">{edu.description}</p>

                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-slate-400">
                        <span className="text-cyan-400 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-6 bg-slate-900/30">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-12">
              <Code2 className="text-cyan-400" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-800 rounded-lg overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-2"
                >
                  <div className="h-48 overflow-hidden bg-slate-800">
                    <img
                      src={`/projects/${project.logo}`}
                      alt={`${project.title} thumbnail`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-cyan-400">{project.title}</h3>
                    <p className="text-slate-400 mb-3">Role: {project.role}</p>
                    <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors duration-200"
                      >
                        <Github size={18} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-12">
              <MessageSquareQuote className="text-cyan-400" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold">What People Say</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={'/reviews/' + review.image}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-cyan-500/30"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-cyan-400">{review.name}</h3>
                      <p className="text-sm text-slate-400">{review.role}</p>
                      <p className="text-sm text-slate-500">{review.company}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed italic">"{review.review}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <FileText className="text-cyan-400" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
            </div>

            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities, collaborations, or
              just having a chat about technology. Feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={`mailto:${email}`}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                <span>Send Email</span>
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border border-slate-600 rounded-lg font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Linkedin size={20} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-800">
              <p className="text-slate-500">
                © 2025 Dan's Portfolio. Built with React, TypeScript, and Tailwind CSS.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
