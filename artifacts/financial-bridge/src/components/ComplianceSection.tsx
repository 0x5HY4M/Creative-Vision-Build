import { Lock, Fingerprint, MessageCircle, ShieldCheck } from 'lucide-react';

export default function ComplianceSection() {
  return (
    <section className="py-20 bg-transparent border-t border-white/10" data-testid="compliance-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-accent font-bold tracking-widest uppercase text-sm">Trust & Safety</span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-white uppercase font-display leading-tight mt-2">
            Your Protection Is Our Priority
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 shadow-[0_0_20px_rgba(190,242,100,0.08)] flex flex-col hover:border-accent/20 transition-colors duration-300 will-change-transform translate-z-0" data-testid="compliance-card-0">
            <Lock className="w-12 h-12 text-accent mb-4 animate-icon-glow" />
            <h3 className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-3 uppercase leading-tight">256-bit SSL</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your data is protected with bank-level SSL encryption. All information is transmitted securely and never stored without consent.
            </p>
          </div>

          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 shadow-[0_0_20px_rgba(190,242,100,0.08)] flex flex-col hover:border-accent/20 transition-colors duration-300 will-change-transform translate-z-0" data-testid="compliance-card-1">
            <Fingerprint className="w-12 h-12 text-accent mb-4 animate-icon-glow" />
            <h3 className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-3 uppercase leading-tight">CCPA Ready</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We comply fully with the California Consumer Privacy Act. You have the right to know, delete, and opt-out of data sale at any time.
            </p>
          </div>

          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 shadow-[0_0_20px_rgba(190,242,100,0.08)] flex flex-col hover:border-accent/20 transition-colors duration-300 will-change-transform translate-z-0" data-testid="compliance-card-2">
            <MessageCircle className="w-12 h-12 text-accent mb-4 animate-icon-glow" />
            <h3 className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-3 uppercase leading-tight">TCPA Compliant</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              All communications are TCPA compliant. You will never receive unsolicited calls or texts. Consent is always explicit and recorded.
            </p>
          </div>

          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 shadow-[0_0_20px_rgba(190,242,100,0.08)] flex flex-col hover:border-accent/20 transition-colors duration-300 will-change-transform translate-z-0" data-testid="compliance-card-3">
            <ShieldCheck className="w-12 h-12 text-accent mb-4 animate-icon-glow" />
            <h3 className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-3 uppercase leading-tight">USA Verified</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              WealthQuest 2026 operates exclusively within verified USA federal and state regulatory frameworks, ensuring full compliance and accountability.
            </p>
          </div>
        </div>

        <div className="h-px w-full border-t border-white/10 mb-8" />

        <p className="text-xs text-muted-foreground uppercase leading-relaxed font-mono max-w-5xl">
          ADVERTISING DISCLOSURE: WealthQuest 2026 is an advertising-supported comparison service. The offers that appear on this site are from companies from which WealthQuest 2026 receives compensation. This compensation may impact how and where products appear on this site. WealthQuest 2026 does not include all financial products or providers available in the marketplace. WealthQuest 2026 may receive compensation from third-party advertisers. This is an advertisement. By submitting your information, you agree to be contacted by our partners regarding financial products and services. Not all applicants will qualify. Results may vary. Editorial opinions are ours alone and have not been reviewed, approved, or endorsed by advertisers. This site is not affiliated with any government agency.
        </p>
      </div>
    </section>
  );
}
