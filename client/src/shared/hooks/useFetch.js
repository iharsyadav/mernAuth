import { useState } from "react";

const useFetch = (apiFunction) => {

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const fetchData = async (...args) => {

    try {

      setLoading(true);

      setError(null);

      const response = await apiFunction(...args);

      setData(response);

      return response;

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchData,
  };
};

export default useFetch;