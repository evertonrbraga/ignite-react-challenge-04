import { useEffect, useRef } from "react";

export const usePrevious = (value: boolean) => {
  const ref = useRef(false);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
