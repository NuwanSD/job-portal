import axios from "axios";

const baseUrl = "http://localhost:3000";

export async function getAllJobSeekers() {
  try {
    const { data } = await axios.get(`${baseUrl}/job_seeker`);

    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function getJobSeekerById({ user_id }) {
  try {
    const { data } = await axios.get(`${baseUrl}/job_seeker/${user_id}`);

    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function saveJobSeeker(data) {
  try {
    const response = await axios.post(`${baseUrl}/job_seeker`, data);

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteJobSeeker({ user_id }) {
  try {
    const response = await axios.delete(`${baseUrl}/job_seeker/${user_id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function updateJobSeeker({ user_id, data }) {
  try {
    const response = await axios.put(`${baseUrl}/job_seeker/${user_id}`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
}
