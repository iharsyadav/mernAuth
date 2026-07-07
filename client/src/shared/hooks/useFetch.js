import { useState } from "react";

const useFetch = (apiFunction) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (...args) => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiFunction(...args);

      // unwrap ApiResponse
      const result = response.data;

      setData(result);

      return result;
    } catch (err) {
      console.error(err);
      setError(err.message);
      throw err;
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