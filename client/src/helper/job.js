import axios from "axios";

export async function getAllJobs() {
  try {
    const { data } = await axios.get(`http://localhost:3000/jobs`);

    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function getJobById({ job_id }) {
  try {
    const { data } = await axios.get(`http://localhost:3000/jobs/${job_id}`);

    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function saveJob(data) {
  try {
    const response = await axios.get(`http://localhost:3000/jobs`, data);

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteJob({ job_id }) {
  try {
    const response = await axios.get(`http://localhost:3000/jobs/${job_id}`);

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function updateJob({ job_id, data }) {
  try {
    const response = await axios.put(
      `http://localhost:3000/jobs/${job_id}`,
      data
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}
