import axios from "axios";

export const getUser = async () => {
  const URL = "";
  try {
    const { data } = await axios.get(URL);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
