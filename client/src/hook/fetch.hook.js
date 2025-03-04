import axios from "axios";
import { useEffect, useState } from "react";

//custom hook
export default function useFetch(query) {
  const [getData, setData] = useState({
    isLoading: false,
    apiData: undefined,
    status: null,
    serverError: null,
  });

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setData((prev) => ({ ...prev, isLoading: true }));

        const { data, status } = await axios.get(
          `http://localhost:3000/${query}`
        );

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
