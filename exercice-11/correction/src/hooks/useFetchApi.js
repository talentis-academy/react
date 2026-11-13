import { useEffect, useState } from "react";

// Custom hook useFetchApi : la logique de fetch (data, loading, error), réutilisable : seule l'URL change
function useFetchApi(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // useEffect avec [url] : le fetch se relance si l'URL change
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        // on vérifie la réponse avant de lire le JSON
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setData(json);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [url]);

  return { data, isLoading, isError };
}

export default useFetchApi;
