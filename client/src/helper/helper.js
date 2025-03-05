import axios from "axios";
import { jwtDecode } from "jwt-decode";

//get username from the token
export async function getUserId() {
  const token = localStorage.getItem("token");
  if (!token) return Promise.reject("Cannot fnid Token");

  let decoded = jwtDecode(token);

  return decoded;
}

export async function authenticate(username) {
  try {
    return await axios.post("http://localhost:3000/auth/user", { username });
  } catch (error) {
    console.log(error);
  }
}

export async function getUserByUsername({ username }) {
  try {
    const { data } = await axios.post(
      `http://localhost:3000/user/username/${username}`
    );

    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function registerUser(credentials) {
  try {
    const {
      data: { message },
      status,
    } = await axios.post("http://localhost:3000/user/register", credentials);

    return { message };
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(response) {
  try {
    const token = await localStorage.getItem("token");
    const data = await axios.patch(
      "http://localhost:3000/user/update",
      response,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return { data };
  } catch (error) {
    console.log(error);
  }
}
