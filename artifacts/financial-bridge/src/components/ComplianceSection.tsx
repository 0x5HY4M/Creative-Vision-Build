import { Lock, Fingerprint, MessageCircle, Megaphone } from 'lucide-react';

export default function ComplianceSection() {
  return (
    <section className="py-20 bg-background border-t-4 border-muted" data-testid="compliance-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-secondary border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col">
            <Lock className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-white font-bold text-xl mb-3 uppercase">256-bit SSL</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your data is protected with bank-level SSL encryption. All information is transmitted securely and never stored without consent.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-secondary border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col">
            <Fingerprint className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-white font-bold text-xl mb-3 uppercase">CCPA Ready</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We comply fully with the California Consumer Privacy Act. You have the right to know, delete, and opt-out of data sale at any time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-secondary border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col">
            <MessageCircle className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-white font-bold text-xl mb-3 uppercase">TCPA Compliant</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              All communications are TCPA compliant. You will never receive unsolicited calls or texts. Consent is always explicit and recorded.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-secondary border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col">
            <Megaphone className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-white font-bold text-xl mb-3 uppercase">Advertisement Disclosure</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              WealthQuest 2026 may receive compensation from partners when you apply for products. This does not affect our editorial integrity.
            </p>
          </div>
        </div>

        <div className="h-1 w-full bg-muted mb-8"></div>

        <p className="text-xs text-muted-foreground uppercase leading-relaxed font-mono max-w-5xl">
          ADVERTISING DISCLOSURE: WealthQuest 2026 is an advertising-supported comparison service. The offers that appear on this site are from companies from which WealthQuest 2026 receives compensation. This compensation may impact how and where products appear on this site. WealthQuest 2026 does not include all financial products or providers available in the marketplace. Editorial opinions are ours alone and have not been reviewed, approved, or endorsed by advertisers.
        </p>
      </div>
    </section>
  );
}