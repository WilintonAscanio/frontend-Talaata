import axios from "axios";

export const addUser = async (user) => {
  try {
    await axios.post(user);
  } catch (error) {
    console.log(error);
  }
};
