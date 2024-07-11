import React, { useEffect } from "react";
import { useGlobalContext } from "./useContextData";
import {FaBars, FaTimes} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WindowSize from "./windowSize";

const Navbar = () => {
    const {openSidebar, closeSidebar, isSidebarOpen} = useGlobalContext()
    
    const myWindow = WindowSize();
  
    // useEffect (() => {
    //    if(isSidebarOpen)
    //     {
    //         closeSidebar();
    //     }
    // }, [isSidebarOpen])


    return (
        <> 
            
            <div className="nav">
                <div className="nav-center">
                    <div className="nav-header">
                        <div className="logo"> <img src="coffee.png" alo="coffee" /></div>
                        <div className="menuBtn"><button className={"toggleBtn btn btn-info"} onClick={openSidebar}> <FaBars /></button></div>
                        
                    </div>
                    <ul className={`nav-links`} >
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

                    <button className={isSidebarOpen ?  '' : "signIn btn btn-dark"}>SignIn</button>
                </div>
            </div>
        
        </>
        
    )
}

export default Navbar