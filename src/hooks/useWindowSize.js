import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowsize, setWindowSize] = useState({
        viewportWidth: undefined,
        viewportHeight: undefined
    });

    useEffect(() => {

        const handleResize = () => {
            setWindowSize({
                viewportWidth: window.innerWidth,
                viewportHeight: window.innerHeight
            })
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
        
    }, [])

    return windowsize;
}

export default useWindowSize;