import React, { useEffect } from "react";
import { useGlobalContext } from "./useContextData";
import {FaBars, FaTimes} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WindowSize from "./windowSize";

const Navbar = () => {
    const {openSubmenu, closeSubmenu, isSubmenuOpen, openSidebar, isSidebarOpen} = useGlobalContext()
    
    const myWindow = WindowSize();
    
    const handleSubmenu = (e) => {
        const category = e.target.textContent;
        const totalHeight = e.target.getBoundingClientRect();
        const centerLocation = (totalHeight.left + totalHeight.right) / 2;
        console.log("center Location: ", centerLocation)
        const bottom = totalHeight.bottom;
        openSubmenu(category, {centerLocation, bottom});
    }
    
    function handleNavOver(e){
        console.log("e.target Nav: ", e.target.classList)
        if(!e.target.classList.contains('my-link')){
            
            closeSubmenu();
        }
    }
    return (
        <> 
            
            <div className="nav" onMouseOver={handleNavOver} >
                <div className="nav-center">
                    <div className="nav-header">
                        <div className="logo"> <img src="coffee.png" alo="coffee" /></div>
                        <div className="menuBtn"><button className={"toggleBtn btn btn-info"} onClick={openSidebar}> <FaBars /></button></div>
                        
                    </div>
                    <ul className={`nav-links`} >
                        <li>
                            <button id="link" className="my-link btn btn-primary" 
                            onMouseOver={handleSubmenu}
                            >Services</button>
                        </li>
                        <li>
                            <button id="link"
                             className="my-link btn btn-primary"
                             onMouseOver={handleSubmenu} >Other Projects</button>
                        </li>

                        <li>
                            <button id="link" onMouseOver={handleSubmenu} className="my-link btn btn-primary">Company Tour</button>
                        </li>

                    </ul>

                    <button className={isSidebarOpen ?  '' : "signIn btn btn-dark"}>SignIn</button>
                </div>
            </div>
        
        </>
        
    )
}

export default Navbar