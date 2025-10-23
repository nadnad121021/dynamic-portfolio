import { Download } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

function DownloadResume({ isScrolled }: { isScrolled: boolean }) {
    const { portfolio } = usePortfolio();
    const { resumeLink, settings } = portfolio ?? {};
    const { enableDownloadResume } = settings || {};

    if (!enableDownloadResume || !resumeLink) {
        return null;
    }
    
    return (
        <a
          href={resumeLink}
          // download
          className={`hidden md:block fixed bottom-6 right-6 z-50 group transition-all duration-300 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
            }`}
          aria-label="Download Resume"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
              <Download size={20} className="animate-bounce" />
              <span className="font-medium hidden sm:inline">Download Resume</span>
            </div>
          </div>
        </a>
    );
}
export default DownloadResume;