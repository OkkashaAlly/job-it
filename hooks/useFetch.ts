import axios from "axios";
import { useEffect, useState } from "react";

// const rapidAPIKey = process.env.RAPID_API_KEY;

// =============================================================
// USE FETCH: HOOK =============================================
// =============================================================
export default function useFetch(endpoint: string, query: any) {
  // fetch state
  const [data, setData] = useState<[any]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // request options
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "ea6f2e63bemsh98e02962f874c34p13ee84jsna502070528c5",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  // fetch function
  async function fetchData() {
    setLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error) {
      setError(error);
      alert("Something went wrong, theres is an error");
    } finally {
      setLoading(false);
    }
  }

  // load on component mount
  useEffect(() => {
    fetchData();
  }, []);

  function refetch() {
    fetchData();
  }

  // RETURN =====================
  return { data, loading, error, refetch };
}
