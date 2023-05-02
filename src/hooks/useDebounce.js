import { useEffect, useState } from "react";

export default function useDebounce(inittializeValue = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(inittializeValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [inittializeValue, delay]);
  return debounceValue;
}
