import Link from "next/link";
import { Nav, WAITLIST_HREF } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PhoneMock } from "@/components/PhoneMock";
import { FloatingCard } from "@/components/FloatingCard";

const CENTRES_HREF =
  "mailto:hello@astratechai.com?subject=PadhaiBot%20for%20our%20centre&body=We%20run%20a%20centre%20with%20multiple%20tuition%20teachers.%20Please%20share%20the%20centre%20plan%20details.";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />

      {/* ================================================================
          HERO — asymmetric. Teacher-first positioning.
          Copy left-heavy, teacher's phone offset right, floating cards
          overlap to break the grid.
          ================================================================ */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-terracotta/10 -z-10" />

        <div className="max-w-content mx-auto px-6 pt-16 pb-32">
          <div className="grid md:grid-cols-12 gap-6 items-start">
            {/* LEFT — 7 cols */}
            <div className="md:col-span-7 md:pt-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-line text-xs text-forest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
                For India&apos;s tuition teachers · WhatsApp launch soon
              </div>

              <h1 className="font-serif text-[56px] md:text-[78px] leading-[0.98] tracking-tight text-ink">
                Twenty doubts
                <br />
                every night.
                <br />
                <span className="italic text-forest">
                  Answered by 8 pm
                </span>{" "}
                <span className="text-ink">—</span>
                <br />
                in your method.
              </h1>

              <p className="mt-8 text-xl text-muted max-w-xl leading-relaxed">
                PadhaiBot lives on{" "}
                <span className="text-ink font-medium">your</span> WhatsApp
                Business number. It answers your students&apos; doubts from{" "}
                <span className="text-ink font-medium">your own notes</span> —
                in Hindi, in your method. When it isn&apos;t sure, it{" "}
                <span className="italic">doesn&apos;t guess</span>. It queues
                the question for you and hands you a morning summary of where
                the batch is stuck.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/try"
                  className="group bg-forest text-cream px-7 py-4 rounded-full font-medium hover:bg-forest-hover transition inline-flex items-center gap-2"
                >
                  See what a student sees
                  <span className="transition group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
                <a
                  href={WAITLIST_HREF}
                  className="text-forest font-medium hover:underline underline-offset-4"
                >
                  Get PadhaiBot on my number ↘
                </a>
              </div>

              <p className="mt-8 text-sm text-muted max-w-md leading-relaxed">
                <span className="text-ink font-medium">₹299 / month / teacher.</span>{" "}
                Unlimited students. Uses WhatsApp&apos;s free 1,000-conversation
                tier. Bot is in build; waitlist is open.
              </p>
            </div>

            {/* RIGHT — 5 cols, teacher's phone with overlapping cards */}
            <div className="md:col-span-5 relative md:-mt-4">
              <div className="relative">
                <PhoneMock />

                {/* Floating card #1 — who it's for */}
                <div className="hidden md:block absolute -top-6 -left-16 z-10">
                  <FloatingCard
                    label="Made for"
                    value="Tuition teachers"
                    sub="Not for parents or Byju's"
                  />
                </div>

                {/* Floating card #2 — pricing */}
                <div className="hidden md:block absolute -bottom-6 -right-8 z-10">
                  <FloatingCard
                    label="Price"
                    value="₹299 / month"
                    sub="Per teacher · unlimited students"
                  />
                </div>

                {/* Floating card #3 — founder note */}
                <div className="hidden lg:block absolute top-1/2 -left-20 z-10 max-w-[220px]">
                  <div className="rounded-2xl bg-white border border-line shadow-lg shadow-forest/5 p-4">
                    <p className="text-xs italic text-ink leading-snug">
                      &ldquo;Built for the ma&apos;am who answered doubts on
                      WhatsApp till 11 pm.&rdquo;
                    </p>
                    <p className="text-[10px] text-muted mt-2">
                      Aniket · founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          CORE VALUE — 3 high-hierarchy panels.
          The three claims that separate a teacher's tool from a chatbot.
          ================================================================ */}
      <section className="border-t border-line">
        {/* PANEL 1 — Delivery */}
        <div className="border-b border-line bg-white/60">
          <div className="max-w-content mx-auto px-6 py-24 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-2">
              <span className="font-serif text-6xl text-terracotta">01</span>
            </div>
            <div className="md:col-span-6">
              <p className="text-sm text-forest font-medium mb-3">
                On your number. In your name.
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.1]">
                Your students don&apos;t chat with &ldquo;an app.&rdquo;
                <br />
                <span className="italic text-forest">They chat with you.</span>
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
                PadhaiBot runs on your own WhatsApp Business number. Every
                message a student sees has your name on it. If they message at
                11 pm and get an answer at 11:00:14, they think you replied —
                and they&apos;re not wrong, because the answer came from your
                notes. The relationship between you and them never routes
                through a platform.
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="rounded-2xl bg-cream border border-line p-6">
                <div className="text-xs uppercase tracking-widest text-terracotta mb-3">
                  Whose phone the student saves
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-ink">
                    <span className="text-forest font-medium">✓</span>
                    <span>Sunita Ma&apos;am · Tuition</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted line-through">
                    <span>✗</span>
                    <span>Some AI Chatbot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PANEL 2 — Sourcing */}
        <div className="border-b border-line">
          <div className="max-w-content mx-auto px-6 py-24 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-2 md:order-2 md:text-right">
              <span className="font-serif text-6xl text-terracotta">02</span>
            </div>
            <div className="md:col-span-6 md:order-1">
              <p className="text-sm text-forest font-medium mb-3">
                Grounded in what you actually teach.
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.1]">
                It solves it the way you would.
                <br />
                <span className="italic text-forest">
                  Because it read what you wrote.
                </span>
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
                Send PadhaiBot your notes, worksheets and textbook chapters
                once — photos or PDFs, Hindi or English. It indexes them. From
                then on, every reply to a student is grounded in{" "}
                <span className="italic">your</span> material, in{" "}
                <span className="italic">your</span> method. No more losing
                marks because a generic bot used a Class 10 shortcut in a Class
                7 answer.
              </p>
            </div>
            <div className="md:col-span-4 md:order-3">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { step: "Upload", icon: "📄", sub: "your notes" },
                  { step: "Index", icon: "📚", sub: "we do this" },
                  { step: "Answer", icon: "💬", sub: "from your notes" },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="rounded-xl bg-cream border border-line p-4 text-center"
                  >
                    <div className="text-3xl mb-1">{s.icon}</div>
                    <div className="text-xs font-medium text-ink">{s.step}</div>
                    <div className="text-[10px] text-muted mt-1">{s.sub}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-center text-xs text-muted">
                Retrieval-augmented. Answers cite your source.
              </div>
            </div>
          </div>
        </div>

        {/* PANEL 3 — Reliability + morning queue */}
        <div className="bg-white/60">
          <div className="max-w-content mx-auto px-6 py-24 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-2">
              <span className="font-serif text-6xl text-terracotta">03</span>
            </div>
            <div className="md:col-span-6">
              <p className="text-sm text-forest font-medium mb-3">
                The &ldquo;ask sir&rdquo; queue is a feature.
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.1]">
                When it isn&apos;t sure,
                <br />
                <span className="italic text-forest">
                  it doesn&apos;t guess. It asks you.
                </span>
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
                PadhaiBot checks its own confidence before it replies. Below
                threshold, it tells the student{" "}
                <span className="font-hindi italic">
                  &ldquo;sir subah bataenge&rdquo;
                </span>{" "}
                and queues the question for you. You wake up to two things: the
                handful of questions that need you — and one summary line at
                the top.
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="rounded-2xl bg-ink text-cream p-6 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-terracotta/20 blur-2xl" />
                <div className="relative">
                  <div className="text-xs uppercase tracking-widest text-terracotta mb-3">
                    Your 6:30 am summary
                  </div>
                  <p className="text-cream/90 leading-snug text-sm">
                    <span className="font-serif text-2xl text-cream">
                      14 of 28
                    </span>{" "}
                    students got stuck on{" "}
                    <span className="italic">ratio, Q3</span> of yesterday&apos;s
                    worksheet.
                  </p>
                  <div className="mt-4 pt-4 border-t border-cream/10 text-xs text-cream/60">
                    Plus 4 questions in your queue.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          DEMO CTA — target = teacher testing the bot
          ================================================================ */}
      <section className="max-w-content mx-auto px-6 py-28">
        <div className="rounded-3xl bg-ink text-cream p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-terracotta/20 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 w-56 h-56 rounded-full bg-forest/40 blur-3xl" />

          <div className="relative grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <p className="text-sm text-terracotta font-medium mb-3">
                See it before you sign up
              </p>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
                Play the student.
                <br />
                <span className="italic">Ask PadhaiBot a question.</span>
              </h2>
              <p className="mt-4 text-cream/70 text-lg max-w-xl">
                Pick a Class 7 math or Class 8 science question. Watch the Hindi
                answer stream in. In your real deployment, the answer will use{" "}
                <span className="italic">your</span> notes and{" "}
                <span className="italic">your</span> method.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                href="/try"
                className="bg-cream text-ink px-7 py-4 rounded-full font-medium hover:bg-terracotta hover:text-cream transition inline-flex items-center gap-2"
              >
                Open the demo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SCENARIO — a Tuesday night with Sunita Ma'am
          ================================================================ */}
      <section className="border-t border-line">
        <div className="max-w-content mx-auto px-6 py-28">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="text-sm text-forest font-medium mb-3">
                A Tuesday night at 9:47 pm
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.05]">
                A night you know.
              </h2>
              <p className="mt-6 text-muted leading-relaxed">
                Every tuition teacher in India has lived this scene. We designed
                PadhaiBot so it ends differently.
              </p>
            </div>

            <div className="md:col-span-8">
              <div className="space-y-6 text-lg leading-relaxed text-ink">
                <p>
                  It&apos;s <span className="font-medium">9:47 pm</span>. Sunita
                  Ma&apos;am is grading last week&apos;s Class 7 tests at her
                  kitchen table. Her WhatsApp has{" "}
                  <span className="font-medium">34 unread messages</span> —
                  students from today&apos;s ratio chapter, all asking variants
                  of the same three questions.
                </p>
                <p>
                  She replies to five. Types the same explanation four times.
                  Answers the sixth. Realises she can&apos;t remember which
                  student she just answered. Puts the phone down.
                </p>
                <p>
                  Tomorrow she&apos;ll finish the tests instead of preparing
                  for class. She&apos;ll walk in at 5 pm and re-teach ratio from
                  scratch — because 14 kids clearly didn&apos;t get it — while
                  the other 14 who <em>did</em> get it stare at the wall for 45
                  minutes.
                </p>

                <div className="my-8 h-px bg-line" />

                <p>
                  With PadhaiBot: 30 of the 34 messages get an answer within
                  seconds — from her own worksheet, in her method, in Hindi.
                  Four unclear ones sit in her morning queue.
                </p>
                <p>
                  At <span className="font-medium">6:30 am</span> she opens
                  WhatsApp: four questions to answer over chai, and one line at
                  the top —{" "}
                  <span className="font-hindi text-forest italic">
                    &ldquo;14 of 28 students got stuck on ratio, Q3 of
                    yesterday&apos;s worksheet.&rdquo;
                  </span>
                </p>
                <p>
                  She spends{" "}
                  <span className="italic text-forest">15 minutes</span> on
                  ratio tomorrow — not 90. The students who understood it get
                  their new chapter. And the three students she was about to
                  lose to the bigger centre down the road stay.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <FloatingCard
                  label="Sunita's evening"
                  value="15 min"
                  sub="Instead of 2 hours"
                />
                <FloatingCard
                  label="Batch tomorrow"
                  value="On track"
                  sub="Instead of stuck on last week"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          WHY PADHAIBOT — the 5 differentiators, spec-sheet style.
          Communicates the moat vs. general chatbots without naming them.
          ================================================================ */}
      <section className="border-t border-line">
        <div className="max-w-content mx-auto px-6 py-28">
          <div className="max-w-2xl mb-16">
            <p className="text-sm text-forest font-medium mb-3">
              Why not just use Meta AI
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.05]">
              We&apos;re not competing with the chatbot.
              <br />
              <span className="italic text-forest">
                We&apos;re selling to the teacher it doesn&apos;t serve.
              </span>
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              A general assistant is a tutor for the student. PadhaiBot is a
              tool for the tutor. Every choice below exists for one specific
              person: the teacher who charges ₹1,000 a month and has spent the
              last five years on WhatsApp after 8 pm.
            </p>
          </div>

          <div className="rounded-3xl border border-line bg-white/60 divide-y divide-line overflow-hidden">
            {[
              {
                eyebrow: "01 · Delivery",
                title: "On her number, not the platform&apos;s",
                body:
                  "Students talk to her — not to &ldquo;an app.&rdquo; The bot&apos;s identity is her identity. Trust and student relationships stay with the teacher.",
                contrast:
                  "A general assistant lives inside Meta&apos;s app. The teacher is invisible in the loop. Students remember the chatbot, not her.",
              },
              {
                eyebrow: "02 · Sourcing",
                title: "Grounded in her material",
                body:
                  "The bot&apos;s brain for a given tuition is that tuition&apos;s notes, worksheets and chapters. Retrieval happens over her uploaded PDFs before the model ever answers. It cannot invent methods she hasn&apos;t taught.",
                contrast:
                  "A general LLM answers from the whole internet. Wonderful for search. Wrong for a Class 6 worksheet marked by a specific teacher with a specific method.",
              },
              {
                eyebrow: "03 · Reliability",
                title: "Honest fallback + morning queue",
                body:
                  "PadhaiBot measures its own confidence. Below threshold it says &ldquo;sir subah bataenge&rdquo; and queues the question. She wakes up to a curated list of what actually needs her — plus a summary of where the batch is stuck.",
                contrast:
                  "General chatbots guess when unsure. That&apos;s a real risk when a 12-year-old copies the answer into her notebook and hands it in as homework.",
              },
              {
                eyebrow: "04 · Voice",
                title: "Hindi voice note by default",
                body:
                  "Every reply comes with a Hindi voice note — for students who read slowly, for the ones who like listening on their walk home.",
                contrast:
                  "Text walls in English are unusable for half of Indian K-12 students. Voice isn&apos;t a nice-to-have; it&apos;s the accessibility floor.",
              },
              {
                eyebrow: "05 · Ops",
                title: "Broadcast worksheets. Weekly digest.",
                body:
                  "Send one worksheet to all 28 students at once, from the same chat. Get a weekly digest of where each student is strong, where the batch is weak, and which questions keep coming up.",
                contrast:
                  "A general chatbot treats every conversation as one-off. It cannot tell her what her class needs next week — or which student is quietly slipping.",
              },
            ].map((d) => (
              <div
                key={d.title}
                className="grid md:grid-cols-12 gap-6 px-8 py-10"
              >
                <div className="md:col-span-3">
                  <span className="text-xs uppercase tracking-widest text-terracotta">
                    {d.eyebrow}
                  </span>
                  <h3
                    className="font-serif text-2xl text-ink mt-2 leading-tight"
                    dangerouslySetInnerHTML={{ __html: d.title }}
                  />
                </div>
                <div className="md:col-span-9 space-y-3">
                  <p
                    className="text-lg text-ink leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: d.body }}
                  />
                  <p
                    className="text-sm text-muted leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: d.contrast }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          PRICING — one plan, one number. Honest.
          ================================================================ */}
      <section className="border-t border-line bg-white/50">
        <div className="max-w-content mx-auto px-6 py-24">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <p className="text-sm text-forest font-medium mb-3">
                Simple pricing
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.05]">
                One teacher.
                <br />
                <span className="italic text-forest">One price.</span>
              </h2>
              <p className="mt-6 text-muted leading-relaxed max-w-md">
                For a tutor earning ₹30,000–₹60,000 a month from fees, it&apos;s
                less than one student&apos;s fee — and saves an hour every
                night.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="rounded-3xl bg-cream border border-line p-10 relative overflow-hidden">
                <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-forest/10 blur-3xl" />
                <div className="relative">
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-6xl text-ink">₹299</span>
                    <span className="text-muted">/ month / teacher</span>
                  </div>
                  <ul className="mt-8 space-y-3 text-ink">
                    <li className="flex gap-3">
                      <span className="text-forest">✓</span>
                      <span>
                        Unlimited students. Photos, text, voice notes — in Hindi
                        &amp; English.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-forest">✓</span>
                      <span>
                        Answers grounded in your notes, worksheets and chapters
                        (RAG over your PDFs).
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-forest">✓</span>
                      <span>
                        Morning summary + question queue for you, every day.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-forest">✓</span>
                      <span>
                        Broadcast worksheets and 5-question quizzes to your
                        batch.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-forest">✓</span>
                      <span>
                        Runs on WhatsApp&apos;s free 1,000-conversation tier;
                        no extra WhatsApp bill for most tutors.
                      </span>
                    </li>
                  </ul>
                  <a
                    href={WAITLIST_HREF}
                    className="inline-block mt-8 bg-forest text-cream px-6 py-3 rounded-full font-medium hover:bg-forest-hover transition"
                  >
                    Get on the teacher waitlist →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          FOR CENTRES & COACHING INSTITUTES
          ================================================================ */}
      <section className="border-t border-line">
        <div className="max-w-content mx-auto px-6 py-20">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <p className="text-sm text-forest font-medium mb-3">
                For centres &amp; coaching institutes
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-ink leading-[1.1]">
                Running 5+ teachers?
                <br />
                <span className="italic text-forest">
                  One centre, one bill, one admin panel.
                </span>
              </h2>
              <p className="mt-5 text-muted leading-relaxed max-w-xl">
                A shared library of notes and worksheets. A separate WhatsApp
                deployment per teacher (their name, their chats, their
                relationship). A centre-wide dashboard: which teacher&apos;s
                batch is stuck on what, which subject drives the most doubts,
                which students haven&apos;t messaged in a week.
              </p>
            </div>
            <div className="md:col-span-5 flex md:justify-end">
              <a
                href={CENTRES_HREF}
                className="bg-forest text-cream px-6 py-3 rounded-full font-medium hover:bg-forest-hover transition"
              >
                Talk to us about your centre →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          FINAL CTA
          ================================================================ */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-forest/5 -z-10" />
        <div className="max-w-content mx-auto px-6 py-28 text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-ink leading-[1.05] max-w-4xl mx-auto">
            Every tuition teacher in India answers twenty doubts by hand every
            night.
            <br />
            <span className="italic text-forest">
              PadhaiBot answers them from her own notes, on her own number,
            </span>
            <br />
            <span className="italic text-forest">
              and hands her only the ones that need her.
            </span>
          </h2>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/try"
              className="bg-forest text-cream px-9 py-4 rounded-full font-medium text-lg hover:bg-forest-hover transition"
            >
              See what a student sees →
            </Link>
            <a
              href={WAITLIST_HREF}
              className="border border-line px-9 py-4 rounded-full font-medium text-lg hover:border-forest hover:text-forest transition bg-white"
            >
              Get PadhaiBot for my tuition
            </a>
          </div>
          <p className="mt-6 text-sm text-muted">
            Bot is in build. Teacher waitlist is open now.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
