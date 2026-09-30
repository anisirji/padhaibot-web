"use client";

import { useState } from "react";
import { Nav, WAITLIST_HREF } from "@/components/Nav";
import { Footer } from "@/components/Footer";

type Sample = {
  key: string;
  subject: string;
  question: string;
  hindiSteps: string[];
  englishHint: string;
};

const SAMPLES: Sample[] = [
  {
    key: "math",
    subject: "Class 7 · Math",
    question: "Hal kijiye: 2x + 5 = 15",
    hindiSteps: [
      "Sawal linear equation hai — matlab ek chhupi hui sankhya 'x' dhoondhni hai.",
      "Step 1: Dono taraf se 5 ghatao. 2x + 5 − 5 = 15 − 5.",
      "Step 2: Simplify — 2x = 10.",
      "Step 3: Dono taraf ko 2 se bhaag do. x = 5.",
      "Jawab: x = 5. ✓",
    ],
    englishHint: "Linear equation — subtract 5, divide by 2.",
  },
  {
    key: "sci",
    subject: "Class 8 · Science",
    question: "Photosynthesis kya hai? Samjhaao.",
    hindiSteps: [
      "Photosynthesis ek natural process hai jo har hare paudhe mein hota hai.",
      "Paudhe apne patton se suraj ki roshni sokh lete hain.",
      "Jadon se paani, aur hawa se carbon dioxide (CO₂) lete hain.",
      "In teeno cheezon se glucose (khana) aur oxygen banti hai.",
      "Isi liye jungle 'Earth ke fephde' kehlate hain — kyunki humein oxygen dete hain.",
    ],
    englishHint: "Sunlight + water + CO₂ → glucose + oxygen.",
  },
  {
    key: "sst",
    subject: "Class 6 · Social Studies",
    question: "Loktantra (democracy) kya hoti hai?",
    hindiSteps: [
      "Loktantra ek aisi sarkar hoti hai jismein desh ke log apna raja/PM/leader khud chunte hain.",
      "Woh chunte hain vote dekar — har vayask vyakti ka ek vote hota hai.",
      "Bharat duniya ka sabse bada loktantra hai.",
      "Loktantra mein har nagrik ke paas apni raay rakhne ka adhikaar hota hai.",
      "Uska ulta hota hai 'tanashahi' (dictatorship) — jahaan ek hi vyakti raaj karta hai.",
    ],
    englishHint: "People choose their leader by voting.",
  },
];

export default function TryPage() {
  const [selected, setSelected] = useState<Sample | null>(null);
  const [uploading, setUploading] = useState(false);
  const [streamed, setStreamed] = useState<string[]>([]);

  async function runSample(s: Sample) {
    setSelected(s);
    setStreamed([]);
    setUploading(true);
    // simulate streaming
    await new Promise((r) => setTimeout(r, 800));
    setUploading(false);
    for (let i = 0; i < s.hindiSteps.length; i++) {
      await new Promise((r) => setTimeout(r, 450));
      setStreamed((prev) => [...prev, s.hindiSteps[i]]);
    }
  }

  return (
    <main>
      <Nav />

      <section className="max-w-content mx-auto px-6 pt-16 pb-8">
        <div className="max-w-2xl">
          <p className="text-sm text-forest font-medium mb-2">
            Play the student
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-ink leading-[1.05]">
            See what PadhaiBot sends
            <br />
            <span className="italic text-forest">
              when your student asks.
            </span>
          </h1>
          <p className="mt-5 text-lg text-muted">
            Pick a Class 6–9 question below and watch the Hindi answer stream in.
            In your real deployment on your WhatsApp number, PadhaiBot uses{" "}
            <span className="italic">your</span> notes and{" "}
            <span className="italic">your</span> method — not a generic textbook.
          </p>
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT — INPUT */}
          <div className="rounded-3xl border border-line bg-white p-8">
            <h2 className="font-serif text-2xl text-ink">
              You are the student now
            </h2>
            <p className="text-sm text-muted mt-1">
              Send a doubt to your teacher&apos;s number. Try one of ours below.
            </p>

            <div
              className="mt-6 rounded-2xl border-2 border-dashed border-line bg-cream/60 p-10 text-center cursor-pointer hover:border-forest transition"
              onClick={() =>
                alert(
                  "Upload wiring is a hackathon-final task. For now, pick a sample below to see the flow."
                )
              }
            >
              <div className="text-5xl mb-3">📷</div>
              <div className="font-medium text-ink">Drag a photo here</div>
              <div className="text-sm text-muted mt-1">
                or click to choose · printed or handwritten · any Class 6–9 subject
              </div>
            </div>

            <div className="mt-6">
              <div className="text-xs uppercase tracking-widest text-muted mb-3">
                Or try a sample
              </div>
              <div className="flex flex-wrap gap-2">
                {SAMPLES.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => runSample(s)}
                    className={`px-4 py-2 rounded-full text-sm border transition ${
                      selected?.key === s.key
                        ? "bg-forest text-cream border-forest"
                        : "border-line hover:border-forest hover:text-forest"
                    }`}
                  >
                    {s.subject}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — OUTPUT */}
          <div className="rounded-3xl bg-ink text-cream p-8 min-h-[420px] relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-terracotta/20 blur-3xl" />

            {!selected && (
              <div className="relative h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full border-2 border-cream/20 flex items-center justify-center font-serif text-3xl mb-4">
                  प
                </div>
                <p className="text-cream/60">
                  Ask a doubt on the left — <br />
                  the reply from Sunita Ma&apos;am&apos;s PadhaiBot appears here.
                </p>
              </div>
            )}

            {selected && (
              <div className="relative">
                <span className="text-xs uppercase tracking-widest text-terracotta">
                  Question received
                </span>
                <div className="mt-2 rounded-xl bg-cream/5 border border-cream/10 p-4">
                  <div className="text-xs text-cream/50 mb-1">
                    {selected.subject}
                  </div>
                  <div className="text-cream">{selected.question}</div>
                </div>

                <div className="mt-6">
                  <span className="text-xs uppercase tracking-widest text-terracotta">
                    Answer{" "}
                    {uploading && (
                      <span className="text-cream/60">· thinking…</span>
                    )}
                  </span>
                  <div className="mt-2 space-y-2 font-hindi text-cream">
                    {streamed.map((line, i) => (
                      <div
                        key={i}
                        className="flex gap-3 rounded-lg bg-cream/5 border border-cream/10 p-3 animate-fade-in"
                      >
                        <span className="text-terracotta font-medium shrink-0">
                          {i + 1}.
                        </span>
                        <span className="leading-relaxed">{line}</span>
                      </div>
                    ))}
                    {uploading && (
                      <div className="rounded-lg bg-cream/5 border border-cream/10 p-3 text-cream/50 text-sm">
                        Extracting question from your input…
                      </div>
                    )}
                  </div>
                </div>

                {streamed.length === selected.hindiSteps.length && (
                  <div className="mt-6 pt-6 border-t border-cream/10 flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center text-sm">
                        ▶
                      </div>
                      <div>
                        <div className="text-xs text-cream/60">Voice note</div>
                        <div className="text-sm">Sun bhi sakte hain (0:18)</div>
                      </div>
                    </div>
                    <a
                      href={WAITLIST_HREF}
                      className="bg-cream text-ink px-5 py-2.5 rounded-full text-sm font-medium hover:bg-terracotta hover:text-cream transition"
                    >
                      Get early WhatsApp access →
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 max-w-2xl mx-auto rounded-2xl bg-cream border border-line p-6">
          <p className="text-xs uppercase tracking-widest text-terracotta mb-2">
            Honest note
          </p>
          <p className="text-sm text-muted leading-relaxed">
            These sample responses are pre-computed so the demo never breaks. The
            live PadhaiBot on a teacher&apos;s WhatsApp number runs a real
            pipeline: Gemini Vision reads the student&apos;s photo → retrieval
            over the teacher&apos;s uploaded notes → reasoning model writes the
            reply in her method → Hindi TTS. Below a confidence threshold it
            doesn&apos;t answer — it queues the question for her. The bot is in
            build; teacher waitlist is open.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
