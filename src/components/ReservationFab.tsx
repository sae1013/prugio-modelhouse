"use client";

import { useState } from "react";
import ReservationModal from "./ReservationModal";

/**
 * 우측 하단 floating "방문예약" 버튼.
 * - sticky 헤더와 같은 z-index 충돌을 피하기 위해 z-40 (모달은 z-60)
 * - 모바일 safe-area inset 고려 (env(safe-area-inset-bottom))
 */
export default function ReservationFab() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="방문예약 접수"
        className="fixed z-40 right-4 sm:right-6 bottom-4 sm:bottom-6 flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3.5 sm:px-6 sm:py-4 text-white text-sm sm:text-base font-bold shadow-xl ring-1 ring-black/10 transition hover:bg-zinc-800 active:bg-zinc-700"
        style={{ paddingBottom: "max(0.875rem, env(safe-area-inset-bottom))" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4 sm:h-5 sm:w-5"
          aria-hidden="true"
        >
          <path d="M7 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1h1a2 2 0 012 2v13a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm12 8H5v9h14v-9z" />
        </svg>
        <span>방문예약</span>
      </button>

      <ReservationModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
