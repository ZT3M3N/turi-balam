"use client"
import { useEffect, useRef, useState } from "react"; 
  
const ScrollListener = ({ children }) => { 
    const [isVisible, setIsVisible] = useState(false); 
    const ref = useRef(null); 
  
    useEffect(() => { 
        const onWindScroll = () => { 
            const element = ref.current; 
            if (element) { 
                const { top } = element.getBoundingClientRect(); 
                // Add a delay of 500 milliseconds (adjust as needed)
                setTimeout(() => {
                    const isVisible = top < window.innerHeight;
                    setIsVisible(isVisible);
                }, 1000);
            } 
        }; 
  
        window.addEventListener("scroll", onWindScroll); 
        return () => { 
            window.removeEventListener("scroll", onWindScroll); 
        }; 
    }, []); 
  
    const classes = `transition-opacity duration-1000 
        ${isVisible ? "opacity-100" : "opacity-0"
        }`; 
  
    return ( 
        <div ref={ref} className={classes}> 
            {children} 
        </div> 
    ); 
}; 

export default ScrollListener;