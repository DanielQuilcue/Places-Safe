import axios from "./axios.js";

export const getParking = async () => {
  try {
    const response = await axios.get("/parking-get");
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const createParking = async () => {
  try {
    const response = await axios.post("/parking")
    return response.data
  } catch (e) {
    console.log(e);
  }
}