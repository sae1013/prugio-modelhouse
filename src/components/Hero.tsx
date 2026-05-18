type Props = {
  vimeoSrc: string;
  /** 영상 위에 얹을 텍스트 라인들. [0]은 작게, [1]부터 크게 */
  lines: string[];
};

/**
 * 최상단 히어로.
 * - Vimeo background player를 화면을 가득 채우도록 cover
 * - 16:9 영상을 viewport에 cover하려면 둘 중 큰 비율로 맞춰야 함:
 *     영상폭 = max(100vw, (100vh * 16/9))
 *     영상높이 = max(100vh, (100vw * 9/16))
 *   → aspect-video 비율의 박스를 min(w,h) 기준으로 양쪽 다 키워서 cover 효과
 */
export default function Hero({ vimeoSrc, lines }: Props) {
  return (
    <section
      aria-label="모델하우스 메인"
      className="relative w-full h-[100svh] min-h-[520px] overflow-hidden bg-white"
    >
      {/* cover 컨테이너: 화면 가로/세로 중 큰 쪽에 맞춰 16:9 박스를 키움 */}
      {/* scale-110으로 영상 자체의 letterbox(위·아래 검정띠)를 viewport 밖으로 밀어냄 */}
      {/* scale-125 로 영상 자체의 letterbox(위·아래 검정띠)를 viewport 밖으로 밀어냄 */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[max(100vw,_177.78svh)] h-[max(100svh,_56.25vw)] scale-125">
        <iframe
          src={vimeoSrc}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="업성 푸르지오 레이크시티 모델하우스"
          className="block h-full w-full pointer-events-none"
        />
      </div>

      {/* 가독성용 어두운 오버레이 */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/55" />

      {/* 텍스트 */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center text-white">
        {lines.map((line, i) => (
          <p
            key={i}
            className={
              i === 0
                ? "text-sm sm:text-base tracking-[0.25em] mb-3 sm:mb-4 drop-shadow-md"
                : "text-2xl sm:text-4xl md:text-5xl font-semibold tracking-wider leading-snug drop-shadow-lg"
            }
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
