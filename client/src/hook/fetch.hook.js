import axios from "axios";
import { useEffect, useState } from "react";
import { getUserId } from "../helper/helper";

//custom hook
export default function useFetch(query) {
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

        const { user_id } = !query ? await getUserId() : "";

        const { data, status } = !query
          ? await axios.get(`http://localhost:3000/user/${user_id}`)
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
  }, [query]);

  return [getData, setData];
}
