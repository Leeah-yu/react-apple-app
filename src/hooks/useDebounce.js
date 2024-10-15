import { useEffect, useState } from "react";

//타이핑을 멈출때까지 keyup이벤트 처리를 지연시킴
export const useDebounce = (value, delay) => {
  const [debounceValue, setdebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setdebounceValue(value)
    }, delay);
  
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  

  return debounceValue



}