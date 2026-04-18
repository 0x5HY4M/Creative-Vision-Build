import SmoothWrapper from '@/components/SmoothWrapper';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

export default function TCPACompliance() {
  return (
    <SmoothWrapper>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-8 md:p-12 shadow-[0_0_60px_rgba(190,242,100,0.08)] will-change-transform translate-z-0">
            <Link href="/" className="inline-block text-accent font-bold uppercase tracking-wider mb-8 hover:text-white transition-colors">
              ← Back to Home
            </Link>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase font-display mb-12 leading-tight">TCPA Compliance Notice</h1>
            
            <div className="prose prose-invert prose-p:text-muted-foreground prose-headings:text-white prose-headings:font-display prose-headings:uppercase max-w-none">
              <p>
                WealthQuest 2026 is fully committed to compliance with the Telephone Consumer Protection Act (TCPA). We respect your privacy and your right to control the communications you receive from us and our partners.
              </p>

              <h2>Consent to Contact</h2>
              <p>
                By submitting your contact information on our website, you provide explicit, written consent to be contacted by WealthQuest 2026 and our verified financial partners. This consent applies to communications via:
              </p>
              <ul>
                <li>Email</li>
                <li>Telephone calls (including automated dialing systems)</li>
                <li>SMS/Text messages</li>
              </ul>
              <p>
                <strong>We will never engage in unsolicited communications. Consent is always explicit and recorded.</strong>
              </p>

              <h2>How We Use Your Contact Info</h2>
              <p>
                Your contact information is used strictly to provide the services you requested, deliver assessment results, and connect you with applicable financial opportunities. We ensure that our partners adhere to the same strict TCPA standards.
              </p>

              <h2>Opt-Out Instructions</h2>
              <p>
                You maintain the absolute right to revoke your consent at any time. To opt-out of communications:
              </p>
              <ul>
                <li><strong>Email:</strong> Click the "unsubscribe" link located at the bottom of any email we send.</li>
                <li><strong>SMS:</strong> Reply "STOP", "END", or "QUIT" to any text message you receive.</li>
                <li><strong>Phone:</strong> Verbally request to be placed on our internal Do-Not-Call list during any phone call.</li>
              </ul>

              <h2>TCPA Rights</h2>
              <p>
                Under the TCPA, you have the right to be free from unwanted telemarketing calls and automated text messages unless prior express written consent has been obtained. WealthQuest 2026 strictly prohibits the use of pre-recorded voice messages or robocalls without proper authorization.
              </p>

              <h2>Contact</h2>
              <p>
                If you believe you have received an unauthorized communication, or if you need assistance managing your contact preferences, please reach out to us immediately at:
                <br />
                <a href="mailto:ayan@gmail.com" className="text-accent font-bold">ayan@gmail.com</a>
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </SmoothWrapper>
  );
}
