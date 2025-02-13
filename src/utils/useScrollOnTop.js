import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]); // Jab bhi pathname change hoga, page top pe chala jayega

    return null;
};

export default ScrollToTop;