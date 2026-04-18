export default function Footer() {
  return (
    <footer className="bg-background border-t-4 border-primary py-12 px-6" data-testid="footer">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="max-w-md">
          <h3 className="text-2xl font-black font-display text-white mb-4">WealthBridge.</h3>
          <p className="text-sm text-muted-foreground mb-4">
            <strong>Transparency Disclosure:</strong> WealthBridge provides financial information and access to third-party opportunities, grants, and products. We do not provide personalized financial advice. Please consult with a certified professional before making investment decisions.
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end">
          <div className="mb-4">
            <span className="block text-xs uppercase tracking-widest text-primary mb-1 font-bold">Contact</span>
            <a href="mailto:ayan@gmail.com" className="text-xl font-bold hover:text-accent transition-colors" data-testid="footer-email">
              ayan@gmail.com
            </a>
          </div>
          <div className="text-sm text-muted-foreground mt-auto">
            © {new Date().getFullYear()} WealthBridge. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
