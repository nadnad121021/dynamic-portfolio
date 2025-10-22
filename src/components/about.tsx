import { User } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

function About() {
    const { portfolio } = usePortfolio();
    const { aboutMe, skills } = portfolio ?? {};

    if (!aboutMe || !skills || skills.length === 0) {
        return null;
    }

    const { greetings, philosophies } = aboutMe;

    return (
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
    );
}
export default About;