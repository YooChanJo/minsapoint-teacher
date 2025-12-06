"use client";

import UserAPI, { BackendUserRole } from "@/app/api/user";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useAuth } from "../auth-provider";

/* Need distinction between wifi & server error etc --> add error handling */

function RouteProtector({ role, children }: { role: BackendUserRole; children: ReactNode }) {
  const { userLoggedIn, accessToken } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    async function init() {
      setLoading(true);
      if (!userLoggedIn) {
        console.error("User not logged in thus cannot access this route");
        router.replace("/login");
      } else {
        try {
          const currentUserInfo = await UserAPI.getCurrentUserInfo(accessToken);
          if (currentUserInfo.role != role) {
            await UserAPI.signUserOut();
            router.replace("/login");
          }
        } catch (e) {
          /// ??????? WHy am i here?
          console.error("Failed to get current user info: ", e);
          await UserAPI.signUserOut();
          router.replace("/login");
        }
      }
      setLoading(false);
    }
    init();
  }, [userLoggedIn, accessToken]);
  return !loading && <>{children}</>;
}

export { RouteProtector };
