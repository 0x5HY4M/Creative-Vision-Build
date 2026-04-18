import { Clock } from 'lucide-react';

const articles = [
  {
    title: "How Solar Grants Are Changing American Homeownership",
    readTime: "7 min read",
  },
  {
    title: "The Hidden Government Programs Most Families Miss",
    readTime: "5 min read",
  },
  {
    title: "Building a $500K+ Portfolio on an Average Salary",
    readTime: "9 min read",
  }
];

export default function ArticleCards() {
  return (
    <section className="py-24 bg-transparent border-t border-white/10" data-testid="article-cards">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm block mb-2">Knowledge Base</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase font-display max-w-2xl leading-tight">
              Financial <span className="text-accent">Intelligence</span>
            </h2>
          </div>
          <button className="hidden md:block font-bold text-accent hover:text-white uppercase tracking-wider transition-colors border-b border-accent hover:border-white pb-1 min-h-[44px]">
            View All Resources
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div
              key={i}
              className="group cursor-pointer bg-white/[0.02] backdrop-blur-xl border border-white/10 p-8 transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(190,242,100,0.15)] flex flex-col min-h-[280px] will-change-transform translate-z-0"
              data-testid={`article-card-${i}`}
            >
              <div className="w-14 h-14 bg-white/[0.02] border border-white/10 mb-8 flex items-center justify-center">
                <span className="font-black text-xl text-accent">{i + 1}</span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 uppercase leading-snug group-hover:text-accent transition-colors mt-auto">
                {article.title}
              </h3>

              <div className="flex items-center text-muted-foreground font-medium text-sm mt-auto pt-6 border-t border-white/10">
                <Clock className="w-4 h-4 mr-2" />
                {article.readTime}
              </div>
            </div>
          ))}
        </div>

        <button className="md:hidden mt-12 w-full font-bold text-accent border border-accent/50 py-4 text-center hover:bg-accent/10 transition-colors uppercase min-h-[44px] bg-white/[0.02]">
          View All Resources
        </button>
      </div>
    </section>
  );
}
