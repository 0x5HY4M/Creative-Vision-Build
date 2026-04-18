import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/10 py-16 px-6" data-testid="footer">
      <div className="max-w-7xl mx-auto glass-card p-8 md:p-12 border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl font-black font-display text-white mb-4 leading-tight">WealthQuest 2026.</h3>
            <p className="text-sm text-muted-foreground mb-4">
              USA's #1 Financial Discovery Platform
            </p>
            <p className="text-xs text-muted-foreground mt-auto mb-4">
              WealthQuest 2026 is compensated by advertisers. Offers may vary based on eligibility.
            </p>
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} WealthQuest 2026. All rights reserved.
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg sm:text-xl font-bold text-accent uppercase tracking-wider mb-6 leading-tight">Legal</h4>
            <div className="flex flex-col space-y-3">
              <Link href="/privacy" className="text-muted-foreground hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-muted-foreground hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/ccpa" className="text-muted-foreground hover:text-white transition-colors">CCPA Notice</Link>
              <Link href="/tcpa" className="text-muted-foreground hover:text-white transition-colors">TCPA Compliance</Link>
              <Link href="/do-not-sell" className="text-muted-foreground hover:text-white transition-colors">Do Not Sell My Info</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg sm:text-xl font-bold text-accent uppercase tracking-wider mb-6 leading-tight">Resources</h4>
            <div className="flex flex-col space-y-3 text-muted-foreground">
              <span>Solar Energy Grants</span>
              <span>Debt Relief Programs</span>
              <span>Government Schemes</span>
              <span>Investment Education</span>
              <span>Financial Planning</span>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg sm:text-xl font-bold text-accent uppercase tracking-wider mb-6 leading-tight">Contact</h4>
            <a
              href="mailto:ayan@gmail.com"
              className="text-white hover:text-accent transition-colors font-bold text-lg mb-3 break-all"
              data-testid="footer-email"
            >
              ayan@gmail.com
            </a>
            <p className="text-sm text-muted-foreground">
              We respond within 24 business hours.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 mb-6">
          <p className="text-xs text-muted-foreground leading-relaxed font-mono">
            ADVERTISEMENT DISCLOSURE: This website is an advertisement and not a news publication. WealthQuest 2026 is an advertising-supported platform. By submitting your information, you expressly consent to be contacted by one or more of our marketing partners via telephone, email, or text message (including by automated means) regarding financial products and services, even if your number appears on a Do Not Call list. Consent is not a condition of purchase. Message and data rates may apply. You may opt out at any time. WealthQuest 2026 may receive compensation when you click on partner links. Not all applicants will qualify. Individual results may vary. This site is not affiliated with any government agency or program.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-bold text-accent/80">256-bit SSL Secured</span>
            <span>|</span>
            <span className="font-bold text-accent/80">CCPA Ready</span>
            <span>|</span>
            <span className="font-bold text-accent/80">TCPA Compliant</span>
            <span>|</span>
            <span className="font-bold text-accent/80">USA Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
