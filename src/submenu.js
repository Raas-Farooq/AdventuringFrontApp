import React, {useState, useEffect, useRef} from 'react';
import { useGlobalContext } from './useContextData';
import './App.css';

const Submenu = () => {

    const {isSubmenuOpen, openSubmenu, location, linksCategory:{
        page,
        links
    }} = useGlobalContext();
    const submenuHolder = useRef(null);
    useEffect(() => {
      
        const submenuRef = submenuHolder.current;
        const {centerLocation, bottom} = location;
        submenuRef.style.left = `${centerLocation}px`;
        submenuRef.top = `${bottom}px`
    }, [location])
   
    return (
        <div ref ={submenuHolder} className={isSubmenuOpen ? 'submenu show' : 'submenu'} >
            <div className="hoverLinks">
                <h3>  {page} </h3>
               {links.map((link, ind) => {
                    const {label, icon, url} = link
                    return (
                        <a className={`link `} key={ind} href={url}>
                            {label}
                            {icon}
                            
                        </a>
                    )
                })}
                
            </div>

        </div>
    )
}

export default Submenu;

// ${isSubmenuOpen ? 'submenu show': 'submenu'}