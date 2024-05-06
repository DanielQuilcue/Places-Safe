import axios from "./axios.js";

export const getRecord = async () => {
  try {
    const response = await axios.get("/record");
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getRecordId = async (id) => {
  try {
    const response = await axios.get(`/record/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};


// visitor

// const id = "662b06e90e236495f3eab71e"
export const getMotos = async () => {
  try {
    const response = await axios.get("/admin/get-motos");
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export const getCarros = async () => {
  try {
    const response = await axios.get("/admin/get-carros");
    return response.data;
  } catch (e) {
    console.log(e);
  }
}


export const getHeader = async (id) => {
  try {
    const res = await axios.get(`/admin/get-header/${id}`);
    return res.data
  } catch (e) {
    console.log(e);
  }
}

