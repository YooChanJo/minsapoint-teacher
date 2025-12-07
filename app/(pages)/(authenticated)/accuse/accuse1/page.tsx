"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const sampleItems = [
  "아침운동 불참",
  "지각",
  "무단 외출",
  "기숙사 규정 위반",
  "수업 태도 불량",
  "복장 규정 위반",
  "청소 불이행",
  "휴대폰 규정 위반",
];

export default function SelectIssuePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleNext = () => {
    if (!selected) return;
    router.push("/accuse/accuse2"); // 페이지 이동
  };

  const filteredItems = sampleItems.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--color-text)] px-6">

      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold leading-tight">기소 항목 선택하기</h1>
      </div>

      <div
        className="
          w-160 rounded-[var(--radius-lg)] bg-[var(--color-surface)]
          shadow-[var(--shadow-md)] border border-[var(--color-border)]
          py-6 px-4
        "
      >
        {/* 🔍 검색창 */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="검색하기..."
          className="
            w-full px-4 py-2 mb-4 rounded-[var(--radius-md)]
            bg-[var(--background)] border border-[var(--color-border)]
            text-[var(--color-text)]
            focus:outline-none focus:border-[var(--color-primary)]
            transition-all
          "
        />

        {/* 목록 */}
        <div className="max-h-64 overflow-y-auto space-y-2 pr-1">
          {filteredItems.map((item) => {
            const isSelected = selected === item;

            return (
              <div
                key={item}
                onClick={() => setSelected(item)}
                className={`
                  w-full px-4 py-3 rounded-[var(--radius-md)] cursor-pointer 
                  transition-all border
                  ${
                    isSelected
                      ? `bg-[var(--color-secondary-hover)]
                         border-[var(--color-primary)]
                         text-[var(--color-text)]
                         font-semibold shadow-[var(--shadow-sm)]`
                      : `bg-[var(--background)]
                         border-[var(--color-border)]
                         text-[var(--color-text-muted)]
                         hover:bg-[var(--color-secondary-active)]`
                  }
                `}
              >
                {item}
              </div>
            );
          })}

          {filteredItems.length === 0 && (
            <div className="text-center text-sm text-[var(--color-text-muted)] py-3">
              일치하는 항목이 없습니다.
            </div>
          )}
        </div>
      </div>

      {/* 오른쪽 하단 고정 "다음" 버튼 */}
      <button
        onClick={handleNext}
        disabled={!selected}
        className={`
          fixed bottom-6 right-6
          px-6 py-3 rounded-[var(--radius-md)] font-medium transition-all
          transform
          ${
            selected
              ? `bg-[var(--color-primary)] text-white
                 hover:bg-[var(--color-primary-hover)]
                 active:bg-[var(--color-primary-active)]
                 hover:translate-y-[2px]
                 active:translate-y-[4px]
                 shadow-[var(--shadow-md)]
                 hover:shadow-[var(--shadow-sm)]
                 active:shadow-none
                 cursor-pointer`
              : `bg-[var(--color-border)] text-[var(--color-text-muted)]
                 cursor-not-allowed
                 shadow-none`
          }
        `}
      >
        다음
      </button>
    </div>
  );
}
