import { FileText, Linkedin, Mail } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

function Contact() {
    const { portfolio } = usePortfolio();
    const { socialMediaLinks } = portfolio ?? {};
    const { github, linkedin, email } = socialMediaLinks ?? {};

    if (!github && !linkedin && !email) {
        return null;
    }

    return (
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
    );
}
export default Contact;