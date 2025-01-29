import api from "./api";

export const Whoami = async()=>{

    const response = await api.get('/user/whoami')
    console.log(response.data)
    return response.data;
}
