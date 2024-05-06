import axios from "./axios";

// Login

export const registerRequest = (user) => axios.post(`/register`, user);
export const loginRequest = (user) => axios.post(`/login`, user);

//Admin
export const registerRequestSuperAdmin = (user) => axios.post(`/create-superadmin`, user);
export const loginRequestSuperAdmin = (user) => axios.post(`/login-admin`, user);

// superUsuario

// export const createSuperAdmin = async (superAdminData) => {
//   try {
//     const res = await axios.post("/create-superadmin", superAdminData);
//     console.log("Superadministrador creado:", res.data);
//     // Manejar la respuesta del servidor si es necesario
//   } catch (error) {
//     console.error("Error al crear superadministrador:", error);
//     // Manejar errores si es necesario
//   }
// };


// Verificar login
export const verityTokenRequet = () => axios.get('/verify');


// placas

export const getPlates = (user) => axios.get('/plates', user);

// // export const getPlates = async () => {
// //   try {
// //     const response = await axios.get("/plates");
// //     return response.data;
// //   } catch (error) {
// //     console.error("Error al obtener las placas:", error);
// //     throw new Error("Error al obtener las placas");
// //   }
// // };

// export const checkPlacaById = async (id) => {
//   try {
//     // Hacer una solicitud GET al endpoint correspondiente en tu backend para obtener la placa por ID
//     const response = await axios.get(`/plates/${id}`);
//     return response.data; // Devolver la información de la placa si existe
//   } catch (error) {
//     console.error('Error al verificar la placa por ID:', error);
//     return null; // Devolver null si hay un error o la placa no existe
//   }
// };