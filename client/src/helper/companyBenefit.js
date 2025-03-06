import axios from "axios";

const baseUrl = "http://localhost:3000";

export async function getAllCompanyBenefit() {
  try {
    const { data } = await axios.get(`${baseUrl}/company_benefit`);

    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function getCompanyBenefitById({ benefit_id }) {
  try {
    const { data } = await axios.get(
      `${baseUrl}/company_benefit/${benefit_id}`
    );

    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function saveCompanyBenefit(data) {
  try {
    const response = await axios.post(`${baseUrl}/company_benefit`, data);

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCompanyBenefit({ benefit_id }) {
  try {
    const response = await axios.delete(
      `${baseUrl}/company_benefit/${benefit_id}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function updateCompanyBenefit({ benefit_id, data }) {
  try {
    const response = await axios.put(
      `${baseUrl}/company_benefit/${benefit_id}`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
