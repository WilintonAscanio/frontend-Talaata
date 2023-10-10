import axios from "axios";

export const addUser = async (user) => {
  const URL = "https://localhost:7113/api/Employee";

  try {
    await axios.post(URL, user);
  } catch (error) {
    console.log(error);
  }
};
