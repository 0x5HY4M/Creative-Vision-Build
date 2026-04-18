import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-background border-t-4 border-accent py-16 px-6" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-black font-display text-white mb-4">WealthQuest 2026.</h3>
            <p className="text-sm text-muted-foreground mb-4">
              UK's #1 Financial Discovery Platform
            </p>
            <p className="text-xs text-muted-foreground mt-auto mb-4">
              WealthQuest 2026 is compensated by advertisers. Offers may vary based on eligibility.
            </p>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} WealthQuest 2026. All rights reserved.
            </div>
          </div>

          {/* Column 2 - Legal */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold text-accent uppercase tracking-wider mb-6">Legal</h4>
            <div className="flex flex-col space-y-3">
              <Link href="/privacy" className="text-muted-foreground hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-muted-foreground hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/ccpa" className="text-muted-foreground hover:text-white transition-colors">CCPA Notice</Link>
              <Link href="/tcpa" className="text-muted-foreground hover:text-white transition-colors">TCPA Compliance</Link>
              <Link href="/do-not-sell" className="text-muted-foreground hover:text-white transition-colors">Do Not Sell My Info</Link>
            </div>
          </div>

          {/* Column 3 - Resources */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold text-accent uppercase tracking-wider mb-6">Resources</h4>
            <div className="flex flex-col space-y-3 text-muted-foreground">
              <span>Solar Energy Grants</span>
              <span>Debt Relief Programs</span>
              <span>Government Schemes</span>
              <span>Investment Education</span>
              <span>Financial Planning</span>
            </div>
          </div>

          {/* Column 4 - Contact */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold text-accent uppercase tracking-wider mb-6">Contact</h4>
            <a href="mailto:ayan@gmail.com" className="text-white hover:text-accent transition-colors font-bold text-xl mb-3" data-testid="footer-email">
              ayan@gmail.com
            </a>
            <p className="text-sm text-muted-foreground">
              We respond within 24 business hours.
            </p>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="pt-8 border-t-2 border-accent/20 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <span className="font-bold text-accent/80">256-bit SSL Secured</span>
            <span>|</span>
            <span className="font-bold text-accent/80">CCPA Ready</span>
            <span>|</span>
            <span className="font-bold text-accent/80">TCPA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}