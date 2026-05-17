import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ReservationFab from "@/components/ReservationFab";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "업성 푸르지오 레이크시티 모델하우스",
  description:
    "업성 푸르지오 레이크시티 분양정보 · 성성호수공원 · 선착순 로얄 동·호수 분양",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{
          // 하단 고정 CTA 바(약 60px) + iOS safe-area 만큼 본문 아래 여백 확보
          paddingBottom: "calc(60px + env(safe-area-inset-bottom))",
        }}
      >
        <Header />
        {children}
        <ReservationFab />
      </body>
    </html>
  );
}
