import { useEffect, useState } from "react";

const useWindowResize = () => {
  const [isWindowSize, setisWindowSize] = useState(
    window.innerWidth > 769 ? "big" : "medium"
  );

  const handleResize = () => {
    console.log("handleResize");
    if (window.innerWidth < 481) {
      setisWindowSize("small");
    } else if (window.innerWidth < 767 && window.innerWidth > 481)
      setisWindowSize("medium");
    else {
      setisWindowSize("big");
    }
  };

  const handleTimeoutResize = () => {
    setTimeout(handleResize, 500);
  };

  useEffect(() => {
    window.addEventListener("resize", handleTimeoutResize);
    return () => {
      window.removeEventListener("resize", handleTimeoutResize);
    };
  });

  return isWindowSize;
};

export default useWindowResize;
