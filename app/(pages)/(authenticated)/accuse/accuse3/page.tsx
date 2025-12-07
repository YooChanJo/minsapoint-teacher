"use client";

import React from "react";
import Link from "next/link";

export default function AccuseEndPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--color-text)] px-6">

      {/* 제목 */}
      <h1 className="text-4xl font-bold text-center mb-16">
        벌점을 성공적으로 부과하였습니다
      </h1>

      {/* 떠있는 버튼 */}
      
      <Link
      href="/"
        className="
          px-10 py-4 rounded-[var(--radius-lg)]
          bg-[var(--color-primary)] text-white text-lg font-medium
          shadow-[var(--shadow-lg)]
          transition-all
          animate-float
          hover:scale-105 active:scale-95
          hover:shadow-[var(--shadow-md)]
        "
      >
        홈화면으로 돌아가기
      </Link>
    </div>
  );
}
