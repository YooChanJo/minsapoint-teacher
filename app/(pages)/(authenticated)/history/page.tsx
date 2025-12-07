"use client";

import AccusationAPI, { BackendAccusation } from "@/app/api/accusation";
import UserAPI from "@/app/api/user";
import { useAuth } from "@/app/components/auth-provider";
import { useEffect, useState } from "react";

interface HistoryItemType extends BackendAccusation {
  defendantName: string;
}

export default function HistoryPage() {
  const { accessToken } = useAuth();
  const [historyList, setHistoryList] = useState<HistoryItemType[]>([]);

  useEffect(() => {
    async function init() {
      try {
        const userInfo = await UserAPI.getCurrentUserInfo(accessToken);
        const response = await AccusationAPI.getAccusationsFromCurrentUser(
          { accuserId: userInfo._id },
          accessToken
        );
        const updatedAccusations: HistoryItemType[] = await Promise.all(response.map(async (accusation) => {
          const defendantName = await UserAPI.getUserNameFromID(accusation.defendantId, accessToken);
          return { ...accusation, defendantName };
        }));
        setHistoryList(updatedAccusations);
      } catch (e) {
        console.error(e);
      }
    }
    init();
  });

  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<HistoryItemType | null>(null);

  const open = (item: HistoryItemType) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const close = () => {
    setOpenModal(false);
    setSelectedItem(null);
  };

  const handleWithdrawal = async () => {
    try {
      if(!selectedItem) throw new Error("Item not selected");
      const response = await AccusationAPI.editAccusationFromCurrentUser(selectedItem._id, { valid: false }, accessToken);
      response;
    } catch (e) {
      throw e;
    } finally {
      setOpenModal(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[var(--background)] px-4 py-6">
      <h1 className="text-xl font-bold mb-6 text-[var(--color-text)]">History</h1>

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
            <div className="text-lg font-bold text-[var(--color-text)]">{item.article}</div>
            <div className="text-sm text-[var(--color-text-subtle)] mt-1">{item.defendantName}</div>
            <div className="text-sm text-[var(--color-text-subtle)] mt-1">{item.date.split("T")[0]}</div>
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
            <h2 className="text-lg font-bold text-[var(--color-text)]">{selectedItem.article}</h2>
            <p className="text-sm text-[var(--color-text-subtle)] mt-2">{selectedItem.defendantName}</p>
            <p className="text-sm text-[var(--color-text-subtle)] mt-2">{selectedItem.date.split("T")[0]}</p>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleWithdrawal}
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
