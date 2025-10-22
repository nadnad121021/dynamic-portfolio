import { Briefcase } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

function Experience() {
    const { portfolio } = usePortfolio();
    const { experiences } = portfolio ?? {};

    if (!experiences || experiences.length === 0) {
        return null;
    }

    return (
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
                                        <p className="text-xl text-slate-300 mb-1">
                                            <a
                                                href={exp.company_url}
                                                target="_blank"
                                                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                                            >
                                                {exp.company}
                                            </a>
                                        </p>
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
    );
}
export default Experience;