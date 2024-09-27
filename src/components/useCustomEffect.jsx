import { useEffect, useRef } from "react";

const useCustomEffect = (callback, dependencies) => {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      // Skip the effect on the first render
      hasMounted.current = true;
      return;
    }

    // Execute the callback
    callback();
  }, dependencies);
};

export default useCustomEffect;
