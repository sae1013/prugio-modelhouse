"use client";

import { useState } from "react";
import ReservationModal from "./ReservationModal";

/**
 * 화면 하단 고정 CTA 바 (모든 스크롤 위치에서 항상 노출).
 * 좌 50% 전화걸기 / 우 50% 방문예약.
 *
 * 스타일:
 * - 깊은 다크 배경 + 골드 액센트 (분양 럭셔리 톤)
 * - 상단 골드 그라데이션 페이드 라인
 * - 가운데 골드 톤 구분선
 * - 호버 시 부드러운 amber 글로우
 *
 * z-index/safe-area:
 * - z-40 (모달은 z-60, 모달 열려있을 땐 가려짐)
 * - safe-area-inset-bottom 대응
 * - body padding-bottom 으로 본문 마지막 콘텐츠 가림 방지
 */
export default function ReservationFab() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="fixed inset-x-0 bottom-0 z-40 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 text-white shadow-[0_-12px_32px_-12px_rgba(0,0,0,0.6)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {/* 상단 골드 페이드 라인 */}
        <div
          aria-hidden="true"
          className="absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"
        />

        <div className="flex">
          <a
            href="tel:1688-6251"
            aria-label="전화 걸기 1688-6251"
            className="group relative flex flex-1 basis-1/2 items-center justify-center gap-2 py-4 sm:py-5 text-sm sm:text-base font-bold tracking-wide transition-colors hover:bg-white/[0.04] active:bg-white/[0.08]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.45)] transition-transform group-hover:scale-110"
              aria-hidden="true"
            >
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.24 1.01l-2.21 2.21z" />
            </svg>
            <span className="bg-gradient-to-b from-white to-zinc-200 bg-clip-text text-transparent">
              전화하기
            </span>
          </a>

          {/* 가운데 골드 구분선 */}
          <span
            aria-hidden="true"
            className="w-px self-stretch bg-gradient-to-b from-transparent via-amber-400/40 to-transparent"
          />

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="방문예약 접수"
            className="group relative flex flex-1 basis-1/2 items-center justify-center gap-2 py-4 sm:py-5 text-sm sm:text-base font-bold tracking-wide transition-colors hover:bg-white/[0.04] active:bg-white/[0.08]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.45)] transition-transform group-hover:scale-110"
              aria-hidden="true"
            >
              <path d="M7 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1h1a2 2 0 012 2v13a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm12 8H5v9h14v-9z" />
            </svg>
            <span className="bg-gradient-to-b from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              방문예약
            </span>
          </button>
        </div>
      </div>

      <ReservationModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
