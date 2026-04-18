import SmoothWrapper from '@/components/SmoothWrapper';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

export default function CCPAPolicy() {
  return (
    <SmoothWrapper>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-8 md:p-12 shadow-[0_0_60px_rgba(190,242,100,0.08)] will-change-transform translate-z-0">
            <Link href="/" className="inline-block text-accent font-bold uppercase tracking-wider mb-8 hover:text-white transition-colors">
              ← Back to Home
            </Link>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase font-display mb-12 leading-tight">CCPA Privacy Notice</h1>
            
            <div className="prose prose-invert prose-p:text-muted-foreground prose-headings:text-white prose-headings:font-display prose-headings:uppercase max-w-none">
              <p>
                This privacy notice applies solely to California residents and supplements our general Privacy Policy. WealthQuest 2026 adopts this notice to comply with the California Consumer Privacy Act of 2018 (CCPA).
              </p>

              <h2>Rights under CCPA</h2>
              <p>
                California residents possess specific rights regarding their personal information:
              </p>
              <ul>
                <li><strong>Right to Know:</strong> You have the right to request that we disclose the categories and specific pieces of personal information we have collected about you over the past 12 months.</li>
                <li><strong>Right to Delete:</strong> You can request the deletion of your personal information held by us, subject to certain exceptions.</li>
                <li><strong>Right to Opt-Out:</strong> You have the right to direct us not to sell your personal information to third parties. Please visit our <Link href="/do-not-sell" className="text-accent">Do Not Sell My Personal Information</Link> page.</li>
                <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA rights (e.g., we will not deny you services or provide a different level of quality).</li>
              </ul>

              <h2>Categories of Personal Information Collected</h2>
              <p>
                Within the last 12 months, we have collected the following categories of personal information from consumers:
              </p>
              <ul>
                <li>Identifiers (e.g., real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address).</li>
                <li>Personal information categories listed in the California Customer Records statute (e.g., telephone number).</li>
                <li>Commercial information (e.g., financial interests, household status).</li>
                <li>Internet or other similar network activity (e.g., browsing history, search history, interaction with our website).</li>
              </ul>

              <h2>How to Exercise Rights</h2>
              <p>
                To exercise your rights to know or delete described above, please submit a verifiable consumer request to us by contacting:
                <br />
                <a href="mailto:ayan@gmail.com" className="text-accent font-bold">ayan@gmail.com</a>
              </p>
              <p>
                Only you, or a person registered with the California Secretary of State that you authorize to act on your behalf, may make a verifiable consumer request related to your personal information.
              </p>

              <h2>Contact</h2>
              <p>
                If you have any questions about this Notice, please email us at <a href="mailto:ayan@gmail.com" className="text-accent font-bold">ayan@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </SmoothWrapper>
  );
}
