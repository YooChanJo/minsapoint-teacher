import HTTPRequestAPI from "../http-request";

export interface BackendAccusation {
  _id: string;
  courtId: number;
  accuserId: string;
  defendantId: string;
  date: string;
  article: string;
  penaltyPoints: number;
  valid: boolean;
}

const AccusationAPI = {
  getCurrentUserAccusations: async (accessToken: string): Promise<BackendAccusation[]> => {
    try {
      const response = await HTTPRequestAPI.private.get("/api/me/accusations", accessToken);
      return response.data;
    } catch (e) {
      console.error("AccusationAPI getCurrentUserAccusation Func: ", e);
      throw e;
    }
  },
};

export default AccusationAPI;
