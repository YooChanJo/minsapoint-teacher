import Link from "next/link";

export default function HomePage() {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center px-4 py-6"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* 메인 카드 컨테이너 */}
      <div className="w-full max-w-2xl bg-white rounded-md shadow-md p-2 ">
        {/* History */}
        <Link
          href="/history"
          className="flex flex-row items-center justify-between px-2 py-4 rounded-xl hover:bg-gray-50 transition"
        >
          {/* Left icon placeholder */}
          <div className="w-10 h-10 flex items-center justify-center text-lg rounded-lg bg-gray-100">
            (아이콘)
          </div>

          {/* Center */}
          <div className="flex flex-col flex-1 ml-3">
            <h2 className="text-lg font-semibold" style={{ color: "var(--color-text-primary)" }}>
              History
            </h2>
            <p className="text-sm mt-1" style={{ color: "var(--color-text-secondary)" }}>
              기소항목 & 상점 추천 히스토리
            </p>
          </div>

          {/* Arrow */}
          <div className="text-xl ml-2">›</div>
        </Link>

        {/* Divider */}
        <div className="w-full h-px my-1" style={{ background: "var(--color-border)" }} />

        {/* Reward */}
        <Link
          href="/reward-points"
          className="flex flex-row items-center justify-between px-2 py-4 rounded-xl hover:bg-gray-50 transition"
        >
          <div className="w-10 h-10 flex items-center justify-center text-lg rounded-lg bg-gray-100">
            (아이콘)
          </div>

          <div className="flex flex-col flex-1 ml-3">
            <h2 className="text-lg font-semibold" style={{ color: "var(--color-text-primary)" }}>
              Reward Points
            </h2>
            <p className="text-sm mt-1" style={{ color: "var(--color-text-secondary)" }}>
              상점 추천
            </p>
          </div>

          <div className="text-xl ml-2">›</div>
        </Link>

        {/* Divider */}
        <div className="w-full h-px my-1" style={{ background: "var(--color-border)" }} />

        {/* Penalty */}
        <Link
          href="/accuse"
          className="flex flex-row items-center justify-between px-2 py-4 rounded-xl hover:bg-gray-50 transition"
        >
          <div className="w-10 h-10 flex items-center justify-center text-lg rounded-lg bg-gray-100">
            (아이콘)
          </div>

          <div className="flex flex-col flex-1 ml-3">
            <h2 className="text-lg font-semibold" style={{ color: "var(--color-text-primary)" }}>
              Penalty Points
            </h2>
            <p className="text-sm mt-1" style={{ color: "var(--color-text-secondary)" }}>
              기소
            </p>
          </div>

          <div className="text-xl ml-2">›</div>
        </Link>
      </div>
    </div>
  );
}
