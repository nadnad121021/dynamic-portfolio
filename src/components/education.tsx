import { GraduationCap } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

function Education() {
    const { portfolio } = usePortfolio();
    const { education } = portfolio ?? {};

    if (!education || education.length === 0) {
        return null;
    }

    return (
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
    );
}
export default Education;