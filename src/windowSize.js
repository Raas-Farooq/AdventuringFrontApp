import React, { useEffect, useState } from 'react';

function WindowSize(){
    const [size, setSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

  
    useEffect (() => {

        function resetingSize(){
            const newHeight= window.innerHeight;
            const newWidth = window.innerWidth;
            setSize({newHeight, newWidth});
        
        }
        window.addEventListener('resize', resetingSize);

        return(()  => {
            window.removeEventListener('resize', resetingSize);
        })
    })

    return size;
}

export default WindowSize;