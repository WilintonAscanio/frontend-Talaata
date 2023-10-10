import axios from "axios";

export const getUser = async () => {
  const URL = "https://localhost:7113/api/Employee";
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};
