import { MessageSquareQuote } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

function Review() {
    const { portfolio } = usePortfolio();
    const { reviews  } = portfolio ?? {};

    if (!reviews || reviews.length === 0) {
        return null;
    }
    
    return (
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
    );
}
export default Review;