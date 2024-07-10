import React from "react";
import { useGlobalContext } from "./useContextData";
import {FaMenu} from 'react-icons/fa';


const Navbar = () => {
    const {openSubmenu, closeSubmenu, isSubmenuOpen} = useGlobalContext()

    return (
        <div className="nav">
            <div className="nav-center">
                <div className="nav-header">
                    <div className="logo"> <img src="coffee.png" alo="coffee" /></div>
                    <button className="toggle-btn"> <FaMenu /></button>
                </div>
                <div className="nav-links">

                </div>
            </div>
        </div>
    )
}

export default Navbar