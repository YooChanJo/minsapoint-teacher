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

export interface BackendAccusationQuery {
  startDate?: string;
  endDate?: string;
  valid?: boolean;
  accuserId?: string;
  defendantId?: string;
  courtId?: number;
}

export interface BackendCreateAccusationForm {
  article: string;
  defendantIds: string[];
  penaltyPoints: number;
}

export interface BackendAccusationPatch {
  courtId?: number;
  accuserId?: string;
  defendantId?: string;
  date?: string;
  article?: string;
  penaltyPoints?: number;
  valid?: boolean;
}

const AccusationAPI = {
  getAccusationsFromCurrentUser: async (
    query: BackendAccusationQuery,
    accessToken: string
  ): Promise<BackendAccusation[]> => {
    try {
      const response = await HTTPRequestAPI.private.get("/api/accusation/list", accessToken, {
        params: { ...query },
      });
      return response.data;
    } catch (e) {
      throw e;
    }
  },
  createNewAccusationFromCurrentUser: async (
    form: BackendCreateAccusationForm,
    accessToken: string
  ): Promise<BackendAccusation[]> => {
    try {
      const response = await HTTPRequestAPI.private.post("/api/accusation/list", form, accessToken);
      return response.data;
    } catch (e) {
      throw e;
    }
  },
  editAccusationFromCurrentUser: async (
    accusationId: string,
    edits: BackendAccusationPatch,
    accessToken: string
  ): Promise<BackendAccusation[]> => {
    try {
      const response = await HTTPRequestAPI.private.patch(
        `/api/accusation/list/${accusationId}`,
        edits,
        accessToken
      );
      return response.data;
    } catch (e) {
      throw e;
    }
  },
};

export default AccusationAPI;
