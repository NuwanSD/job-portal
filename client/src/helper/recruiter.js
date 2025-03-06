import axios from "axios";

const baseUrl = "http://localhost:3000";

export async function getAllRecruiters() {
  try {
    const { data } = await axios.get(`${baseUrl}/recruiter`);

    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function getRecruiterById({ user_id }) {
  try {
    const { data } = await axios.get(`${baseUrl}/recruiter/${user_id}`);

    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function saveRecruiter(data) {
  try {
    const response = await axios.post(`${baseUrl}/recruiter`, data);

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteRecruiter({ user_id }) {
  try {
    const response = await axios.delete(`${baseUrl}/recruiter/${user_id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function updateRecruiter({ user_id, data }) {
  try {
    const response = await axios.put(`${baseUrl}/recruiter/${user_id}`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
}
