import axios from "axios";
import jwt_decode from "jwt-decode";

//get username from the token
export async function getUsername() {
  const token = localStorage.getItem("token");
  if (!token) return Promise.reject("Cannot fnid Token");

  let decode = jwt_decode(token);

  console.log(decode);
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
