import { Menu, X } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";
import { PortfolioSettings} from "../constants/settings";

function Header({ isMenuOpen, setIsMenuOpen, activeSection, isScrolled, scrollToSection }: {
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
    activeSection: string;
    isScrolled: boolean;
    scrollToSection: (sectionId: string) => void;
}) {
    const { portfolio } = usePortfolio();
    const { name, settings } = portfolio ?? {};
    const menus = settings?.menus || PortfolioSettings.menus;

    if (!name || menus.length === 0) {
        return null;
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
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
                        {menus.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`capitalize transition-colors duration-200 hover:text-cyan-400 ${activeSection === item ? 'text-cyan-400' : 'text-slate-300'
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
                        {menus.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`block w-full text-left capitalize transition-colors duration-200 hover:text-cyan-400 ${activeSection === item ? 'text-cyan-400' : 'text-slate-300'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}
export default Header;