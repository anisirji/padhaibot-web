import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PadhaiBot — the tuition teacher's WhatsApp assistant",
  description:
    "PadhaiBot lives on your WhatsApp Business number. It answers your students' doubts from your own notes — in Hindi, in your method — and hands you a morning summary of where the batch is stuck. ₹299/month, unlimited students.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
