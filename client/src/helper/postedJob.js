import axios from "axios";

export async function getAllPostedJob() {
  try {
    const { data } = await axios.get("http://localhost:3000/posted_job");

    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function getPostedJobById({ posted_job_id }) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/posted_job/${posted_job_id}`
    );

    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function savePostedJob(data) {
  try {
    const response = await axios.post(`http://localhost:3000/posted_job`, data);

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function updatePostedJob({ posted_job_id, data }) {
  try {
    const response = await axios.put(
      `http://localhost:3000/posted_job/${posted_job_id}`,
      data
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function deletePostedJob({ posted_job_id }) {
  try {
    const response = await axios.delete(
      `http://localhost:3000/posted_job/${posted_job_id}`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}
