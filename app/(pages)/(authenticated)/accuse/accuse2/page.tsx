"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const sampleStudents = [
  "28기 조유찬",
  "28기 김민서",
  "28기 홍길동",
  "28기 이가은",
  "28기 최지훈",
  
];

export default function SelectStudentPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);

  const filtered = sampleStudents.filter((s) =>
    s.toLowerCase().includes(search.toLowerCase())
  );

  const toggleStudent = (name: string) => {
    if (selectedStudents.includes(name)) return;
    setSelectedStudents((prev) => [...prev, name]);
  };

  const removeStudent = (name: string) => {
    setSelectedStudents(selectedStudents.filter((s) => s !== name));
  };

  const isNextEnabled = selectedStudents.length > 0;

  const handleNext = () => {
    if (!isNextEnabled) return;
    router.push("/accuse/accuse3");
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-24 bg-[var(--background)] text-[var(--color-text)]">

      {/* 제목 */}
      <h1 className="text-3xl font-medium mb-10">기소할 학생을 선택하세요</h1>

      {/* ⭐️ 검색창 + 학생 리스트를 감싸는 영역 */}
      <div className="flex flex-col items-center w-full max-w-lg">

        {/* 검색창 */}
        <div className="flex items-center border border-[var(--color-border)] rounded-[var(--radius-md)] bg-[var(--color-surface)] px-2 py-1 w-80 mb-6 shadow-sm">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="검색…"
            className="
              flex-1 bg-transparent outline-none
              text-[var(--color-text)]
              px-2 py-1
            "
          />
          <button className="p-2 cursor-pointer hover:bg-[var(--color-secondary-hover)] rounded-[var(--radius-sm)] transition">
            🔍
          </button>
        </div>

        {/* 학생 리스트 */}
        <div className="flex flex-col gap-3 mb-8 w-full items-center">
          {filtered.map((student) => (
            <button
              key={student}
              onClick={() => toggleStudent(student)}
              className="
                w-80
                px-4 py-2 bg-[var(--color-surface)]
                rounded-[var(--radius-md)]
                border border-[var(--color-border)]
                shadow-[var(--shadow-sm)]
                hover:bg-[var(--color-secondary-active)]
                transition
                font-medium
              "
            >
              {student}
            </button>
          ))}
        </div>

      </div>
      {/* ⭐️ 감싸는 영역 끝 */}

      {/* 오른쪽 사이드 선택된 학생 목록 */}
      <div
        className="
          fixed top-24 right-6 
          w-56 
          max-h-[70vh] 
          overflow-y-auto 
          flex flex-col gap-3
          bg-[var(--color-surface)]
          border border-[var(--color-border)]
          rounded-[var(--radius-md)]
          shadow-[var(--shadow-md)]
          p-4
        "
      >
        <h2 className="text-lg font-semibold mb-2">선택된 학생</h2>

        {selectedStudents.length === 0 && (
          <p className="text-sm text-[var(--color-muted)]">아직 선택 없음</p>
        )}

        {selectedStudents.map((name) => (
          <div
            key={name}
            className="
              flex items-center justify-between
              bg-[var(--color-surface)]
              border border-[var(--color-border)]
              rounded-[var(--radius-sm)]
              px-3 py-2
            "
          >
            <span className="text-[var(--color-text)] text-sm">{name}</span>
            <button
              onClick={() => removeStudent(name)}
              className="
                px-2 py-0.5 text-sm
                bg-[var(--color-border)]
                rounded-[var(--radius-sm)]
                hover:bg-[var(--color-secondary-hover)]
                transition
              "
            >
              X
            </button>
          </div>
        ))}
      </div>

      {/* NEXT 버튼 */}
      <button
        onClick={handleNext}
        disabled={!isNextEnabled}
        className={`
          fixed bottom-6 right-6
          px-6 py-3 rounded-[var(--radius-md)] font-medium transition-all
          transform
          ${
            isNextEnabled
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
        기소를 완료하기
      </button>
    </div>
  );
}
