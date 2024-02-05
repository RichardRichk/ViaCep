import axios from "axios";

const viaCepUri = `https://viacep.com.br/ws/`
              
export const api = axios.create({
  baseURL: viaCepUri
})
