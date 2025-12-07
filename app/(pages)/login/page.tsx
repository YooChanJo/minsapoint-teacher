"use client";

import UserAPI from "@/app/api/user";
import { useRouter } from "next/navigation";
import { useState, FormEventHandler } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    if (!email || !password) return;

    try {
      const r = await UserAPI.signUserIn(email, password);
      if (r) router.replace("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[var(--color-background)] flex flex-col items-center">

      {/* 상단 일러스트 + 곡선 배경, 나중에 적당한 사진 찾아서 추가할 것 */ }
      <div className="w-full relative">
        <div className="w-full h-[260px] bg-[var(--color-primary-light)] rounded-b-[50px] flex justify-center items-center">
          <img
            src="/images/lab-illustration.png"
            className="w-56 h-56 object-contain"
            alt="Lab Illustration"
          />
        </div>
      </div>

      {/* 로그인 카드 */}
      <div className="w-full max-w-md mt-[-40px] px-6">
        <div className="bg-[var(--color-surface)] rounded-[20px] shadow-[var(--shadow-md)] px-6 py-10">

          <h1 className="text-center text-2xl font-bold text-[var(--color-text)]">
            Login
          </h1>
          <p className="text-center text-sm text-[var(--color-text-muted)] mb-8">
            Please sign in to continue.
          </p>

          <form className="flex flex-col gap-5" onSubmit={onFormSubmit}>
            {/* Email */}
            <input
              type="email"
              placeholder="E-mail address"
              className="
                w-full px-4 py-3 rounded-xl
                bg-[var(--color-background)]
                border border-[var(--color-border)]
                text-[var(--color-text)]
                placeholder-[var(--color-text-muted)]
              "
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="
                w-full px-4 py-3 rounded-xl
                bg-[var(--color-background)]
                border border-[var(--color-border)]
                text-[var(--color-text)]
                placeholder-[var(--color-text-muted)]
              "
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            {/* 버튼 */}
            <button
              type="submit"
              className="
                w-full py-3 mt-2 rounded-xl
                bg-[var(--color-primary)]
                text-white font-semibold
                shadow-[var(--shadow-sm)]
                active:scale-[0.97] transition
              "
            >
              Sign in
            </button>
          </form>

        </div>

      </div>
    </div>
  );
}
