# padhaibot-web

Marketing site + live demo for **PadhaiBot** — a WhatsApp assistant for
India's private tuition teachers.

Built for **HackBIOS 2K26** by Team Astratech AI.

## The pitch, in one line

Every tuition teacher in India answers twenty doubts by hand every night.
PadhaiBot answers them from her own notes, on her own number, and hands her
only the ones that need her.

## Who this is for

Not students. Not parents. **The tuition teacher** — one person with 20–40
students in a rented hall, charging ₹500–₹2,000/month/student, already
running her whole business on WhatsApp.

## Why not just use Meta AI

Meta AI is a tutor for the student. PadhaiBot is a tool for the tutor.

- **Meta AI can't sit on the teacher's phone number.** Students would talk to
  Meta, not to her, and she'd lose the relationship.
- **Meta AI doesn't know her notes or her method.** It solves problems any
  way it likes; the student gets marked wrong for a method she hasn't taught.
- **Meta AI never routes anything back to the teacher.** PadhaiBot's honest
  "I don't know — asking sir" is the feature, not a failure.
- **Meta AI gives the teacher nothing.** PadhaiBot tells her every morning
  where the batch is stuck.

We're not competing with Meta AI at all. We're selling a tool to a person
Meta AI doesn't serve.

## What's in this repo

- `app/page.tsx` — Landing page (asymmetric hero, 3 high-hierarchy panels,
  Sunita Ma'am story, 5 differentiators vs. general chatbots, pricing panel,
  centres panel, final CTA)
- `app/try/page.tsx` — In-browser demo: play the student, watch PadhaiBot
  reply in Hindi with a source citation to the teacher's notes
- `components/` — `Nav`, `Footer`, `PhoneMock` (student ↔ teacher's WhatsApp),
  `FloatingCard` (the repeating visual signature)
- Tailwind + custom palette (warm cream, deep forest green, terracotta accent)
- Fonts: Instrument Serif, Geist, Noto Sans Devanagari via Google Fonts

## Pricing (as shown on the site)

**₹299 / month / teacher.** Unlimited students. Uses WhatsApp's free
1,000-conversation tier. Centres with 5+ teachers get their own admin panel.

## What we build in 24 hours (hackathon final)

- Teacher onboarding on WhatsApp: send notes/worksheets as photos or PDFs, we index them
- Student side: photo/text/voice doubt in → Hindi explanation + voice note out, grounded in the teacher's material
- Confidence check + "ask sir" queue
- Morning summary message to the teacher
- Broadcast a worksheet to the batch

Not in 24 hours: payments, multi-teacher centres, a web dashboard.

## Stack

- WhatsApp Business Cloud API (Meta)
- Gemini 2.0 Flash — reads photos
- Claude Sonnet 3.5 / GPT-4o — Hindi explanation
- ElevenLabs / Google Cloud TTS — voice notes
- Node.js + Express (TypeScript), PostgreSQL, Redis
- **pgvector** — retrieval layer over the teacher's uploaded material (this is
  the "grounded in her notes" part)

## Run locally

```bash
pnpm install
pnpm dev
```

http://localhost:3000, then `/try`.

## Deploy on Vercel

```bash
vercel
```

Or push this folder to a fresh GitHub repo and click "Import Project" on
vercel.com. No env vars needed for the marketing site.

## Wiring `/try` to the real backend

The `/try` page uses pre-computed answers so the demo never breaks. To
connect it to the real pipeline:

1. Set `NEXT_PUBLIC_PADHAIBOT_API` in `.env.local`
2. In `app/try/page.tsx`, replace `runSample`'s timeouts with a real
   `fetch()` to `${process.env.NEXT_PUBLIC_PADHAIBOT_API}/ask`
3. Backend contract: `POST /ask` with multipart `image` field, streams back
   Hindi answer lines (SSE or chunked JSON), returns final voice-note URL

## Waitlist target

All teacher CTAs open a `mailto:hello@astratechai.com` with subject
"PadhaiBot for my tuition" and a pre-filled body asking for name, city,
student count, subjects. Centre CTAs go to a separate subject line. Update
`WAITLIST_HREF` in `components/Nav.tsx` and `CENTRES_HREF` in `app/page.tsx`
if the inbox changes.

## Design system

| Token | Value | Where |
|---|---|---|
| `cream` | `#FBF7F0` | Backgrounds |
| `forest` | `#0F5132` | Primary CTAs, accents, "your" emphasis |
| `terracotta` | `#DC5F3A` | Section eyebrows, "your morning summary" panel |
| `ink` | `#1A1A1A` | Body text |
| `muted` | `#7A7269` | Secondary text, "contrast" lines in differentiators |
| `line` | `#E8E1D3` | Borders, dividers |

The repeating visual signature is `FloatingCard` — small warm cream cards
with a soft forest shadow, floating over other elements to break rigid
grids. Used in the hero (over the phone) and after the Sunita story to make
the outcome tangible.
