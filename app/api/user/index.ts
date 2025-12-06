import { firebaseAuth } from "@/app/config/firebase";
import HTTPRequestAPI from "../http-request";
import { signInWithEmailAndPassword, signOut, updatePassword } from "firebase/auth";

export type BackendUserRole = "STUDENT" | "ACCUSER" | "DEPT_OF_JUSTICE" | "ADMIN";

export interface BackendUser {
  _id: string; // id offered by firestore
  firebaseUID: string; // id offered by firebase authentication
  role: BackendUserRole;
  name: string;
  studentNumber?: number;
  penaltyPoints?: number;
  rewardPoints?: number;
  hasCourt?: boolean;
}

const UserAPI = {
  signUserIn: async (email: string, password: string) => {
    try {
      return await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (e) {
      console.error("UserAPI signUserIn Func: ", e);
      throw e;
    }
  },
  signUserOut: async () => {
    try {
      return await signOut(firebaseAuth);
    } catch (e) {
      console.error("UserAPI signUserOut Func: ", e);
      throw e;
    }
  },
  changeUserPassword: async (newPassword: string) => {
    try {
      if (!firebaseAuth.currentUser)
        throw new Error("Firebase Auth Error: currentUser does not exist");
      return await updatePassword(firebaseAuth.currentUser, newPassword);
    } catch (e) {
      console.error("UserAPI: changeUserPassword Func: ", e);
      throw e;
    }
  },
  getCurrentUserInfo: async (accessToken: string): Promise<BackendUser> => {
    try {
      const response = await HTTPRequestAPI.private.get("/api/me", accessToken);
      return response.data;
    } catch (e) {
      console.error("UserAPI: getCurrentUserInfo Func: ", e);
      throw e;
    }
  },
  getUserNameFromID: async (id: string, accessToken: string): Promise<string> => {
    try {
      const response = await HTTPRequestAPI.private.get(`/api/user/name/${id}`, accessToken);
      return response.data;
    } catch (e) {
      console.error("UserAPI: getUserNameFromID Func: ", e);
      throw e;
    }
  },
};

export default UserAPI;
