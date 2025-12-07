"use client";

import UserAPI from "@/app/api/user";
import Link from "next/link";
import { useAuth } from "../auth-provider";
import { useEffect, useState } from "react";

export default function Header() {
  const { accessToken } = useAuth();
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    async function init() {
      try {
        setName((await UserAPI.getCurrentUserInfo(accessToken)).name);
      } catch (e) {
        console.error("Failed to get user info from header:", e);
      }
    }
    init();
  }, [accessToken]);

  return (
<header
  className="
    w-full
    fixed top-0 left-0 z-50
    border-b
    flex items-center justify-between
    px-4 py-3
    shadow-sm
  "
  style={{
    backgroundColor: "var(--color-surface)",
    borderColor: "var(--color-border)",
  }}
>

      {/* Left Section - Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <h1
          className="
            text-xl font-bold select-none
            transition-colors duration-200
          "
          style={{ color: "var(--color-primary)" }}
        >
          MinsaPoint
        </h1>
      </Link>

      {/* Right Section - Profile (Clickable) */}
      <Link
        href="/settings"
        className="
          flex items-center gap-3 px-2 py-1 rounded-md
          transition-all duration-150 cursor-pointer
        "
        style={{
          backgroundColor: "transparent",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--color-secondary-hover)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "transparent")
        }
      >
        {/* Avatar */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: "var(--color-secondary-hover)",
            color: "var(--color-secondary-active)",
            fontWeight: "var(--font-weight-medium)",
          }}
        >
          {name ? name[0] : "?"}
        </div>

        {/* Name */}
        <span
          className="text-sm"
          style={{ color: "var(--color-text)" }}
        >
          {name ? `${name} 선생님` : "Loading..."}
        </span>
      </Link>
    </header>
  );
}
