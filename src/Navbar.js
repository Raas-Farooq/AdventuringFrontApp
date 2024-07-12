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

// Optimized Code (using two methods) adding 'Debounce'

// 2 - Use a single event handler for all buttons.
// 3 - Implement debouncing for performance.
// 4 - Use data attributes instead of text content for identifying categories.
// 5 - Use event delegation to handle events at a parent level, reducing the number of event listeners

// import React, { useEffect, useCallback } from "react";
// import { useGlobalContext } from "./useContextData";
// import { FaBars } from 'react-icons/fa';
// import debounce from 'lodash/debounce'; // Using lodash for debouncing

// const Navbar = () => {
//   const { openSubmenu, closeSubmenu, isSubmenuOpen, openSidebar, isSidebarOpen } = useGlobalContext();

//   const handleSubmenu = useCallback(
//     debounce((e) => {
//       const target = e.target.closest('[data-category]');
//       if (target) {
//         const category = target.dataset.category;
//         const rect = target.getBoundingClientRect();
//         const centerLocation = (rect.left + rect.right) / 2;
//         const bottom = rect.bottom;
//         openSubmenu(category, { centerLocation, bottom });
//       }
//     }, 100),
//     [openSubmenu]
//   );

//   const handleNavMouseLeave = useCallback(
//     debounce(() => {
//       closeSubmenu();
//     }, 100),
//     [closeSubmenu]
//   );

//   return (
//     <nav className="nav" onMouseOver={handleSubmenu} onMouseLeave={handleNavMouseLeave}>
//       {/* ... other nav content ... */}
//       <ul className="nav-links">
//         <li>
//           <button data-category="services" className="my-link btn btn-primary">
//             Services
//           </button>
//         </li>
//         <li>
//           <button data-category="projects" className="my-link btn btn-primary">
//             Other Projects
//           </button>
//         </li>
//         <li>
//           <button data-category="tour" className="my-link btn btn-primary">
//             Company Tour
//           </button>
//         </li>
//       </ul>
//       {/* ... other nav content ... */}
//     </nav>
//   );
// };

// export default Navbar;
