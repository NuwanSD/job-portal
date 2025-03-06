import axios from "axios";

const baseUrl = "http://localhost:3000";

export async function getAllJobTag() {
  try {
    const { data } = await axios.get(`${baseUrl}/job_tag`);

    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function getJobTagById({ tag_id }) {
  try {
    const { data } = await axios.get(`${baseUrl}/job_tag/${tag_id}`);

    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function saveJobTag(data) {
  try {
    const response = await axios.post(`${baseUrl}/job_tag`, data);

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteJobTag({ tag_id }) {
  try {
    const response = await axios.delete(`${baseUrl}/job_tag/${tag_id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function updateJobTag({ tag_id, data }) {
  try {
    const response = await axios.put(`${baseUrl}/job_tag/${tag_id}`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
}
