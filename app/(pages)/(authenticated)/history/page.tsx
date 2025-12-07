"use client";

import { useAuth } from "@/app/components/auth-provider";
import { useState } from "react";

interface HistoryItem {
  title: string;
  people: string;
}

export default function HistoryPage() {
  const { accessToken } = useAuth();

  const historyList: HistoryItem[] = [
    {
      title: "Abasent from morning exercise",
      people: "정창윤 외 10명",
    },
    {
      title: "Outdoor Regulation",
      people: "28조유찬, 28정창윤",
    },
    {
      title: "Outdoor Regulation",
      people: "28조유찬, 28정창윤",
    },
        {
      title: "Abasent from morning exercise",
      people: "정창윤 외 10명",
    },
    {
      title: "Outdoor Regulation",
      people: "28조유찬, 28정창윤",
    },
    {
      title: "Outdoor Regulation",
      people: "28조유찬, 28정창윤",
    },
        {
      title: "Abasent from morning exercise",
      people: "정창윤 외 10명",
    },
    {
      title: "Outdoor Regulation",
      people: "28조유찬, 28정창윤",
    },
    {
      title: "Outdoor Regulation",
      people: "28조유찬, 28정창윤",
    },
        {
      title: "Abasent from morning exercise",
      people: "정창윤 외 10명",
    },
    {
      title: "Outdoor Regulation",
      people: "28조유찬, 28정창윤",
    },
    {
      title: "Outdoor Regulation",
      people: "28조유찬, 28정창윤",
    },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<HistoryItem | null>(null);

  const open = (item: HistoryItem) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const close = () => {
    setOpenModal(false);
    setSelectedItem(null);
  };

  const handleCancel = () => {
    console.log("취하됨:", selectedItem);
    setOpenModal(false);
  };

  return (
    <div className="w-full min-h-screen bg-[var(--background)] px-4 py-6">
      <h1 className="text-xl font-bold mb-6 text-[var(--color-text)]">
        History
      </h1>

      <div className="flex flex-col gap-4">
        {historyList.map((item, idx) => (
          <button
            key={idx}
            onClick={() => open(item)}
            className="
              w-full text-left
              bg-[var(--color-surface)]
              rounded-[var(--radius-lg)]
              shadow-sm
              p-4
              transition
              active:scale-[0.98]
            "
          >
            <div className="text-lg font-bold text-[var(--color-text)]">
              {item.title}
            </div>
            <div className="text-sm text-[var(--color-text-subtle)] mt-1">
              {item.people}
            </div>
          </button>
        ))}
      </div>

      {/* 모달 */}
      {openModal && selectedItem && (
        <div
          className="
            fixed inset-0
            bg-black/40
            flex items-center justify-center
            z-50
          "
        >
          <div
            className="
              bg-[var(--color-surface)]
              rounded-[var(--radius-lg)]
              shadow-lg
              p-6
              w-[80%]
              max-w-[360px]
            "
            style={{ animation: "scaleIn 0.2s ease-out" }}
          >
            <h2 className="text-lg font-bold text-[var(--color-text)]">
              {selectedItem.title}
            </h2>
            <p className="text-sm text-[var(--color-text-subtle)] mt-2">
              {selectedItem.people}
            </p>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleCancel}
                className="
                  flex-1 py-2
                  bg-[var(--color-accent)]
                  text-white
                  rounded-[var(--radius-md)]
                  font-medium
                  active:scale-95
                "
              >
                취하
              </button>

              <button
                onClick={close}
                className="
                  flex-1 py-2
                  bg-[var(--color-secondary-hover)]
                  text-[var(--color-text)]
                  rounded-[var(--radius-md)]
                  font-medium
                  active:scale-95
                "
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// 모달 애니메이션 추가
const style = `
@keyframes scaleIn {
  0% { transform: scale(0.9); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
`;

if (typeof document !== "undefined") {
  const s = document.createElement("style");
  s.innerHTML = style;
  document.head.appendChild(s);
}
