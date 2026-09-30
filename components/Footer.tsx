import { WAITLIST_HREF } from "./Nav";

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream mt-32">
      <div className="max-w-content mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-forest flex items-center justify-center">
                <span className="text-cream font-serif text-xl leading-none">प</span>
              </div>
              <span className="font-serif text-xl">PadhaiBot</span>
            </div>
            <p className="text-sm text-muted max-w-xs">
              The tuition teacher&apos;s WhatsApp assistant. Runs on her own
              number, answers from her own notes, hands her only the questions
              that need her.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a href="/try" className="hover:text-forest">
                  Try the demo
                </a>
              </li>
              <li>
                <a href={WAITLIST_HREF} className="hover:text-forest">
                  Get PadhaiBot for your tuition
                </a>
              </li>
              <li>
                <a href="mailto:hello@astratechai.com?subject=PadhaiBot%20for%20our%20centre" className="hover:text-forest">
                  For centres &amp; institutes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink mb-4">Built by</h4>
            <p className="text-sm text-muted">
              Astratech AI — an AI &amp; full-stack team from Jamshedpur. We build
              education products.{" "}
              <a
                href="https://astratechai.com"
                target="_blank"
                rel="noreferrer"
                className="text-forest underline"
              >
                astratechai.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex items-center justify-between text-xs text-muted">
          <span>© 2026 Astratech AI</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-forest">Privacy</a>
            <a href="#" className="hover:text-forest">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
