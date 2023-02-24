import { useEffect } from "react";

const usePopupCloseEnter = (ref, setRef) => {
  useEffect(() => {
    document.addEventListener("mouseleave", function (e) {
      if (ref.current && !ref?.current?.contains(e.target)) {
        setRef(false);
      }
    });
  }, [ref.current]);
};
export default usePopupCloseEnter;
