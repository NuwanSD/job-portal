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

//get all users
export async function getAllUsers() {
  try {
    const { data } = await axios.get(`http://localhost:3000/user`);

    return { data };
  } catch (error) {
    console.log(error);
  }
}

//get user by username
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

//get user by user_id
export async function getUserById({ user_id }) {
  try {
    const { data } = await axios.get(`http://localhost:3000/user/${user_id}`);

    return { data };
  } catch (error) {
    console.log(error);
  }
}

//User registration
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

//User basic update
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

//Delete user
export async function deleteUser({ user_id }) {
  try {
    const response = await axios.delete(
      `http://localhost:3000/user/${user_id}`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}
