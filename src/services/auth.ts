import api from "./api.ts";


export const login = async (username: string) => {
  const response = await api.post("/user/signin", { 
    username:username
   });
  return response.data;
};