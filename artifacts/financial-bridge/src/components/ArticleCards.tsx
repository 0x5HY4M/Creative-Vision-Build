import { Clock } from 'lucide-react';

const articles = [
  {
    title: "How Solar Grants Are Changing UK Homeownership",
    readTime: "7 min read",
    color: "bg-primary text-primary-foreground"
  },
  {
    title: "The Hidden Government Schemes Most Families Miss",
    readTime: "5 min read",
    color: "bg-accent text-accent-foreground"
  },
  {
    title: "Building a £500K+ Portfolio on an Average Salary",
    readTime: "9 min read",
    color: "bg-white text-black"
  }
];

export default function ArticleCards() {
  return (
    <section className="py-24 bg-background border-y-4 border-muted" data-testid="article-cards">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase font-display max-w-2xl leading-tight">
            Financial <span className="text-accent">Intelligence</span>
          </h2>
          <button className="hidden md:block font-bold text-primary hover:text-white uppercase tracking-wider transition-colors border-b-2 border-primary hover:border-white pb-1">
            View All Resources
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div 
              key={i}
              className="group cursor-pointer relative bg-card border-4 border-black p-8 transition-all hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_hsl(var(--primary))] flex flex-col h-full min-h-[320px]"
              data-testid={`article-card-${i}`}
            >
              {/* Geometric Accent */}
              <div className={`w-16 h-16 border-4 border-black mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${article.color} flex items-center justify-center`}>
                <span className="font-black text-xl">{i + 1}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6 uppercase leading-snug group-hover:text-primary transition-colors mt-auto">
                {article.title}
              </h3>
              
              <div className="flex items-center text-muted-foreground font-medium text-sm mt-auto pt-6 border-t-2 border-border">
                <Clock className="w-4 h-4 mr-2" />
                {article.readTime}
              </div>
            </div>
          ))}
        </div>
        
        <button className="md:hidden mt-12 w-full font-bold text-primary border-4 border-primary py-4 text-center hover:bg-primary hover:text-primary-foreground transition-colors uppercase">
          View All Resources
        </button>
      </div>
    </section>
  );
}
