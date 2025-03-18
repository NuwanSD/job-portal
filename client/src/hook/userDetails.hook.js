import axios from "axios";
import { useEffect, useState } from "react";
import { getUserId } from "../helper/helper";
import { useAuthStore } from "../store/authStore";

//custom hook
export default function userDetailtsFetch(query) {
  const { auth } = useAuthStore();

  const user_id = auth.userId;

  const [getData, setData] = useState({
    isLoading: false,
    apiData: undefined,
    status: null,
    serverError: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData((prev) => ({ ...prev, isLoading: true }));

        const { data, status } = !query
          ? await axios.get(`http://localhost:3000/job_seeker/${user_id}`)
          : await axios.get(`http://localhost:3000/${query}`);

        if (status === 200) {
          //setData((prev) => ({ ...prev, isLoading: false }));
          setData((prev) => ({
            ...prev,
            isLoading: false,
            apiData: data[0],
            status: status,
          }));
        } else {
          setData((prev) => ({ ...prev, isLoading: false, status: status }));
        }
      } catch (error) {
        setData((prev) => ({ ...prev, isLoading: false, serverError: error }));
      }
    };
    fetchData();
  }, [user_id, query]);

  return [getData, setData];
}
