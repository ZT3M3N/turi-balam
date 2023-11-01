"use client"
import { useEffect, useRef, useState } from "react"; 

const RevealOnScroll = ({ children }) => { 
    const [isVisible, setIsVisible] = useState(false); 
    const ref = useRef(null); 
  
    useEffect(() => { 
        const scrollObserver = new IntersectionObserver(([entry]) => { 
            // Delay the visibility change by 1000 milliseconds (1 second)
            setTimeout(() => {
                setIsVisible(true);
                scrollObserver.unobserve(entry.target);
            }, 1000);
        }); 
  
        scrollObserver.observe(ref.current); 
  
        return () => { 
            if (ref.current) { 
                scrollObserver.unobserve(ref.current); 
            } 
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

export default RevealOnScroll