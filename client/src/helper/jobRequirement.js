import axios from "axios";

const baseUrl = "http://localhost:3000";

export async function getAllJobRequirement() {
  try {
    const { data } = await axios.get(`${baseUrl}/job_requirement`);

    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function getJobRequirementById({ requirement_id }) {
  try {
    const { data } = await axios.get(
      `${baseUrl}/job_requirement/${requirement_id}`
    );

    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function saveJobRequirement(data) {
  try {
    const response = await axios.post(`${baseUrl}/job_requirement`, data);

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteJobRequirement({ requirement_id }) {
  try {
    const response = await axios.delete(
      `${baseUrl}/job_requirement/${requirement_id}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function updateJobRequirement({ requirement_id, data }) {
  try {
    const response = await axios.put(
      `${baseUrl}/job_requirement/${requirement_id}`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
