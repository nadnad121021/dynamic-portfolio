import { Code2, ExternalLink } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

function Project() {
    const { portfolio } = usePortfolio();
    const { projects } = portfolio ?? {};

    if (!projects || projects.length === 0) {
        return null;
    }

    return (
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
                                <p className="text-slate-400 mb-3"><b>Role:</b> {project.role}</p>
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
                                    <p className="text-slate-400 mb-3">{project.duration}</p>

                                    {/* <a
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
                      </a> */}
                                </div>
                                <div className="flex gap-4 mt-2">
                                    {project.hasWebsite && (
                                        <a
                                            href={project.website}
                                            target="_blank"
                                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                                        >
                                            <ExternalLink size={18} />
                                            <span>Visit Website</span>
                                        </a>
                                    )}
                                    {project.playstoreLink && (
                                        <a
                                            href={project.playstoreLink}
                                            target="_blank"
                                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                                        >
                                            <ExternalLink size={18} />
                                            <span>Visit Play Store</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Project;