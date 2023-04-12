import { useState, useEffect } from "react";
import { fetchDataFormApi } from "../utils/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState();

  useEffect(() => {
    makeApiCall();
  }, [endpoint]);

  const makeApiCall = async () => {
    const res = await fetchDataFormApi(endpoint);
    setData(res);
  };

  return { data };
};

export default useFetch;
