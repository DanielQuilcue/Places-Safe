import axios from "axios";

const API = 'http://localhost:3000/api'

export const registerPlaca = user => axios.post(`${API}/register`, user)