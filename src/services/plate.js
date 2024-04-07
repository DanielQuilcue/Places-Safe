import axios from './axios'

export const getPlatesRequest = () => axios.get('/plates',)

export const getPlateRequest = (id) => axios.get(`/plates/${id}`);

export const createPlatesRequest = (plate) => axios.post('/plates', plate);

export const updatePlatesRequest = (plate) => axios.put(`/plates/${plate._id}`, plate);

export const deletePlatesRequest = (id) => axios.delete(`/plates/${id}`, id);