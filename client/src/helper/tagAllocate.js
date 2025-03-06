import axios from "axios";

const baseUrl = "http://localhost:3000";

export async function getAllAllocatedTag() {
  try {
    const { data } = await axios.get(`${baseUrl}/tag_allocate`);

    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function getAllocatedTagById({ tag_id, posted_job_id }) {
  try {
    const { data } = await axios.get(
      `${baseUrl}/tag_allocate/${tag_id}/${posted_job_id}`
    );

    return { data };
  } catch (error) {
    console.log(error);
  }
}

export async function saveAllocatedTag(data) {
  try {
    const response = await axios.post(`${baseUrl}/tag_allocate`, data);

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteAllocatedTag({ tag_id, posted_job_id }) {
  try {
    const response = await axios.delete(
      `${baseUrl}/tag_allocate/${tag_id}/${posted_job_id}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function updateAllocatedTag({ tag_id, posted_job_id, data }) {
  try {
    const response = await axios.put(
      `${baseUrl}/tag_allocate/${tag_id}/${posted_job_id}`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
