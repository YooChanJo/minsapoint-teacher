"use client"
import { useAuth } from "@/app/components/auth-provider";

export default function HistoryPage() {
  const { accessToken } = useAuth();
  return (
    <div>Hello History Page</div>
  );
}
