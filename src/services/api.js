import axios from "axios";

// Crear una instancia de Axios con la URL base de tu API
const instance = axios.create({
  baseURL: 'http://localhost:3000/api'
});

const apiRequest = async (method, endpoint, data) => {
  try {
    const response = await instance[method](endpoint, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error en la solicitud');
  }
};

// Métodos para realizar solicitudes específicas
export const registerPlaca = async (user) => {
  return apiRequest('post', '/register', user);
};

export const getData = async (user) => {
  return apiRequest('get', '/plates', user);
};

export const checkPlaca = async (placa) => {
  try {
    const response = await instance.get(`/plates/${placa}`);
    return response.data;
  } catch (error) {
    // console.error('Error fetching placa data:', error);
    // throw new Error('Error fetching placa data');
    console.error('Error al verificar la placa:', error);
    return null;
  }
};

// Register
export const registerSet = async (user) => {
  return apiRequest('post', '/register', user);
};

export const login = async (user) => {
  return apiRequest('post', '/login', user);
};

//registerfinal
// export const registerRequest = async (user) =>
//   axios.post(`/register`, user);