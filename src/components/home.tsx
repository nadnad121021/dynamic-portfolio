import { Github, Linkedin, Mail } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

function Home({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) {
    const { portfolio } = usePortfolio();
    const { title, description, aboutMe, socialMediaLinks } = portfolio ?? {};
    const { isOpenToWork } = aboutMe ?? {};
    const { github, linkedin, email } = socialMediaLinks ?? {};

    if (!portfolio) {
        return null;
    }

    return (
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
                        onClick={() => scrollToSection('experience')}
                        className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
                    >
                        View My Experience
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
    );
}
export default Home;