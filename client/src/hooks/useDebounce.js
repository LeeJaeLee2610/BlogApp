import { useEffect, useState } from "react";

export default function useDebounce(values, delay) {
  const [debounceValue, setDebounceValue] = useState(values);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(values);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [values, delay]);
  return { debounceValue };
}
