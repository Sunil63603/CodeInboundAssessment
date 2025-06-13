import axios from "axios";

const API_BASE = import.meta.env.VITE_BACKEND_URL;

export const submitAnswer = (data) =>
  axios.post(`${API_BASE}/api/answers`, data);

export const getAnswers = () => axios.get(`${API_BASE}/api/answers`);

//you can move this to DB  later.
export const questions = [
  {
    id: "q1",
    type: "rating",
    text: "How satisfied are you with our products?",
    scale: 5,
  },
  {
    id: "q2",
    type: "rating",
    text: "How fair are the prices compared to similar retailers?",
    scale: 5,
  },
  {
    id: "q3",
    type: "rating",
    text: "How satisfied are you with the value for money of your purchase?",
    scale: 5,
  },
  {
    id: "q4",
    type: "rating",
    text: "On a scale of 1-10 how would you recommend us to your friends and family?",
    scale: 10,
  },
  {
    id: "q5",
    type: "text",
    text: "What could we do to improve our service?",
  },
];
