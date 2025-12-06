"use client";

import UserAPI from "@/app/api/user";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { theme, resolvedTheme } = useTheme();
  const router = useRouter();
  // need security checks
  const onFormSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    if (email === "" || password === "") return;
    try {
      const response = await UserAPI.signUserIn(email, password);
      if (!!response) router.replace("/");
    } catch (e) {
      console.error("Login error: ", e);
      throw e;
    }
  };
  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-col items-center" onSubmit={onFormSubmit}>
        <input
          className={`border-1 border-${theme == "system" ? (resolvedTheme == "light" ? "black" : "white") : theme == "light" ? "black" : "white"}`}
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className={`border-1 border-${theme == "system" ? (resolvedTheme == "light" ? "black" : "white") : theme == "light" ? "black" : "white"}`}
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="border-1 bg-blue-500">
          Login Let's gogogogo
        </button>
      </form>
    </div>
  );
}
