export function PhoneMock() {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      {/* phone frame */}
      <div className="rounded-[36px] bg-ink p-3 shadow-2xl shadow-forest/20">
        <div className="rounded-[28px] bg-cream overflow-hidden aspect-[9/18] flex flex-col">
          {/* WhatsApp-style top bar — the TEACHER's number */}
          <div className="bg-forest text-cream px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cream/20 flex items-center justify-center font-serif">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium leading-tight">
                Sunita Ma&apos;am · Tuition
              </span>
              <span className="text-[10px] opacity-70 leading-tight">
                online · PadhaiBot on duty
              </span>
            </div>
          </div>

          {/* chat body */}
          <div className="flex-1 bg-[#F0EAD9] p-3 flex flex-col gap-2 text-[11px]">
            {/* incoming: student photo */}
            <div className="self-end max-w-[85%] bg-[#DCF8C6] rounded-lg p-2 shadow-sm">
              <div className="w-40 h-24 bg-gradient-to-br from-white to-line rounded mb-1 flex items-center justify-center text-muted text-[9px]">
                📷 worksheet_q3.jpg
              </div>
              <div className="text-ink font-hindi">
                Ma&apos;am, ye ratio ka Q3 samjh nahi aaya
              </div>
              <div className="text-right text-[8px] text-muted mt-1">
                10:14 pm ✓✓
              </div>
            </div>

            {/* bot reply (in the teacher's voice, grounded in her notes) */}
            <div className="self-start max-w-[90%] bg-white rounded-lg p-2 shadow-sm font-hindi">
              <div className="font-medium mb-1 text-forest">
                Yaad karo, class mein kya bola tha —
              </div>
              <div className="text-ink leading-snug">
                Pehle dono numbers ko ek hi unit mein lao. Phir HCF nikaalo,
                dono ko usse divide karo.
              </div>
              <div className="mt-1 text-ink leading-snug">
                <span className="font-medium">Step 1:</span> HCF of 24 aur 36 =
                12.
              </div>
              <div className="text-ink leading-snug">
                <span className="font-medium">Step 2:</span> 24÷12 : 36÷12 = 2:3.
              </div>
              <div className="text-[9px] text-muted mt-1 italic">
                Source: Sunita Ma&apos;am ki notes, Ch. 12 · Ratio &amp; Prop.
              </div>
              <div className="text-right text-[8px] text-muted mt-1">
                10:14 pm
              </div>
            </div>

            {/* voice note */}
            <div className="self-start max-w-[70%] bg-white rounded-lg p-2 shadow-sm flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-forest text-cream flex items-center justify-center text-xs">
                ▶
              </div>
              <div className="flex-1 h-1.5 bg-line rounded-full">
                <div className="w-1/3 h-full bg-forest rounded-full" />
              </div>
              <span className="text-[9px] text-muted">0:18</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
