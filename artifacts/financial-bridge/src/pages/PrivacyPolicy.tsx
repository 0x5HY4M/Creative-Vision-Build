import SmoothWrapper from '@/components/SmoothWrapper';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

export default function PrivacyPolicy() {
  return (
    <SmoothWrapper>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto glass-card border border-white/10 p-8 md:p-12 shadow-[0_0_60px_rgba(190,242,100,0.08)]">
            <Link href="/" className="inline-block text-accent font-bold uppercase tracking-wider mb-8 hover:text-white transition-colors">
              ← Back to Home
            </Link>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase font-display mb-4 leading-tight">Privacy Policy</h1>
            <p className="text-muted-foreground font-bold mb-12">Effective Date: January 1, 2026</p>
            
            <div className="prose prose-invert prose-p:text-muted-foreground prose-headings:text-white prose-headings:font-display prose-headings:uppercase max-w-none">
              <p>
                At WealthQuest 2026, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide when interacting with our platform and services.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We collect information necessary to provide our services effectively. This may include:
              </p>
              <ul>
                <li><strong>Personal Identification Data:</strong> Name, email address, physical address, and telephone number when voluntarily submitted through our assessment forms.</li>
                <li><strong>Financial Information:</strong> Self-reported household income brackets, property ownership status, and specific areas of financial interest.</li>
                <li><strong>Usage Data:</strong> Automatically collected information including IP addresses, browser types, device information, and interaction metrics with our website.</li>
              </ul>

              <h2>How We Use Your Data</h2>
              <p>
                The information we collect is utilized to:
              </p>
              <ul>
                <li>Deliver personalized financial assessments and match you with relevant government schemes and programs.</li>
                <li>Communicate regarding your assessment results, new opportunities, and critical service updates (always subject to your explicit consent).</li>
                <li>Improve our platform's functionality, user experience, and security measures.</li>
                <li>Engage in targeted marketing, provided you have opted in to receive such communications.</li>
              </ul>

              <h2>Cookies Policy</h2>
              <p>
                WealthQuest 2026 uses cookies and similar tracking technologies to enhance your browsing experience. These technologies help us understand user behavior, maintain session integrity, and serve relevant advertisements. You can manage cookie preferences through your browser settings, though disabling certain cookies may affect site functionality.
              </p>

              <h2>Third-Party Sharing</h2>
              <p>
                We do not sell your personal information to unverified third parties. We may share your data with trusted financial partners and service providers solely for the purpose of fulfilling your requests or connecting you with relevant programs. All third-party partners are bound by strict confidentiality agreements.
              </p>

              <h2>Your User Rights</h2>
              <p>
                Depending on your jurisdiction, you hold certain rights regarding your personal data:
              </p>
              <ul>
                <li>The right to access the personal information we hold about you.</li>
                <li>The right to request deletion of your data from our systems.</li>
                <li>The right to data portability, allowing you to obtain a copy of your data in a structured format.</li>
                <li>The right to rectify inaccurate or incomplete information.</li>
              </ul>

              <h2>Contact Us</h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy or how we handle your data, please contact our Data Protection Officer at:
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
