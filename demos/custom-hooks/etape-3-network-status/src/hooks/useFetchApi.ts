import { useEffect, useState } from "react";

function useFetchApi(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setData(json);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { data, isLoading, isError };
}

export default useFetchApi;
