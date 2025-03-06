import axios from "axios";

const baseUrl = "http://localhost:3000";

export async function getAllJobBenefit() {
  try {
    const { data } = await axios.get(`${baseUrl}/job_benefit`);

    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function getJobBenefitById({ benefit_id }) {
  try {
    const { data } = await axios.get(`${baseUrl}/job_benefit/${benefit_id}`);

    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function saveJobBenefit(data) {
  try {
    const response = await axios.post(`${baseUrl}/job_benefit`, data);

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteJobBenefit({ benefit_id }) {
  try {
    const response = await axios.delete(`${baseUrl}/job_benefit/${benefit_id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function updateJobBenefit({ benefit_id, data }) {
  try {
    const response = await axios.put(
      `${baseUrl}/job_benefit/${benefit_id}`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
