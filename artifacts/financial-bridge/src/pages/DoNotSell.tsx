import SmoothWrapper from '@/components/SmoothWrapper';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { useState } from 'react';
import { Check } from 'lucide-react';

export default function DoNotSell() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <SmoothWrapper>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto glass-card border border-white/10 p-8 md:p-12 shadow-[0_0_60px_rgba(190,242,100,0.08)]">
            <Link href="/" className="inline-block text-accent font-bold uppercase tracking-wider mb-8 hover:text-white transition-colors">
              ← Back to Home
            </Link>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase font-display mb-8 leading-tight">Do Not Sell My Personal Information</h1>
            
            <div className="prose prose-invert prose-p:text-muted-foreground prose-headings:text-white prose-headings:font-display prose-headings:uppercase max-w-none mb-12">
              <p>
                Under the California Consumer Privacy Act (CCPA), California residents have the right to opt-out of the "sale" of their personal information.
              </p>
              
              <h2>What Data We Share</h2>
              <p>
                While WealthQuest 2026 does not sell your personal data in the traditional sense, we may share your assessment information with third-party financial partners to connect you with grants, schemes, and programs you qualify for. This sharing may qualify as a "sale" under the broad definition of the CCPA.
              </p>

              <h2>Exercise Your Right</h2>
              <p>
                If you wish to opt-out of having your data shared with third-party partners for marketing or matching purposes, please submit your email address below. Once processed, we will ensure your data is excluded from any future sharing networks.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full p-6 text-xl font-bold bg-transparent text-white border glass-card border-white/10 focus:border-accent outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="whitespace-nowrap p-6 bg-accent text-accent-foreground font-bold text-xl border border-accent hover:bg-transparent hover:text-accent transition-colors glow-lime hover:translate-y-1 hover:translate-x-1 hover:shadow-none uppercase min-h-[44px]"
                >
                  Opt Out Now
                </button>
              </form>
            ) : (
              <div className="bg-accent/20 border border-accent p-8 flex items-center text-accent font-bold text-xl animate-in fade-in">
                <Check className="w-8 h-8 mr-4 animate-icon-glow" />
                Your request has been received and is being processed.
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </SmoothWrapper>
  );
}
