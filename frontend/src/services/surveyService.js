import axios from "axios";

const API_BASE = import.meta.env.VITE_BACKEND_URL;

export const submitSurvey = (sessionId, answers) => {
  return axios.post(`${API_BASE}/api/survey`, {
    sessionId,
    answers,
    status: "COMPLETED",
  });
};
