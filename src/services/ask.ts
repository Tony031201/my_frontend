import api from "./api.ts";

export const ask = async (question: string) => {
  const response = await api.post("/conversation/pred", { 
    question:question
   });
  return response.data.answer;
};