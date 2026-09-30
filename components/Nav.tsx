import Link from "next/link";

/**
 * The bot itself is still in build. Every CTA that used to point at a wa.me
 * link now points at the teacher waitlist so nothing on the site over-promises.
 * The demo at /try is the "it works" story.
 */
export const WAITLIST_HREF =
  "mailto:hello@astratechai.com?subject=PadhaiBot%20for%20my%20tuition&body=I%20run%20a%20tuition%20class.%20Add%20me%20to%20the%20waitlist%20%E2%80%94%20I%20want%20PadhaiBot%20on%20my%20WhatsApp%20Business%20number.%0A%0AName%3A%0ACity%3A%0ANumber%20of%20students%3A%0AClasses%20%2F%20subjects%20I%20teach%3A";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur border-b border-line">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-forest flex items-center justify-center">
            <span className="text-cream font-serif text-xl leading-none">प</span>
          </div>
          <span className="font-serif text-xl">PadhaiBot</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/try"
            className="text-sm text-ink hover:text-forest transition"
          >
            Try demo
          </Link>
          <a
            href={WAITLIST_HREF}
            className="text-sm font-medium bg-forest text-cream px-4 py-2 rounded-full hover:bg-forest-hover transition"
          >
            For my tuition →
          </a>
        </nav>
      </div>
    </header>
  );
}
