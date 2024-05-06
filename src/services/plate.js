import axios from './axios'

export const getPlatesRequest = () => axios.get('/plates',)

export const getPlateRequest = (id) => axios.get(`/plates/${id}`);

export const createPlatesRequest = (plate) => axios.post('/plates', plate);

export const updatePlatesRequest = (id, plate) => axios.put(`/plates/${id}`, plate);

export const deletePlatesRequest = (id) => axios.delete(`/plates/${id}`, id);


// record entry and exity plate
export const recordEntryExit = (data) => axios.post('/entry', data)

export const getEntryExitRecord = () => axios.get('/record')

// create time pay
export const createTimePage = async (data) => axios.post('/pay', data)

export const getTimePage = async () => axios.get('/pays')