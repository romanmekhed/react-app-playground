import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setResponse(null);
    setError(null);
    const source = axios.CancelToken.source();

    axios
      .get(url, { cancelToken: source.token })
      .then((res) => {
        res && setResponse(res);
        setIsLoaded(true);
      })
      .catch((err) => {
        setIsLoaded(false);
        setError('Response error:', err);
      });
    return () => {
      source.cancel();
    };
  }, [url]);

  return { response, isLoaded, error };
};

export default useFetch;
