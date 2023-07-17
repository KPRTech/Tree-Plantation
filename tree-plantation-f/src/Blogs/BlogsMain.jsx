import React, { useState, useEffect } from 'react';
import './Blogs.css';

function MyComponent() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    return (
        <div className="responsive-background">
            <div className="content w-1/1 h-1/1">
                <h1 className="text-white font-bold sm:text-xl md:text-2xl lg:text-3xl">STORIES</h1>
                <p className="text-white">STORIES FROM THE FIELD, TREE FACTS, AND A HEALTHY DOSE OF NATURE</p>
            </div>
        </div>
    );
}

export default MyComponent;