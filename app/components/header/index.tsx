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
        console.error("Failed to get user info from header: ", e);
        throw e;
      }
    }
    init();
  });
  return (
    <div>
      <Link href="/" className="flex flex-row items-center justify-between">
        <h1 draggable="false" className="select-none text-xl font-bold">
          MinsaPoint
        </h1>
        <div className="flex flex-row items-center justify-between">
          <h2>{name} 선생님</h2>
          <Link href="/settings">Click Me</Link>
        </div>
      </Link>
    </div>
  );
}
