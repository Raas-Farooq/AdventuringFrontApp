import React, { useEffect } from "react";
import { useGlobalContext } from "./useContextData";
import {FaBars, FaTimes} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WindowSize from "./windowSize";

const Navbar = () => {
    const {openSubmenu, closeSubmenu, isSubmenuOpen} = useGlobalContext()
    
    const myWindow = WindowSize();
  
    useEffect (() => {
       
        if(myWindow.newWidth > 630){
            closeSubmenu();
            console.log("ALhamdulia")
        }
        
    }, [myWindow])


    return (
        <> 
            
            <div className="nav">
                <div className="nav-center">
                    <div className="nav-header">
                        <div className="logo"> <img src="coffee.png" alo="coffee" /></div>
                        <div className="menuBtn"><button className={isSubmenuOpen ? "cancelBtn" : "toggleBtn btn btn-info"} onClick={isSubmenuOpen ? closeSubmenu : openSubmenu}> {isSubmenuOpen ? <FaTimes /> : <FaBars />}</button></div>
                        
                    </div>
                    <ul className={`nav-links ${isSubmenuOpen ? 'show-links' : 'hideLinks'}`} >
                        <li>
                            <button id="link" className="link btn btn-primary">Services</button>
                        </li>
                        <li>
                            <button id="link" className="link btn btn-primary">Other Projects</button>
                        </li>

                        <li>
                            <button id="link" className="link btn btn-primary">Company Tour</button>
                        </li>

                    </ul>

                    <button className={isSubmenuOpen ?  '' : "signIn btn btn-dark"}>SignIn</button>
                </div>
            </div>
        
        </>
        
    )
}

export default Navbar