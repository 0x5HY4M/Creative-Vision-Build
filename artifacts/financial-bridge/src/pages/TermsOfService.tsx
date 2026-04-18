import SmoothWrapper from '@/components/SmoothWrapper';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

export default function TermsOfService() {
  return (
    <SmoothWrapper>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto glass-card border border-white/10 p-8 md:p-12 shadow-[0_0_60px_rgba(190,242,100,0.08)]">
            <Link href="/" className="inline-block text-accent font-bold uppercase tracking-wider mb-8 hover:text-white transition-colors">
              ← Back to Home
            </Link>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase font-display mb-12 leading-tight">Terms of Service</h1>
            
            <div className="prose prose-invert prose-p:text-muted-foreground prose-headings:text-white prose-headings:font-display prose-headings:uppercase max-w-none">
              <h2>Agreement to Terms</h2>
              <p>
                By accessing or using the WealthQuest 2026 website and related services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service. These terms apply to all visitors, users, and others who access or use the platform.
              </p>

              <h2>Use of Service</h2>
              <p>
                WealthQuest 2026 provides information regarding financial opportunities, grants, and schemes. You agree to use the service only for lawful purposes. You must not:
              </p>
              <ul>
                <li>Use the service in any way that violates applicable local, national, or international law.</li>
                <li>Engage in automated scraping, data mining, or extraction of content from the platform without explicit written permission.</li>
                <li>Attempt to bypass or compromise any security measures implemented on the website.</li>
                <li>Submit false or misleading information through our assessment forms.</li>
              </ul>

              <h2>Intellectual Property</h2>
              <p>
                The service and its original content, features, functionality, and design elements (including the Neo-brutalism aesthetic, text, graphics, and logos) are and will remain the exclusive property of WealthQuest 2026 and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>

              <h2>Disclaimer of Warranties</h2>
              <p>
                WealthQuest 2026 is provided on an "AS IS" and "AS AVAILABLE" basis. We do not provide personalized financial, legal, or tax advice. Any information provided through the platform should be independently verified before making financial decisions. We make no warranties, expressed or implied, regarding the accuracy, reliability, or completeness of the information presented.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                In no event shall WealthQuest 2026, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United States of America, without regard to its conflict of law provisions. Any dispute arising from these terms shall be subject to the exclusive jurisdiction of the federal and state courts located in Delaware, USA.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any material changes prior to new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>

              <h2>Contact</h2>
              <p>
                For any questions regarding these Terms of Service, please contact us at:
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
